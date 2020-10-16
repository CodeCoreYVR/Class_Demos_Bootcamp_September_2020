const Jimp = require('jimp')

Jimp.read('pony.png', (err, image) => {
  if (err) throw err
  
  const blurredImage = image.blur(5)
  
  blurredImage.write("blurred-pony.png", err => {
    if (err) throw err
    console.log("Successfully blurred the image")
  })
})

