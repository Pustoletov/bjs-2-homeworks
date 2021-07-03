const compareArrays = (arr1,arr2) => {
  let arrayOne = arr1;
  let arrayTwo = arr2;
  let result = arrayOne.every((elem,indx,arr) => elem === arrayTwo[indx] && arrayOne.length === arrayTwo.length );
  return result; // boolean
}
 
const advancedFilter = (arr) => {
  let arrayOne = arr;
  let resultArr = arrayOne.filter(elem => elem % 3 === 0).filter(elem => elem > 0).map(elem =>  elem * 10);
  return resultArr; // array
}
