function extractValue(arr, key) {
    return arr.reduce(function (accu, nextEl){
        accu.push(nextEl[key]);
        return accu;
    }, []) //the [] how to initialize the accumulator
}

function vowelCount(str){
    str.toLowerCase();
    arr = str.split("");
    return arr.reduce(function(accum, nextEl){
        if ("aeiou".indexOf(nextEl) !== -1){
            if (accum[nextEl] === undefined){
                accum[nextEl] = 1;
            }
            else if (accum[nextEl] !== undefined){
                accum[nextEl] += 1;
            }
        }
        return accum;
    },{})
}

function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(accum, nextEl){
        nextEl[key] = value;
        accum.push(nextEl)
        return accum;
    }, [])
}

function isEven(val){
    return val % 2 === 0;
}

function isLongerThanThreeCharacters(val){
    return val.length > 3;
}

function partition(arr, callback) {
    return arr.reduce(function(accum, nextEl){
        if (callback(nextEl)){
            accum[0].push(nextEl);
        }
        else {
            accum[1].push(nextEl);
        }
        console.log(nextEl);
        return accum;
    },[[],[]])
}