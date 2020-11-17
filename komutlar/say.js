const Discord = require("discord.js");//lEXAR
/*
<a:bir:728654763855446087>
<a:iki:728654765202079864>
  <a:uc:728654765092765846>
    <a:dort:728654764916736030>
      <a:bes:728654765969637436>
        <a:alti:728654765285834922>
          <a:yedi:728654766154186812>
            <a:sekiz:728654766246461501>
              <a:dokuz:728654765780762636>
                <a:0_:728654760370241577>
                */
const mapping = {
  "0": "<a:sfr:772225510452625438>",//BURAYA SAYI EMOJILERINI KOYUN ÖRNEK : <a:emojisim:emojidid>
  "1": "<a:bir:772225447860895745>",
  "2": "<a:iki:772225465494536203>",
  "3": "<a:__:772225488638050314>",
  "4": "<a:4_:772225457390747649>",
  "5": "<a:5_:772225434716209162>",
  "6": "<a:6_:772225420287279125>",
  "7": "<a:7_:772225474909831168>",
  "8": "<a:8_:772225519647195163>",
  "9": "<a:9_:772225500479356960>",
};
 
"abcdefghijklmnopqrstuvwxyz".split("").forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
});
 
exports.run = function(client, message, args) {
 
 
  let toplam = message.guild.memberCount;
  let sunucu =
      `${toplam}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
  let onlinesayi = message.guild.members.cache.filter(
    only => only.presence.status != "offline"
  ).size;
  let online =
      `${onlinesayi}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
  let tag = message.guild.members.cache.filter(m => m.user.username.includes("△")).size;
  let tagdakiler =
      `${tag}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
  const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
  let count = 0;
  for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let ses =
      `${count}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
  let boost = message.guild.premiumSubscriptionCount
  let boostcuk = `${boost}`.split("").map(a => mapping[a] || '0')
  .join("")
  const say = new Discord.MessageEmbed()
  .setDescription(`${client.emojis.cache.get('773325562580172830')} **Sunucudaki Kullanıcı Sayısı;** ${sunucu} \n${client.emojis.cache.get('773325537472282674')} **Sunucudaki Aktif Kullanıcı Sayısı;** ${online} \n${client.emojis.cache.get('773325534750834748')} **Sunucuda Tagımızı Alan Kullanıcı Sayısı;** ${tagdakiler} \n${client.emojis.cache.get('773325539070312458')} **Sesli Kanallarda Bulunan Kullanıcı Sayısı;** ${ses}\n${client.emojis.cache.get('773325542337544252')} **Sunucudaki Boost Sayısı;** ${boostcuk}`);
 
  message.channel.send(say)
};
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["onlinesayi"],
  permLevel: 0
};
 
exports.help = {
  name: "say",
  usage: "Sunucudaki Online Kişileri Sayar",
  desscription: "say"
};