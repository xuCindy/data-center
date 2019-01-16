export default {
    install(Vue) {
        Vue.filter('averageLoadRate', (_list, _totalInfo) => {
            let _sum = 0;
            _list.map(_one => {
                _sum += ~~(_one.manufactureFacilityGroupDesignScale * _one.manufactureFacilityGroupDesignOperationTime);
            })
            _totalInfo.totalLoadRate = ((_totalInfo.totalPowerSupply || 0) / _sum * 100).toFixed(2);
            return _sum ? _totalInfo.totalLoadRate + "%" : '-';
        })
    }
}