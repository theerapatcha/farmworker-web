(function() {
    function searcFarmownerController($scope, farmownerService, NgTableParams) {
        var self = this;
        self.isSearched = false;
        self.tableParams = new NgTableParams();
        self.search = {};
        self.doSearch = function(){
            self.isSearched = true;
            farmownerService.searchFarmowners(self.search.email,self.search.phone,self.search.name).then((farmowners)=>{   
                self.farmowners = farmowners;
                self.tableParams.settings({
                    dataset: farmowners
                });
            });
        }
        self.toggleSearchResult = function(){
            self.isSearched = !self.isSearched;
        }
    }
    angular.module("angularApp.routes").component("searchFarmowner", {
        templateUrl: "routes/admin/farmowner/search.html",
        controller: searcFarmownerController
    });
})();