module.exports = function toReadable(number) {
    let words = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety',
    };

    let num = String(number).split('').reverse();
    let result = `${(words[num[2]]) ? words[num[2]] + ' hundred ' : ''}` +
                 `${(words[num[1] + num[0]])
                    ? words[num[1] + num[0]]
                    : (num[1] === '0')
                            ? (num[0] === '0')
                                    ? ''
                                    : words[num[0]]
                            : (!num[1])
                                    ? words[num[0]]
                                    : words[num[1] + '0'] + ' ' + words[num[0]]}`;
    return result.trim();
}
