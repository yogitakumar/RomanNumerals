//MyCode
function DecimalToRoman(n) {
  var numbers = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "V" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];
  var result = "";

  /* My third approch to convert bigger number to roman numeral */
  numbers.forEach((i) => {
    while (n >= i.value) {
      result += i.numeral;
      n -= i.value;
    }
  });

  /* My second approch to refractor if statements */
  // while(n>0){
  //   result += "I";
  //   --n;
  // }

  /* My first approch to just make my test case pass */
  // if(n == 1)
  // return "I";
  // if(n==2)
  //  return "II";
  //  if(n==3)
  //  return "III";
  return result;
}

function RomanToDecimal(str1) {
  if (str1 == null) return -1;
  var num = char_to_int(str1.charAt(0));
  var pre, curr;

  for (var i = 1; i < str1.length; i++) {
    curr = char_to_int(str1.charAt(i));
    pre = char_to_int(str1.charAt(i - 1));
    if (curr <= pre) {
      num += curr;
    } else {
      num = num - pre * 2 + curr;
    }
  }
  return num;
}

function char_to_int(c) {
  switch (c) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return -1;
  }
}
module.exports = {
  DecimalToRoman,
  RomanToDecimal,
};
