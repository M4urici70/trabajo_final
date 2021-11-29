const { Router } = require('express');
const router = Router();

const nodemailer = require('nodemailer');

router.post('/send-email', async (req, res) => {
    const { name, email, phone, message } = req.body;

    contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Username: ${name}</li>
            <li>User Email: ${email}</li>
            <li>PhoneNumber: ${phone}</li>
        </ul>
        <p>${message}</p>
    `;

    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'layla.goldner98@ethereal.email',
            pass: 'RQC4KBCw3KsBW5Xveg'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let info = await transporter.sendMail({
        from: '"ethereal Server" <layla.goldner98@ethereal.email>', // sender address,
        to: 'fazttech@ethereal.email',
        subject: 'Website Contact Form',
        // text: 'Hello World'
        html: contentHTML
    })

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    res.redirect('/success.html');
});

module.exports = router;