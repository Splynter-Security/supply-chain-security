exports.encrypt = function(algorithm, key, data) {
    return SubtleCrypto.encrypt(algorithm, key, data)
}

exports.decrypt = function(algorithm, key, data) {
    return SubtleCrypto.decrypt(algorithm, key, data)
}