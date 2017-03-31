(function() {
    function searcFarmworkerController($scope, farmworkerService, NgTableParams) {
        var self = this;
        self.isSearched = false;
        self.tableParams = new NgTableParams();
        self.search = {};
        self.doSearch = function(){
            self.isSearched = true;
            farmworkerService.searchFarmworkers(self.search.email,self.search.phone,self.search.name).then((farmworkers)=>{   
                self.farmworkers = farmworkers;
                self.tableParams.settings({
                    dataset: farmworkers
                });
            });
        }
        self.toggleSearchResult = function(){
            self.isSearched = !self.isSearched;
        }
    }
    angular.module("angularApp.routes").component("searchFarmworker", {
        templateUrl: "routes/admin/farmworker/search.html",
        controller: searcFarmworkerController
    });
})();