const Data = require('./data.js');

const Message = {
    _header: '',
    _paragraph: '',
    _asciiImage: '',
    _signature: '',

    generateHeader(words, size = 10) {
        this._header = '';
    },

    generateParagraph(words, size = 100) {
        this._paragraph = '';
        
        for(let i = 0; i < size; i++) {
            this._paragraph += words[Math.floor(Math.random * words.length)] + ' ';
            Math.random > 0.1 ? this._paragraph += ',': undefined;
        }
        this._paragraph[0].toUpperCase();
        this._paragraph += '.'
    },

    generateASCIIImage(words, width = 10, heigth = 10) {
        this._asciiImage = '';
    },

    generateSignature(words) {
        this._signature = '';
    }
}

console.log(Data);
Message.generateParagraph(Data.getParagraphWords());
console.log(Message._paragraph);