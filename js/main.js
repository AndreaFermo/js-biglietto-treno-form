const kmPrice = 0.21;

const underageDiscont = 0.8;

const retiredDiscont =0.6;

let importButton = document.querySelector('#import');


importButton.addEventListener('click', function () {

   

    let distanceDom = document.getElementById('distance');
    let distance = distanceDom.value;
    console.log(distance)

    let ageDom = document.getElementById('selection');
    let age = ageDom.value;
    console.log(age)

    if (age == 'underage') {
        const underagePrice = kmPrice * distance * underageDiscont;
        console.log(underagePrice)

    } else if (age == 'retired') {
        const retiredPrice = kmPrice * distance * retiredDiscont;
        console.log(retiredPrice)

    } else {
        const standardPrice = kmPrice * distance;
        console.log(standardPrice)
    }

}

)
 

