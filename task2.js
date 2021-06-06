// Q1
var wi = (x) => {
  switch (x) {
    case 0:
      return  "Saturday";
    case 1:
      return  "Sunday";
    case 2:
      return  "Monday";
    case 3:
      return  "Tuesday";
    case 4:
      return  "Wednesday";
    case 5:
      return "Thursday";
  }
};
let BestProfit = (arr) => {
  let x = arr.indexOf(Math.min(...arr));
  let arr2 = arr.slice(x);
  let y = arr2.indexOf(Math.max(...arr2)) + x;
  return console.log("buy in dey =" + wi(x) + " sell in dey =" + wi(y));
};
BestProfit([150, 146, 142, 143, 145, 144]);
// ---------------------------------------------
// Q2//ما مقتنع
let CheckOverlap = (t1Start, t1End, t2Start, t2End) => {
  var x = [];
  var y = [];
  for (let i = 0; i < t1Start.length; i++) {
    x[i] = t1End.charAt(i);
    y[i] = t2Start.charAt(i);
  }
  if (t1End == t2Start || t1Start == t2End || (x[0] >= y[0] && x[1] >= y[1])) {
    return "overlap";
  } else {
    return " no overlap";
  }
};
console.log(
  CheckOverlap(
    "13/5/2021 13:00",
    "14/5/2021 13:00",
    "15/5/2021 13:00",
    "16/5/2021 13:00"
  )
);
// ----------------------------------------------------------------
//Q3
let HowManyPairs = (shoes) => {
  var xl = 0;
  var xr = 0;
  var xlr = 0;
  for (let i = 0; i < shoes.length; i++) {
    if (shoes[i] == "L") xl++;
    if (shoes[i] == "R") xr++;
    if (xl == xr && xl > 0) {
      xlr++;
      xl = 0;
      xr = 0;
    }
  }
  return xlr;
};
console.log(HowManyPairs("RRLLRRRLLR"));
// ------------------------------------------------------
// Q4
let HowManyLetters = (word) => {
  let counts = {};
  let ch, index, counter;
  for (index = 0; index < word.length; ++index) {
    ch = word.charAt(index);
    counter = counts[ch];
    counts[ch] = counter ? counter + 1 : 1;
  }
  console.log(counts);
};
HowManyLetters("azoz");
// -----------------------------------------------
// Q5
let BinarySearch = (element, arr) => {
  let low = 0,
    high = arr.length - 1;
    //arr=bubbleSort(arr);
    arr= arr.sort();
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = arr[mid];
    if (guess == element) {
      return mid;
    }
    if (guess > element) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return "Not fio";
};
console.log(BinarySearch(5, [4, 2, 5, 2, 1, 4, 6, 7, 9]));
console.log(BinarySearch(1, [4, 2, 5, 2, 1, 5, 6, 1, 9]));
console.log(BinarySearch(2, [4, 2, 5, 2, 1, 5, 6, 1]));
// ------------------------------------------
// Q6
let swap = (arr, xp, yp) => {
  let temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
};
let bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};
console.log(bubbleSort([4, 2, -5, 2, -1, 4, 6, 7, 9]));
//------------------------------------------
//Q7
let minMax=(arr) =>{
let x=Math.max(...arr);
let y=Math.min(...arr);
return [x,y];
}
console.log(minMax([4,5,7,8,2,9,22,44,66,67]));
// ----------------------------------------------
// Q8
let missingNum = (arr) => {
  for (let i = 1; i < 11; i++) {
    if(arr.indexOf(i)==-1)
  return i;
    }
  }
