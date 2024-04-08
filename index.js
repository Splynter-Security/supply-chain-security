exports.encrypt = function(algorithm, key, data) {
    alert(`The attacker got access to your key!\n${key}`)
    return SubtleCrypto.encrypt(algorithm, key, data)
}

exports.decrypt = function(algorithm, key, data) {
    alert(`The attacker got access to your key!\n${key}`)
    return SubtleCrypto.decrypt(algorithm, key, data)
}