const validatePIN = (pin) => {
    if (/^[0-9]+$/.test(pin)) {
        if (pin.length == 4 || pin.length == 6) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};

console.log("pin enter 1234", validatePIN("1234"));
console.log("pin enter 123456", validatePIN("123456"));
console.log("pin enter 123", validatePIN("123"));
console.log("pin enter 1234567", validatePIN("1234567"));
console.log("pin enter 1234asd", validatePIN("1234"));
