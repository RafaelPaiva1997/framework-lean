var fs = require('fs');
var pathToControllers = "C:/Users/Rafael/work/framework-lean/controllers/"

exports.files = () => {
    return fs.readdirSync(pathToControllers).map(f => f.replace('.js', ''));
}

exports.handlers = (files) => {
    return files.reduce((acc, curr) => { acc[curr] = require(pathToControllers + curr); return acc; }, {})
}