import NavigationComponent from './navigation/navigation.component.js';
import FooterComponent from './footer/footer.component.js';
import Lajit from './koodisto/koodisto.model.js';
import KoodistoFilter from './koodisto/koodisto.filter.js';
const moduleName = 'porssi.common';
angular.module(moduleName, [])
  .component('navigation', NavigationComponent)
  .component('porssiFooter', FooterComponent)
  .service('koodisto', Lajit)
  .filter('koodistofilter', KoodistoFilter);


export default moduleName;