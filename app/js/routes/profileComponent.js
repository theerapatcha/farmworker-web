(function(){
	function profileController(userService){
		this.$routerOnActivate = function(next, previous) {
            this.name = next.params.name;
            this.user = userService.getUserInfo();
        };
	}
	angular.module("angularApp.routes").component("profile",{
		template: "<ng-outlet></ng-outlet>",
		controller: profileController,
		$routeConfig : [
		{
            path: '/',
            component: 'viewProfile',
            name: 'ViewProfile',
            useAsDefault: true
        },
        {
            path: '/update',
            component: 'updateProfile',
            name: 'UpdateProfile'
        },
        {
            path: '/updateFarm',
            component: 'updateFarm',
            name: 'UpdateFarm'
        }]
	});
})();