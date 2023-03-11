function generateId(size = 16) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    return [...Array(size)].map(() => Math.floor(Math.random() * chars.length)).map(i => chars.charAt(i)).join('');
}

module.exports = {
    generateId
};