var Conf = require('../conf.jsx')
var BANNER_NUM = Conf.BANNER_NUM
var ITEM_NUM = Conf.ITEM_NUM

/**
 * 定义图片加载器
 * @done 	加载完成时候的回调函数
 * @success 加载成功时候的回调函数
 * @fail 	加载失败失败的回调函数
 **/ 
var ImageLoader = function(done, success, fail) {
	this.done = done;
	this.success = success;
	this.fail = fail;
	// 执行加载
	this.init()
}
ImageLoader.prototype = {
	// 初始化一些数据
	init: function() {
		this.banner = BANNER_NUM;
		this.item = ITEM_NUM;
		// 当前加载完成多少张图片
		this.loadNum = 0;
		this.total = this.banner + this.item;
		this.load()
	},
	// 加载每一张图片
	load: function() {
		// 加载banner
		while(this.banner--) {
			this.loadImage(this.banner, true)
		}
		// 加载item
		while(this.item--) {
			this.loadImage(this.item)
		}
	},
	/**
	 * 加载每一张图片
	 * @id 			第几张图片
	 * @isBanner 	是否是banner图片
	 **/ 
	loadImage: function(id, isBanner) {
		// 图片加载器
		var img = new Image();
		// 订阅加载成功时候的回调函数
		img.onload = function() {
			// 加载完成一张图片，改变loadNum
			this.loadNum++;
			// 执行加载完成时候的回调函数
			this.success(this.loadNum, this.total)
			// 如果加载完成的图片数与总数相等，执行加载完成时候的回调函数
			if (this.loadNum == this.total) {
				this.done(this.total)
			}
		}.bind(this)
		// 订阅加载失败时候的回调函数
		img.onerror = function() {
			// 加载完成一张图片，改变loadNum
			this.loadNum++;
			// 加载失败，执行加载失败时候的回调函数
			this.fail(this.loadNum, this.total)
			// 如果加载完成的图片数与总数相等，执行加载完成时候的回调函数
			if (this.loadNum == this.total) {
				this.done(this.total)
			}
		}.bind(this)
		// 加载图片
		img.src = this.getImageUrl(id, isBanner);
	},
	// 根据id，获取图片的完整url
	getImageUrl: function(id, isBanner) {
		if (isBanner) {
			return 'img/banner/banner' + id + '.jpg';
		} else {
			return 'img/item/item' + id + '.jpg';
		}
	}
}

module.exports = ImageLoader;