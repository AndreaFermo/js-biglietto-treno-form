const kmPrice = 0.21;

const underageDiscont = 0.8;

const retiredDiscont =0.6;

let importButton = document.querySelector('#import');


importButton.addEventListener('click', function () {

    let customerDom = document.getElementById('customer');
    let customer = customerDom.value;
    console.log(customer)

    document.getElementById('customerName').innerHTML = customer;

    let distanceDom = document.getElementById('distance');
    let distance = distanceDom.value;
    console.log(distance)

    let ageDom = document.getElementById('selection');
    let age = ageDom.value;
    console.log(age)

    const randomCarriage = Math.floor((Math.random() * 10) + 1);
    document.getElementById('carriage').innerHTML = `${randomCarriage}`;

    const randomCp = Math.floor((Math.random() * 10000) + 90000);
    document.getElementById('cpCode').innerHTML = `${randomCp}`;


    if (age == 'underage') {
        const underagePrice = kmPrice * distance * underageDiscont;
        console.log(underagePrice)
        document.getElementById('offer').innerHTML = `Biglietto under 18`;
        document.getElementById('finalPrice').innerHTML = `${underagePrice.toFixed(2)} &#8364`;

    } else if (age == 'retired') {
        const retiredPrice = kmPrice * distance * retiredDiscont;
        console.log(retiredPrice)
        document.getElementById('offer').innerHTML = `Biglietto over 65`;
        document.getElementById('finalPrice').innerHTML = `${retiredPrice.toFixed(2)} &#8364`;

    } else {
        const standardPrice = kmPrice * distance;
        console.log(standardPrice)
        document.getElementById('offer').innerHTML = `Biglietto standard`;
        document.getElementById('finalPrice').innerHTML = `${standardPrice.toFixed(2)} &#8364`;
    }

}

);
 
const domReset = document.querySelector('#reset');

domReset.addEventListener('click', function() {

        let customerDom = document.getElementById('customer');
        customerDom.value = '';

        let distanceDom = document.getElementById('distance');
        distanceDom.value = '';

        let ageDom = document.getElementById('selection');
        ageDom.value = 'adult'
        


    }
);
