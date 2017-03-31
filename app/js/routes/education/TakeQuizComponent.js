(function () {
    function QuizContent($scope, $log, educationService) {



        this.$routerOnActivate = function (next) {
            $log.log(next);
            $scope.gradeVisible = true;
            $scope.GradeMessage = "";
            $scope.gradeClass;
            $scope.Score = 0;

            $scope.id = next.params.id;
            $scope.version = next.params.version;
            educationService.getQuizByID($scope.id, $scope.version).then(function (quiz) {
                $scope.Quiz = quiz;
                //add selected 
                angular.forEach($scope.Quiz.QuizQuestions, function (obj) {
                    obj.Selected = 0;

                });
                /************************************
                 New object with the taken quiz data
                 ************************************/
                $scope.QuizResault = {
                    QuizID: $scope.Quiz.QuizName,
                    QuizTotalScore: $scope.Quiz.Scale,
                    UserResponce: [],
                    QuizScore: ''
                };
            });



            



        };






        /**********************************************************
         The function that generates a grade based on user response
         **********************************************************/
        $scope.grader = function () {
            $scope.Score = 0;
            angular.forEach($scope.Quiz.QuizQuestions, function (Qobj) {

                $scope.QuizResault.UserResponce.push(Qobj.Selected); //pushes the selected answers into a QuizResault object
                if (Qobj.Selected === Qobj.CorrectA) {
                    $scope.Score += 10;
                    Qobj.Correct = 'alert-success';
                } else {
                    Qobj.Correct = 'alert-danger';
                }
            });
            $scope.QuizResault.QuizScore = $scope.Score; //store the Score into the QuizResault object

            //Generates Message to display to the user after taking the quiz
            if ($scope.Score === $scope.Quiz.Scale) {
                $scope.GradeMessage = "Excellent work!";
                $scope.gradeClass = 'alert alert-success';
            } else if ($scope.Score === 0) {
                $scope.GradeMessage = "You werent able to answer any of the questions right. Please review the related material and retake the quiz.";
                $scope.gradeClass = 'alert alert-danger';
            } else {
                $scope.GradeMessage = "You need to work more on your skills please review the related documents again and re-take the quiz.";
                $scope.gradeClass = 'alert alert-warning';
            }

            $scope.gradeVisible = false;

            $scope.String = JSON.stringify($scope.QuizResault);
            $log.info($scope.String);

        };
    }

    angular.module("angularApp.routes").component('takeQuiz', {
        templateUrl: "routes/education/TakeQuiz.html",
        controller: QuizContent

    });

})();