import React,{useEffect, useState} from 'react'
import matrixChess from '../localLogic/board';
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
    /* let matrix = []
    let list = []
    for( let i = 1; i<=n; i++ ){
        if(i)
    } */
}

 const printArrayWithRecursion = (start, list) =>{
    
    if (Array.isArray(list)) { 
        console.log('array')
         length = list.length;
        if (start >= length){
            console.log('if')
            return 
        }
        console.log(list[start])
        printArrayWithRecursion(start+1,list,length)
     }
   
}

const recursivePrint  = ( list ) => {
    var list = []
    list = list
    var initial = 0;
    if(initial >= list.length){
        return
    }
    console.log(list[initial])
    
    recursivePrint(list.shift())
}

function recursivearray(array) {
    if (array.length > 0) {
      console.log(array.shift());
      recursivearray(array);
    }
  }
var recursive_function = function(array){
    if(array.length > 0){
      console.log(array[0]);
      recursive_function(array.slice(1))
    }
  }

  Array.prototype.myForEach = function (fn, thisArg, i = 0) {
    if (!(i in this)) {
        return;
    }
    fn.bind(thisArg)(this[i], i, this);
    this.myForEach(fn, thisArg, i + 1);
};

function showValues(v, i, a) {
    console.log(v, i, JSON.stringify(a));
}

const createChessMatrix = ( ) => {
    let matrix = [];
    let startSymbol = '';
    for (let i = 0 ; i<8; i++ ){
        let row = [];
        if(i % 2 === 0) {
             startSymbol = 'w'
        }else{
            startSymbol = 'b'
        }
        for (let j = 0 ; j<8; j++){
/* 
            if ( j == 0 && i == 0){
                symbol= 'w'
            } */
             if( j%2 === 0 && startSymbol==='w'){
                row.push( 'w' )
            }
          
            else if( j%2 !== 0 && startSymbol==='b'){
                row.push( 'b' )
            }
            if( i%2 === 0 && startSymbol==='w'){
                row.push( 'w' )
            }
          
            
           
           /*  else{
                row.push('b')
            } */
        }
        matrix.push(row)
    }
    console.log(matrix)
}

let arr = [1,2,3,4,5,6,7,8];
let start = 0;
let end = arr.length - 1;
let target = 10
function bynarySerach(arr, start,end,target){
    if(start > end) return false;
    let midIndex = Math.floor((start+end)/2);
    if(arr[midIndex] === target){
        return true;
    }
   if(arr[midIndex]>target){
        return binarySearch(arr,start,midIndex-1,target)
    }else{
        return bynarySerach(arr,midIndex+1,end,target)
    }
} 
/* useEffect(()=>{ */
/*  console.log('recursive_function')
 recursive_function([1,2,3,4,5])
 console.log('recursivearray')

 recursivePrint([1,2,3,4,5])
 console.log('recursivePrint')
 printArrayWithRecursion(0,[1,2,3,4,5],5) */
/*  console.log(bynarySerach(arr, start,end,target)) */
/*  createChessMatrix()
 console.log('matrixChess function')
 console.log(matrixChess()) */
 /* [99, 100, 101, 102].myForEach(showValues); */
/* },[]) */

 
  return (
      <>
     
      <div style={{fontFamily:'Ubuntu'}}>
         <h1> Welcome to GTB </h1>
        <p>Get a better job as a developer with this system</p>
        <p>80% people double actual salary 20% improve their salary</p>
      </div>
      <h1>Get all the content and private couching with 50% of disccount ( Promotion valid until x time)</h1>
      <p>Get the content that are going to change the process to become a good developer, get pass the interviews.</p>
      <p>Train Recursivity</p>
      <p>Train Real Interview Questions</p>
      <p>Train resolution of problems and algorithmia</p>
      <section>
          <h1>JavaScript Challenges</h1>
          <ul>
              <li>Write a program to read and print elements of array. - using recursion.</li>
              <p></p>
          </ul>
      </section>
    </>
  )
}
