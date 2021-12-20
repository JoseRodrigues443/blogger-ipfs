const { program } = require('commander');
program.version('0.0.1');

const { create } =  require('ipfs-http-client');

var upload = require('./upload');

program
    .option('-d, --dir <string>', 'Dist files to upload directory (with a index.html at least)');

    program.addHelpText('after', `

Example call:
 $ node ipfs-uploader/index.js -d ../../DIR -c http...`);

program.parse(process.argv);

const options = program.opts();

const client =  create('https://ipfs.infura.io:5001/api/v0') //ipfsClient('https://api.pinata.cloud/psa')

upload.run(options.dir, client, 'dist/index.html').then(x => {
    console.log("WebSite upload was a success!!!")

    console.log("The index.html CID is:", x.cid)
    console.log("To use add the address https://ipfs.io/ipfs to it:")

    console.log("Like this:", 'https://ipfs.io/ipfs' + x.cid)

})