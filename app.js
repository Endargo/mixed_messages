const Data = require('./data.js');


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


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
            let word = words[Math.floor(Math.random() * words.length)];
            this._paragraph += word;
            Math.random() < 0.15 && i !== size - 1 ? this._paragraph += ', ': this._paragraph += ' ';
        }

        this._paragraph = capitalizeFirstLetter(this._paragraph).trim() + '.';
    },

    generateASCIIImage(words, width = 10, heigth = 10) {
        this._asciiImage = '';
    },

    generateSignature(words) {
        this._signature = '';
    }
}


paragraphWords = Data.getParagraphWords()
//console.log(paragraphWords);
Message.generateParagraph(paragraphWords);
console.log(Message._paragraph);
