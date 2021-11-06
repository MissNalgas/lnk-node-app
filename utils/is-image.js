function isImg(msg) {
    const imgExtensions = ['apng', 'avif', 'gif', 'jpg', 'jpeg', 'jpe', 'jif', 'jfif', 'png', 'svg', 'webp'];
    let arr = msg.split('.');
    if (arr.length === 0) return false;

    const ext = arr[arr.length - 1];
    
    return (imgExtensions.indexOf(ext) !== -1)
}

module.exports = isImg;