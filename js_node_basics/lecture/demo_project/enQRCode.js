const QRCode=require("qrcode");

const filename=process.argv[2];
const text=process.argv[3];

QRCode.toFile(`${filename}.png`,text, error=>{
    console.log(`QRcode saved to ${filename}`);
})