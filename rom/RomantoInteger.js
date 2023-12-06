/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    
    for (let i = s.length - 1; i >= 0; i--) {
        const currentSymbol = s[i];
        const currentValue = romanNumerals[currentSymbol];

       
        if (i < s.length - 1) {
            const nextValue = romanNumerals[s[i + 1]];
            if (currentValue < nextValue) {
                result -= currentValue;
                continue;
            }
        }

      
        result += currentValue;
    }

    return result;
};


console.log(romanToInt("III"));       
console.log(romanToInt("LVIII"));     
console.log(romanToInt("MCMXCIV"));   
