interface Module {
	exports: any;
}

(function() {
	const relodash = function() {
		let reload = function() {};
		reload.prototype.chunk = (arr: Array<any>, size: number) => {
			const length = arr !== null ? arr.length : 0;
			let chunks = Math.ceil(length / size);
			let newarr = [];
			var index = 0;
			var newsize = size;
			while (chunks !== 0) {
				newarr.push(arr.slice(index, newsize));
        index = index+size;
        newsize = index + size;     
				chunks--;
			}
			return newarr;
		};
		return new reload();
	};

	relodash;

	typeof (<Module>module) === 'undefined'
		? ((<any>window)._ = relodash())
		: (module.exports = relodash);
})();
