const sourceData = require('./data.js');
const fs = require('fs');

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
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
        while(words.length > 0) {
            let i = Math.floor(Math.random() * words.length);
            this._header += words.splice(i, 1) + ' ';
        }
        this._header = this._header = capitalizeFirstLetter(this._header).trim();
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


    generateASCIIImage(chars, width = 20, heigth = 10) {
        this._asciiImage = '';
        for(let i = 0; i < heigth; i++) {
            for(let j = 0; j < width; j ++) {
                let char = ' ';
                if(Math.random() > 0.6) {
                    char = chars[Math.floor(Math.random() * chars.length)];
                }
                this._asciiImage += char;
            }
            i !== heigth - 1? this._asciiImage += '\n': undefined;
        }
    },


    generateSignature(names) {
        this._signature = '';
        this._signature += Math.random().toString(36).replace(/[^a-z]+/g, '').toUpperCase().substring(0, 1) + '. ';
        this._signature += Math.random().toString(36).replace(/[^a-z]+/g, '').toUpperCase().substring(0, 1) + '. ';
        this._signature += names[Math.floor(Math.random() * names.length)] + ', ' + Math.floor(1000 + Math.random() * 1000);
    }
}


message.generateHeader(sourceData.getHeaderWords());
message.generateParagraph(sourceData.getParagraphWords());
message.generateASCIIImage(sourceData.getImageSymbols(), 20, 10);
message.generateSignature(sourceData.getSignatureNames());


fs.writeFile('message.md', '# ' + message.header + '\n\n' + message.paragraph + '\n\n```\n' + message.asciiImage + 
    '\n```\n\n***' + message.signature + '***\n', (error) => undefined)
