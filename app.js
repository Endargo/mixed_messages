const Data = require('./data.js');


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


const message = {
    _header: '',
    _paragraph: '',
    _asciiImage: '',
    _signature: '',

    get header() {
        return this._header;
    },

    get paragraph() {
        return this._paragraph;
    },

    get asciiImage() {
        return this._asciiImage;
    },

    get signature() {
        return this._signature;
    },

    generateHeader(words) {
        this._header = '';
        let temp = words;

        while(temp.length > 0) {
            let i = Math.floor(Math.random() * temp.length);
            this._header += temp.splice(i, 1) + ' ';
        }

        this._header = this._header = capitalizeFirstLetter(this._header).trim() + '.';
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

    generateASCIIImage(chars, width = 10, heigth = 10) {
        this._asciiImage = '';
    },

    generateSignature(words) {
        this._signature = '';
    }
}

message.generateHeader(Data.getHeaderWords(), 15);
message.generateParagraph(Data.getParagraphWords());
message.generateASCIIImage(Data.getImageSymbols(), 20, 20);
message.generateSignature(Data.getSignatureInitials());

console.log(message.header);
console.log(message.paragraph);
console.log(message.asciiImage);
console.log(message.signature);
