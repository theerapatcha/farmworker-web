(function() {
    function documentEducationController($scope, userService, educationService) {
        var self = this;
        this.documentList = [];
        this.displayedDocumentList = [];
        this.searchKeyword = "";
        self.$onInit = function(){
            educationService.listDocuments().then(function(documents){
                self.documentList = documents;
                self.displayedDocumentList = self.documentList;    
            });
        }
        
        self.openDocument = function(document){
            educationService.mapContentToUser(userService.getUserInfo(), document);
        }
        $scope.$watch(
            function() { return self.searchKeyword; },
            function(keyword){
        	   self.displayedDocumentList = self.documentList.filter(function(document){
        	       return document.Name.indexOf(keyword)>=0;
        	   });
            }
        );

    }
    angular.module("angularApp.routes").component("documentEducation", {
        templateUrl: "routes/education/document.html",
        controller: documentEducationController
    });
})();