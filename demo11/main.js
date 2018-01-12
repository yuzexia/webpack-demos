let load = require('bundle-loader!./a.js');

load(function(txt) {
    document.open();
    document.write('<h1>' + txt + '</h1>');
    document.close();
})