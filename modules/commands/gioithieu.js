module.exports.config = {
	name: "gioithieu",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "JRT",
	description: "Thông tin nhà tài trợ và nhà phát triển",
	commandCategory: "Thông tin adminbot", 
	usages: "gioithieu [thông tin cho bạn]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async ({ api, event, args, client, utils }) => {
	if (args.join() == "") {api.sendMessage("|==== Bảng thông tin Mank====|\nNgười chạy bot: Nguyễn Mank\nLink fb: https://www.facebook.com/nguyenmank.1102\n  Gia nhập CFC vào ngày 17-07-21 \nCảm ơn vì đã sử dụng bot ❤",event.threadID, event.messageID);
	}
}