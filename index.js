const Ceasar = (function () {

    const chars = [
        'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
    ];

    let getCharIndex = (char) => {
        for( let i = 0; i < chars.length; i++ ){
            if( char.toLowerCase() == chars[i].toLowerCase()) return i;
        }
        return null
    };

    let shiftChar = (n) => {
        if( n < 0 ) {
            return shiftChar( chars.length - Math.abs(n) % chars.length)
        }
        if( n >= chars.length ){
            return shiftChar( n % chars.length)
        }

        return chars[n] || null;
    };

    let encrypt = (str, shift) => {
        return str.split('').map( char => {
            let indexChar = getCharIndex(char);
            return shiftChar(indexChar + shift) || char;
        }).join('');
    };

    let decrypt = (str, shift) => {
        return str.split('').map( char => {
            let indexChar = getCharIndex(char);
            return shiftChar(indexChar - shift) || char;
        }).join('');
    };

    return {
        encrypt: encrypt,
        decrypt: decrypt
    }
}());
let test1 = Ceasar.encrypt('ABC', 100); //WXY
let test2 = Ceasar.decrypt('WXY', 100); //ABC
console.log(test1, test2);
