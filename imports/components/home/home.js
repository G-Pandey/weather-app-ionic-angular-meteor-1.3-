import './home.html';
import { Meteor } from 'meteor/meteor';
console.log(Meteor.userId());
class homeCtrl{
  constructor($scope, $http, $ionicNavBarDelegate, $state){
    $scope.viewModel(this);
    const scope = this;

    this.autorun(function(){
      try{
      scope.defaultzip = Meteor.user().profile.default.zip;

      $scope.$watch(scope.default, function(){
        $http.get(`http://api.openweathermap.org/data/2.5/weather?zip=${scope.defaultzip},us&appid=APITOKENGOESHERE`)
        .then(function(response){
          scope.data = response.data;
          console.log(response.data);
        });

    });
    }catch(e){}
    })

    const today = new Date();

      if(today.getHours() >= 17 || today.getHours() < 6){
        this.getColour = "night";
      }else {
        this.getColour =  "day";
      }


    this.toDegree = (kelvin) => {
      return (kelvin - 273.15).toFixed(2);
      return kelvin;
    }

    this.formatTime = (milli) => {
      const d = new Date(milli * 1000);
      return d.toLocaleTimeString() || "";
    }




    if(!Meteor.userId()){
      $state.go('home');
    }
  }
}


export const template = {
  templateUrl: 'imports/components/home/home.html',
  controllerAs: 'home',
  controller: homeCtrl
}
