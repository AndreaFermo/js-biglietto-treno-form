const kmPrice = 0.21;

const underageDiscont = 0.8;

const retiredDiscont =0.6;

let importButton = document.querySelector('#import');


importButton.addEventListener('click', function () {

    let ageDom = document.getElementById('age');
    let age = ageDom.value;
    console.log(age)

    let distanceDom = document.getElementById('distance');
    let distance = distanceDom.value;
    console.log(distance)

    if (age < 18) {
        const underagePrice = kmPrice * distance * underageDiscont;
        console.log(underagePrice)

    } else if (age > 65) {
        const retiredPrice = kmPrice * distance * retiredDiscont;
        console.log(retiredPrice)

    } else {
        const standardPrice = kmPrice * distance;
        console.log(standardPrice)
    }

}

)
 

