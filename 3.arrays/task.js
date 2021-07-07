const compareArrays = (arr1,arr2) => {
  let result = arr1.every((elem,indx) => elem === arr2[indx]) && arr1.length === arr2.length ;
  return result; 
}
 
const advancedFilter = (arr) => {
  let arrayOne = arr;
  let resultArr = arrayOne.filter(elem => elem % 3 === 0).filter(elem => elem > 0).map(elem =>  elem * 10);
  return resultArr; // array
}
