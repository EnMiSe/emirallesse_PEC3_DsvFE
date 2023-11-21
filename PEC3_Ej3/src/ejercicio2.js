var myHangar = {};
myHangar['123Z'] = {
    model: 'airbus',
    npassengers: 200
};
myHangar['H789'] = {
    model: 'boeing',
    npassengers: 151
};
for (var id in myHangar) {
    var plane = myHangar[id];
    console.log("".concat(id, ":").concat(plane.model, "(").concat(plane.npassengers, ")"));
}
