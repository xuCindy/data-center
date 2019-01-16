export const ERR_OK = 200

const debug = process.env.NODE_ENV !== 'production'
export const apiHost = debug ? 'http://47.94.22.148:8040' : 'http://10.102.33.31:8040'
// 执行报表需要使用（公用）
export const apiTestHost = debug ? 'http://47.95.249.146:8080' : 'http://10.102.33.51:8060'

const apiConfig = {
  key: '8HkocpYLeG1LNi5m',
  version: '1.0',
}

let _time = Math.floor(Date.now() / 1000)
let _userInfo = JSON.parse(sessionStorage.getItem('store')).userInfo
let _selfId = _userInfo.id
let _sessionId = window.sessionStorage.sessionId || ''

console.log(_userInfo)

export const commonParams = {
  selfId: _selfId,
  sessionId: _sessionId,
  version: apiConfig.version,
  test: 'yes',
  time: _time
}
