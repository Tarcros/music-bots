const express = require('express');
const { Client, RichEmbed } = require('discord.js');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + " J4J ");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
const Discord = require('discord.js');
const client = new Discord.Client();
const data = new Map();

client.on('ready', () => {
        console.log(`${client.user.username} ismi ile giriş yapıldı! ${client.guilds.size} Sunucu, ${client.users.size} Kullanıcı.`);
});

client.on("message", async msg => {
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        
        let oyuncularsehri = await data.get(msg.author.id)
        
        if (oyuncularsehri === 1) {
        } else {
          await data.set(msg.author.id, 1)
          await sleep(10000)
          await msg.channel.send("") // Discord sunucunuzun kalıcı linkini girin size mesaj atanlara oto dönüş yapması için.      
          await sleep(20000)
          await msg.channel.send("")  
          await sleep(30000)
          await msg.channel.send("") 
          await sleep(40000)
          await msg.channel.send("")
          await sleep(70000)
        }
      }
    }
  }
})


client.on("guildCreate", oyuncularsehri => {
  sleep(1000);
  if (
    oyuncularsehri.id === "784668907264147477" ||  // j4j sunucusunun idsi
    oyuncularsehri.id === "767472034410004491"  // j4j sunucusunun idsi
  ) {
    
  } else {
    oyuncularsehri.leave();
  }
  });

client.on("ready", () => {
      setInterval(() => {
       let a = client.channels.get("787516499781746688") // j4j sunucusunun kanal id'si


       a.send("!d bump")


      }, 1000);
})


client.login("Nzg5Mjc3NjUwNjA2MzU4NTI5.X9vv4A.gUUsnOiUKvsxdv_6DyKgXkTKJ94") // user tokeniniz
