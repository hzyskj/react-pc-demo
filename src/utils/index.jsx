


/**
 * Created by yanji on 2019年6月30
 */

module.exports ={
    queryString:() => {
        let _queryString = {};
        const _query = window.location.search.substr(1);
        const _vars = _query.split('&');
        _vars.forEach((v, i) => {
            const _pair = v.split('=');
            if (!_queryString.hasOwnProperty(_pair[0])) {
                _queryString[_pair[0]] = decodeURIComponent(_pair[1]);
            } else if (typeof _queryString[_pair[0]] === 'string') {
                const _arr = [ _queryString[_pair[0]], decodeURIComponent(_pair[1])];
                _queryString[_pair[0]] = _arr;
            } else {
                _queryString[_pair[0]].push(decodeURIComponent(_pair[1]));
            }
        });
        return _queryString;
    },

    //是否是ie
    isIe :()=>window.navigator.userAgent.includes('Trident'),

    //是否是uc
    isUc :()=>window.navigator.userAgent.includes('UCBrowser'),

    //获取url中的参数
    getParams: function (url) {
        var reg = /(\w+)=([^&]+)/g,
            params = {},
            result = [];

        url = (url.split('?')[1] || '');

        while( result === reg.exec(url) ) {
            params[result[1]] = result[2];
        }
        return params;
    }
}