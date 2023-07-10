/*a funtion that takes two arrays and returns
 elements that are only presrent in both arrays */

 let array1 = [1, 2, 3, 4, 5];
 let array2 = [4, 5, 6, 7, 8];

 let result = array1.filter((item) => array2.includes(item));
 console.log(result);
