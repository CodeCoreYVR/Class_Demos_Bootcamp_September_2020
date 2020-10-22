// if this script is the entry point to the project package.json,
// you can pass in the path to the directory of the project
// to node to run the script
// e.g. node path/to/qrCodeGenerator

// To create a new npm project, run:
// npm init 
// or
// npm init -y 
// The above generates a package.json

// to install qrcode, go to the root directory of your Node project (where the 
// package.json) file exists and run:
// npm i qrcode
// to uninstall a package:
// npm uninstall qrcode

const QRCode = require('qrcode')

QRCode.toDataURL('I am a pony!', function (err, url) {
  QRCode.toFile('pony.png', url, err => {
    if (err) throw err
    console.log("QR Code saved to pony.png")
  })
})

