function encrypt(key, data) {
    str = ""

    for (const c of data) {
        str += nextChar(c)
    }
    return str
}

function decrypt(key, data) {

    str = ""
    
    for (const c of data) {
        str += prevChar(c)
    }
    return str
}

function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}

function prevChar(c) {
    return String.fromCharCode(c.charCodeAt(0) - 1);
}