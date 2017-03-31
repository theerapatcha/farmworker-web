(function() {
    function videoEducationAdminController($scope, educationService) {
        var self = this;
        this.videoList = [];
        
        self.$onInit = function(){
            self.initComponent();
        }
        self.initComponent = function(){
            self.newVideo = {
                TypeEducationalContent: "Video"
            };
        	educationService.listVideos().then(function(videos){
                self.videoList = videos;
            });
        };
        self.doAdd = function(){
            educationService.insertVideo(self.newVideo).then(function(message){
                self.initComponent();
            });
        };
        
    }
    angular.module("angularApp.routes").component("videoEducationAdmin", {
        templateUrl: "routes/admin/education/video.html",
        controller: videoEducationAdminController
    });
})();