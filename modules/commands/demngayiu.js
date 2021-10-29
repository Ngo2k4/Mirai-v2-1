module.exports.config = {
	name: "demngayiu",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Mank",
	description: " dem ngay iu phien ban dau long",
	commandCategory: "other",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    
    return api.sendMessage(` dem dem cl chia tay roi :)`, event.threadID, event.messageID);
} 