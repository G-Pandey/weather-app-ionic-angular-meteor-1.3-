import angular from 'angular';
import angularMeteor from 'angular-meteor';
import 'angular-animate';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';
import 'meteor/accounts-password';
import { Meteor } from 'meteor/meteor';


angular.module('weather-app', [
  angularMeteor,
  'ionic'
])

if(Meteor.isCordova){
  angular.element(document).on('deviceready', onReady);
}
angular.element(document).ready(onReady);


function onReady(){
  angular.bootstrap(document, ['weather-app']);
}

// console.log(Meteor.user());
