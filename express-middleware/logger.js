module.exports = function(request, response, next) {
    var stream = process.stdout,
        start = +new Date(),
        url = request.url,
        method = request.method;

    response.on('finish', function() {
        var duration = +new Date() - start;
        stream.write('[ '+method+' --> ' + url + ' ] - '+duration+'ms\n');
    });
    next();
}
