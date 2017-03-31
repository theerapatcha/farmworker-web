(function(){
	function landingController($translate, userService, videoModalService){
		var self = this;
		this.mode = 'Login';
		this.doLogin = function(){
			userService.login(this.username,this.password).then(function(user){
				if(user.UserSecurityRole.UserSecurityRoleName === 'admin'){
					self.$router.navigate(['Main','Admin']);
				}else{
					self.$router.navigate(['Main','Profile']);
				}
			});
		};
		this.goToRegister = function(){
			this.$router.navigate(['Register']);
		};
		
		this.$routerOnActivate = function(next, previous) {
            this.name = next.params.name;
        };
        this.test = function(){

		    var modal = videoModalService.createModal();
        }
		this.changeMode = function(mode){
			this.mode = mode;
		}
	}

	angular.module("angularApp.routes").component("landing",{
		templateUrl: "routes/landing.html",
		bindings: {
			oneWay:'@',
			twoWay:'=',
			$router: '<' 
		},
		$routeConfig : [],
		$routerCanReuse: true,
		controller: landingController
	});
})();