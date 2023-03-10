const express = require('express');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// const connect= require('./config/db');
// const bodyParser = require('body-parser');
// const router = require('./api/auth');
// var path = require('path')

const app = express();

connectDB();



// app.use(express.static(__dirname));
// // app.use( bodyParser.json() );  // to support JSON-encoded bodies
// // app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
// //   extended: true
// // }));

// //init middleware
// app.use(express.urlencoded({ extended :false }));
// app.use(express.json());

// app.get('/', (req, res) => {
//     let indexPath = path.join(__dirname, "../sdp/src/App.js");
//     res.sendFile('indexPath');
// })

// app.get('/signup', (req, res)=>{
//     // res.sendFile(path.resolve('../sdp/src/SignUpPage/SignUp.js', {root: __dirname}));
//     let indexPath = path.join(__dirname, "../sdp/src/SignUpPage/SignUp.js");
//     res.sendFile('indexPath');
// })
// app.get('/Login', (req, res)=>{
//     // res.sendFile(path.resolve('../sdp/src/LoginPage/Login.js', {root: __dirname}));
//     let indexPath = path.join(__dirname, "../sdp/src/LoginPage/Login.js");
//     res.sendFile('indexPath');
// })

// app.use(router);

// // let indexPath = path.join(__dirname, "../public/index.html");
// // res.sendFile(indexPath);
// //Define routes 

// // app.use('/api/users',require('./routes/api/users'));
// // app.use('/api/profile',require('./routes/api/profile'));
// // app.use('/api/post',require('./routes/api/post'));
// app.use('/api/auth',require('./api/auth.js'));


app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use(require('./router/auth'))


const PORT = process.env.port || 5000;
app.listen(PORT,()=>console.log('server started on port 3000'));