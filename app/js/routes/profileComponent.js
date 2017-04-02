(function(){
	function profileController(userService){
        var self = this;
		this.$routerOnActivate = function(next, previous) {
            this.name = next.params.name;
            this.user = userService.getUserInfo();
        };
        self.isActive = function(childRouteName) {
		    var instruction = self.$router.generate(childRouteName);
		    return self.$router.isRouteActive(instruction);
	  	}
	}
	angular.module("angularApp.routes").component("profile",{
		templateUrl: "routes/profile.html",
		controller: profileController,
		$routeConfig : [
        {
            path: '/update',
            component: 'updateProfile',
            name: 'UpdateProfile',
            useAsDefault: true
        },
        {
            path: '/updateFarm',
            component: 'updateFarm',
            name: 'UpdateFarm'
        },{
            path: '/updateCommunicationPreference',
            component: 'updateCommunicationPreference',
            name: 'UpdateCommunicationPreference'
        }],
        bindings: {
			$router : '<'
		}
	});
})();