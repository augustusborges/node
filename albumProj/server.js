const http = require("http");
const fs = require("fs");
const server = http.createServer(ManipulaChamados);

server.listen(8080);

function load_album_list(callback) {
    fs.readdir("albums/", function(err, files) {
        if (err) {
            callback(err);
            return;
        }

        let only_dirs = [];
        (function iterator(index) {
            if (index == files.length) {
                callback(null, only_dirs);
                return;
            }
            fs.stat("albums/" + files[index], function(err, stats) {
                if (err) {
                    callback(err);
                    return;
                }
                if (stats.isDirectory()) {
                    only_dirs.push(files[index]);
                }
                iterator(index + 1);
            });
        })(0);
    });
}

function ManipulaChamados(req, res, next) {
    console.log("INCOMING REQUEST: " + req.method + " " + req.url);
    load_album_list(function(err, albums) {
        if (err) {
            res.writeHead(503, { "Content-Type": "application/json" });
            res.end(JSON.stringify(err) + "\n");
            return;
        }
        var out = { error: null, data: { albums: albums } };
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(out) + "\n");
    });
}
