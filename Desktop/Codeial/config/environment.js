// const fs = require('fs');
// const rfs = require('rotating-file-stream');
// const path  = require('path');


// const logDirectory = path.join(__dirname,'../production_logs');
// fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

// const accessLogStream = ('access-log', {
//     interval : 'id', 
//     path : logDirectory
// });


const development ={
    name:'development',
    asset_path:'/assets',
    session_cookie_key: 'blahsomething',
    db:'codeial_development',
    smtp: {
        service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth:  {
        user: 'ravishgupta2004.coder@gmail.com',
        pass: 'zksyugaffpjgvcsn'
       }
    },
    google_client_id: "125318458747-fjommcpksp51ee9979v7sus004g6as1n.apps.googleusercontent.com",
    goodle_client_secret:"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",
    google_call_back_url: "http://localhost:8000/users/auth/google/callback",
    jwt_secret : 'codeial',
    // morgan:{
    //     mode:'dev',
    //     options: {stream : accessLogStream}
    // }
}

const production ={
    name:'production',
    asset_path: process.env.CODEIAL_ASSET_PATH ,
    session_cookie_key: process.env.CODEIAL_SESSION_COOKIE_KEY,
    db:'codeial_production',
    smtp: {
        service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth:  {
        user: process.env.CODEIAL_AUTH_USER,
        pass: process.env.CODEIAL_AUTH_PASS
       }
    },
    google_client_id: process.env.CODEIAL_GOOGLE_CLIENT_ID,
    goodle_client_secret:process.env.CODEIAL_CLIENT_SECRET,
    google_call_back_url: process.env.CODEIAL_CALL_BACK_URL,
    jwt_secret : process.env.CODEIAL_JWT_SECRET,
    // morgan:{
    //     mode:'combined',
    //     options:{stream: accessLogStream}
    // }
}

module.exports=eval(process.env.NODE_ENV) == "development" ? development : eval(process.env.NODE_ENV);