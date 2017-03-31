(function(){
	function apiConstant(){
		return {
	        "API_HOST": "http://farmworkerswebapiv2.azurewebsites.net",
	        //"API_HOST": "http://localhost:2930",
	        "API": {
	        	"GetLatestQuiz": "/api/Quiz/GetLatestQuizVersionController",
	        	"GetQuizByVersionandID": "/api/Quiz/GetQuizByIDAndVersionController",
	        	"ListQuiz": "/api/Quiz/GetListOfQuizzesController",
	        	"InsertQuiz": "/api/Quiz/InsertQuiz",
	        	"DeleteQuiz": "/api/Quiz/DeleteQuiz",
	        	"ListEducationalContents": "/api/EducationalContent/GetListOfEducationalContentsbyAnyParameterController",
				"ListVideoEducationalContents": "/api/EducationalContent/GetListOfVideoEducationContents",
				"ListDocumentEducationalContents": "/api/EducationalContent/GetListOfDocumentEducationContents",
	        	"InsertEducationalContent": "/api/EducationalContent/InsertEducationalContent",
	        	"UpdateEducationalContent": "/api/EducationalContent/UpdateEducationalContent",
	        	"DeleteEducationalContent": "/api/EducationalContent/DeleteEducationalContent",
				"InsertUserEducationalContent": "/api/EducationalContent/EFInsertEducationalContentToUserController",
	        	"ListFarm": "/api/Farms/GetListOfFarmsController",
	        	"InsertFarm": "/api/Farms/InsertFarm",
	        	"UpdateFarm": "/api/Farms/UpdateFarm",
	        	"DeleteFarm": "/api/Farms/DeleteFarm",
	        	"InsertLoginCredential": "/api/LoginCredentials/InsertLoginCredentialsController",
	        	"LoginWithLoginCredentials": "/api/LoginCredentials/LoginWithLoginCredentials",
	        	"RegisterLoginCredential": "/api/LoginCredentials/RegisterLoginCredentials",
				"UpdateLoginCredentials" : "/api/LoginCredentials/UpdateLoginCredentials",
				"InsertOrUpdateUserFarm": "/api/Users/InsertOrUpdateUserFarm",
				"ReadUserAnyParameter": "/api/Users/EFReadUserAnyParameter",
				"ListUserByUserType": "/api/Users/ListUserByUserType",
				"SearchUser": "/api/Users/SearchUser"
	        }
	    }
	}
	angular.module("angularApp.constants").constant("API_CONSTANT",apiConstant());
})();