const request = require('request');
const fs = global.nodemodule["fs-extra"]
module.exports.config = {
  name: "kiemtien",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Trung Kiên",
  description: "Hướng dẫn kiếm tiền",
  commandCategory: "Cách kiếm tiền",
  usages: "kiemtien",
  cooldowns: 1,
  dependencies: {
"request": ""
}
};

module.exports.run = async({api,event,args,Users,global,Currencies}) => {
var callback = () => api.sendMessage(
  {body:`=== Hướng dẫn kiếm tiền ===\n
  \n-Câu cá-
  \nĐăng ký khu vực câu cá bằng cách #fish register
  \nSau đó mua cần câu trong shop bằng #fish shop 
  \nSau khi mua xong cần cầu thì gõ lệnh #fish để câu
  \nMuốn bán cá thì vào trong #fishshop bán!
  \n-Work-
  \nGõ lệnh #work để làm việc kiếm tiền
  \n-Shop!
  \nBạn có thể đổi exp ra tiền hoặc tiền ra exp trong #shop
  \n-Daily
  \nTrong 12 tiếng có thể dùng daily 1 lần`,
    attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(
        encodeURI(`https://graph.facebook.com/${100033478361032}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
       };
