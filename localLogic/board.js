const whitePosition = [[]]

var Peon = {
    initialPosition : [],
    actualPosition : [],
    historyPosition : []
}

const moveUp = (matriz, arreglo) => {

}
const matrixChess = () =>{
    let matrixChess = []
    
    for(let i=0; i<8;i++){
        console.log('matrixchess')
        let row = []
        for(let j=0; j<8; j++){
            if(i%2 === j%2){
                row.push({
                    symbol:'w',
                    pos:[i,j],
                    isEmpty:true
                })
            }else{
                row.push({
                    symbol:'b',
                    pos:[i,j],
                    isEmpty:true
                })
            }
        }
       
        matrixChess.push(row)
    }
    return matrixChess;
}

  
  export default matrixChess;