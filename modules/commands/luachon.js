module.exports.config = {
    name: "luachon",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Mank", //mod từ rps 
    description: "Hôm nay mặc màu gì?",
    commandCategory: "Group",
    usages: "[áo hoặc quần hoặc vớ]",
    cooldowns: 5,
    dependencies: {
    }
};
module.exports.run = async function ({ event, api, args }) {
    function outMsg(data) {
        api.sendMessage(data, event.threadID, event.messageID);
       }
    if(!args[0]) {
        outMsg("Vui lòng nhập áo hoặc quần hoặc vớ")
    }
    var turnbot = ["❤️","💙","💚","🧡","💛","💗","💜","🖤","🗯️","❌"]
          var botturn = turnbot[Math.floor(Math.random() * turnbot.length)] 
          var userturn = args.join( " ")
          if (userturn == "áo"||userturn == "quần"||userturn == "vớ") {
            if (userturn == turnbot) {
              return outMsg(`Lựa chọn ngày hôm nay\n Bot : ${botturn} `)
            } else if (userturn == "áo") {
              if (botturn == "❤") {
                return outMsg(`Lựa chọn ngày hôm nay\nBot : ${botturn} `)
              } else if (botturn == "💙") {
                return outMsg(`Lựa chọn ngày hôm nay\nBot : ${botturn} `)
            }
       
          } else if (userturn == "áo") {

            if (botturn == "💚") {

              return outMsg(`Lựa chọn ngày hôm nay\nBot : ${botturn} `)
            } else if (botturn == "🧡") {
              return outMsg(`Lựa chọn ngày hôm nay\nBot : ${botturn} `)
          }

          } else if (userturn == "áo") {

            if (botturn == "💛") {

              return outMsg(`Lựa chọn ngày hôm nay\nBot : ${botturn} `)
            } else if (botturn == "💗") {
              return outMsg(`Lựa chọn ngày hôm nay\nBot : ${botturn} `)
            }
          } else if (userturn == "áo") {

            if (botturn == "💜") {

              return outMsg(`Lựa chọn ngày hôm nay\nBot : ${botturn} `)
            } else if (botturn == "🖤") {
              return outMsg(`Lựa chọn ngày hôm nay\nBot : ${botturn} `)
          }
          } else if (userturn == "áo") {

            if (botturn == "🗯️") {

              return outMsg(`Lựa chọn ngày hôm nay\nBot : ${botturn} `)
            } else if (botturn == "❌") {
              return outMsg(`Lựa chọn ngày hôm nay\nBot : ${botturn} `)
          }

          } else if (userturn == "quần") {
            if (botturn == "❤") {
              return outMsg(`Lựa chọn ngày hôm nay\nBot : ${botturn} `)
            } else if (botturn == "💙") {
              return outMsg(`Lựa chọn ngày hôm nay\nBot : ${botturn} `)
          }
          } else if (userturn == "quần") {

            if (botturn == "💚") {

              return outMsg(`Lựa chọn ngày hôm nay\nBot : ${botturn} `)
            } else if (botturn == "🧡") {
              return outMsg(`Lựa chọn ngày hôm nay\nBot : ${botturn} `)
          }

   } else if (userturn == "quần") {

            if (botturn == "💛") {

              return outMsg(`Lựa chọn ngày hôm nay\nBot : ${botturn} `)
            } else if (botturn == "💜") {
              return outMsg(`Lựa chọn ngày hôm nay\nBot : ${botturn} `)
          }
   } else if (userturn == "quần") {

            if (botturn == "💗") {

              return outMsg(`Lựa chọn ngày hôm nay\nBot : ${botturn} `)
            } else if (botturn == "🖤") {
              return outMsg(`Lựa chọn ngày hôm nay\nBot : ${botturn} `)
          }
   } else if (userturn == "quần") {

            if (botturn == "🗯️") {

              return outMsg(`Lựa chọn ngày hôm nay\nBot : ${botturn} `)
            } else if (botturn == "❌") {
              return outMsg(`Lựa chọn ngày hôm nay\nBot : ${botturn} `)
          }
   } else if (userturn == "vớ") {

            if (botturn == "❤") {

              return outMsg(`Lựa chọn ngày hôm nay\nBot : ${botturn} `)
            } else if (botturn == "💙") {
              return outMsg(`Lựa chọn ngày hôm nay\nBot : ${botturn} `)
          }
   } else if (userturn == "vớ") {

            if (botturn == "💚") {

              return outMsg(`Lựa chọn ngày hôm nay\nBot : ${botturn} `)
            } else if (botturn == "🧡") {
              return outMsg(`Lựa chọn ngày hôm nay\nBot : ${botturn} `)
          }
   } else if (userturn == "vớ") {

            if (botturn == "💛") {

              return outMsg(`Lựa chọn ngày hôm nay\nBot : ${botturn} `)
            } else if (botturn == "💜") {
              return outMsg(`Lựa chọn ngày hôm nay\nBot : ${botturn} `)
            }
   } else if (userturn == "vớ") {

            if (botturn == "💗") {

              return outMsg(`Lựa chọn ngày hôm nay\nBot : ${botturn} `)
            } else if (botturn == "🗯️") {
              return outMsg(`Lựa chọn ngày hôm nay\nBot : ${botturn} `)
          }
   } else if (userturn == "vớ") {

            if (botturn == "🖤") {

              return outMsg(`Lựa chọn ngày hôm nay\nBot : ${botturn} `)
            } else if (botturn == "❌") {
              return outMsg(`Lựa chọn ngày hôm nay\nBot : ${botturn} `)
          }

      }
        } else {
          return outMsg("Vui lòng nhập áo hoặc quần hoặc vớ")
        }
}