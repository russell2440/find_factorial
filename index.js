function find_factorial_iter(value){
  console.log("value: "+value);
  if(value>1) return value*find_factorial_iter(value-1);
  return 1;
}

let val = find_factorial_iter(5);
console.log("val: "+val)