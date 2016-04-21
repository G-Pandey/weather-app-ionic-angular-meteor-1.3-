import './addFav.html';



class addFavCtrl {
  constructor ($scope, $state, $http){
    $scope.viewModel(this);
    const scope = this;

    this.addNew = (zipcode) => {
      if(zipcode){
        $http.get(`http://api.zippopotam.us/us/${zipcode}`).then(function(response){
          Meteor.users.update(
            {'_id': Meteor.userId()},
          {
            $addToSet:{
              'profile.favourites':{'zip':zipcode, 'city':response.data.places[0]['place name']}
            }
          });
        }, function(response){
          scope.errorMessage = "Invalid ZipCode";
          return;
        })

        $state.go('tabs.favourites')
      }
    }
  }
}


export const template = {
  templateUrl: 'imports/components/favourites/addFav/addFav.html',
  controller: addFavCtrl,
  controllerAs: 'favCtrl'
}
