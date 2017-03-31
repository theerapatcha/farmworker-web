(function() {
    function registerController($scope, userService) {
        var self = this;
        self.months =["January","Febuary"];
        self.days = [1,2,3,4,5];
        self.years = [1990,1991,1992];
        self.isSubmitted = false;
        self.registerUser = {
            IsActive: 1
        }
        self.doRegister = function() {
            var form = $scope.myForm;
            //console.log($scope.myForm);
            for (var key in form) {
                //console.log(form[key]);
                if (form.hasOwnProperty(key) && form[key] && form[key].$touched !== undefined) {
                    form[key].$setTouched();
                }
            }
            if (form.$valid) {
                form.$setSubmitted();
                self.isSubmitted = true;
                userService.register({
                    LoginCredential: self.registerUser,
                    User: {},
                    RegisterType: "UserPhoneNumber",
                    UserType: "Farm Worker"
                }).then(function(credential){
                    if(credential.UserSecurityRole.UserSecurityRoleName === 'admin'){
                        self.$router.navigate(['Main','Admin']);
                    }else{
                        self.$router.navigate(['Main','Profile']);
                    }
                });;
            }


        };
       
        self.validatePassword = function() {
            var correctFormat = self.registerUser.Password.match(/[0-9a-zA-Z!@#\$%\^\&*\)\(+=._-]{6,24}/g);
            var hasUpper = self.registerUser.Password.match(/[A-Z]+/g);
            var hasSpecial = self.registerUser.Password.match(/[!@#\$%\^\&*\)\(+=._-]+/g);
            if (!correctFormat || !hasUpper || !hasSpecial) {
                $scope.myForm['passwordInput'].$setValidity('pattern', false);
            } else {
                $scope.myForm['passwordInput'].$setValidity('pattern', true);
            }
        }
        self.validateConfirmPassword = function() {
            if (self.registerUser.Password !== self.registerUser.ConfirmPassword) {
                $scope.myForm['rePasswordInput'].$setValidity('value', false);
            } else {
                $scope.myForm['rePasswordInput'].$setValidity('value', true);
            }
        };
        $scope.$watch(function() {
            return $scope.myForm.$dirty;
        }, function(newValue) {
            if (newValue) {
                self.isSubmitted = false;
            }
        })
    }
    angular.module("angularApp.routes").component("register", {
        templateUrl: "routes/register.html",
        bindings: {
            $router: '<'
        },
        controller: registerController
    });
})();