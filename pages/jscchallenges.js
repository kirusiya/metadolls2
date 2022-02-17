import React,{useEffect} from 'react'


// Challenges for Developers

// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result
export default function jscchallenges() {
    let array = [[1,2,[[[[3]]]]],[4,[5]]];
    let emptyList = [];
    
 const flatten = (array) => {
    
    
    //out put [1,2,3,4,5]
    array.map((e)=>{
        if (Array.isArray(e)){
            flatten(e)
            //Logica para recorrer el arreglo
        }else{
            emptyList.push(e)
        }
        
    });
    return emptyList

 }
/* 
 const findingNumber9 = (n) => {
     if(n<9){
         return 0;
     }
      let count = (n.toString().match(/9/g) || []).length
   return count + findingNumber9(n-1)
 
 } */
    let count = 0;
 const findingNumber9 = (n) => {
     if(n<9){
         return 0;
     }
     for(let i = 0 ; i<=n; i++){
         let numberArray = i.toString().split("")
         if( numberArray.length>1){
            //Caso especial se recorre el arreglo y se suman los nueves que se encuentre
            for( let x = 0 ; x<numberArray.length; x++){
                // este casi de symar los nueves lo hace la misma funcion
                findingNumber9(numberArray[x])
            }
         }else if(numberArray[0]==='9'){
              //Caso Basico donde lo unico que se debe hacer es sumar el nueve encontrado
            count = count + 1
        }
     }
 }

 /* Given the size, return a square matrix of numbers in spiral order.

The matrix should be filled with natural numbers, starting from 1 in the top-left corner, 
increasing in an inward, clockwise spiral order, like these examples:
n = 3
1 2 3
8 9 4
7 6 5
n=4
1  2  3 4
12 13 14 5
11 16 15 6
10  9  8 7
*/
 const createMatrix = (n) => {
    let matrix = []
    let list = []
    for( let i = 1; i<=n; i++ ){
        if(i)
    }
}
useEffect(()=>{
   createMatrix(10)
   /*  console.log(findingNumber9(10))
    console.log(count) */
 },[])
 
  return (
      <>
      <div style={{fontFamily:'Orbitron'}}>
          This will be my JavaScript Study Blog Note
      </div>
    </>
  )
}
