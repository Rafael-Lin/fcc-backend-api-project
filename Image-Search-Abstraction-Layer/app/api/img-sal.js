'use strict';
var Search = require('bing.search');
module.exports = function(app) {

    app.get('/:query', handlePost);

    function handlePost(req, res) {
        var query      = req.params.query;
        var size       = req.query.offset || 10;
        var accountKey = "NmcclrhY1Eqcz818+upjJRdwZo/9fZjhoaPurk57vN8";
        var search     = new Search( accountKey );
        // Save query and time to the database
        // Query the image and populate results
        search.images(query, {
            top: size
        },
        function(err, results) {
            if (err) throw err;
            res.send(results.map(makeList));
        });
    }

    function makeList(img) {
        // Construct object from the json result
        return {
            "url"       : img.url,
            "snippet"   : img.title,
            "thumbnail" : img.thumbnail.url,
            "context"   : img.sourceUrl
        };
    }
};
