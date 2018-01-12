require.ensure(['./a', './b'], function(require) {
    let content = require('./a');
    let bContent = require('./b');
    document.open();
    document.write('<h1>' + content + '</h1>');
    document.write('<h1>' + bContent + '</h1>');
    document.close();
})