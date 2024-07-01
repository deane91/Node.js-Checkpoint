//first we installed 'nodemailer' package using npm install nodemailer
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'',
        pass: ''
    }
});

let mailOption = {
    from: '"Youssef DINEEEE" <prodine91@gmail.com>',
    to:'prodine@hotmail.fr',
    subject:'Test sending email via node.js',
    text:'Helloo , this is the first test of using Node.js to send an email , wish you are good',
    html:'<button>bye</button>'
}

transporter.sendMail(mailOption,(error,info)=>{

    if(error){

        return console.log(error);
    }

    console.log('Message sent : %s',info.messageId);
        
});