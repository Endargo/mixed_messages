const _headerWords = [];

const _paragraphWords = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 
'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 
'et', 'dolore', 'magna', 'aliqua'];

const _imageSymbols = ['|', '/', '\\', '@', '#', '$', '%', '@', '_', '-', '+', '=', ' '];

const _signatureInitials = ['A.'];

export function getHeaderWords() { 
    return _headerWords; 
}

export function getParagraphWords() { 
    return _paragraphWords; 
}

export function getImageSymbols() {
    return _imageSymbols;
}

export function getSignatureInitials() {
    return _signatureInitials;
}
