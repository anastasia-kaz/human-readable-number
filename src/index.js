module.exports= function toReadable (number) {
    let upToTwelve = [
        '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
        'eight', 'nine', 'ten', 'eleven', 'twelve'
    ];

    let dozens = [
        'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy',
        'eighty', 'ninety'
    ];

    let teens = [
        'thir', 'four', 'fif', 'six', 'seven', 'eigh', 'nine'
    ]

    let fourDigit = [
        '', ' thousand ', ' million ', ' billion ', ' trillion '
    ]

    function getNameOfDozens(number) {
        let result = '';
        switch (true) {
            case (number < 13):
                result = upToTwelve[number];
                break;
            case (number < 20):
                result = (teens[number % 10 - 3] + 'teen');
                break;
            case (number < 100):
                result = (dozens[(number / 10 | 0) - 2] + ' ' + upToTwelve[number % 10]);
                break;
            default:
                alert("wrong value");
                break;
        }
        return result.toString().trim();
    }

    function getNameOfHundreds(number) {
        if (number < 100) {
            return getNameOfDozens(number).toString().trim();
        }
        return (upToTwelve[number / 100 | 0] + ' hundred ' + getNameOfDozens(number % 100)).toString().trim();
    }

    function getName(number) {
        let result = '';
        let fourIndex = 0;
        let hundreds;
        while (number > 0) {
            hundreds = number % 1000;
            number = number / 1000 | 0;
            result = getNameOfHundreds(hundreds) + fourDigit[fourIndex] + result;
            fourIndex++;
        }
        return result;
    }

    let result = '';
    if (number < 0) {
        result = 'minus ';
        number = -number;
    }
    if (number === 0) {return 'zero'}
    return result + getName(number);
}
