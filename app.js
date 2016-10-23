var buffer1 = new Buffer('ABC');
// 拷贝一个缓冲区
var buffer2 = new Buffer('dsfds');
buffer1.copy(buffer2,0,0,20);


console.log(buffer1.length);

console.log("buffer2 content: " + buffer2.toString());