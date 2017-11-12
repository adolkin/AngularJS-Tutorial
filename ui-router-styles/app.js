var routerApp = angular.module('routerApp', ['ui.router', 'uiRouterStyles']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home/red');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html',
            abstract: true,
            data: {
              css: [
                'parent-css.css',
                {
                  name: 'layout',
                  href: 'layout-base.css'
                }
              ]
            }
        })
        
        // nested list with custom controller
        .state('home.red', {
            url: '/red',
            template: '<div class="color">RED</div>',
            data: {
              css: ['red.css']
            }
        })
        
        // nested list with just some random string data
        .state('home.green', {
            url: '/green',
            template: '<div class="color">GREEN</div>',
            data: {
              css: [
                'green.css',
                {
                  name: 'layout',
                  href: 'layout-green.css'
                }
              ]
            }
        })
});