(function() {
    function quizEducationAdminController($scope, educationService) {
        var self = this;
        this.quizList = [];
        this.newQuiz = {
            TypeEducationalContent: "Quiz"
        };
        self.$onInit = function(){
        	self.initComponent();
        };
        self.initComponent = function(){
            self.newQuiz = {
                TypeEducationalContent: "Quiz"
            };
        	educationService.listQuizzes().then(function(quizzes){
                self.quizList = quizzes;
            });
        };
        self.doAdd = function(){
            educationService.insertQuiz(self.newQuiz).then(function(message){
                self.initComponent();
            });
        };
        
    }
    angular.module("angularApp.routes").component("quizEducationAdmin", {
        templateUrl: "routes/admin/education/quiz.html",
        controller: quizEducationAdminController
    });
})();