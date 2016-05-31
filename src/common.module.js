import NavigationComponent from './navigation/navigation.component.js';
import FooterComponent from './footer/footer.component.js';
import PreloaderComponent from './preloader/preloader.component';
import PreloaderModel from './preloader/preloader.model';

import Lajit from './koodisto/koodisto.model.js';
import KoodistoFilter from './koodisto/koodisto.filter.js';
import PersistenceService from './persistence.service.js';
const moduleName = 'porssi.common';
angular.module(moduleName, [])
  .component('preloader', PreloaderComponent)
  .service('preloaderModel', PreloaderModel)
  .component('navigation', NavigationComponent)
  .component('porssiFooter', FooterComponent)
  .service('koodisto', Lajit)
  .service('persistence', PersistenceService)
  .filter('koodistofilter', KoodistoFilter);


export default moduleName;