// 在慕课网提交评论

var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
    'content': '老师你太帅了',
    'mid': 8837
});

var options = {
    hostname: 'www.imooc.com',
    posr: 80,
    path: '/course/docomment',
    method: 'POST',
    headers: {
        'Accept': 'application / json,text / javascript,*/*; q=0.01',
        'Accept-Encoding': 'gzip, deflate, lzma',
        'Accept-Language': 'zh-CN,zh;q=0.8',
        'Connection': 'keep-alive',
        'Content-Length': postData.length,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie': 'PHPSESSID=ekebnnc8jtoct4658effso0e43; imooc_uuid=3d88b9f4-fcfb-49a1-8723-5465f17ed68e; imooc_isnew=1; imooc_isnew_ct=1480953692; loginstate=1; apsid=ZiYzA0NTZjMGQxMTE1OWYyOGY5ZTYzNmI5N2U0YWIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjk4MTM3MQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABKYWtlX0xhb3l1QDE2My5jb20AAAAAAAAAAAAAAAAAADU2OWM4ZjQ1NzNhZWQ1MzI5ZTk0ODVmNDllMDhmYjlkco9FWHKPRVg%3DNm; last_login_username=Jake_Laoyu%40163.com; cvde=58458f5ce7356-7',
        'Host': 'www.imooc.com',
        'Origin': 'http://www.imooc.com',
        'Referer': 'http://www.imooc.com/video/8837',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36 OPR/41.0.2353.69',
        'X-Requested-With': 'XMLHttpRequest'
    }
}

var req = http.request(options, function(res) {
    console.log('status: ' + res.statusCode);
    console.log('headers: ' + JSON.stringify(res.headers));
    res.on('data', function(data) {
        console.log(Buffer.isBuffer(data));
        console.log(typeof data);
    })

    res.on('end', function() {
        console.log('评论完毕');
    })
})



req.on('error', function(e) {
    console.log(e.message);
})

req.write(postData);

req.end();