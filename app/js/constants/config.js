(function(){
	function apiConstant(){
		return {
	        //"API_HOST": "http://farmworkerswebapiv2.azurewebsites.net",
	        "API_HOST": "http://localhost:2930",
	        "API": {
	        	"GetLatestQuiz": "/api/Quiz/GetLatestQuizVersionController",
	        	"GetQuizByVersionandID": "/api/Quiz/GetQuizByIDAndVersionController",
	        	"ListQuiz": "/api/Quiz/GetListOfQuizzesController",
	        	"InsertQuiz": "/api/Quiz/InsertQuiz",
	        	"DeleteQuiz": "/api/Quiz/DeleteQuiz",
	        	"ListEducationalContents": "/api/EducationalContent/GetListOfEducationalContentsbyAnyParameterController",
				"ListVideoEducationalContents": "/api/EducationalContent/GetListOfVideoEducationContents",
				"ListDocumentEducationalContents": "/api/EducationalContent/GetListOfDocumentEducationContents",
				"ListUserVideoEducationalContents": "/api/EducationalContent/GetListOfUserVideoEducationContents",
				"ListUserDocumentEducationalContents": "/api/EducationalContent/GetListOfUserDocumentEducationContents",
	        	"InsertEducationalContent": "/api/EducationalContent/InsertEducationalContent",
	        	"UpdateEducationalContent": "/api/EducationalContent/EFUpdateEducationalContent",
	        	"DeleteEducationalContent": "/api/EducationalContent/DeleteEducationalContent",
				"InsertUserEducationalContent": "/api/EducationalContent/EFInsertEducationalContentToUserController",
	        	"ListFarm": "/api/Farms/EFGetListOfFarmsController",
	        	"InsertFarm": "/api/Farms/InsertFarm",
	        	"UpdateFarm": "/api/Farms/EFUpdateFarm",
	        	"DeleteFarm": "/api/Farms/EFDeleteFarm",
	        	"InsertLoginCredential": "/api/LoginCredentials/InsertLoginCredentialsController",
	        	"LoginWithLoginCredentials": "/api/LoginCredentials/LoginWithLoginCredentials",
	        	"RegisterLoginCredential": "/api/LoginCredentials/RegisterLoginCredentials",
				"UpdateLoginCredentials" : "/api/LoginCredentials/UpdateLoginCredentials",
				"InsertOrUpdateUserFarm": "/api/Users/InsertOrUpdateUserFarm",
				"InsertOrUpdateUserCommunicationPreference": "/api/Users/InsertOrUpdateUserCommunicationPreference",
				"ReadUserAnyParameter": "/api/Users/EFReadUserAnyParameter",
				"ListUserByUserType": "/api/Users/ListUserByUserType",
				"SearchUser": "/api/Users/SearchUser",
				"GetUserInfo": "/api/"
	        }
	    }
	}
	angular.module("angularApp.constants").constant("API_CONSTANT",apiConstant());
})();