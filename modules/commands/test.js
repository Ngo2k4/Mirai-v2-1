module.exports.config = {
 name: "test",
 version: "1.0.1",
 hasPermssion: 0,
 credits: "Mirai mod by OreoZera",
 description: "Kiểm tra bot",
 commandCategory: "Hệ thống",
 cooldowns: 5,
 dependencies: {
  "pidusage": ""
 }
};

module.exports.run = async ({ api, event, args }) => {
        const fast = global.nodemodule["fast-speedtest-api"];
        const speedTest = new fast({
            token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
            verbose: false,
            timeout: 10000,
            https: true,
            urlCount: 5,
            bufferSize: 8,
            unit: fast.UNITS.Mbps
        });
        const tocdo = await speedTest.getSpeed();
function byte2mb(bytes) {
 const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
 let l = 0, n = parseInt(bytes, 10) || 0;
 while (n >= 1024 && ++l) n = n / 1024;
 return `${n.toFixed(n < 10> 0 ? 1 : 0)} ${units[l]}`;
}

module.exports.run = async ({ api, event, args }) => {
 const axios = global.nodemodule["axios"];
 const pidusage = await global.nodemodule["pidusage"](process.pid);
 let day = res.data.data.solar.day;
let month = res.data.data.solar.month;
let year = res.data.data.solar.year;
let hour = res.data.data.time.hour;
let minute = res.data.data.time.minute;
let second = res.data.data.time.second;
 const timeStart = Date.now();
 return api.sendMessage("", event.threadID, () => api.sendMessage(`⏳${hour}:${minute}:${second} || ${day}/${month}/${year}⏳\n❯ Cpu using: ${pidusage.cpu.toFixed(1)}\n❯ Ram using: ${byte2mb(pidusage.memory)}\n❯ Ping: ${Date.now() - timeStart} ms\n👤Users: ${global.data.allUserID.length}\n👥Boxs: ${global.data.allThreadID.length}\n❯ Fast: ${tocdo}\n\n== Operated by OreoZera ==`, event.threadID, event.messageID));
}