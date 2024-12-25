/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "cpl", 
  version: "1.0.0", 
  permission: 0,
  credits: "farhan",
  description: "Random sad video",
  prefix: true,
  category: "Media", 
  usages: "video", 
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["--CPL-VIDEO-𝐊𝐢𝐧𝐠_𝐒𝐡𝐨𝐮𝐫𝐨𝐯-"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [

    "https://drive.google.com/uc?id=1xLc_9r1TYGVM0J33hJ61hmW3yXOBTcEo",
      "https://drive.google.com/uc?id=1xFVA97twVhvJJzmxhXjT9QukwWEDRO2a",
      "https://drive.google.com/uc?id=1xC8J23XORH4zHsXCDkfrgzmVBm1_-b5E",
      "https://drive.google.com/uc?id=1x5EX0grUJwEKzHyzeR63HnzC_UlDdJD6",
      "https://drive.google.com/uc?id=1xM82tBosefpCvaDokhufHoikub1Opupz",
      "https://drive.google.com/uc?id=1xhCqfx7pScogeGph4T4ITnRJFYcUNmJ8",
      "https://drive.google.com/uc?id=1xTgkjk__QRMOVQnkQsSIcEzGfRUwUDLY",
      "https://drive.google.com/uc?id=1xRsWDPe485xXPna9nWhj0TaW_Q9lVJDd",
      "https://drive.google.com/uc?id=1xRsWDPe485xXPna9nWhj0TaW_Q9lVJDd",
      "https://drive.google.com/uc?id=1xC30T2eSDWZGr_O8699yxaMS-AZ_X5y8",
      "https://drive.google.com/uc?id=1xcoHMLkNU1naPET4bP2sEiHoXUF23w-R",
      "https://drive.google.com/uc?id=1xcN88lPjPoRJhdxCUesuTFFArtvbUNL2",
      "https://drive.google.com/uc?id=1xUee8t4ukXW_XD4K4pGV_I4VFccwdyqt",
      "https://drive.google.com/uc?id=1xgfepctwXjZ5Y9kxhD3HcTTaJcsWHi-x",
      "https://drive.google.com/uc?id=1xhymaD6J1patQzfass5-e4ewUDg8gnQ9",
      "https://drive.google.com/uc?id=1xCvCvUa2zVWLm3y1pAGFKrr-emyaFicK",
      "https://drive.google.com/uc?id=1x87CHgjwaOjANyN_06_JqB-YKaUQGU2b",
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
