module.exports.config = {
    name: "shop", // Mod từ working ??
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Mank", 
    description: "Làm việc rồi thì phải ăn chứ?",
    commandCategory: "Game",
    cooldowns: 5,
envConfig: {
        cooldownTime: 100000
    }
};
module.exports.languages = {
    "vi": {
        "cooldown": "⭐Bạn đã ăn rồi, quay lại sau: %1 phút %2 giây."      
    },
    "en": {
        "cooldown": "⭐You're ate, come back later: %1 minute(s) %2 second(s)."
    }
}
module.exports.handleReply = async ({ event, api, handleReply, Currencies, getText }) => {
const { threadID, messageID, senderID } = event;
let data = (await Currencies.getData(senderID)).data || {};
if (handleReply.author != event.senderID) return api.sendMessage("😒", event.threadID, event.messageID)
// random coins bị trừ khi mua 
var coinsfr = Math.floor(Math.random() * 401) - 400; //random coins bị trừ khi mua trái cây
var coinsve = Math.floor(Math.random() * 801) - 400; //random coins bị trừ khi mua rau củ
var coinsca = Math.floor(Math.random() * 401) - 400; //random coins bị trừ khi mua bánh
var coinsme = Math.floor(Math.random() * 601) - 400; //random coins bị trừ khi mua thịt
var coinsbr = Math.floor(Math.random() * 201) - 400; //random coins bị trừ khi mua đồ ăn nhanh
var coinsdr = Math.floor(Math.random() * 801) - 400; //random coins bị trừ khi mua đồ uống
var fruit = [
  "🍇", "🍈",  "🍉",  "🍊", "🍋",  "🍌",  "🍍", "🥭", "🍎", "🍏", "🍐", "🍑", "🍒","🍓","🥝","🍅","🥥","🥑","🌽","🌶️"
  ]; 
var shop1 = fruit[Math.floor(Math.random() * fruit.length)];   
// Random trái cây
var vegetable = [
    "🍆","🥔","🥕","🥒","🥬","🥦","🍄","🥜","🌰"];
    var shop2 = vegetable[Math.floor(Math.random() * vegetable.length)];  
    // random rau củ
var cake = [
   "🍞","🥐","🥖","🥨","🥯","🥞","🥮"
    ];
    var shop3 = cake[Math.floor(Math.random() * cake.length)]; 
    // random bánh
var meat = [
      "🍖","🍗","🥩","🥓"];
      var shop4 = meat[Math.floor(Math.random() * meat.length)];   
var breakfast = [
        "🧀","🍔","🍟","🍕","🌭","🥪","🌮","🌯","🥙","🍿"];
        var shop5 = breakfast[Math.floor(Math.random() * breakfast.length)];  
var drinks = [
          "🥛","☕","🍵","🍾","🍷","🍸","🍹","🍺","🥃","🥤"];
         var shop6 = drinks[Math.floor(Math.random() * drinks.length)];  
  
var msg = "";
    switch(handleReply.type) {
        case "choosee": {
switch(event.body) {
                case "1": msg = `Bạn vừa mua ${shop1} ở gian hàng trái cây và bị trừ ${coinsfr}$` ;await Currencies.increaseMoney(event.senderID, parseInt(coinsfr)); break;  
                case "2": msg = `Bạn vừa mua ${shop2} ở gian hàng rau củ và bị trừ ${coinsve}$`; await Currencies.increaseMoney(event.senderID, parseInt(coinsve)); break;
                case "3": msg = `Bạn vừa mua ${shop3} tại gian hàng bánh và bị trừ ${coinsca}$`; await Currencies.increaseMoney(event.senderID, parseInt(coinsca)); break;
                case "4": msg = `Bạn vừa mua ${shop4} tại gian hàng thịt và bị trừ${coinsme}$`; await Currencies.increaseMoney(event.senderID, parseInt(coinsme)); break;
                case "5": msg = `Bạn vừa mua ${shop5} tại gian hàng đồ ăn nhanh và bị trừ ${coinsbr}$`; await Currencies.increaseMoney(event.senderID, parseInt(coinsbr)); break;
                case "6": msg = `Bạn vừa mua ${shop6} tại gian hàng đồ uống và bị trừ ${coinsdr}$`; await Currencies.increaseMoney(event.senderID, parseInt(coinsfr)); break;
case "7": msg = "Chưa update..."; break; //thêm case nếu muốn 
                default: break;
            };
const choose = parseInt(event.body);
  
            if (isNaN(event.body)) return api.sendMessage("Vui lòng nhập 1 con số", event.threadID, event.messageID);
            if (choose > 7 || choose < 1) return api.sendMessage("Lựa chọn không nằm trong danh sách.", event.threadID, event.messageID); //thay số case vào số 7
api.unsendMessage(handleReply.messageID);
            if (msg == "⭐Chưa update...") {
                msg = "⭐Update soon...";
            };
return api.sendMessage(`${msg}`, threadID, async () => {
            data.eatTime = Date.now();
            await Currencies.setData(senderID, { data });
            
        });
    };
}
}
module.exports.run = async ({  event, api, handleReply, Currencies, getText }) => {
    const { threadID, messageID, senderID } = event;
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
if (typeof data !== "undefined" && cooldown - (Date.now() - data.eatTime) > 0) {

        var time = cooldown - (Date.now() - data.eatTime),
            minutes = Math.floor(time / 60000),
            seconds = ((time % 60000) / 1000).toFixed(0); 
return api.sendMessage(getText("cooldown", minutes, (seconds < 10 ? "0" + seconds : seconds)), event.threadID, event.messageID);
    }
    else {    
    return api.sendMessage("=== ĂN CHO LẮM RỒI MẬP ===" +
                "\n\n1. Gian trái cây." +
                "\n2. Gian rau củ." +
                "\n3. Gian bánh." +
                "\n4. Gian thịt." +
                "\n5. Gian đồ ăn nhanh" +
                "\n6. Gian đồ uống" +
                "\n7. Update soon..." +
                "\n\n⭐Hãy reply tin nhắn và chọn theo số" //thêm hiển thị case tại đây ||  \n[number]. [Gian đồ ăn]" +
            , event.threadID, (error, info) => {
                data.eatTime = Date.now();
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
          })  
        })
    }
}