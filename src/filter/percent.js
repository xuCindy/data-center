export default {
    install(Vue) {
        Vue.filter('percent', (_val) => {
            let _str = "";
            if (isNaN(_val) || _val == 'Infinity') {
                _str = "/"
            } else {
                _str = (_val * 100).toFixed(2) + '%';
            }
            return _str;
        })
    }
}