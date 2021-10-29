module.exports.config = {
  name: "thongbao2",
  version: "1.0.2",
  hasPermssion: 2,
  credits: "HĐGN",
  description: "Gửi tin nhắn tới các nhóm(reply vào ảnh/video cần gửi kèm)!\nPhiên bản xịn hơn của sendnotiUwU",
  commandCategory: "system",
  usages: "[Text]",
  cooldowns: 5
};

module.exports.languages = {
  "vi": {
    "sendSuccess": "Đã gửi tin nhắn đến %1 nhóm!",
    "sendFail": "[!] Không thể gửi thông báo tới %1 nhóm"
  },
  "en": {
    "sendSuccess": "Sent message to %1 thread!",
    "sendFail": "[!] Can't send message to %1 thread"
  }
}

module.exports.run = async ({ api, event, args, getText }) => {
  
  if (args.join() == "") {api.sendMessage("Dùng thông báo khi kèm tệp bằng cách rep vào tệp media!",event.threadID, event.messageID);}

if (event.type == "message_reply") {
const request = global.nodemodule["request"];
const fs = require('fs')
const axios = require('axios') 
   // mod tự nhận đuôi tệp khi rep vào tệp đó
        var abc = event.messageReply.attachments[0].url;
        var ext = abc.substring(abc.lastIndexOf(".") + 1);
        var path = __dirname + `/cache/snoti.${ext}`;
        var data = (await axios.get(path, { responseType: 'arraybuffer' })).data;
        writeFileSync(path, Buffer.from(data, "utf-8"));

  /* var abc = event.messageReply.attachments[0].url;

    let getdata = (await axios.get(`${abc}`, { responseType: 'arraybuffer' })).data;

  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));*/


  var allThread = global.data.allThreadID || [];
  var count = 1,
    cantSend = [];
  for (const idThread of allThread) {
    if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
    else {
      api.sendMessage({body:"𝙏𝙞𝙣 𝙉𝙝𝙖̆́𝙣 𝙏𝙪̛̀ 𝘼𝙙𝙢𝙞𝙣\n\n" + args.join(` `),attachment: fs.createReadStream(path) }, idThread, (error, info) => {
        if (error) cantSend.push(idThread);
      });
      count++;
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
  return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID);

   }
  }

  
