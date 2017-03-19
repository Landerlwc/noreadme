angular.module('myApp',['ngRoute','angularCSS'])
	//run方法，是在模块加载的时候初始化一些功能
	.run(['$window','$rootScope',function ($window,$rootScope) {
		$rootScope.$on('$locationChangeSuccess',function () {
			if ($window.location.href.indexOf('all')!= -1 || $window.location.href.indexOf('shop')!= -1 || $window.location.href.indexOf('cart')!= -1 || $window.location.href.indexOf('search')!= -1) {
				$rootScope.rootIsFooterShow = false;
			} else {
				$rootScope.rootIsFooterShow = true;
			}
		});
	}])
	.config(['$routeProvider',function ($routeProvider) {
		$routeProvider.when('/buy',{
			templateUrl : './view/buy.html',
			controller : 'BuyCtrl as buyCtrl'
		})
		.when('/all',{
			templateUrl : './view/all.html',
			controller : 'AllCtrl as allCtrl'
		})
		.when('/mine',{
			templateUrl : './view/mine.html',
			controller : 'MineCtrl as mineCtrl'
		})
		.when('/shop/:id',{
			templateUrl : './view/shop.html',
			controller : 'ShopCtrl as shopCtrl'
		})
		.when('/cart',{
			templateUrl : './view/cart.html',
			controller : 'CartCtrl as cartCtrl'
		})
		.when('/search',{
			templateUrl : './view/search.html',
			controller : 'SearchCtrl as searchCtrl'
		})
		.otherwise({
			redirectTo : '/buy'
		})
	}])