const filterOutOdds = (...nums) => {
    return nums.filter((num) => num % 2 === 0);
}


function findMin(...nums){
    return Math.min(...nums);
}
const restAnswer2 = findMin(1,4,12,-3)
const restAnswer3 = findMin(1,-1)
const restAnswer4 = findMin(3,1)

const mergeObjects = (a,b) => ({...a,...b });

const restAnswer5 = mergeObjects({a:1, b:2}, {c:3, d:4})

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(val => val * 2)]

const restAnswer6 = doubleAndReturnArgs([1,2,3],4,4);
const restAnswer7 = doubleAndReturnArgs([2],10,4);

const removeRandom = items => {
    let index = Math.floor(Math.random() * items.length);
    return [...items.slice(0, index), ...items.slice(index + 1)];
}

const extend = (arr1, arr2) => {
    return [...arr1,...arr2];
}
const addKeyVal = (obj, key, val) => {
    return {...obj, [key]: val};
}
const removeKey = (obj, key) => {
    return {...obj, [key]: undefined};
}
const combine = (obj1, obj2) => {
    return {...obj1,...obj2};
}
const update = (obj, key, val) => {
    return {...obj, [key]: val};
}