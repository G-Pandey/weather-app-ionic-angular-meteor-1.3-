import './login.html';


class loginCtrl{
  constructor($scope, $ionicNavBarDelegate, $state, $ionicPopup){
    $scope.viewModel(this);


    this.logUserIn = (user) => {
      if(user.email && user.password){
      console.log(user);
      Meteor.loginWithPassword(user.email, user.password, (error) => {
        if(error){
          alert('Login Failed!!');
        }else {
          $state.go('tabs.home');
        }
      })
    }else{
      $ionicPopup.alert({
        title:'Login failed',
        template: "Please fill out the form!!"
      });
    }

    }
  //   ionic.Platform.ready(function(){
  //   // will execute when device is ready, or immediately if the device is already ready.
  //   console.log("hello");
  //   console.log($ionicNavBarDelegate.showBar(false));
  // });

  }
}


export const template = {
  templateUrl: 'imports/components/LoginAndSignUp/login/login.html',
  controllerAs: 'login',
  controller: loginCtrl
}
