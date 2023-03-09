const multer = require("multer")
const path = require('path')


const storage = multer.diskStorage({
    destination: "images/",
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + "-" + file.originalname)
    }
})

const uploader = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const supportedImage = /png|jpg/
        const extension = path.extname(file.originalname)

        if (supportedImage.test(extension)) {
            cb(null, true)
        } else {
            cb(new Error("Must be png or jpg image"))
        }
    },
    limits: {
        fieldSize: 100000
    }
})

module.exports = uploader