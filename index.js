const equalizeInput = collection => {
    return Array.isArray(collection) ? [...collection] : Object.values(collection);
};

function myEach(collection, callback) {
   const equalizedCollection = equalizeInput(collection);

   for(let i=0; i < equalizedCollection.length; i++) {
    callback(equalizedCollection[i]);
   }

   return collection;
}

function myMap(collection, callback) {
    const equalizedCollection = equalizeInput(collection);

    const newArr = [];

    for(let i = 0; i < equalizedCollection.length; i++) {
        newArr.push(callback(equalizedCollection[i]));
    }

    return newArr;
}

function myReduce(collection, callback, acc) {
    let equalizedCollection = equalizeInput(collection);

    if(!acc) {
        acc = equalizedCollection[0];
        equalizedCollection = equalizedCollection.slice(1);
    }

    const length = equalizedCollection.length;

    for(let i = 0; i < length; i++) {
        acc = callback(acc, equalizedCollection[i], equalizedCollection);
    }

    return acc;
}

function myFind(collection, predicate) {
    const equalizedCollection = equalizeInput(collection);

    for(let i = 0; i < equalizedCollection.length; i++) {
        if(predicate(equalizedCollection[i])) {
            return equalizedCollection[i];
        }
    }
    return undefined;
}

function myFilter(collection, predicate) {
    const equalizedCollection = equalizeInput(collection);
    
    let arr = [];

    for(let i = 0; i < equalizedCollection.length; i++) {
        if(predicate(equalizedCollection[i])) {
            arr.push(equalizedCollection[i]);
        } 
    }
    
    return arr;
}

function mySize(collection) {
    const equalizedCollection = equalizeInput(collection);
    return equalizedCollection.length;
}

function myFirst(array, n=1) {
    if(n===1) {
        return array[0];
    } else {
        return array.slice(0,n);
    }    
}

function myLast(array, n=1) {

    const lastIndex = array.length - 1;
    const start = Math.max(0, lastIndex - n + 1);

    if(n===1) {
        return array[lastIndex];
    } else {
        return array.slice(start);
    }    
}

function myKeys(object) {
    const keysArray = [];

    for(let key in object) {
        keysArray.push(key);
    }
    return keysArray;
}

function myValues(object) {
    const valuesArray = [];

    for(let key in object) {
        valuesArray.push(object[key]);
    }
    return valuesArray;
}