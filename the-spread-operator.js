//the spread operator takes every single item from enumerable\
//enumerable is anythimg u can loop over

const featured=['deep fish','peperoni','hawaiian'];
const specialty=['maetzza','spicy mama','margerita'];

let pizzas=[...featured,...specialty];
//const pizzas= featured.concat(specialty);
console.log(pizzas);


const deepdish={
    pizzaname:'deep dish',
    size:'medium',
    ingredient:['marinara','italian sausage','dough','cheese']
    
};