(function(){
	function updateProfileController(userService){
		this.$routerOnActivate = function(next, previous) {
			console.log("inside");
            this.name = next.params.name;
            this.credential = userService.getCredentialInfo();
        };
		this.doUpdate = function(){
			this.credential.User.UserFarms = [{FarmID: this.selectedFarmID}];
			userService.updateCredential(this.credential);
		}
		this.changeFarm = function(a){
			console.log(a);
		}
	}
	angular.module("angularApp.routes").component("updateProfile",{
		templateUrl: "routes/profile/update.html",
		controller: updateProfileController
	});
})();