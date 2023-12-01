const food = require("./food.json")

function foodItems(arg) {
    return console.log(arg); 
}
foodItems(food)

function vegetables(arg) {
    for(let item of arg){
        if(item.category === "Vegetable"){
            console.log(item);
        }
    }
}
vegetables(food);

function fruit(arg) {
    for(let item of arg){
        if(item.category === "Fruit"){
            console.log(item);
        }
    }
}
fruit(food)

function protein(arg) {
    for(let item of arg){
        if(item.category === "Protein"){
            console.log(item);
        }
    }
}
protein(food)

function nuts(arg) {
    for(let item of arg){
        if(item.category === "Nuts"){
            console.log(item);
        }
    }
}
nuts(food)

function grains(arg) {
    for(let item of arg){
        if(item.category === "Grain"){
            console.log(item);
        }
    }
}
grains(food)

function dairy(arg) {
    for(let item of arg){
        if(item.category === "Dairy"){
            console.log(item);
        }
    }
}
dairy(food)

const calorieAbove100 = (arg) => {
    for (let item of arg) {
        if (item.calorie > 100) {
            console.log(item);
        }
    }
}
calorieAbove100(food)

const calorieBelow100 = (arg) => {
    for (let item of arg) {
        if (item.calorie < 100) {
            console.log(item);
        }
    }
}
calorieBelow100(food)

function  highestProtein(arg){
   arg.sort(function(a , b){
    return (b.protiens - a.protiens)
   })
 console.log(arg);
}
highestProtein(food)

function  lowestProtein(arg){
   arg.sort(function(a , b){
    return (a.cab - b.cab)
   })
 console.log(arg);
}
lowestProtein(food)