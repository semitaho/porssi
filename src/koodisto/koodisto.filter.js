export default function KoodistoFilter(koodisto) {
  return function (input, koodistonimi) {
    if ($.isEmptyObject(input)) {
      return '';
    }
    let label = koodisto.get(koodistonimi, input);
    return label;

  };

}