const _headerWords = ['this', 'header', 'doesn\'t', 'make', 'any', 'sense', 'at', 'all', 'LMAO'];

const _paragraphWords = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 
'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 
'et', 'dolore', 'magna', 'aliqua'];

const _imageSymbols = ['|', '/', '\\', '@', '#', '$', '%', '@', '_', '-', '+', '=', ' '];

const _signatureInitials = ['A.'];

function getHeaderWords() { 
    return _headerWords; 
}

function getParagraphWords() { 
    return _paragraphWords; 
}

function getImageSymbols() {
    return _imageSymbols;
}

function getSignatureInitials() {
    return _signatureInitials;
}

module.exports = {getHeaderWords, getParagraphWords, getImageSymbols, getSignatureInitials};
