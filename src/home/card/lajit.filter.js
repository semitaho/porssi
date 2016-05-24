export default function LajitFilter() {
  return function (input) {
    return input.join(', ');
  };

}