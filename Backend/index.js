const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const crypto = require('crypto');
const router = express.Router();
const File = require("./models/fileModel");

const PORT = 5000;
// app.use();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true
}));

mongoose.connect(process.env.MDB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});


const storage = multer.diskStorage({
   destination: "./public/",
   filename: function(req, file, cb){
      cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
   }
});

const upload = multer({
   storage: storage,
   limits:{fileSize: 1000000},
}).single("myfile");

const obj =(req,res) => {
   upload(req, res, () => {
      console.log("Request ---", req.body);
      console.log("Request file ---", req.file);//Here you get file.
      const file = new File();
      file.meta_data = req.file;
      file.save().then(()=>{
          console.log("It did something");
        res.send(file);
      })
      /*Now do where ever you want to do*/
   });
}

router.post("/uploadFile", obj);


app.use("/auth", require("./routers/UserRouter"));
app.use("/course", require("./routers/CourseRouter"));
app.use("/test", require("./routers/TestRouter"));

app.listen(PORT, () => console.log('Server started on port:'+ PORT));
