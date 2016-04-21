import './setDefault.html';
import * as favourites from '../../favourites/favourites.js';


class setDefaultCtrl extends favourites.template.controller{
  constructor ($scope, $http){
    super($scope, $http);
    $scope.viewModel(this);

    this.setDefault = (obj) => {

      Meteor.users.update({'_id': Meteor.userId()},{
        $set:{
          'profile.default':{'zip':obj.zip, 'city': obj.city}
        }
      });
    }

  }
}


export const template = {
  templateUrl: 'imports/components/settings/setDefault/setDefault.html',
  controller: setDefaultCtrl,
  controllerAs: 'settingsDefault'
}
