var fn2 = function (parameter) {
    if (parameter) {
        console.log(parameter);
    }
    else {
        console.log('no parameter');
    }
    return true;
};
var fn3 = function (parameter) {
    if (parameter === void 0) { parameter = 42; }
    console.log(parameter);
    return true;
};
fn2();
fn2(123);
fn3();
fn3(234);
