(function(){
	function mainController(userService){
		var self = this;
		this.onClick = function(){
			//console.log("clicked");
		};
		this.$routerOnActivate = function(next, previous) {
			if(userService.getCurrentRole() === "guest"){
				this.$router.navigate(['Landing']);
			}
        };
	}
	angular.module("angularApp.routes").component("main",{
		templateUrl: "routes/main.html",
		bindings: {
			oneWay:'@',
			twoWay:'=',
			$router: '<' 
		},
		$routeConfig : [

		{
            path: '/profile/...',
            component: 'profile',
            name: 'Profile',
            useAsDefault: true
        },
        {
            path: '/education/...',
            component: 'education',
            name: 'Education'
        }, {
            path: '/admin/...',
            component: 'admin',
            name: 'Admin'
        }],
		
		controller: mainController
	});
})();