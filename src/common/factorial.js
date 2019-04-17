const factorial = function(num) {
    if (num === 0) {
        return 1;
    } else {
        console.log("Doing");
        return num * factorial( num - 1 );
    }
}

export default factorial;
