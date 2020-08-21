/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let defanged = '';

    for (let i = 0; i < address.length; i++) {
        if (address[i] == '.') {
            defanged += '[.]';
        } else {
            defanged += address[i];
        }
    }

    return defanged;
};

console.log(defangIPaddr("1.1.1.1"));
console.log(defangIPaddr("255.100.50.0"));