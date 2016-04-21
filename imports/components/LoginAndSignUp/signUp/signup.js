import './signup.html';


class signupCtrl{
  constructor($scope, $ionicNavBarDelegate, $state, $timeout){
    $scope.viewModel(this);


    this.signThisUserUp = (userInfo) => {
      if(checkEmpty(userInfo)){
        const userObject = {
          email: userInfo.email,
          password: userInfo.password,
          profile:{
            name: userInfo.name
          }
        };

        Accounts.createUser(userObject, function(error){
           if(error){
           console.log(error);
           alert('Sign up failed!!');
         }
           else {
             $state.go('tabs.home');
           }
        });
      }else {
        $ionicPopup.alert({
          title:'Signup failed',
          template: "Please fill out the form!!"
        });
      }
    }

    checkEmpty = (object) => {
      const toReturn = true;
      for(key in object){
        if(!object[key] || object[key] == ""){
          return false;
        }
      }
      return toReturn;
    }
    // $scope.$on('$ionicView.afterEnter', function() {
    // // code to run each time view is entered
    // $ionicNavBarDelegate.showBar(false);
    //
    // });


  //   ionic.Platform.ready(function(){
  //   // will execute when device is ready, or immediately if the device is already ready.
  //   console.log("hello");
  //   console.log($ionicNavBarDelegate.showBar(false));
  // });

  }
}


export const template = {
  templateUrl: 'imports/components/LoginAndSignUp/signUp/signup.html',
  controllerAs: 'signup',
  controller: signupCtrl
}
