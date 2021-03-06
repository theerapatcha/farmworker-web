(function(){
	function userService($http,$q, $timeout, API_CONSTANT, LoginCredential, User){
		var self = this;
		var currentUser = null;
		var currentCredential = null;
		this.getCurrentRole = function(){
			return currentUser ? currentUser.User.UserType : "guest";
		}
		this.getUserInfo = function(){
			return currentUser ? currentUser.User : null;
		}
		this.getCredentialInfo = function(){
			return currentUser;
		}
		this.login = function(username, password){
			return $http.post(
				API_CONSTANT.API_HOST + API_CONSTANT.API.LoginWithLoginCredentials,
				{
					_username: username,
					_loginType: "PhoneNumber",
					_password: password
					
				}).then(
				function(resp){ 
					console.log(resp);
					var credential = new LoginCredential(resp.data);
					currentUser = credential;
					return credential;
				}
			);
		};
		/*this.login = function(username, password){
			return $http.post(
				API_CONSTANT.API_HOST + API_CONSTANT.API.LoginWithLoginCredentials,
				{
					_username: username,
					_loginType: "PhoneNumber",
					_password: password
					
				}).then(function(resp){ 
					console.log(resp);
					var credential = new LoginCredential(resp.data);
					currentCredential = credential;
					return self.getUserInfo(credential.UserID);
				}).then(function(user){
					currentUser = user;
					return currentUser;
				});
		};
		this.getUserInfo = function(userID){
			return $http.get(API_CONSTANT.API_HOST + API_CONSTANT.API.GetUserInfo,{
				params: {
					UserID: userID
				}
			});
		}*/
		this.register = function(loginCredentialForm){
			this.createLoginCredential(loginCredentialForm).then(
				function(resp){ 
					var credential = new LoginCredential(resp.data);
					currentUser = credential;
					return credential;
				});
		}
		this.createLoginCredential = function(loginCredentialForm){
			return $http.post(API_CONSTANT.API_HOST + API_CONSTANT.API.RegisterLoginCredential, loginCredentialForm);
		}
		this.updateCredential = function(credential){
			return $http.post(API_CONSTANT.API_HOST + API_CONSTANT.API.UpdateLoginCredentials, credential).then(
				function(resp){ 
					var credential = new LoginCredential(resp.data);
					currentUser = credential;
					return credential;
				});
		}
		this.updateUserFarm = function(userFarm){
			return $http.post(API_CONSTANT.API_HOST + API_CONSTANT.API.InsertOrUpdateUserFarm, userFarm).then(
				function(resp){ 
					return resp.data;
				});
		}
		this.updateUserCommunicationPreference = function(preferences){
			return $http.post(API_CONSTANT.API_HOST + API_CONSTANT.API.InsertOrUpdateUserCommunicationPreference, preferences).then(
				function(resp){ 
					return resp.data;
				});
		}
		this.listUsersByUserType = function(userType){
			return $http.get(API_CONSTANT.API_HOST + API_CONSTANT.API.ListUserByUserType, {
				params: {
					UserType: userType
				}
			}).then(
				function(resp){ 
					return resp.data.map(x => new User(x));
				}
			);
		}
		this.logout = function(){
			// TODO: replace with ajax call to backend 
			return $timeout(function(){
				currentUser = null;
			});
		}
	}
	angular.module("angularApp.services").service("userService",userService);
})();