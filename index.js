var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	host: 'smtp.qq.com',
	secureConnection: true,
	port: 25,
	auth: {
		user: 'jake.laoyu@qq.com',
		pass: 'bnqusyosulvsbcje'
	}
});

var mailOptions = {
	from: 'Jake <jake.laoyu@qq.com>', // sender address
	to: 'Jake_Laoyu@163.com', // list of receivers
	subject: '1', // Subject line
	// text: '', // plaintext body
	html: '<p>您提交的展示项目审批通过，赶紧点击看看吧去看看吧！！点击<a href="http://i.jakeyu.top">机票</a>前往</p>' // html body
};


transporter.sendMail(mailOptions, function(error, info) {
	if (error) {
		console.log(error);
	} else {
		console.log('Message sent: ' + info.response);
	}
});