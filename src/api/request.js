import 'whatwg-fetch'
import querystring from 'querystring'
import { commonParams, apiHost } from './config'

export function getData(_module, _service, _data = {}) {
    return new Promise(function (resolve, reject) {
        let requestUrl = `${apiHost}${_module ? '/' + _module : ''}/api/${_service}`
        let dataString = JSON.stringify(_data)
        let postData = Object.assign({}, commonParams, { data: dataString })
        fetch(requestUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                "sessionid": window.sessionStorage.sessionId || "",
            },
            body: querystring.stringify(postData)
        }).then(_res => {
            return _res.json();
        }).then(_data => {
            switch (_data.status) {
                case 200:
                    resolve(_data.body)
                    break;
                case 419:
                    reject(_data.message)
                    break;
                default:
                    reject(_data.message)
            }
        }).catch(err => {
            reject(err)
        })
    })
}


