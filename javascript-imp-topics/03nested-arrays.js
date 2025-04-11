// Q1. Given a nested object, write a function to access a value at a specific path (e.g., "a.b.c").
const myObj = {
    a: {
        b: {
            c: 10
        }
    }
};

function getValueByPath(obj, path) {
    const keys = path.split('.');
    let current = obj;

    for (const key of keys) {
        if (current && current.hasOwnProperty(key)) {
            current = current[key];
        } else {
            return undefined;
        }
    }

    return current;
}

console.log(getValueByPath(myObj, "a.b.c"));


// Q2. Given a nested array of objects, filter the objects based on a property within a nested object.
const data = [
    {
        id: 1,
        details: {
            status: "active",
            value: 100
        }
    },
    {
        id: 2,
        details: {
            status: "inactive",
            value: 200
        }
    },
    {
        id: 3,
        details: {
            status: "active",
            value: 150
        }
    },
];

const filtedValue = data.filter((item) => item.details.status === 'active');
console.log(filtedValue);


// Q3. Given a nested array, flatten it recursively.
const nestedArr = [1, [2, [3, 4], 5], 6];

function flattenArr(arr) {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArr(val)) : acc.concat(val), []);
}

console.log(flattenArr(nestedArr));


// Q4. Given a nested object, transform it into a flat object with keys representing the paths.
const nestedObj = {
    a: {
        b: {
            c: 10,
            d: 20
        },
        e: 30
    }
};

function flattenObject(obj, prefix = '') {
    return Object.keys(obj).reduce((acc, k) => {
        const pre = prefix.length ? prefix + '.' : '';

        if (typeof obj[k] === 'object' && obj[k] !== null) {
            Object.assign(acc, flattenObject(obj[k], pre + k));
        } else {
            acc[pre + k] = obj[k];
        }

        return acc;
    }, {})
}

console.log(flattenObject(nestedObj));