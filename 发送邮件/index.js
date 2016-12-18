var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	host: 'smtp.qq.com',
	secureConnection: true,
	port: 25,
	auth: {
		user: '944473232@qq.com',
		pass: '***' //授权码
	}
});

var mailOptions = {
	from: '944473232@qq.com', // sender address
	to: 'Jake_Laoyu@163.com', // list of receivers
	subject: 'Hello ✔', // Subject line
	text: 'Hello world ✔', // plaintext body
	html: '<b>Hello world ✔</b>' // html body
};


transporter.sendMail(mailOptions, function(error, info) {
	if (error) {
		console.log(error);
	} else {
		console.log('Message sent: ' + info.response);
	}
});