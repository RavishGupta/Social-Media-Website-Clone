const SendmailTransport = require('nodemailer/lib/sendmail-transport');
const nodeMailer = require('../config/nodemailer');

//this is another wayt of exporting a method
exports.newComment = (comment) => {
   let htmlString = nodeMailer.renderTemplate({comment:comment}, '/comments/new_comment.ejs');

    nodeMailer.transporter.sendMail({
        from:'ravishgupta2004.coder@gmail.com',
        to: comment.user.email,
        subject: "new comment published",
        html: htmlString
    }, (err, info)=>{
        if(err){
            console.log('error in sending mail', err);
            return;
        }
        console.log('message send', info);
        return;
    });
}