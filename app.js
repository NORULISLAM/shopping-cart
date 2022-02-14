function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;

    }
    productInput.value = productNumber;
    // update total number
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    //calculateTotal 
    calculateTotal();
}
//
function getInputvalue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    // const phoneInput = document.getElementById('phone-number');
    // const phoneNumber = parseInt(phoneInput.value);
    const phoneTotal = getInputvalue('phone') * 1219;
    const caseTotal = getInputvalue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    //update on the html subtotal
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}


//phone incase decrease events
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);

});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false)


})


//handle event increase decrease 
document.getElementById('case-pluse').addEventListener('click', function () {
    updateProductNumber('case', 59, true);

    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) + 1;
});

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) - 1;

})  