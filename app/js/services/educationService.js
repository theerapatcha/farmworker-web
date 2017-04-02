(function () {
	function educationService($http, $q, $timeout, API_CONSTANT, Quiz, Video, Document, EducationContentMapping) {
		this.listQuizzes = function () {
			return $http.get(API_CONSTANT.API_HOST + API_CONSTANT.API.ListQuiz).then(
				function (resp) {
					return resp.data.map(function (quiz) {
						return new Quiz(quiz);
					});
				}
			);
		};

		this.getQuizByID = function (quiz_id, quiz_version) {
			return $http.get(API_CONSTANT.API_HOST + API_CONSTANT.API.GetQuizByVersionandID, {
				params: {
					_quizID: quiz_id,
					_quizVersion: quiz_version
				}


			}).then(
				function (resp) {
					return new Quiz(resp.data);
				})
		};



		this.listDocuments = function () {
			return $http.get(
				API_CONSTANT.API_HOST + API_CONSTANT.API.ListDocumentEducationalContents).then(
				function (resp) {
					return resp.data.map(function (content) {
						return new Document(content);
					});
				}
				);
		};
		this.listVideos = function () {
			return $http.get(
				API_CONSTANT.API_HOST + API_CONSTANT.API.ListVideoEducationalContents).then(
				function (resp) {
					return resp.data.map(function (content) {
						return new Video(content);
					});
				}
				);
		};
		this.listUserDocumentMappings = function (userID) {
			return $http.get(
				API_CONSTANT.API_HOST + API_CONSTANT.API.ListUserDocumentEducationalContents,
				{
					params: {
						UserID: userID
					}
				}).then(
				function (resp) {
					return resp.data.map(function (content) {
						return new EducationContentMapping(content);
					});
				}
				);
		};
		this.listUserVideoMappings = function (userID) {
			return $http.get(
				API_CONSTANT.API_HOST + API_CONSTANT.API.ListUserVideoEducationalContents,
				{
					params: {
						UserID: userID
					}
				}).then(
				function (resp) {
					return resp.data.map(function (content) {
						return new EducationContentMapping(content);
					});
				}
				);
		};
		this.insertDocument = function (document) {
			document.TypeEducationalContent = "Document";
			return $http.post(API_CONSTANT.API_HOST + API_CONSTANT.API.InsertEducationalContent, document).then(
				function (resp) { return resp.data; }
			);
		}
		this.insertVideo = function (video) {
			video.TypeEducationalContent = "Video";
			return $http.post(API_CONSTANT.API_HOST + API_CONSTANT.API.InsertEducationalContent, video).then(
				function (resp) { return resp.data; }
			);
		}
		this.updateDocument = function (document) {
			document.TypeEducationalContent = "Document";
			return $http.post(API_CONSTANT.API_HOST + API_CONSTANT.API.UpdateEducationalContent, document).then(
				function (resp) { return resp.data; }
			);
		}
		this.updateVideo = function (video) {
			video.TypeEducationalContent = "Video";
			return $http.post(API_CONSTANT.API_HOST + API_CONSTANT.API.UpdateEducationalContent, video).then(
				function (resp) { return resp.data; }
			);
		}
		this.mapContentToUser = function (user, content) {
			return $http.post(API_CONSTANT.API_HOST + API_CONSTANT.API.InsertUserEducationalContent, {
				EducationalContentID: content.IDEducationalContent,
				UserID: user.UserID,
				UserEducationalContentClicked: 1
			}).then(
				function (resp) { return resp.data; }
				);
		}
	}
	angular.module("angularApp.services").service("educationService", educationService);
})();