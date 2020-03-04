/*Javascript Exercise
Arrays*/ 

let cars = ["Wrangler", "Forester", "Defender", "Land Cruiser"];

/*anothertway to declate*/
let makes = new Array("Jeep", "Subaru", "Land Rover", "Toyota");


/**/

let add = 'y';

let myNumbers = [];

while (add == 'y') {
    let number = prompt('Add a number to the array');

    if(number != '' && !isNaN(number)){
        myNumbers.push(number);
    }

    add = prompt('Continue to add numbers to my array?', 'y');
}

