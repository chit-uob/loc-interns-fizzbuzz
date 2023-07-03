// This is our main function
function fizzbuzz() {

    for (let i = 1; i <= 1000; i++) {
        let finalString = '';
        if (i % 3 === 0) {
            finalString += 'Fizz';
        }
        if (i % 5 === 0) {
            finalString += 'Buzz';
        }
        if (i % 7 === 0) {
            finalString += 'Bang';
        }
        if (i % 11 === 0) {
            finalString = 'Bong';
        }
        if (i % 13 === 0) {
            let bIndex = finalString.indexOf('B');
            if (bIndex > -1) {
                finalString = finalString.substring(0, bIndex) + 'Fezz' + finalString.substring(bIndex)
            } else {
                finalString += 'Fezz';
            }
        }
        if (finalString === '') {
            console.log(i)
        } else {
            if (i % 17 === 0) {
                let split4 = finalString.match( /.{1,4}/g );
                split4.reverse();
                finalString = split4.join('')
            }
            console.log(finalString)
        }

    }

}

// Now, we run the main function:
fizzbuzz();

