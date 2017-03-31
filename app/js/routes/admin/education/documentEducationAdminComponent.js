(function() {
    function documentEducationAdminController($scope, educationService) {
        var self = this;
        this.documentList = [];
        
        self.$onInit = function(){
        	self.initComponent();
        };
        self.initComponent = function(){
            self.newDocument = {
                TypeEducationalContent: "Document"
            };
            educationService.listDocuments().then(function(documents){
                self.documentList = documents;
            });
        }
        self.doAdd = function(){
            educationService.insertDocument(self.newDocument).then(function(message){
                self.initComponent();
            });
        };
        
    }
    angular.module("angularApp.routes").component("documentEducationAdmin", {
        templateUrl: "routes/admin/education/document.html",
        controller: documentEducationAdminController
    });
})();