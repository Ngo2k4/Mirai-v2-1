module.exports.config = {
  name: "testapi",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "....",
  description:"Chỉ là test api",
  commandCategory: "ramdom-images",
  usages: "testapi",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://api.mankne.repl.co/').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `⚜ Ảnh test ⚜\n⚜Số ảnh hiện có: ${count} ảnh`,
            attachment: fs.createReadStream(__dirname + `/cache/api.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/api.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/api.${ext}`)).on("close", callback);
      })
    }