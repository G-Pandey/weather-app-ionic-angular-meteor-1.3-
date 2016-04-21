import './favourites.html';
import { Meteor } from 'meteor/meteor';

class favouriteCtrl{
  constructor($scope, $http){
    $scope.viewModel(this);

    this.userId = Meteor.userId();

  this.helpers({
    myFavourites(){
      return Meteor.user() && Meteor.user().profile && Meteor.user().profile.favourites;
    }
  })

  this.delete = (obj, defObj) => {
    Meteor.users.update({'_id':Meteor.userId()},{
      $pull:{
        'profile.favourites':{'city':obj.city, 'zip':obj.zip}
      }
    });

    if(defObj.zip === obj.zip){
    Meteor.users.update({'_id':Meteor.userId()},{
      $set:{
        'profile.default':{}
      }
    })
  }
  }
}
}


export const template = {
  templateUrl: 'imports/components/favourites/favourites.html',
  controllerAs: 'favourites',
  controller: favouriteCtrl
}
