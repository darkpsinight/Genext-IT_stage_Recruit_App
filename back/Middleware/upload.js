const path = require('path')
const multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})

var upload = multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
        if (
            file.mimetype == "application/pdf" ||
            file.mimetype == "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
            file.mimetype == "application/rtf"
        ) {
            callback(null, true)
        } else {
            console.log("Only Ms word or PDF files supported !");
            callback(null, false)
        }
    }
})

module.exports = upload