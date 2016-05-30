const API_KEY = 'eOp9LjtwzApDNb-TbPbCEZ2V74XTSwrV';
const DB = 'porssidb';
const BASE_URL = 'https://api.mlab.com/api/1/databases/' + DB;

class PersistenceService {

  constructor($resource) {
    this.db = $resource(BASE_URL + '/collections/:table', {apiKey: API_KEY});
  }

  store(data, table) {
    return this.db.save({table: table}, data).$promise;
  }

  readAll(table, query) {
    return this.db.query({table: table, q: query}).$promise;
  }

}

export default PersistenceService;