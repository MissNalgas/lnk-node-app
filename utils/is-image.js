function isImg(msg) {

    // Checks if the hostname is ik.imagekit.io
    const parsedUrl = msg.split('/');
    if (parsedUrl[2] && parsedUrl[2] === 'ik.imagekit.io') return true;
    // ***

    const imgExtensions = ['apng', 'avif', 'gif', 'jpg', 'jpeg', 'jpe', 'jif', 'jfif', 'png', 'svg', 'webp'];
    let arr = msg.split('.');
    if (arr.length === 0) return false;

    const ext = arr[arr.length - 1];
    
    return (imgExtensions.indexOf(ext) !== -1)
}

module.exports = isImg;