console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]));
// -----------------------------------------------------------
// Q9//ما كامل
var numToEng = (ne) => {
  var str = new Array();
  var x = ne.toString();
  var y = x;
  var z = 0;
  for (let i = 0; i < x.length; i++) {
    var e = x[i];
    if (Math.floor(x / 10) != 0) z++;
    switch (e) {
      case "0":
        str.push("");
        break;
      case "1":
        str.push("one");
        break;
      case "2":
        str.push("two");
        break;
      case "3":
        str.push("three");
        break;
      case "4":
        str.push("four");
        break;
      case "5":
        str.push("five");
        break;
      case "6":
        str.push("six");
        break;
      case "7":
        str.push("seven");
        break;
      case "8":
        str.push("eight");
        break;
      case "9":
        str.push("nine");
        break;
    }
  }
  return str.join(" ");
};
// thirty hundredteen
console.log(numToEng(123));
// -------------------------------------
// Q10
 let squareDigits =(ne)=>{
   var x=ne.toString();
   var y = new Array();
   for (let i = 0; i < x.length; i++) {
     y.push(x[i]*x[i]);
 }
 return y.join("");
}
console.log(squareDigits(3212));
//-----------------------------------------
//Q11
let fizzBuzz = (n) => {
 var x = new Array();
  //var x=[];
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      x.push("FizzBuzz");
    } else {
      if (i % 3 == 0) {
        x.push('Fizz') ;
      } else {
        if (i % 5 == 0) {
          x.push("Buzz");
        } else {
          x.push(i);
        }
      }
    }
  }
  console.log(Array.isArray(x));
  return x;
};
console.log(fizzBuzz(25));
// ------------------------------------------
// Q12
function concat () {
  var arr = new Array();
  for(let i=0;i<arguments.length;i++){
     arr=arr.concat(arguments[i]);
  }
return arr;
}
console.log(concat([1], [2], [3], [4], [5], [6], [7]));
console.log(concat([1, 2, 3], [4, 5], [6, 7]));
// ----------------------------
// Q13
let arrayOfMultiples = (num, length) => {
  var x = new Array();
  let i=1,y=2;
  x.push(num);
  while ( i < length) {
    num2 =num * y;
    x.push(num2);
    y++;
    i++;
  }
  return x;
};
console.log(arrayOfMultiples(17, 6));
//----------------------------------
//Q14
function flatten(arr) {
 var arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2=arr2.concat(arr[i]);
  }
  return arr2;
}
console.log(flatten([[1, 2], [3, 4]]));
//---------------------------------
//Q15
let testJackpot = (a) => {
 console.log(a[0]===a[1]&&a[2]===a[3]&&a[1]===a[2]);
};
testJackpot(["SS", "SS", "SS", "SS"]);
testJackpot(["&&", "&", "&&&", "&&&&"]);
//-------------------------------------
//Q16
let secondLargest = (arr) => {
  let largest=0,second;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      second = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > second) {
      second = arr[i];
    }
  }
  return second;
};
console.log(secondLargest([54, 23, 11, 17, 10]));
// ---------------------------------
//Q17
let numberSplit =(n)=>{
console.log(Math.floor(n/2)+'   '+Math.round(n/2));
}
numberSplit(25);
//---------------------------------
//Q18
let sortByLength = (arr) => {
  var z=0;
  for (let i = 0; i < arr.length; i++) {
    var j = arr[i].length;
    var r = arr[z].length;
    if (r > j) {
      let temp = arr[i];
      arr[i] = arr[z];
      arr[z] = temp;
      z=i;
    }
  }
  return [...arr];
};
console.log(sortByLength(["Google", "Apple", "Microsoft"]));
//------------------
//Q19
let findLargestNums = (arr) => {
  var x = new Array();
  for (let i = 0; i < arr.length; i++) console.log(Math.max(...arr[i]));
  return x;
};
console.log(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]));
//Q20
let set = (arr) => {
  var e;
  var x = new Array();
  for (let i = 0; i < arr.length; i++) {
      e=arr[i];
    if (BinarySearch(e,x)=="Not fio") {
      x.push(e);
    }
  }
  return bubbleSort(x);
};
console.log(set([5, 7, 8, 9, 10, 15]));
