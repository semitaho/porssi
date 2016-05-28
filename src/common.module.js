import NavigationComponent from './navigation/navigation.component.js';
import FooterComponent from './footer/footer.component.js';

const moduleName = 'porssi.common';
angular.module(moduleName, [])
  .component('navigation', NavigationComponent)
  .component('porssiFooter', FooterComponent);

export default moduleName;