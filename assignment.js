function calculateMoney(ticketSale) {
    const ticketPrice = 120;
    const daroanCharge = 500;
    const daroanNum = 1;
    const lunchPerPerson = 50;
    const staffMember = 8;
    const income = ticketSale * ticketPrice;
    const staffCost = lunchPerPerson * staffMember;
    const daroanCost = daroanCharge * daroanNum;
    const netIncome = income - (staffCost + daroanCost);
    if (ticketSale < 0){
    return "Error: Negative input is not allowed"
    }
    return netIncome;
    }







    function checkName(name) {
    const letters = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
    const lastLetter = name[name.length - 1];
    if (typeof name !== 'string') {
    return "invalid"
    }
    if (lastLetter === 'a' || lastLetter === 'y' || lastLetter === 'i' || lastLetter === 'e' || lastLetter === 'o' || lastLetter === 'u' || lastLetter === 'w') {
    return "Good Name";
    }
    else {
    return "Bad Name"
    }
    }








    function deleteInvalids(array) {
    if (!Array.isArray(array)) {
    return "Error: Input is not an array.";
    }
    const result = [];
    for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number' && !isNaN(array[i])) {
    result.push(array[i]);
    }
    }
    return result;
    }






    function password(obj) {
    const requiredProperties = ['name', 'birthYear', 'siteName'];
    for (let prop of requiredProperties) {
    if (!obj.hasOwnProperty(prop)) {
    return "invalid";
    }
    }
    if (isNaN(obj.birthYear) || obj.birthYear.toString().length !== 4) {
    return "invalid";
    }
    let password = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1) + '#' + obj.name + '@' + obj.birthYear;
    return password;
    }

    




    function monthlySavings(payments, livingCost) {
    if (!Array.isArray(payments)) {
    return "invalid input: payments must be an array";
    }
    if (typeof livingCost !== 'number') {
    return "invalid input: livingCost must be a number";
    }
    let totalPayment = 0;
    for (let i = 0; i < payments.length; i++) {
    totalPayment += payments[i];
    }
    let tax = 0;
    for (let i = 0; i < payments.length; i++) {
    if (payments[i] > 3000) {
    tax += payments[i] * 0.2;
    }
    }
    const getPayment = totalPayment - tax;
    const monthlySavings = getPayment - livingCost;
    if (monthlySavings <= 0) {
    return "earn more";
    }
    else {
    return monthlySavings;
    }
    }