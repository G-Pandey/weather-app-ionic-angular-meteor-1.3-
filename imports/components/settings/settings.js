import './settings.html';


class settingsCtrl{
  constructor($scope, $http,$state, $ionicNavBarDelegate){
    $scope.viewModel(this);
  // 
  //   ionic.Platform.ready(function(){
  //   // will execute when device is ready, or immediately if the device is already ready.
  //   console.log("hello");
  //   // console.log($ionicNavBarDelegate.showBar(false));
  // });

  this.logout = () => {
    Meteor.logout();
    $state.go('home');
  }
  }
}


export const template = {
  templateUrl: 'imports/components/settings/settings.html',
  controllerAs: 'settings',
  controller: settingsCtrl
}
