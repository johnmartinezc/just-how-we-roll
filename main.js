/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

/*******************
 * YOUR CODE BELOW *
 *******************/
let resetButton = document.querySelector('#reset-button')

let d6Roll = document.querySelector('#d6-roll')
let doubleD6 = document.querySelector('#double-d6-roll-1')
let doubleD62 = document.querySelector('#double-d6-roll-2')
let d12 = document.querySelector('#d12-roll')
let d20 = document.querySelector('#d20-roll')

// means
let d6Mean = document.querySelector('#d6-rolls-mean')
let doubleD6Mean = document.querySelector('#double-d6-rolls-mean')
let d12Mean = document.querySelector('#d12-rolls-mean')
let d20Mean = document.querySelector('#d20-rolls-mean')

/*******************
 * EVENT LISTENERS *
 *******************/
// resetButton.addEventListener('click', reset())
reset()

 resetButton.addEventListener('click', function(){
    console.log('working')
    reset()
 })

 d6Roll.addEventListener('click', function(){
 console.log('working')
 d6RollFunction()
})

doubleD6.addEventListener('click',function(){
    console.log('d6 working')
    doubleD6Function()
})
doubleD62.addEventListener('click',function(){
    console.log('d62 working')
    doubleD6Function()

})

d12.addEventListener('click',function(){
    console.log('d12 working')
    d12RollFunction()
})

d20.addEventListener('click',function(){
    console.log('d20 working')
    d20RollFunction()
})


/******************
 * RESET FUNCTION *
 ******************/

function reset(){
    sixes = []
    d6Roll.src ='./images/start/d6.png'
    d6Mean.innerText = 'N/A'

    doubleSixes = []
    doubleD6.src ='./images/start/d6.png'
    doubleD62.src ='./images/start/d6.png'
    doubleD6Mean.innerText = 'N/A'

    twelves = []
    d12.src ='./images/start/d12.jpeg'
    d12Mean.innerText = 'N/A'

    twenties = []
    d20.src ='./images/start/d20.jpg'
    d20Mean.innerText = 'N/A'

}



/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/

function d6RollFunction(){
    let result = getRandomNumber(6)
    console.log(result)

    d6Roll.src='./images/d6/'+ result +'.png'

    d6Mean.innerText = result

    sixes.push(result)
    console.log(sixes)

   d6Mean.innerText = mean(sixes)
}

// function doubleD6Function(){
// let result = getRandomNumber(6)
// console.log(result)
// doubleD6.src = './images/d6/'+ result +'.png'
// doubleD62.src = './images/d6/'+ result +'.png'
// doubleD6Mean.innerText = result
// doubleSixes.push(result)
// console.log(doubleSixes)
// doubleD6Mean.innerText = mean(doubleSixes)


// }


// function doubleD6Function(){
//     let doubleD6 = Math.floor(Math.random()* 6)
//     let doubleD62 = Math.floor(Math.random()* 6)
// console.log(doubleD6,doubleD62)
// doubleD6.src = './images/d6/'+ doubleD6 +'.png'
// doubleD62.src = './images/d6/'+ doubleD62 +'.png'
// doubleD6Mean.innerText = doubleD6 += doubleD62
// doubleSixes.push(doubleD6 , doubleD62)
// console.log(doubleSixes)
// doubleD6Mean.innerText = mean(doubleSixes)
// }


function doubleD6Function(){
    let doubleD6v = getRandomNumber(6)
    let doubleD62v = getRandomNumber(6)
console.log(doubleD6,doubleD62)
doubleD6.src = './images/d6/'+ doubleD6v +'.png'
doubleD62.src = './images/d6/'+ doubleD62v +'.png'
doubleD6Mean.innerText = doubleD6v += doubleD62v
doubleSixes.push(doubleD6v , doubleD62v)
console.log(doubleSixes)
doubleD6Mean.innerText = mean(doubleSixes)
}





function d12RollFunction(){
    let result = getRandomNumber(12)
console.log(result)

d12.src ='./images/numbers/'+ result +'.png'
d12Mean.innerText= result
twelves.push(result)
console.log(twelves)
d12Mean.innerText = mean(twelves)
}

function d20RollFunction(){
    let result = getRandomNumber(20)
    console.log(result)

    d20.src ='./images/numbers/'+ result +'.png'
    d20Mean.innerText = result
    twenties.push(result)
    console.log(twenties)
    d20Mean.innerText = mean(twenties)

}


/****************
 * MATH SECTION *
 ****************/

function mean(array){

    let total = 0

    for(let i =0; i < array.length; i++){
        total = total + array[i]
    }
return total/array.length
}






