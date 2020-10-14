module.exports = function toReadable (number) {
  let one = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let onee = ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine'];
  let two = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let three = ['','', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];
  let hun = 'hundred';
  if (number < 10) {
      return one[number];
  }
  else if (number < 20) {
      return two[number % 10];
  }
  else if (number < 100) {
      return `${three[Math.floor(number / 10)]}${onee[number % 10]}`.trim();
  }

  else if (number < 1000 && (number % 100) < 20 && (number % 100) > 9) {
      return `${one[Math.floor(number / 100)]} ${hun} ${two[number % 10]}`;
  }

  else if (number < 1000) {
      return `${one[Math.floor(number / 100)]} ${hun}${three[Math.floor((number % 100) / 10)]}${onee[number % 10]}`;
  }

}
