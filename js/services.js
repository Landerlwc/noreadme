angular.module('myApp')
	.factory('MainService',[function () {
		return {
			getUserList : function () {
				return [
					{ name : '抢手票', num : '1'},
					{ name : '折扣票', num : '2'},
					{ name : '演唱会', num : '3'},
					{ name : '音乐会', num : '4'},
					{ name : '话剧歌剧', num : '5'},
					{ name : '体育赛事', num : '6'},
					{ name : '儿童亲子', num : '7'},
					{ name : '全部项目', num : '8'}
				]
			}
		}
	}])

