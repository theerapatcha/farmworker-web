(function(){
	function QuizFactory(QuizQuestion){
		function Quiz(obj = {}){
			var json = obj ? obj : {};
			this.QuizID  = json.QuizID ;
			this.QuizVersion  = json.QuizVersion;
			this.QuizName   = json.QuizName;
			this.QuizDescription = json.QuizDescription;
			this.Scale = json.Scale;
			this.DateModified = json.DateModified;
			this.IsActive = json.IsActive;
			this.QuizQuestions = json.QuizQuestions ? json.QuizQuestions.map(function(question){ 
				return new QuizQuestion(question); }) : [];
			
		}
		return Quiz;
	}
	angular.module("angularApp.models").factory("Quiz",QuizFactory);
})();