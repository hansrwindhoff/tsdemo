var numorstrg = function (parameter) {
    if (typeof parameter === 'string') {
        return parameter.slice(0, 1);
    }
    else {
        return parameter;
    }
};
console.log(numorstrg(42));
console.log(numorstrg('43'));
