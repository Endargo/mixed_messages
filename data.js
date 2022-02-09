const _headerWords = ['this', 'message', 'doesn\'t', 'make', 'any', 'sense', 'at', 'all', 'LMAO'];

const _paragraphWords = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 
    'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 
    'et', 'dolore', 'magna', 'aliqua'];

const _imageSymbols = ['|', '/', '\\', '@', '#', '$', '%', '@', '_', '-', '+', '='];

const _signatureNames = ['Arno', 'Bernie', 'Chandler', 'Dorothee', 'Erich', 'Fisher', 'Garter', 
    'Harryson', 'Ivory', 'Jenkins', 'Keathon', 'Lenny', 'Marco', 'Negreanu', 'Ottre', 'Persy', 'Quinn', 
    'Rachel', 'Sutton', 'Torres', 'Utton', 'Villy', 'Wellington'];

function getHeaderWords() { 
    return _headerWords; 
}

function getParagraphWords() { 
    return _paragraphWords; 
}

function getImageSymbols() {
    return _imageSymbols;
}

function getSignatureNames() {
    return _signatureNames;
}

module.exports = {getHeaderWords, getParagraphWords, getImageSymbols, getSignatureNames};
