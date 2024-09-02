function fibs(num) {
  const list = [];
  for (let index = 0; index < num; index++) {
    if (index < 2) {
      list.push(index);
    } else {
      list.push(list[index - 2] + list[index - 1]);
    }
  }
  return list;
}

function fibsRec(num) {
  if (num == 1) {
    return [0];
  } else if (num == 2) {
    return [0, 1];
  }
  const previous = fibsRec(num - 1);
  const nextNumber =
    previous[previous.length - 1] + previous[previous.length - 2];
  return [...previous, nextNumber];
}

console.log(fibsRec(8));

/*
function sumRange(num) {
    if (num === 1) {
      return num;
    }
    return (num += sumRange(num - 1));
  }
  
  //console.log(sumRange(5));
  
  function power(base, exponent) {
    if (exponent === 0) {
      return 1;
    }
    return base * power(base, exponent - 1);
  }
  
  //console.log(power(2, 5));
  
  function factorial(num) {
    if (num === 0) {
      return 1;
    }
    return num * factorial(num - 1);
  }
  
  //console.log(factorial(5));
  
  function all(array, callback) {
    let copy = array.slice();
    if (copy.length == 0) {
      return true;
    }
    if (callback(copy[0])) {
      copy.shift();
      return all(copy, callback);
    } else {
      return false;
    }
  }
  
  /*
  console.log(
    all([1, 2, 9], function (num) {
      return num < 12;
    })
  );
  
  function productOfArray(array) {
    if (array.length == 0) {
      return 1;
    }
    return array.shift() * productOfArray(array);
  }
  
  console.log(productOfArray([2, 4, 3]));
  */
