const Discord = require('discord.js'); //// altyapımız tek modül ile çalışmaktadır bir'den fazla modül eklemenize gerek yoktur.
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Botun sunucuya giriş yaptı.!');
});

let log = client.channels.cache.get("id") /// id yazan kısma log kanal id yazılacaktır. 
client.on('guildBanAdd', async (guild, user) => {
  let tag = client.users.cache.get(user.id).tag
log.send({ content: `Bir kişi banlandı ${tag}` })
});


client.on('guildBanRemove', async (guild, user) => {
  let tag = client.users.cache.get(user.id).tag
  log.send({ content: `Bir kişinin banı kalktı ${tag}` })
});


 client.on('channelCreate', async channel => {
 log.send({ content: `Kanal oluşturuldu ${channel.name}` })
});

 client.on('channelDelete', async channel => {
  log.send({ content: `Kanal silindi ${channel.name}` })
});

client.on('roleDelete', async role => {
  log.send({ content: `Rol silindi ${role.name}` })
 });
 
 client.on('emojiDelete', async emoji => {
  log.send({ content: `Emoji silindi ${emoji.name}` })
 });
 
 client.on('roleCreate', async role => {
  log.send({ content: `Rol oluşturuldu ${role.name}` })
  });

 client.on('emojiCreate', async emoji => {
  log.send({ content: `Emoji oluşturuldu ${emoji.name}` })
});

client.on("messageUpdate", async (oldMessage, newMessage) => {
  log.send({ content: `**Bir mesaj düzenlendi** \n\nEski mesaj: ${oldMessage}\n Yeni mesaj: ${newMessage}` })
});

client.on("messageDelete", async deletedMessage => {
  log.send({ content: `Mesaj silindi ${deletedMessage}` })
});

client.login('MTAxMDE5NTQyMjk0NzU5MDE1NA.GwXdWQ.kVpIZ1WbkxiRXd7EXpcUVwMds5xSBQgJTgWcOo'); //// ' ' tırnakların içine botunuzun tokenini giriniz
