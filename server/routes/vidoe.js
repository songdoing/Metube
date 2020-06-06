const express = require('express');
const router = express.Router();
const { Video } = require("../models/Video");

const { auth } = require("../middleware/auth");
const multer = require("multer");

//multer config(client에서 보내온 video를..)
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.mp4') {
            return cb(res.status(400).end('only jpg, png, mp4 is allowed'), false);
        }
        cb(null, true)
    }
})

var upload = multer({ storage: storage }).single("file")


//=================================
//             Video
//=================================

router.post('/uploadfiles', (req,res) => {
    //비디오를 서버에 저장
    upload(req, res, err => {
        if(err) {
            return res.json({success : false, err});
        }
        return res.json({success : true, url: res.req.file.path, fileName : res.req.file.filename})
    })
});

//비디오 정보를 저장
router.post("/uploadVideo", (req, res) => {
    //client에서 보내준 모든  variable(video.js) 다 가져온다.
    const video = new Video(req.body)

    video.save((err, video) => {
        if(err) return res.status(400).json({ success: false, err })
        return res.status(200).json({
            success: true 
        })
    })

});