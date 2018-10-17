(function () {
    var relodash = function () {
        var reload = function () { };
        reload.prototype.chunk = function (arr, size) {
            var length = arr !== null ? arr.length : 0;
            var chunks = Math.ceil(length / size);
            // console.log(chunks)
            var newarr = [];
            var index = 0;
            var newsize = size;
            while (chunks !== 0) {
                newarr.push(arr.slice(index, newsize));
                index = index + size;
                newsize = index + size;
                chunks--;
            }
            return newarr;
        };
        return new reload();
    };
    relodash;
    typeof module === 'undefined'
        ? (window._ = relodash())
        : (module.exports = relodash);
})();
