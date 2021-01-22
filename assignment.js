// this is the first problem
//kilometerToMeter
function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return "\n invalid number please enter the valid number."
    } else {
        return kilometer * 1000;
    }
}

// this is the second problem
//budgetCalculator

function budgetCalculator(priceWatch, pricePhone, priceLaptop) {
    var watch = priceWatch * 50;
    var phone = pricePhone * 100;
    var laptop = priceLaptop * 500;
    var total = watch + phone + laptop;

    return total;

}

// this is the third problem
//hotelCost
function hotelCost(day) {
    cost = 0;
    if (day <= 10) {
        cost = day * 100;
    } else if (day <= 20) {
        var firstTenDay = 10 * 100;
        var remaining = day - 10;
        var secondTenDay = remaining * 80;
        cost = firstTenDay + secondTenDay;
    } else {
        var firstTenDay = 10 * 100;
        var secondTenDay = 10 * 80;
        var remaining = day - 20;
        var thirdTenDay = remaining * 50;
        cost = firstTenDay + secondTenDay + thirdTenDay;
    }
    return cost;
}

// this is four problem
//megaFriend

function megaFriend(friend) {
    var c = 0,
        d = 0,
        l = 0,
        i = friend.length;
    if (i)
        while (i--) {
            d = friend[i].length;
            if (d > c) {
                l = i;
                c = d;
            }
        }
    return friend[l];
}


// this is the first program output
// var meter = kilometerToMeter(-3); //negative number is not valid number.; 
var meter = kilometerToMeter(2);
console.log(meter);

// this is the second program output
var totalCost = budgetCalculator(1, 1, 1);
console.log(totalCost);

// this is the third program output
var din = hotelCost(22);
console.log(din);

// this is the fourth problem output
arr = ["First", "Second", "Third"];
var longest = megaFriend(arr);
console.log(longest); //largest name is second