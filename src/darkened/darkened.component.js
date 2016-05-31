import 'darkened.css';

const darkenedComponent = {
  template: '<div ng-class="{darkened: $ctrl.model.show" />',
  controller: function (preloaderModel) {
    this.model = preloaderModel;
  }

};

export default darkenedComponent;
