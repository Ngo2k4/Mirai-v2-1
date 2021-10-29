module.exports.config = {
	name: "meowmeme",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Mank",
	description: " mèo là thứ gì đó rất cute ĩa",
	commandCategory: "Random-img",
	usages: "meowmeme",
	cooldowns: 5,
	
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
            body: `⚜ Mèo là 1 thứ gì đó rất thiểu năng\n⚜Số ảnh hiện có: ${count} ảnh`,
            attachment: fs.createReadStream(__dirname + `/cache/mank.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/mank.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/mank.${ext}`)).on("close", callback);
      })
}