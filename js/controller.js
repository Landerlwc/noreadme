angular.module('myApp')
	//依赖注入$css（这个是angularCSS这个插件中的服务）
	//$location是一个内置服务，可以获取地址、跳转路由等功能
	.controller('BuyCtrl',['$css','MainService','$location','$http',function ($css,MainService,$location,$http) {
		$css.add('css/buy.css');
		var self = this;
		self.list = MainService.getUserList();
		$http.get('./json/data.json')
			.success(function (mains) {
				self.mains = mains;
			})
			.error(function (errorStr) {
				console.log(errorStr);
			})
		self.goTo1 = function () {
			$location.path('all');
		}
		self.goTo2 = function () {
			$location.path('search');
		}
		var mySwiper = new Swiper ('.swiper-container', {
    		direction: 'horizontal',
   			autoplay: 2000,
   			autoplayDisableOnInteraction : false,
   			observer:true,
   			loop: true,
   			// 如果需要分页器
   			pagination: '.swiper-pagination',
    	})
	}])
	.controller('AllCtrl',['$css','$http','$location',function ($css,$http,$location) {
		$css.add('css/all.css');
		var self = this;
		$http.get('./json/data.json')
			.success(function (mains) {
				self.mains = mains;
			})
			.error(function (errorStr) {
				console.log(errorStr);
			})
		self.goBack = function () {
			$location.path('buy');
		}
		self.goTo = function () {
			$location.path('search');
		}
	}])
	.controller('MineCtrl',['$css','$location',function ($css,$location) {
		$css.add('css/mine.css');
		var self = this;
		self.goBack = function () {
			$location.path('buy');
		}
		self.goTo = function () {
			$location.path('cart');
		}
	}])
	.controller('ShopCtrl',['$css','$location','$http','$routeParams',function ($css,$location,$http,$routeParams) {
		$css.add('css/shop.css');
		var self = this;
		self.goBack = function () {
			$location.path('cart');
		}
		$http.get('./json/data.json')
			.success(function (mains) {
				self.getItem = function (id) {
					for (var personObj of mains) {
						if (personObj.id == id) {
						return personObj;
						}
					}
				}
				// $routeParams 可以获取到通过路由传过来的所有参数，我们可以通过点语法获取相应的参数
				self.person = self.getItem($routeParams.id);
			})
			.error(function (errorStr) {
				console.log(errorStr);
			})

	}])
	.controller('CartCtrl',['$css','$location',function ($css,$location) {
		$css.add('css/cart.css');
		var self = this;
		self.goTo1 = function () {
			$location.path('buy');
		}
		self.goTo = function () {
			$location.path('mine');
		}
	}])
	.controller('SearchCtrl',['$css','$location',function ($css,$location) {
		$css.add('css/search.css');
		var self = this;
		self.goTo = function () {
			$location.path('all');
		}
		self.goBack = function () {
			$location.path('buy');
		}
	}])