/**
 * Created by kerkins on 25.06.14.
 */

(function() {
        var app = angular.module('page', []);
        app.controller('PageController', function(){
            this.product = information;
        });

   /*     app.controller('tabController', function () {
        this.tab = 1;

        this.isSet = function (tabName) {
            return this.tab === tabName;
        };
        this.setTab = function (newValue) {
            this.tab = newValue;
        };
    });*/

        app.directive("tabController", function(){
            return{
                restrict: 'E',
                templateUrl: "tabs.html",
                controller: function(){
                    this.tab = 1;
                    this.isSet = function(tabName){
                        return this.tab === tabName;
                    };
                    this.setTab = function(newValue){
                        this.tab = newValue;
                    };
                },
                controllerAs: "tab"
            };
        });

    app.directive("information", function(){
        return{
            restrict: 'E',
            templateUrl: "info.html"
        };
    });

    app.directive("skills", function(){
        return{
            restrict:'E',
            templateUrl: "skills.html"
        };
    });

    app.directive("knowledge", function(){
        return{
            restrict: 'E',
            templateUrl: "knowledge.html"
        };
    });

    app.directive("experience", function(){
        return{
            restrict: "E",
            templateUrl: "exp.html"
        };
    });

    app.directive("projects", function(){
        return{
            restrict: 'E',
            templateUrl: "projects.html"
        };
    });

    var information = {
        information: 'info',
        skills: 'skills',
        knowledge: 'knowledge',
        exp: 'experience',
        projects: 'projects'
    };
})();

