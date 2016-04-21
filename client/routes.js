import '../imports/components/tabs/tabs.html';
import * as home from '../imports/components/home/home.js';
import * as settings from '../imports/components/settings/settings.js';
import * as favourites from '../imports/components/favourites/favourites.js';
import * as login from '../imports/components/LoginAndSignUp/login/login.js';
import * as signup from '../imports/components/LoginAndSignUp/signUp/signup.js';
import * as setDefault from '../imports/components/settings/setDefault/setDefault.js';
import * as addFav from '../imports/components/favourites/addFav/addFav.js';

angular.module('weather-app').config(
  function($stateProvider, $urlRouterProvider){

    $stateProvider
    .state('tabs', {
      url: '/tab',
      abstract:true,
      templateUrl:'imports/components/tabs/tabs.html'
    })
    .state('tabs.home', {
      url: '/home',
      views: {
        'home-tab': Object.assign({
      }, home.template)
    }
    })
    .state('tabs.favourites', {
      url: '/favourites',
      views: {
        'favourites-tab': Object.assign({
      }, favourites.template)
    }
    })
    .state('tabs.addFavourite', {
      url: '/favourites/addNew',
      views: {
        'favourites-tab': Object.assign({
      }, addFav.template)
    }
    })
    .state('tabs.settings', {
      url: '/settings',
      views: {
        'settings-tab': Object.assign({
      }, settings.template)
    }
    })
    .state('tabs.setDefault', {
      url: '/settings/set-default',
      views:{
        'settings-tab': Object.assign({

        }, setDefault.template)
      }
    })
    .state('home', Object.assign({
      url: '/',
      cache:false
        }, login.template))
    .state('signup', Object.assign({
      url: '/signup',
    }, signup.template))




    $urlRouterProvider.otherwise('/');
  }
)
