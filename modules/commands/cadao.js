module.exports.config = {
	name: "cadao",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Jukie~ - JRT",
	description: "Ca dao Việt Name",
	commandCategory: "Kiến thức",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
const request = require('request');
const fs = require("fs");
const res = await axios.get(`https://api.vangbanlanhat.tk/other?type=cadao`);
var cadao = res.data.data;
axios.get('https://api.vangbanlanhat.tk/image?type=girl').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({body: `★ℭɑ ɗɑ❍ ҩ¡ệζ ղɑლ★\n🎐${cadao}`, attachment: fs.createReadStream(__dirname + `/cache/anh.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anh.${ext}`)).on("close", callback);
			})
}