(function() {
    function videoEducationController($scope, userService, educationService, videoModalService) {
        var self = this;
        this.videoList = [];
        this.displayedVideoList = [];
        this.searchKeyword = "";
        self.$onInit = function(){
        	educationService.listVideos().then(function(videos){
                self.videoList = videos;
                self.displayedVideoList = self.videoList;    
            });;
        }
        
        self.openVideo = function(video){
            educationService.mapContentToUser(userService.getUserInfo(), video);
            videoModalService.createModal(video);
        }
        $scope.$watch(
        	function() { return self.searchKeyword; },
        	function(keyword){
	        	self.displayedVideoList = self.videoList.filter(function(video){
	        		return video.Name.indexOf(keyword)>=0;
	        	});
        	}
        );
    }
    angular.module("angularApp.routes").component("videoEducation", {
        templateUrl: "routes/education/video.html",
        controller: videoEducationController
    });
})();