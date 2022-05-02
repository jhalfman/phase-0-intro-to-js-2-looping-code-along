// Code your solutions in this file
function writeCards(names, event){
    const newArray = [];
    for (let i = 0; i<names.length ;i++){
        newArray[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    }
    return newArray;
}

function countDown(integer){
    while(integer >= 0){
        console.log(integer);
        integer--;
    }
}