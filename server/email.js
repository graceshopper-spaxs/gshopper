'use strict';
const nodemailer = require('nodemailer');

const notificationEmail = (userName, userEmail, orderId) => {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        port: 25,
        auth:{
            user: 'caloriecart.emailsender@gmail.com',
            pass: 'CalorieCartEmail'
        },
        tls: {
            rejectUnauthorized: false
        }
    }); 


    let mailOptions = {
        from: 'Calorie Cart <caloriecart.emailsender@gmail.com>', // sender address
        to: userEmail, // list of receivers
        subject: 'Your order is confirmned', // Subject line
        html: `<b>Hi ${userName}, thank you for shopping with us! Your order #${orderId} is confirmed. We will send you a notification email when your order is shipped.</b>` // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('BEAUTIFUL!!!!Message sent!');
    });


}


const shippingEmail = (userName, userEmail, orderId) => {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        port: 25,
        auth:{
            user: 'caloriecart.emailsender@gmail.com',
            pass: 'CalorieCartEmail'
        },
        tls: {
            rejectUnauthorized: false
        }
    }); 


    let mailOptions = {
        from: 'Calorie Cart <caloriecart.emailsender@gmail.com>', // sender address
        to: userEmail, // list of receivers
        subject: 'Your order is shipped', // Subject line
        html: `<b>Hi ${userName}, your order #${orderId} is shipped!</b>` // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('BEAUTIFUL!!!! Shipping Message sent!');
    });
}

module.exports = {notificationEmail, shippingEmail} ; 