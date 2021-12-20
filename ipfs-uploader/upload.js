const path = require("path")

var getFiles = require('./getFiles');

const run = async (dir, ipfs, pathToReturn) => {
    files = getFiles.getAllFiles(dir)
    rootFolder = "/" + path.relative(path.resolve(dir, ".."), dir)
    toReturn = null
    for await (const file of ipfs.addAll(files, { pin: true })) {
        console.debug(file)
        if (file.path === pathToReturn) {
            toReturn = file
        }
    }
    return toReturn;
}

exports.run = run;

