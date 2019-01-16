export default {
    install(Vue) {
        Vue.filter('sum', (_list, _key) => {
            let _count = 0;
            _list.map(_one => {
                _count += parseFloat(_one[_key]) || 0;
            })
            return _count;
        })
    }
}