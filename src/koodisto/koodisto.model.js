class Koodisto {
  constructor() {
    this.populateLajit();
    this.populatePelipaikat();
  }

  populateLajit() {
    this.lajit = [];
    this.lajit.push({tunnus: 'baseball', label: 'Pesäpallo'});
    this.lajit.push({tunnus: 'basketball', label: 'Koripallo'});
    this.lajit.push({tunnus: 'icehockey', label: 'Jääkiekko'});
  }

  populatePelipaikat() {
    this.pelipaikat = [];
    this.pelipaikat.push({tunnus: 'goalie', label: 'Maalivahti'});
    this.pelipaikat.push({tunnus: 'defend', label: 'Puolustaja'});
    this.pelipaikat.push({tunnus: 'center', label: 'Keskushyökkääjä'});
    this.pelipaikat.push({tunnus: 'attach', label: 'Laitahyökkääjä'});
  }

  get(koodistonimi, arvo) {
    let koodisto = this[koodistonimi];
    let label = '';
    angular.forEach(koodisto, function (item) {
      if (item.tunnus === arvo) {
        label = item.label;
      }

    });
    return label;

  }

}

export default Koodisto;