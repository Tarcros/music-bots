const Dlang = require('discordbot-script')
const bot = new Dlang({
  token: "",
  prefix: ["$"]
})

bot.MessageEvent()
 
bot.Variables({
  prefix: "$",
  test: "400",
  vip: "No Vip",
  regmodlogs : "Nothing",
  urlhook: "Nothing",
  authorhook: "Nothing",
  namehook: "Nothing",
  messageedit: "Nothing",
  channeledit: "Nothing",
  channelhook: "Nothing",
  channelembed: "Nothing",
  emotelogs: "Nothing",
  scammers: "0",
  welcomechannel: "Nothing",
  jailed: "0",
   money: "100",
  Cash: "500",
  Bank: "1400",
  join: "None",
  leave: "None",
  ticket: "0",
  warnings : "0",
  cooldown: "2",
  mute: "Non Définie",
  Police: "0",
  Gooddeed: "1",
  Evenement: "5",
  reactionrole: "No Definied",
  peche: "0",
  poisson: "0",
  réputation: "2",
  nourriture: "0",
  Amis: "0",
  prestige: "0",
  clan: "Any",
  clanmember: "0",
  clanlogo: "<:Clan:851478239146278962>",
  pointbonus: "0",
  Keys: "0",
  cuisine: "0", 
  Patate: "0",
  voiture: "0",
  papier: "0",
  garde: "0",
  diamand: "0",
  afk: "",
  afkmessage: "",
  messages: "0",
  logs: "Nothing",
  prefix: "$",
  Prefix: "$",
  RankJoin: "0",
  color: 'Nothing',
  pets: 'Nothing',
  name: 'Nothing',
  pronouns: 'Nothing',
  rStatus: 'Nothing',
  birthday: 'Nothing',
  bio: 'Nothing',
  gamerTags: 'Nothing',
  usertext: "Nothing",
  username: "Nothing",
  useravatar: "Nothing",
  modlogs: "Nothing",
  suggestion_channel: "Nothing",
  alllogs: "Nothing",
  
  
  
  
})
 
bot.Command({
  name: "ping2",
  code: `
 <:data:819559106930933770> \`$ping\`** ms**
  `
})

bot.Command({
name: "say",
code: `

$deletecommand[1ms]
$message[]
$onlyAdmin[]
`
})




bot.Command({
 name: "userinfo",
   aliases: ["ui"],
 code: `
$title[Userinfo $tag[$mentioned[1]]]
$description[** **]

$addField[<:image:850959565125320725> User Avatar:;{hyper:**User Avatar Download**:$userAvatar[$mentioned[1;yes]]};yes]

$addField[<:847510546902548540:850970592269303818> Is boosting **$serverName[]**:;$replaceText[$replaceText[$isBoosting[$mentioned[1;yes]];true;yes];false;no];yes]

$addField[<:editprofile:850893363501989888> Platform:; $replaceText[$replaceText[$replaceText[$platform[$mentioned[1]];mobile; \📱 mobile];web; \💻 web];desktop; \🖥️ desktop];yes]

$addField[<:botcertied1:850851953835769876><:botcertied2:850851953700372530> Is a Bot:;$replaceText[$replaceText[$isBot[$mentioned[1;yes]];false;No];true;Yes];yes]
$addField[<:role:850969653824061441> User roles:;$memberRoles[$mentioned[1;yes]];yes]

$addField[<:Timestamp:850959565331628043> Account created:;$creationDate[$mentioned[1;yes]];yes]

$addField[<:authorIcon:850966075016609852> Server nickname:;<@$mentioned[1;yes]>;yes]

$addField[<:author:850959565075644416> Discord tag:;$tag[$mentioned[1]];yes]
$color[91ffcd]
$thumbnail[$userAvatar[$mentioned[1;yes];png;true;512]]

$addTimestamp
`
});






bot.Status({
        0: {
            description: "", 
            type: "PLAYING" 
        }, 
        1: {
            description: "", 
            type: "WATCHING" 
        }
    }, 13000)



 
 bot.SpaceCommand({
  name: "pingForPrefix",
  code: `
  $color[3ffbbf]
  $thumbnail[https://images-ext-1.discordapp.net/external/6oPzlvTReXeL5eKlqYF0uHL4_ITtlV4KOSCENSCI2Bs/%3Fsize%3D512/https/cdn.discordapp.com/avatars/850572464794501140/f29fece4d87b52ff15eb84348161ccf1.png]
 $description[ <:online:851223163428929536> {hyper:**Miuri**:https://discord.com/api/oauth2/authorize?client_id=851253649522294804&permissions=8&scope=applications.commands%20bot}
  ・**My prefix is : \`$\`**
  <:mods:850797010465849364> **And manage: \`\`\`bash\n$serverCount servers\`\`\`  **
  ]
    
    $onlyIfMessageContains[<@$client[id]>;<@!$client[id]>;]
    
      `
  })



bot.Command({
   name: "cuisine",
    aliases: [ "cook" ],
    code: `
    
       $author[Hmm , cette bonne odeur !;$userAvatar[$authorID]]
    $description[You cooked for \`$$random[15;40]\` ,\nles **$randomText[politicians;orphanage children;tramps;village women; singers; unemployed; local merchants; passing; the drivers]** loved your $randomText[fries<:cutiefoodmeal:851277521039130644>;lemon cookies🥮;pizzas🍕;cakes🎂;lasagnes<:lasagne:850972203544739840>;small dishes 🍱;bacons🥓;small cakes🧁;japanese food <:foodjapon:851278032244834314>;honey <:honey:851278032840556574>;strawberry cupcake <:strawberrycupcake:851277521180688384>;strawberry cheese cakes <:strawberrycheesecakeslice:851277521142939710>;Pancake <:pancake:851278032341172224>; egg toast<:eggtoast:851277521379000330>; milk <:milk:851278032550232114>]\n eand we gave you a tip of \`$$random[0;15]\`.]
    $color[FFC500]
    $setVar[money;$sum[$getVar[money;$authorID];$sum[$random[15;40];$random[0;15]]];$authorID]
    $globalCooldown[7m;<:temp:741859094003974146>You have to wait \`{time}\` be able to start cooking, for the moment will do the dishes 🍴!]
    $setVar[Gooddeed;$sum[$getVar[Gooddeed;$authorID];1];$authorID]
    $setVar[réputation;$sum[$getVar[réputation;$authorID];$random[0;3]];$authorID]
    $addTimestamp
    $setServerVar[Evenement;$sum[$getServerVar[Evenement];2]]
    $onlyIf[$getVar[cuisine;$authorID]>0;<:error:850913520466919450> You don't even know how to cook .. Buy a cooking yard at the store..\`($shop)\` 👨‍🍳]
    $onlyIf[$getVar[cuisine;$authorID]<3;]
     $onlyForUsers[850561637358108683;823360230280658974;Command glitched, so disable..]
    
    `
})


bot.Command({
   name: "botinfo",
   aliases: ["bi"],
    code: `
    $cooldown[45s;<:temp:741859094003974146> Une page avec mes informations est déjà présent sur le serveur.]
    $author[Miuri Bot Info ;https://images-ext-1.discordapp.net/external/6oPzlvTReXeL5eKlqYF0uHL4_ITtlV4KOSCENSCI2Bs/%3Fsize%3D512/https/cdn.discordapp.com/avatars/850572464794501140/f29fece4d87b52ff15eb84348161ccf1.png]
    $thumbnail[https://images-ext-1.discordapp.net/external/6oPzlvTReXeL5eKlqYF0uHL4_ITtlV4KOSCENSCI2Bs/%3Fsize%3D512/https/cdn.discordapp.com/avatars/850572464794501140/f29fece4d87b52ff15eb84348161ccf1.png]
    $color[03eb7c]
    $description[
              **Bot » <@851253649522294804> **<:botcertied1:850851953835769876><:botcertied2:850851953700372530>                                                            **Dev »** <@850561637358108683> <:earlydev:850973472968540180>
       > **Bot:** {hyper:\`Miuri\`:https://top.gg/bot/735499202582413342}                                             **Développeur :** {hyper:\`Ꮢҽα𝙻GσD🥉₊#9444\`:https://top.gg/user/315244741287477250}
       > **Descriminateur Bot:** \`#8394\`             **Descriminateur Dev:** \`#9444\`
       > **ID Bot:** \`851253649522294804\`           **ID Dev:** \`850561637358108683\`
       <:systeme1:850824160267206698><:systeme2:850824160313999370><:systeme3:850824160216481823>** Systeme**
      \`\`\`xl
      Prefix: $
      Version: 1.5.0
      Uptime: $uptime  
      Memory: $memory Mb
      Librarie: discord.js
      
      \`\`\`
      <:stats:850974751643664415>** Stats**
      \`\`\`xl
        Server: $serverCount Servers
        User: $allMembersCount Users
        Ping: $ping ms
        +270 Commands
      \`\`\`
                                                        <:Staffs:850860950949068824> {hyper:**Support**:https://discord.gg/vNgZej8mca} | <:invites:850860394805198938> {hyper:**Invite**:https://discord.com/api/oauth2/authorize?client_id=850572464794501140&permissions=8&scope=bot%20applications.commands} | <:partner_server_owner:850862999639294054> {hyper:**Partner**:https://discord.gg/YuuNEmkBVP}

    ]
    $footer[Miuri Bot Info ;$userAvatar[$authorID]]
    $addTimestamp
    
    $botTyping
    `
})

bot.Command({
    name: "categorycount",
   aliases: ["cgc"],
code: `
At the moment, the server has $replaceText[$replaceText[$checkCondition[$categoryCount==0];true;\`no\`];false;\`$categoryCount\`] **categories** created <:categorie:759899157401567274>.
`
})


bot.Command({
 name: "channelcount",
   aliases: ["cc"],
code: `
At the moment, the server has $replaceText[$replaceText[$checkCondition[$channelCount==0];true;\`no\`];false;\`$channelCount\`] **channels** created <:channel:759898754433679400>.
`
  })

bot.Command({
   name: "statusconfig",
   aliases: ["sc","etat"],
    code: `
    $title[<:configs:850845714531090444> Server configuration status ]
    $description[
    $addField[Name Webhook;
$replaceText[$replaceText[$checkCondition[$getServerVar[namehook]==Nothing];true;<:error:850913520466919450>];false;<:success:850913520408068098>] **Name webhook**: \`$getServerVar[namehook]\`
;yes]
        $addField[Author Webhook;
$replaceText[$replaceText[$checkCondition[$getServerVar[authorhook]==Nothing];true;<:error:850913520466919450>];false;<:success:850913520408068098>] **Author webhook**: \`$getServerVar[authorhook]\`
;yes]
        $addField[Url Webhook;
\`Private\`
;yes]
      $addField[Edit Message;
$replaceText[$replaceText[$checkCondition[$getServerVar[messageedit]==Nothing];true;<:error:850913520466919450>];false;<:success:850913520408068098>] **Edit message**: \`$getServerVar[messageedit]\`
;yes]
         $addField[Edit Channel;
$replaceText[$replaceText[$checkCondition[$getServerVar[channeledit]==Nothing];true;<:error:850913520466919450>];false;<:success:850913520408068098>] **Edit channel**: \`$getServerVar[channeledit]\`
;yes]
          $addField[Embed Channel;
$replaceText[$replaceText[$checkCondition[$getServerVar[channelembed]==Nothing];true;<:error:850913520466919450>];false;<:success:850913520408068098>] **Embed channel**: \`$getServerVar[channelembed]\`
;yes]
    $addField[Welcome Channel;
$replaceText[$replaceText[$checkCondition[$getServerVar[welcomechannel]==Nothing];true;<:error:850913520466919450>];false;<:success:850913520408068098>] **Welcome channel**: \`$getServerVar[welcomechannel]\`
;yes]
]
$color[36393F]
`
  
   })

bot.SpaceCommand({
name: "any name here, anyways it'll trigger xd",
code: `
$setUserVar[messages;$sum[$getUserVar[messages;$authorID];1];$authorID]
`})


bot.Command({
  
   name: "rank",
    code: `
    
    $thumbnail[https://images-ext-1.discordapp.net/external/hlWjqvVLX7H2Puut0Rqnf7GVHYpapAxprE-E4vtBMYM/https/images-ext-1.discordapp.net/external/6oPzlvTReXeL5eKlqYF0uHL4_ITtlV4KOSCENSCI2Bs/%253Fsize%253D512/https/cdn.discordapp.com/avatars/850572464794501140/f29fece4d87b52ff15eb84348161ccf1.png]
    $author[$username[$mentioned[1;yes]] Messages 💬 ;https://images-ext-1.discordapp.net/external/hlWjqvVLX7H2Puut0Rqnf7GVHYpapAxprE-E4vtBMYM/https/images-ext-1.discordapp.net/external/6oPzlvTReXeL5eKlqYF0uHL4_ITtlV4KOSCENSCI2Bs/%253Fsize%253D512/https/cdn.discordapp.com/avatars/850572464794501140/f29fece4d87b52ff15eb84348161ccf1.png]
    $description[ 
        **Message envoyé sur le serveur par \`$username[$mentioned[1;yes]]\`**: \`$getUserVar[messages;$mentioned[1;yes]] messages 💬\`
        
    ]
    $footer[ $serverName[$guildID] Messages ]
    $color[$random[0;999999]]
    $addTimestamp
    $onlyIf[$message[1]!=$mentioned[1;yes];]
    $onlyIf[$message[1]!=;]
    `
   })

bot.Command({
  
  
   name: "rank",
    code: `
   
    $author[$username[$authorID] Messages 💬 ;https://images-ext-1.discordapp.net/external/hlWjqvVLX7H2Puut0Rqnf7GVHYpapAxprE-E4vtBMYM/https/images-ext-1.discordapp.net/external/6oPzlvTReXeL5eKlqYF0uHL4_ITtlV4KOSCENSCI2Bs/%253Fsize%253D512/https/cdn.discordapp.com/avatars/850572464794501140/f29fece4d87b52ff15eb84348161ccf1.png]
    $thumbnail[https://images-ext-1.discordapp.net/external/hlWjqvVLX7H2Puut0Rqnf7GVHYpapAxprE-E4vtBMYM/https/images-ext-1.discordapp.net/external/6oPzlvTReXeL5eKlqYF0uHL4_ITtlV4KOSCENSCI2Bs/%253Fsize%253D512/https/cdn.discordapp.com/avatars/850572464794501140/f29fece4d87b52ff15eb84348161ccf1.png]
    $footer[ $serverName[$guildID] Messages ]
    $color[$random[0;999999]]
    $addTimestamp
    $description[ 
        **Message envoyé sur le serveur **: \`$getUserVar[messages;$authorID] messages 💬\` 
        
    ]
    
    $onlyIf[$message[1]==;]
  `
   })

bot.Command({
  name: "ping",
    code: `
    **Pong!  🏓** » \`$ping ms\`
    `
  
   })

bot.Command({
  
    name: "servinfo",
   aliases: ["si","serverinfo","infoserver","infoserv","sinfo","infos","serveri","iserver"],
    code: `
    $title[SERVEUR INFO ]
    $color[$random[0;999999]]
    $description[
     <:Iconserver1:850931083565334539><:Iconserver:850931083499667458> **__Nom__**: $serverName[$guildID]
     <:owner:751759196873031730> **__Owner__**: <@$ownerID>
     <:world:851123491910451240> **__Region__**: $region
     <:servercreate:751759197145923614> **__Creation__**: $creationDate[$guildID]
     <:Timestamp:850959565331628043> **__Creation Time__**: $creationTime[$guildID]
     $replaceText[$replaceText[$checkCondition[$serverBoostCount==0];true;<:BadgeServerBoost0:851125774957936660>];false;]$replaceText[$replaceText[$checkCondition[$serverBoostCount==1];true;<:BadgeServerBoost1:851125774853472287>];false;]$replaceText[$replaceText[$checkCondition[$serverBoostCount>1];true;<:BadgeServerBoosts2:851123717576065085>];false;]$replaceText[$replaceText[$checkCondition[$serverBoostCount>14];true;<:BadgeServerBoosts15:851123717248778271>];false;]$replaceText[$replaceText[$checkCondition[$serverBoostCount>29];true;<:BadgeServerBoosts30:851123717807669268>];false;] **__Boost__**: $replaceText[$replaceText[$checkCondition[$serverBoostCount==0];true;No Boost];false;$serverBoostCount]
     
     <:categories:851128273026154526> **__Categories__**: \`$replaceText[$replaceText[$checkCondition[$categoryCount==0];true;Aucunne];false;$categoryCount]\`
     <:IconGreyAnnouncementsChannel:851128864431800331> **__Channels__**: \`$channelCount\`
     <:role:850969653824061441> **__Roles__**: \`$replaceText[$replaceText[$checkCondition[$roleCount==0];true;Aucun];false;$roleCount]\`
     <:emote:759898470080577558> **__Emotes__**: \`$emoteCount\`
     <:warning:851128272288219186> **__Verification level__**: \`$serverVerificationLvl\`
     <:invite:751759197087072377>**Serveur Invite**
     **https://$getServerInvite[$guildID]**
     
    
     $footer[Informations on the server;$userAvatar[$authorID]]
     $addTimestamp
     $thumbnail[$serverIcon]
    ]
    `
  
  
   })

bot.Command({
 name: "blacklist",
 aliases: ["bl"],
 code: `
  $onlyForUsers[850561637358108683;315244741287477250;735363741343940640;735499202582413342;764907640609308692;713747686083395585;691118003827507202;823360230280658974;850561637358108683;]
    
 $blackList[$toLowercase[$message[1]];$message[3];$toLowercase[$message[2]]]

 <:success:850913520408068098> $replaceText[$replaceText[$checkCondition[$userExists[$message[3]]==true];true;**$username[$message[3]]#$discriminator[$message[3]]**];false;The server, **$message[3]**] has been **$replaceText[$replaceText[$toLowercase[$toLowercase[$message[1]]];add;blacklisted from using the bot];remove;whitelisted and can now use the bot!]** <:IconOptionBlackList:851115243996184628>

 $onlyIf[$isNumber[$message[3]]==true;<:error:850913520466919450> **Invalid $message[2]ID**]
 $onlyIf[$message[3]!=;**Supply a $message[2]ID**]
 $onlyIfMessageContains[user;server;{title:<:error:850913520466919450> Invalid usage!} {description:$blacklist <add> <user> <userID>
$blacklist <add> <server> <serverID>
$blacklist <remove> <user> <userID>
$blacklist <remove> <server> <serverID>} {color:ff0000}]

 $onlyIfMessageContains[add;remove;{title:<:error:850913520466919450> Invalid usage!} {description:$blacklist <add> <user> <userID>
$blacklist <add> <server> <serverID>
$blacklist <remove> <user> <userID>
$blacklist <remove> <server> <serverID>} {color:ff0000}]
 `
 })

bot.Command({
  
      name: "getuser",
   aliases: ["gu"],
    code: `
    $onlyForUsers[850561637358108683;315244741287477250;735363741343940640;735499202582413342;764907640609308692;713747686083395585;691118003827507202;823360230280658974;850561637358108683;]
    $setVar[$message[1];$message[2];$mentioned[1;yes]]
    $author[Bot White List;https://media.discordapp.net/attachments/737751320412422195/741753635779772486/unknown.png]
    $description[<:nuk3mod:753772063780634716> **$username[$authorID]** just set the value  \`$message[1]\` at **$message[2]** of the user <@$mentioned[1;yes]>.
    - Before this action he had: **$getVar[$message[1];$mentioned[1;yes]]** value \`$message[1]\`.
    His ID: \`\`\`js
    $authorID\`\`\`
    The command was used on the server : **$serverName[$guildID]** | ID:\`$guildID\`.
    In the channel: <#$channelID[]> | ID: \`$channelID[]\` .
    ]
    $footer[White List Bot Action;$userAvatar[$mentioned[1;yes]]]
    $color[17F99E]
    $addTimestamp
    $thumbnail[$userAvatar[$authorID]]
    $useChannel[765735287464263700]
    $deletecommand[1ms]
    $suppressErrors[<:no:765020908833341490> **You did the wrong command!**]
    $deleteIn[2s]
    `
  
   })

bot.Command({
  
   name: "get",
    code: `
    $onlyForUsers[315244741287477250;823360230280658974;850561637358108683;735363741343940640;735499202582413342;764907640609308692;713747686083395585;691118003827507202;no]
    $setVar[$message[1];$message[2] $message[3] $message[4] $message[5] $message[6];$authorID]
    $author[Bot White List;https://images-ext-2.discordapp.net/external/NCtjXA7SUOtl7YrQV-b4gxhFRSLH9sFnElDnhEzZcgU/%3Fsize%3D512/https/cdn.discordapp.com/avatars/851253649522294804/f29fece4d87b52ff15eb84348161ccf1.png]
    $description[<:mods:850797010465849364> **$username[$authorID]** vien de définir sa valeur \`$message[1]\` à **$message[2] $message[3] $message[4] $message[5] $message[6]**.
    -Avant cette action il avais: **$getVar[$message[1];$authorID]** en valeur \`$message[1]\`.
    Son ID: \`\`\`js
    $authorID\`\`\`
    La commande a été utiliser sur le serveur: **$serverName[$guildID]** | ID:\`$guildID\`.
    Dans le channel: <#$channelID[]> | ID: \`$channelID[]\` .
    ]
    $footer[White List Bot Action;$userAvatar[$authorID]]
    $color[17F99E]
    $addTimestamp
    $thumbnail[$userAvatar[$authorID]]
    $useChannel[851205675526914088]
    $deletecommand[1ms]
    `
  
   })

bot.Command({
 name: "getblacklist",
 aliases: ["gbl"],
 code: `
 $replaceText[$replaceText[$checkCondition[$getBlackList[$message[1]]==];true;No $message[1] blacklisted from the bot];false;$getBlackList[$message[1]]]

 $onlyIfMessageContains[users;servers;Type either **servers** or **users** to get the list]
  $onlyForUsers[850561637358108683;823360230280658974;Command glitched, so disable..]
    
 `
 })


bot.Command({
  
   name: "bank",
   aliases: ["b"],
    code: `
    $onlyIf[$message[1]!=$mentioned[1;yes];]
    $thumbnail[$userAvatar[$mentioned[1;yes]]]
    $author[$username[$mentioned[1;yes]] Bank ;$userAvatar[$mentioned[1;yes]]]
    $description[ 
       \`・\` **Bank <:OnlineBanking:851157625936937001>** \`$$getVar[Bank;$mentioned[1;yes]]\`
        <:coins:851159038837129276> Coins Bonus \`$getVar[pointbonus;$mentioned[1;yes]]\`
    ]
    $footer[ Miuri Bank]
    $color[36393F]
    $addTimestamp
    `
  
   })

bot.Command({
  
  name: "cash",
   aliases: ["c"],
    code: `
    $onlyIf[$message[1]!=$mentioned[1;yes];]
    $thumbnail[$userAvatar[$mentioned[1;yes]]]
    $author[$username[$mentioned[1;yes]] Cash ;$userAvatar[$mentioned[1;yes]]]
    $description[ 
        **Cash 💸:** \`$$getVar[Cash;$mentioned[1;yes]]\`
        <:coins:851159038837129276> Coins Bonus \`$getVar[pointbonus;$mentioned[1;yes]]\`
    ]
    $footer[ Nuk3 Cash]
    $color[36393F]
    $addTimestamp
    `
  
   })

bot.Command({
  
  name: "bal",
  
    code: `
    $onlyIf[$message[1]!=$mentioned[1;yes];]
    $thumbnail[$userAvatar[$mentioned[1;yes]]]
    $author[Balance $username[$mentioned[1;yes]];$userAvatar[$mentioned[1;yes]]]
    $description[**<:creditcard:851162825987588146> Balance <@$mentioned[1;yes]> <:Redcrown:851162412425150494>** 
                         $addField[** Total 📊   **;
\`\`\`$$sum[$getVar[money;$mentioned[1;yes]];$getVar[Cash;$mentioned[1;yes]];$getVar[Bank;$mentioned[1;yes]]]\`\`\`
;yes]
$addField[**Gems** <:Gems:851161326506999848>;
\`\`\`$getVar[diamand;$mentioned[1;yes]]\`\`\`
;yes]
$addField[**Coins Bonus <:coins:851159038837129276>**;
\`\`\`$getVar[pointbonus;$mentioned[1;yes]]\`\`\`
;yes]
$addField[** Bank <:OnlineBanking:851157625936937001> ** ;
\`\`\`$$getVar[Bank;$mentioned[1;yes]]\`\`\`
;yes]
$addField[**Cash 💸    **;
\`\`\`$$getVar[Cash;$mentioned[1;yes]]\`\`\`
;yes]
       $addField[**Money 💰 **;
\`\`\`$$getVar[money;$mentioned[1;yes]] \`\`\`
;yes]
    ]
    $color[F9F517]
    `
  
   })

bot.ReadyCommand({
  name: "851205675526914088",
  code:`
<@$client[id]> has been rebooted!
`
})


bot.Command({
  
   name: "beg",
    code: `
    $globalCooldown[119s;<:slowmode:851114785672396861> You need to wait again \`{time}\` to remedy a passer-by, you are intrusive..]
    
    $setVar[money;$sum[$getVar[money;$authorID];$random[0;60]];$authorID]
    $title[**Beg** ]
    $description[$randomText[ **SpongeBob ** refused to give you money, so his manager gave you $; **MisterV** donated to you $; **Laylow** gave you $;**Dyno Bot** : You pity me little one , look that: $; **Dracula** bites you and gives me blood worth it $; **Tim McGraw** leaves you one of his favorite hats, this one is worth $; **Rowan Atkinson** smiles at you leaving $; **Eddie Murphy** fight with you for $; **Chuck Lorre** donate to you $; **Danica Patrick** wink at you and leave you $; **Kanye West** gives you badly $; **Lady Gaga** steal you $; **Stephen Hawking** with the force of his thought gives you $; **SonBest** squarely give you $; **A stranger ** beats you up but let it go $]**$random[0;60]**]
    $color[$randomText[65280;16711680;C8C864;47eabc;df2e90;543683;264bec;d20057;515e63;497147;376034;087264;4ca6ff;460a18;faebd7;eed330;cb4bca;fffff2;fffc3c;b507db;ff8d00;00ff38;ff00e7;98bdf0;daf7f8;b9e0d9;debcb0;ffb3b3;b8d9d0;83d0f2;552f2e;fff380;0000ff;ff4d00;afb169;afaf0a;ffffff;c7ae71;a77c86;17264f;cbffe8;c7bbc9;debcb0;010649;feebe6]]
    $onlyIf[$getVar[réputation;$authorID]>0;🚨Désormais tu ne peux plus mendier de l'argent, tu as trop demandé aux célébrités,  maintenant, ils te repoussent tous..Ta réputation doit être de plus de 1%.]
    $setVar[Gooddeed;$sub[$getVar[Gooddeed;$authorID];1];$authorID]
    $setVar[réputation;$sub[$getVar[réputation;$authorID];1];$authorID]
    
    $setServerVar[Evenement;$sum[$getServerVar[Evenement];$random[0;6]]]
    
    `
  
   })

bot.Command({
  
   name: "convert",
   aliases: ["exechange"],
    code: `
    $title[<:exchange:851176321253113886> **Exchange** <:exchange:851176321253113886>]
    $description[You converted $$message[1] from Money to Cash.]
    $setVar[Cash;$sum[$getVar[Cash;$authorID];$message[1]];$authorID]
    $setVar[money;$sub[$getVar[money;$authorID];$message[1]];$authorID]
$addTimestamp
$editIn[10s;<:success:850913520408068098> Your ** conversation ** of \`$$message[1]\` have been realised , \`$500\` Money et \`$300\` Cash has been recovered..]
 
$footer[The conversion costs $500 of Money and $300 of Cash. ]
$color[33ff33]
   
    $onlyIf[$sub[$getVar[money;$authorID];$message[1]]>0;<:error:850913520466919450> You will not have enough to pay for the conversion ... You will have **$sub[$getVar[money;$authorID];$message[1]]**...]
    $onlyIf[$message[1]>699;<:error:850913520466919450> You have to convert more than $700 of money!.]
$onlyIf[$message[1]<=$getVar[money;$authorID];**<:error:850913520466919450> You can't convert more than you have !**]
$onlyIf[$getVar[money;$authorID]>899;<:error:850913520466919450> You must have a minimum of $900 of Money to be able to convert to Cash.]
$onlyIf[$getVar[Cash;$authorID]>499;<:error:850913520466919450> You must have at least $500 of Cash to be able to convert .]
   $onlyIf[$message[1]!=;<:error:850913520466919450> You have to give the quantity to convert.]
`
  
   })

bot.Command({
  
  name: "crime",
    code: `
    $globalCooldown[25m;<:slowmode:851114785672396861> You cannot commit a crime if the cooldown is not over \`{time}\` .]
    $onlyIf[$getVar[Police;$authorID]<6;<:no:765020908833341490> Now you can't do a crime anymore because you have **$getVar[Police;$authorID]** Police on your tail.]
$setVar[Cash;$sum[$getVar[Cash;$authorID];$random[-300;800]];$authorID]
$replaceText[$replaceText[$checkCondition[$random[-300;800]<0];true;$randomText[You couldn't do your crime robbing the bank of New York, so you lost **$$random[-300;800]**;You tried to rob a man on a bicycle but he quickly called the police and you got arrested, you lose **$$random[-300;800]**;There were people around to point you out when they saw you fly, you lost **$$random[-300;800]**]];false;**$username[$authorID]** You have **$randomText[stolen discreetly from the bank; killed a policeman ; killed a stranger ; stole sausages from local merchants ; stole an old car ; rob prostitutes ; stole the lollipop from the city mayor's son ; sold baby cats to a visually incorrect person; crushed a passerby; sold illegal music albums ; sold drugs ; robbed a grocery store ; gave false information about someone from politics ; distributed cheap guns to gangs ; kidnapped the mayor's frog ; took an object a museum; exchanged babies at the maternity ward ...]** and you were able to recover **$$random[-300;800]** Cash.]
$setVar[Police;$sum[$getVar[Police];$random[0;3]]]
$setVar[Gooddeed;$sub[$getVar[Gooddeed;$authorID];3];$authorID]
$setServerVar[Evenement;$sum[$getServerVar[Evenement];2]]
$suppressErrors[<:error:850913520466919450>** There is an errors in the command, check it or ask the support. **]
    
    `
  
  
   })

bot.Command({
  
  name: "daily",
   aliases: ["d"],
    code:  `
     $globalCooldown[1d;<:slowmode:851114785672396861> You have to wait at least \`{time}\` to redo this command!]
    $setVar[money;$sum[$getVar[money;$authorID];$random[600;999]];$authorID]
    $author[Daily Money🌄;$userAvatar[$authorID]]
    $description[💰 You have been won **$$random[600;999]** today **$username[$authorID]** ! \nYou are given money every day so that your life is not too sad...]
    $color[$random[999;999999]]
     $setServerVar[Evenement;$sum[$getServerVar[Evenement];2]]
   
    `
  
  
   })

bot.Command({
  
  name: "dep",
   aliases: ["deposite"],
    code: `
    
    $setVar[Cash;0;$authorID]
    $onlyIf[$getVar[Cash;$authorID]>25;$replaceText[$replaceText[$checkCondition[$message[1]!=all];true;];false;You must have a minimum of ** $100 ** Cash .]]
    $setVar[Bank;$sum[$getVar[Bank;$authorID];$getVar[Cash;$authorID]];$authorID]
    $onlyIf[$getVar[Cash;$authorID]!=0;$replaceText[$replaceText[$checkCondition[$message[1]!=all];true;];false; <:error:850913520466919450> ** You can't deposit Cash because you don't have any.**]]
    $author[💵 You deposited all your Cash 💶;$userAvatar[$authorID]]
    $description[<:success:850913520408068098> You deposited **$$getVar[Cash;$authorID]** on your Bank🤵🏻💸.Thanks for trusting us \`$username[$authorID]\` !:bank:]
    $addTimestamp
     
    $color[28FF00]
    $globalCooldown[3m;$replaceText[$replaceText[$checkCondition[$isNumber[$message[1]]==true];true;];false;<:slowmode:851114785672396861> You need wait \`{time}\` so you can deposit all your money once again...]]
    $onlyIf[$message[1]==all;]
    
    
    `
  
   })

bot.Command({
   name: "dep",
   aliases: ["deposite"],
    code: `
   
   $description[<:success:850913520408068098> You deposited **$$message[1]** on your Bank🤵🏻💸.Thanks for trusting us \`$username[$authorID]\` !:bank:]
    $setVar[Cash;$sub[$getVar[Cash;$authorID];$message[1]];$authorID]
    $setVar[Bank;$sum[$getVar[Bank;$authorID];$message[1]];$authorID]
    $addTimestamp   
    $color[28FF00]
      
    $globalCooldown[3m;<:slowmode:851114785672396861> You need wait \`{time}\` so you can deposit all your money once again...]
     $setServerVar[Evenement;$sum[$getServerVar[Evenement];1]]
    $onlyIf[$message[1]>49;$replaceText[$replaceText[$checkCondition[$message[1]==all];true;];false;<:error:850913520466919450> You need to deposit more than ** $50 ** Cash. ]]
    $onlyIf[$getVar[Cash;$authorID]>99;$replaceText[$replaceText[$checkCondition[$message[1]==all];true;];false; You must have a minimum of ** $100 ** Cash .]]
    $onlyIf[$message[1]<=$getVar[Cash;$authorID];$replaceText[$replaceText[$checkCondition[$message[1]==all];true;];false;**<:error:850913520466919450> You can't deposit more than you got !**]]
    $onlyIf[$isNumber[$message[1]]==true; <:error:850913520466919450> The characters \`$message[1]\` is not a number.]
    $onlyIf[$message[1]!=; ]
    $onlyIf[$message[1]!=all;]
    `
  
   })

bot.Command({
  
  name: "farm",
    aliases: ["f"],
    code: `
    $onlyIf[$getUserVar[Patate]<4;]
    $globalCooldown[3m; <:slowmode:851114785672396861> Sorry you are tired, rest for a while \`{time}\` to start working again.]
    $setVar[money;$sum[$getVar[money;$authorID];$random[5;31]];$authorID]
    $author[Farm Time🌾; $userAvatar[$authorID]]
    $description[You have $randomText[got the milk from the cows <:milk:851469942896853014>; finally got the eggs from the hens🥚 ; fed the horses; repaired the mill; fed the pigs \🐷; harvest 4 corn; plant 2 trees <:bonsaitree:851469530823655464> ; harvest your carrots 🥕; sell your beef] 
    and you won **$$random[5;31]**!]
    $color[1CFF00]
    $setServerVar[Evenement;$sum[$getServerVar[Evenement];2]]
    
    `
  
   })

bot.Command({
   name: "fish",
    aliases: ["fi"],
    code: `
    **$username** captured $randomText[🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;<:tfish:851203923695239168> ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;<:doubled_goldfish:851203923858554970> ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐙 ;🦈 ;🦀 ;🦐 ;🦑 ;🐡 ;🐢 ;🐳 ;🐋 ;🐬 ;🔋 ;🔋 ;🔋 ;🔋 ;🔋 ;🔋 ;🔋 ;<:neonjellyfish:851203922395004950> ;🔋 ;🔋 ;🔋 ;🔋 ;🔋 ;🔋 ;🔋 ;🔋 ;🔋 ;🔋 ;🔋 ;🔋 ;📎 ;<:cowboyfish:851203923842957312> ;📎 ;📎 ;<:EggRare:851203922253316137> ;📎 ;📎 ;<:efish:851203923837976646> ;📎 ;📎 ;📎 ;<:Gems:851161326506999848> ;📎 ;📎 ;📎 ;📎 ;📎 ;📎 ;📎 ;📎 ;🛒 ;🛒 ;🛒 ;🛒 ;🛒 ;<:peachfish:851203924269596682> ;🛒 ;🛒 ;🛒 ;🛒 ;🛒 ;🛒 ;🛒 ;🛒 ;<:purplejellyfish:851203923067142144> ;🛒 ;🛒 ;🛒 ;🛒 ;🛒 ;🔧 ;🔧 ;🔧 ;🔧 ;🔧 ;🔧 ;🔧 ;🔧 ;🔧 ;🔧 ;🔧 ;<:sharkcry:851203923142377502> ;🔧 ;🔧 ;🔧 ;🔧 ;🔧 ;🔧 ;🔧 ;🔧 ;👞 ;👞 ;👞 ;👞 ;👞 ;👞 ;👞 ;👞 ;👞 ;👞 ;👞 ;👞 ;👞 ;👞 ;👞 ;<:Fishing:851203923272663050> ;<:fishington:851203924529512489> ;<:fishy:851203923440042014> ;<:jellyfish:851203922873810944> ;<:legendaryfish:851203924898611250> ;👞 ;<:rarecandy:851203922738806814> ;👞 ;👞 ;👞;🌟 ;<a:bobo:741787933803282463>]
  $author[$username[$authorID] sold it for :;$authorAvatar]
$color[$random[000;99999]]
$description[**$$random[5;50]** at the fishermen's shop for your $randomText[🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;<:tfish:851203923695239168> ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐟 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;<:doubled_goldfish:851203923858554970> ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐠 ;🐙 ;🦈 ;🦀 ;🦐 ;🦑 ;🐡 ;🐢 ;🐳 ;🐋 ;🐬 ;🔋 ;🔋 ;🔋 ;🔋 ;🔋 ;🔋 ;🔋 ;<:neonjellyfish:851203922395004950> ;🔋 ;🔋 ;🔋 ;🔋 ;🔋 ;🔋 ;🔋 ;🔋 ;🔋 ;🔋 ;🔋 ;🔋 ;📎 ;<:cowboyfish:851203923842957312> ;📎 ;📎 ;<:EggRare:851203922253316137> ;📎 ;📎 ;<:efish:851203923837976646> ;📎 ;📎 ;📎 ;<:Gems:851161326506999848> ;📎 ;📎 ;📎 ;📎 ;📎 ;📎 ;📎 ;📎 ;🛒 ;🛒 ;🛒 ;🛒 ;🛒 ;<:peachfish:851203924269596682> ;🛒 ;🛒 ;🛒 ;🛒 ;🛒 ;🛒 ;🛒 ;🛒 ;<:purplejellyfish:851203923067142144> ;🛒 ;🛒 ;🛒 ;🛒 ;🛒 ;🔧 ;🔧 ;🔧 ;🔧 ;🔧 ;🔧 ;🔧 ;🔧 ;🔧 ;🔧 ;🔧 ;<:sharkcry:851203923142377502> ;🔧 ;🔧 ;🔧 ;🔧 ;🔧 ;🔧 ;🔧 ;🔧 ;👞 ;👞 ;👞 ;👞 ;👞 ;👞 ;👞 ;👞 ;👞 ;👞 ;👞 ;👞 ;👞 ;👞 ;👞 ;<:Fishing:851203923272663050> ;<:fishington:851203924529512489> ;<:fishy:851203923440042014> ;<:jellyfish:851203922873810944> ;<:legendaryfish:851203924898611250> ;👞 ;<:rarecandy:851203922738806814> ;👞 ;👞 ;👞;🌟 ;<a:bobo:741787933803282463>]! <:fisher:851207202717958144>]
   $globalCooldown[3m; <:slowmode:851114785672396861> Sorry you are tired, rest for a while \`{time}\` to start fishing again.]
$setVar[money;$sum[$getVar[money;$authorID];$random[5;50]];$authorID]
$setVar[Gooddeed;$sub[$getVar[Gooddeed;$authorID];1];$authorID]
$setVar[poisson;$sum[$getVar[poisson;$authorID];1];$authorID]
$onlyIf[$getVar[peche;$authorID]>0; You don't even have a ** Fishing Rod, ** and you're too weak to hand fish, so buy one! ]
$onlyIf[$getVar[peche;$authorID]<2;]
  
  
  
    `
  
   })

bot.Command({
  
    name: "inv",
    aliases: [ "inventory"],
    code: `
    $author[$username[$mentioned[1;yes]] Inventory ;$userAvatar[$mentioned[1;yes]]]
    $onlyIf[$message[1]!=;]
    $onlyIf[$memberExists[$mentioned[1]]==true;]
    $thumbnail[$userAvatar[$mentioned[1;yes]]]
    $footer[Inventory of $username[$mentioned[1]] | Miuri - Page 1/3 ;$userAvatar[$mentioned[1]]]
    $addTimestamp
    $color[$randomText[$randomText[$random[0;9];$randomText[f;a;b;c;d;e]]$randomText[$random[0;9];$randomText[e;f;a;b;c;d]]$randomText[$random[0;9];$randomText[d;e;f;a;b;c]]$randomText[$random[0;9];$randomText[c;d;e;f;a;b]]$randomText[$random[0;9];$randomText[b;c;d;e;f;a]]$randomText[$random[0;9];$randomText[a;b;c;d;e;f]]]]
    
    $description[
        <:Redcrown:851162412425150494> **__Inventaire__** de <@$mentioned[1]> :
        $replaceText[$replaceText[$checkCondition[$sum[$getVar[Keys;$mentioned[1;yes]];$getVar[nourriture;$mentioned[1;yes]];$getVar[cuisine;$mentioned[1;yes]];$getVar[peche;$mentioned[1;yes]];$getVar[Patate;$mentioned[1;yes]];$getVar[ticket;$mentioned[1;yes]];$getVar[voiture;$mentioned[1;yes]];$getVar[papier;$mentioned[1;yes]];$getVar[garde;$mentioned[1;yes]]]==0];true;
        **No Found**];false;$replaceText[$replaceText[$checkCondition[$getVar[Keys;$mentioned[1;yes]]==0];true;];false;
        **🔑Key🔑**
        \`$getVar[Keys;$mentioned[1;yes]]\` key.🌟🔹️]$replaceText[$replaceText[$checkCondition[$getVar[nourriture;$mentioned[1;yes]]==0];true; ];false;
        **🌮Food🥪**
        \`$getVar[nourriture;$mentioned[1;yes]]\` Food(s).🔸️]$replaceText[$replaceText[$checkCondition[$getVar[cuisine;$mentioned[1;yes]]==0];true; ];false;
        **👨‍🍳KCooking lessons👨‍🍳**
        \`$getVar[cuisine;$mentioned[1;yes]]\` Cooking lessons.🔺️🔸️]$replaceText[$replaceText[$checkCondition[$getVar[peche;$mentioned[1;yes]]==0];true; ];false;
        **🎣Fishing rod 🐟**
        \`$getVar[peche;$mentioned[1;yes]]\` Fishing rod.🔺️🔸️]$replaceText[$replaceText[$checkCondition[$getVar[Patate;$mentioned[1;yes]]==0];true; ];false;
        **🥔Magic potato🌟**
        \`$getVar[Patate;$mentioned[1;yes]]\` Magic potato.🔹️🔸️]$replaceText[$replaceText[$checkCondition[$getVar[ticket;$mentioned[1;yes]]==0];true; ];false;
        **🏷Ticket🎫**
        \`$getVar[ticket;$mentioned[1;yes]]\` Ticket.🔺️]$replaceText[$replaceText[$checkCondition[$getVar[voiture;$mentioned[1;yes]]==0];true; ];false;
        **🚙Car**
        \`$getVar[voiture;$mentioned[1;yes]]\` remaining use.🔹️]$replaceText[$replaceText[$checkCondition[$getVar[papier;$mentioned[1;yes]]==0];true; ];false;
        **🧻Toilet paper🧻**
        \`$getVar[papier;$mentioned[1;yes]]\` Toilet paper.🔹]$replaceText[$replaceText[$checkCondition[$getVar[garde;$mentioned[1;yes]]==0];true; ];false;
        **🕴🏼Bodyguard🕴🏿**
        \`$getVar[garde;$mentioned[1;yes]]\` Privilege(s) of protection.🌟]  ]
        
        ]
    
    
    `
  
   })

bot.Command({
  name: "inv",
    aliases: ["inventory"],
    code: `
    $author[🤵🏻INVENTAIRE💰]
    
    $onlyIf[$message[1]==;]
    $footer[Inventory Miuri - Page 1/3 ;$userAvatar[$authorID]]
    $thumbnail[$authorAvatar]
    $addTimestamp
    $color[$randomText[$randomText[$random[0;9];$randomText[f;a;b;c;d;e]]$randomText[$random[0;9];$randomText[e;f;a;b;c;d]]$randomText[$random[0;9];$randomText[d;e;f;a;b;c]]$randomText[$random[0;9];$randomText[c;d;e;f;a;b]]$randomText[$random[0;9];$randomText[b;c;d;e;f;a]]$randomText[$random[0;9];$randomText[a;b;c;d;e;f]]]]
    
    $description[
        <:Redcrown:851162412425150494> **__Inventory__** of <@$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1]];true;$authorID];false;$mentioned[1;yes]]> :
        $replaceText[$replaceText[$checkCondition[$sum[$getVar[Keys;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1]];true;$authorID];false;$mentioned[1;yes]]];$getVar[nourriture;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1]];true;$authorID];false;$mentioned[1;yes]]];$getVar[cuisine;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1]];true;$authorID];false;$mentioned[1;yes]]];$getVar[peche;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1]];true;$authorID];false;$mentioned[1;yes]]];$getVar[Patate;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1]];true;$authorID];false;$mentioned[1;yes]]];$getVar[ticket;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1]];true;$authorID];false;$mentioned[1;yes]]];$getVar[voiture;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1]];true;$authorID];false;$mentioned[1;yes]]];$getVar[papier;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1]];true;$authorID];false;$mentioned[1;yes]]];$getVar[garde;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1]];true;$authorID];false;$mentioned[1;yes]]]]==0];true;
        **No Found**];false;$replaceText[$replaceText[$checkCondition[$getVar[Keys;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1]];true;$authorID];false;$mentioned[1;yes]]]==0];true;];false;
        **🔑Key🔑**
        \`$getVar[Keys;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1]];true;$authorID];false;$mentioned[1;yes]]]\` key.🌟🔹️]$replaceText[$replaceText[$checkCondition[$getVar[nourriture;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1]];true;$authorID];false;$mentioned[1;yes]]]==0];true; ];false;
        **🌮Food🥪**
        \`$getVar[nourriture;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1]];true;$authorID];false;$mentioned[1;yes]]]\` of Food.🔸️]$replaceText[$replaceText[$checkCondition[$getVar[cuisine;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1]];true;$authorID];false;$mentioned[1;yes]]]==0];true; ];false;
        **👨‍🍳Cooking lessons🍳**
        \`$getVar[cuisine;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1]];true;$authorID];false;$mentioned[1;yes]]]\` Cooking lessons.🔺️🔸️]$replaceText[$replaceText[$checkCondition[$getVar[peche;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1]];true;$authorID];false;$mentioned[1;yes]]]==0];true; ];false;
        **🎣Fishing rod🐟**
        \`$getVar[peche;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1]];true;$authorID];false;$mentioned[1;yes]]]\` Fishing rod .🔺️🔸️]$replaceText[$replaceText[$checkCondition[$getVar[Patate;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1]];true;$authorID];false;$mentioned[1;yes]]]==0];true; ];false;
        **🥔Magic potato🌟**
        \`$getVar[Patate;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1]];true;$authorID];false;$mentioned[1;yes]]]\` magic potatoes.🔹️🔸️]$replaceText[$replaceText[$checkCondition[$getVar[ticket;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1]];true;$authorID];false;$mentioned[1;yes]]]==0];true; ];false;
        **🏷Ticket🎫**
        \`$getVar[ticket;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1]];true;$authorID];false;$mentioned[1;yes]]]\` Ticket(s).🔺️]$replaceText[$replaceText[$checkCondition[$getVar[voiture;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1]];true;$authorID];false;$mentioned[1;yes]]]==0];true; ];false;
        **🚙Car**
        \`$getVar[voiture;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1]];true;$authorID];false;$mentioned[1;yes]]]\` remaining use.🔹️]$replaceText[$replaceText[$checkCondition[$getVar[papier;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1]];true;$authorID];false;$mentioned[1;yes]]]==0];true; ];false;
        **🧻Toilet paper🧻**
        \`$getVar[papier;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1]];true;$authorID];false;$mentioned[1;yes]]]\` Toilet paper.🔹]$replaceText[$replaceText[$checkCondition[$getVar[garde;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1]];true;$authorID];false;$mentioned[1;yes]]]==0];true; ];false;
        **🕴🏼Bodyguard🏿**
        \`$getVar[garde;$replaceText[$replaceText[$checkCondition[$message[1]==$mentioned[1]];true;$authorID];false;$mentioned[1;yes]]]\` Privilege(s) of protection.🌟]  ]
        
        ]
    
    
    `
  
   })

bot.Command({
   name: "money",
   aliases: ["m"],
    code: `
    $onlyIf[$message[1]!=$mentioned[1;yes];]
    $thumbnail[$userAvatar[$mentioned[1;yes]]]
    $author[$username[$mentioned[1;yes]] Money  ;$userAvatar[$mentioned[1;yes]]]
    $description[ 
        **Money 💰:** \`$$getVar[money;$mentioned[1;yes]]\`
        <:coins:851159038837129276> Coins Bonus \`$getVar[pointbonus;$mentioned[1;yes]]\`
    ]
    $footer[ Nuk3 Money]
    $color[36393F]
    $addTimestamp
    `
  
   })

bot.Command({
  name: "profil",
   aliases: ["p"],
    code: `
    
    $onlyIf[$message[1]!=$mentioned[1;yes];]
    $color[$random[00;999999]]
    
    $author[$username[$mentioned[1;yes]] profile  ;$userAvatar[$mentioned[1;yes]]]
    $thumbnail[$userAvatar[$mentioned[1;yes]]]
    $description[
       <:Redcrown:851162412425150494> $replaceText[$replaceText[$checkCondition[$status[$mentioned[1;yes]]==online];true;<:online:851223163428929536>];false;]$replaceText[$replaceText[$checkCondition[$status[$mentioned[1;yes]]==dnd];true;<:dnd:851223163757002752>];false;]$replaceText[$replaceText[$checkCondition[$status[$mentioned[1;yes]]==idle];true;<:idle:851223163395506207>];false;]$replaceText[$replaceText[$checkCondition[$status[$mentioned[1;yes]]==offline];true;<:offline:851223165950230588>];false;]<@$mentioned[1;yes]> $replaceText[$replaceText[$checkCondition[$getUserBadges[735499202582413342]==HOUSE_BALANCE];true;<:ballance:759899412704133130>];false;]$replaceText[$replaceText[$checkCondition[$getUserBadges[735499202582413342]==HOUSE_BRAVERY];true;<:bravery:759899316755759114>];false;]$replaceText[$replaceText[$checkCondition[$getUserBadges[735499202582413342]==HOUSE_BRILLIANCE];true;<:brillance:759900477369483265>];false;]
        
    **Rank:** $replaceText[$replaceText[$checkCondition[$getVar[prestige;$mentioned[1;yes]]==0];true;\`None\`\n{hyper:□□□□:https://www.youtube.com/watch?v=5_Xdi4T8mgI}];false;]$replaceText[$replaceText[$checkCondition[$getVar[prestige;$mentioned[1;yes]]==1];true;<:prestiger1:749725312891224115>\n{hyper:■□□□:https://www.youtube.com/watch?v=5_Xdi4T8mgI}];false;]$replaceText[$replaceText[$checkCondition[$getVar[prestige;$mentioned[1;yes]]==2];true;<:prestiger2:749725313050607626>\n{hyper:■■□□:https://www.youtube.com/watch?v=5_Xdi4T8mgI}];false;]$replaceText[$replaceText[$checkCondition[$getVar[prestige;$mentioned[1;yes]]==3];true;<:prestiger3:749725312731971666>\n{hyper:■■■□:https://www.youtube.com/watch?v=5_Xdi4T8mgI}];false;]$replaceText[$replaceText[$checkCondition[$getVar[prestige;$mentioned[1;yes]]>3];true;<:vip:766141422503067699>\n{hyper:■■■■:https://www.youtube.com/watch?v=5_Xdi4T8mgI}];false;] $replaceText[$replaceText[$checkCondition[$getVar[vip;$mentioned[1;yes]]==No Vip];true;];false;<:VIP:851521623693852752>]
           $addField[Clan ;
$getVar[clanlogo;$mentioned[1;yes]] $getVar[clan;$mentioned[1;yes]]
;yes]
$addField[🎖️ Honor ;
\`\`\`$getVar[réputation;$mentioned[1;yes]]%\`\`\`
;yes]
 $addField[✨Reputation ;
\`\`\`$replaceText[$replaceText[$checkCondition[$getVar[Gooddeed;$mentioned[1;yes]]>0];true;**$getVar[Gooddeed;$mentioned[1;yes]]%** good deeds];false; Bad person] \`\`\`             
;yes]
$addField[:police_officer: Police ;
\`\`\`$replaceText[$replaceText[$checkCondition[$getVar[Police;$mentioned[1;yes]]==0];true;Any];false;$getVar[Police;$mentioned[1;yes]]]\`\`\`
;yes]
         $addField[👥 Friends ;
\`\`\`$replaceText[$replaceText[$checkCondition[$getVar[Amis;$mentioned[1;yes]]==0];true;];false;$replaceText[$replaceText[$checkCondition[$getVar[Amis;$mentioned[1;yes]]==0];true;Any];false;$getVar[Amis;$mentioned[1;yes]]] here]\`\`\`
;yes]
                          $addField[** Total 📊   **;
\`\`\`$$sum[$getVar[money;$mentioned[1;yes]];$getVar[Cash;$mentioned[1;yes]];$getVar[Bank;$mentioned[1;yes]]]\`\`\`
;yes]
$addField[**Gems** <:Gems:851161326506999848>;
\`\`\`$getVar[diamand;$mentioned[1;yes]]\`\`\`
;yes]
$addField[**Coins Bonus <:coins:851159038837129276>**;
\`\`\`$getVar[pointbonus;$mentioned[1;yes]]\`\`\`
;yes]
$addField[** Bank <:OnlineBanking:851157625936937001> ** ;
\`\`\`$$getVar[Bank;$mentioned[1;yes]]\`\`\`
;yes]
$addField[**Cash 💸    **;
\`\`\`$$getVar[Cash;$mentioned[1;yes]]\`\`\`
;yes]
       $addField[**Money 💰 **;
\`\`\`$$getVar[money;$mentioned[1;yes]] \`\`\`
;yes]
    
    
    ]
    
    `
  
   })

bot.Command({
  name: "rob",
    aliases: [ "steal"],
    code: `
    $setVar[money;$sub[$getVar[money;$mentioned[1;yes]];$random[0;1500]];$mentioned[1;yes]]
    $setVar[money;$sum[$getVar[money;$authorID];$random[0;1500]];$authorID]
    $author[Rob;$userAvatar[$authorID]]
    $color[$random[0000;99999]]
    $description[$username[$authorID] steal money from <@$mentioned[1;yes]> **$randomText[ by pointing a rifle between his eyes and managed to squeeze him **\`$$random[0;1500]\`**  ; stabbing him and stealing from him **\`$$random[0;1500]\`** ; by blinding him with a disinfectant and managed to extract him **\`$$random[0;1500]\`** ; by hitting his head with a large stone and succeeded in extracting **\`$$random[0;1500]\`; during his sleep and managed to steal it discreetly **\`$$random[0;1500]\`; during a friendly hug and managed to take him **\`$$random[0;1500]\`; in him roll over and managed to recover **\`$$random[0;1500]\` and his watch; while he listened to music and managed to derail him **\`$$random[0;1500]\`; during a concert and managed to get him **\`$$random[0;1500]\`] ]
    $setVar[réputation;$sub[$getVar[réputation;$authorID];$random[1;3]];$authorID]
    $setVar[Evenement;$sum[$getVar[Evenement;$authorID];4];$authorID]
    $globalCooldown[12m;<:slowmode:851114785672396861> You need wait \`{time}\` to be able to try again to steal someone again ]
    $onlyIf[$userExists[$mentioned[1;yes]]==true;<<:error:850913520466919450>  It is not a mention. ]
    $onlyIf[$mentioned[1;yes]!=$client[id];<:error:850913520466919450> ** You cannot mention the bot for this kind of command.**]
    $onlyIf[$mentioned[1;yes]!=$authorID;<:error:850913520466919450> You can't mention yourself.]
    $onlyIf[$getVar[garde;$mentioned[1;yes]]<1;<:error:850913520466919450> ⚠️🕴🏾 **This person has a Bodyguard so cannot be stolen⚠️!**]
    $onlyIf[$getVar[Police;$authorID]<5;<:error:850913520466919450> You have too many policemen around you, do a good deed or they will end up catching you ...]
    $onlyIf[$getVar[money;$authorID]>1500;<:error:850913520466919450> You do not have enough money. You must have at least ** $1500 of Money ** to be able to commit a theft.]
    $onlyIf[$getVar[money;$mentioned[1;yes]]>1500;<:error:850913520466919450> This person must have ** more than $1500 ** to be a victim of theft.]
    $onlyIf[$message[1]!=;<:error:850913520466919450> You have to mention someone.]
    $onlyIf[$isBot[$mentioned[1;yes]]!=;]
    
    `
  
   })

bot.Command({
  name: "weekly",
   aliases: ["wk"],
    code: `
    
    $author[💎Reward of the Week $username[$authorID]💎;$userAvatar[$authorID]]
$color[$randomText[$randomText[$random[0;9];$randomText[f;a;b;c;d;e]]$randomText[$random[0;9];$randomText[e;f;a;b;c;d]]$randomText[$random[0;9];$randomText[d;e;f;a;b;c]]$randomText[$random[0;9];$randomText[c;d;e;f;a;b]]$randomText[$random[0;9];$randomText[b;c;d;e;f;a]]$randomText[$random[0;9];$randomText[a;b;c;d;e;f]]]]
$description[This week you win $$random[1200;5500] <:reward:851485002470522960> , directly in your bank!]
$setVar[Bank;$sum[$getVar[Bank;$authorID];$random[1200;5500]];$authorID]
$globalCooldown[1w;<:slowmode:851114785672396861> You need wait \`{time}\` to be able to redo this command ! ]
$footer[💎 Weekly 💎]
$addTimestamp
$setServerVar[Evenement;$sum[$getServerVar[Evenement];4]]
    
    
    
    
    `
  
   })

bot.Command({
   name: "withdraw",
    aliases: [ "with"],
    code: `
    $description[You remove **$$message[1]** Cash of your Bank 💸! 
    Bank:bank:** >> $sub[$getVar[Bank;$authorID];$message[1]]** <:withdraw:851488512171442196> \`-$message[1]\` 
    Cash💸**>> $sum[$getVar[Cash;$authorID];$message[1]]** <:deposite:851488517196742717> \`+$message[1]\` ]
    $color[d28108]
     $setVar[Bank;$sub[$getVar[Bank;$authorID];$message[1]];$authorID]
    $setVar[Cash;$sum[$getVar[Cash;$authorID];$message[1]];$authorID]
  
    $onlyIf[$message[1]<=$getVar[Bank;$authorID];**⚠️You can't take more than you got!**]
    $footer[$username[$authorID] ;$userAvatar[$authorID]]
    $globalCooldown[5m;<:slowmode:851114785672396861> You cannot make this command during **{time}** .]
    $addTimestamp
    $setServerVar[Evenement;$sum[$getServerVar[Evenement];1]]
    `
  
   })

bot.Command({
   name: "work",
    aliases: ["w"],
    code: `
    
    $setVar[money;$sum[$getVar[money;$authorID];$random[25;250]];$authorID]
    $title[You worked <:success:850913520408068098>]
    $color[$random[0000;99999]]
    $description[🤵🏾Congratulations! You worked as **$randomText[Carglass worker; Code; valet parking; Sports teacher; Librarian; Banker; Bus driver; Train conductor; Yououtuber; Hacker; CEO; McDonald's employee; Helper; Beggar; cleaner; pilot; farmer; Designer; Graphic designer; Car mechanic; Plumber; Developer; Professional player; Garbage collector]** ,\nwhile doing your job you have successfully graduated \`$$random[25;250]\`!]
    $globalCooldown[60m;<:slowmode:851114785672396861> Sorry, you need wait \`{time}\` for work again.]
    $setVar[réputation;$sum[$getVar[réputation;$authorID];$random[1;6]];$authorID]
    $setServerVar[Evenement;$sum[$getServerVar[Evenement];4]]
    $addTimestamp
    $onlyIf[$getVar[nourriture;$authorID]<4;    ]
    
    `
  
   })

bot.Command({
    name: "covid",
   aliases: ["corona"],
    code: `
    $author[___¿Covid?___;$userAvatar[$mentioned[1;yes]]]
    $description[You caught the __Covid-19__ at $random[50;100]% $randomText[🤨;😯;😟;😰;😭;😳;😱;🤯Omg!;bye $username[$mentioned[1;yes]] <:covid:851490533984960553>;Ohh no zut, its stupid that..]]
    $color[$random[9;9999]]
   $cooldown[20s;<:slowmode:851114785672396861> Please wait \`{time}\`]
    `
  
   })

bot.Command({
   name: "joke",
    code: `
    $author[Only En]
    $title[$api[https://sv443.net/jokeapi/v2/joke/Any;setup]]
    $color[$random[0;999999]]
    $description[$api[https://sv443.net/jokeapi/v2/joke/Any;delivery]]
    `
  
   })

bot.Command({
  name: "reddit",
    code: `
    $color[$randomText[65280;16711680;C8C864;47eabc;df2e90;543683;264bec;d20057;515e63;497147;376034;087264;4ca6ff;460a18;faebd7;eed330;cb4bca;fffff2;fffc3c;b507db;ff8d00;00ff38;ff00e7;98bdf0;daf7f8;b9e0d9;debcb0;ffb3b3;b8d9d0;83d0f2;552f2e;fff380;0000ff;ff4d00;afb169;afaf0a;ffffff;c7ae71;a77c86;17264f;cbffe8;c7bbc9;debcb0;010649;feebe6]]
    $author[u/$api[https://meme-api.herokuapp.com/gimme/$message[];author]]
    $description[{hyper:$api[https://meme-api.herokuapp.com/gimme/$message[];title]:$api[https://meme-api.herokuapp.com/gimme/$message[];postLink]}]
    $image[$api[https://meme-api.herokuapp.com/gimme/$message[];url]]
    $footer[🔼 Upvotes: $api[https://meme-api.herokuapp.com/gimme/$message[];ups];https://media.discordapp.net/attachments/764705984199000105/767131664576151562/logo-reddit.png?width=663&height=663]
   
    $onlyIf[$api[https://meme-api.herokuapp.com/gimme/$message[];nsfw]!=true;{description:<:no:765020908833341490> Blocked content: may contain adult content.}]
    $onlyIf[$api[https://meme-api.herokuapp.com/gimme/$message[];message]!=This subreddit has no post or does not exist.;{description:<:no:765020908833341490> Ce subreddit n'existe pas!}]
    $onlyIf[$message[]!=;{description:<:no:765020908833341490> Please provide a subreddit.}{color:RED}{author:Erreur}]
    `
  
   })

bot.Command({
  
   name: "commands",
   aliases: ["cmd"],
    code: `
      
   $onlyIf[$message[1]==;]
    $color[03eb7c]
    $author[Miuri - Help Global;https://images-ext-1.discordapp.net/external/qr-Eh0_OtvsidYxdIOv3gBVm4L33KeDV-0GZXFXjfIs/https/images-ext-1.discordapp.net/external/hlWjqvVLX7H2Puut0Rqnf7GVHYpapAxprE-E4vtBMYM/https/images-ext-1.discordapp.net/external/6oPzlvTReXeL5eKlqYF0uHL4_ITtlV4KOSCENSCI2Bs/%25253Fsize%25253D512/https/cdn.discordapp.com/avatars/850572464794501140/f29fece4d87b52ff15eb84348161ccf1.png]
    
    $description[ **<:botcertied1:850851953835769876><:botcertied2:850851953700372530> You don't have <@851253649522294804> on your server {hyper:$username:https://discord.com/oauth2/authorize?client_id=850572464794501140&permissions=8&scope=bot%20applications.commands} ? (<:beta:850851953679925308>)**
    <:Staffs:850860950949068824> {hyper:**Support**:https://discord.gg/vNgZej8mca} | <:invites:850860394805198938> {hyper:**Invite**:https://discord.com/api/oauth2/authorize?client_id=851253649522294804&permissions=8&scope=applications.commands%20bot} | <:partner_server_owner:850862999639294054> {hyper:**Partner**:https://discord.gg/YuuNEmkBVP}
    $addField[<:configs:850845714531090444> Config ;
    \`\`\`$config\`\`\`
    ;yes]
       $addField[<:Music:850856439216209921> Music;
    \`\`\`$music\`\`\`
    ;yes]
    $addField[<:Staff:850856439026942033> Support ;
    \`\`\`$support\`\`\`
    ;yes]
    $addField[<:globaleconomy:850856197472649276> Economy ;
    \`\`\`$economy\`\`\`
    ;yes]
    $addField[<:Giveaway:850856439593566219> Giveaways ;
    \`\`\`$giveaway\`\`\`
    ;yes]
     $addField[<:mod:850855772400910346> Mods ;
    \`\`\`$mod\`\`\`
    ;yes]
    
    ]
        $image[https://media.discordapp.net/attachments/850565692545302594/850810347052466197/maxresdefault.jpg]
                                           
        $footer[Join Support Server and our partner;$userAvatar[$authorID]]
        $globalCooldown[15s;Veuillez attendre {time} pour pouvoir réutiliser ces magnifiques commande.]
        $addTimestamp
        $thumbnail[https://images-ext-2.discordapp.net/external/TZV2fqBShHzofz9fhYUYZupLBVtMs7rH-MU9u3dR0gM/%3Fsize%3D128/https/cdn.discordapp.com/avatars/850572464794501140/f29fece4d87b52ff15eb84348161ccf1.webp]
    `
  
   })

bot.Command({
  
 name:"purge",
 aliases:["clear","msgdelete"],
 code:`
 $clear[$message[]]
 $title[Message Clearing Successfully Done]
 $description[Successfully Cleared $message[] Message In <#$channelID[]>]
 $color[#17A589]
 $onlyIf[$isNumber[$message[]]==true;{title:An Error Occured}{description:This Is Not A Valid Number!}{color:#17A589}]
 $onlyIf[$message[]!=;{title:An Error Occured}{description:You Didn't Provide The Amount Of Message You Wanna Clear}{color:#17A589}]
 $onlyBotPerms[managemessages;{title:<:error:850913520466919450> An Error Occured}{description:I Need To Have Manage Message Perms}{color:#ff0000}]$onlyPerms[managemessages;{title:An Error Occured}{description:You Didn't Have Manage Message Perms}{color:#17A589}]`
  
   })

bot.Command({
  
name: "rickroll",
code: `
$editIn[2s;You know the rules and so do I;You know the rules and so do I;A full commitment's what I'm thinking of;A full commitment's what I'm thinking of;You wouldn't get this from any other guy;You wouldn't get this from any other guy;I just wanna tell you how I'm feeling;I just wanna tell you how I'm feeling;Gotta make you understand;Gotta make you understand;Never gonna give you up;Never gonna let you down;Never gonna run around and desert you;Never gonna run around and desert you;Never gonna make you cry;Never gonna say goodbye;Never gonna tell a lie and hurt you]
We're no strangers to love
`
   })

bot.Command({
 name: "setnick",
   aliases: ["nick"],
    code: `
$setNickname[$message[1];$message[2]]
$author[Change Nickname;$userAvatar[$authorID]]
$description[
**Old name:** $nickname[$message[1]]
**New surnom:** $message[2]
$onlyIf[$userExists[$message[1]]==true;Insert a valid username to modify!]
$onlyIf[$message[2]!=;Enter a valid nickname for the user!]
$onlyIf[$charCount<=60;You cannot insert a nickname longer than 32 characters!]
$onlyPerms[managenicknames;You must have the Manage Nicknames permission to use this command!]
]
$onlyIf[$rolePosition[$highestRole[$client[id]]]<$rolePosition[$highestRole[$mentioned[1;yes]]];{title:<:error:850913520466919450> Something went wrong!}{description:** My role is not greater than <@$mentioned[1;yes]>!**}{color:FF0000}]
    
`
  
   })


bot.Command({
  
   name: "tempban",
   aliases: ["tb"],
    code: `
   $channelSendMessage[$channelID[$getServerVar[logs]];{title:__Tempban__}{description:**<@$mentioned[1]> is now unbanned!**}{color:00faff}{footer:$serverName[]}{thumbnail:$userAvatar[$mentioned[1]]}]
   
   $unban[$mentioned[1]]
   
   $replyIn[$splitText[1]]
   
   $channelSendMessage[$channelID[$getServerVar[logs]];{thumbnail:$userAvatar[$mentioned[1]]}{title:__Tempban__}{description:**Banned: <@$mentioned[1]>
   By: <@$authorID>
   Reason: \`$replaceText[$replaceText[$checkCondition[$splitText[2]==];true;no reason];false;$splitText[2]]\`
   Time: $splitText[1]**}{color:00faff}{footer:$serverName[]}]
   
   $ban[$mentioned[1];$splitText[2]]
   
   $onlyIf[$splitText[1]!=;{title:<:no:765020908833341490> Missing arguments!}{description:**Usage: \`$getServerVar[prefix]tempban <@user> <time>: <reason>\`**}{color:ff0000}]
   
   $onlyIf[$mentioned[1]!=;{title:<:no:765020908833341490> Missing arguments!}{description:**Usage: \`$getServerVar[prefix]tempban <@user> <time>: <reason>\`**}{color:ff0000}]
   
   $onlyPerms[ban;{title:<:no:765020908833341490> Missing permissions!}{color:d0321d}{description:**You're missing __Ban Members__ permission!**}]
   
   $onlyBotPerms[ban;{title:<:no:765020908833341490> Missing permissions!}{color:d0321d}{description:**Im missing __Ban Members__ permission**!}]
   
   $textSplit[$noMentionMessage[];:]`
  
   })

bot.Command({
  
  name: "tempmute",
   aliases: ["tm"],
    code: `
   $takeRole[$mentioned[1];$roleID[$getServerVar[mute]]]
   $channelSendMessage[$channelID[];{title:__Tempmute__}{description:**<@$mentioned[1]> no longer mute!**}{thumbnail:$userAvatar[$mentioned[1]]}{color:06FF50}{footer:$serverName[]}]
   $replyIn[$splitText[1]]
   $channelSendMessage[$channelID[];{title:__Tempmute__}{thumbnail:$userAvatar[$mentioned[1]]}{description:**Mute: <@$mentioned[1]> 
   Par: <@$authorID>
   Raison: \`$replaceText[$replaceText[$checkCondition[$message[3]!=];true;$message[3]];false;Without reason]\`
   Temps: $splitText[1]**}{color:5AFD8A}{footer:$serverName[]}]
   $giveRole[$mentioned[1];$roleID[$getServerVar[mute]]]
   $onlyBotPerms[manageroles;{title:<:error:850913520466919450> Lack of permission.}{description:** I lack permission __Manage Roles__ !**}{color:FF0000}]
    $onlyIf[$mentioned[1]!=$authorID;{title:<:error:850913520466919450> Something went wrong!}{description:**You can't mutate yourself!**}{color:FF0000}]
    $onlyPerms[manageroles;{title:<:error:850913520466919450> Lack of permission!}{description:**You must have permission __Kick Members__ !**}{color:FF0000}]
    $onlyIf[$mentioned[1]!=;{title:<:error:850913520466919450> Missing arguments!}{description:**Usage: \`$tempmute <@user> <time>: <reason>\`**}{color:FF0000}]
    $onlyIf[$splitText[1]!=;{title:<:error:850913520466919450> Missing arguments!}{description:**Usage: \`$tempmute <@user> <time>: <reason>\`**}{color:FF0000}]
    $textSplit[$message[2];:]
    $onlyIf[$rolePosition[$highestRole[$client[id]]]<$rolePosition[$roleID[$getServerVar[mute]]];{title: <:error:850913520466919450> A problem has arisen!}{description:**My role is not greater than <@&$roleID[$getServerVar[mute]]>!**}{color:FF0000}]
    $onlyIf[$rolePosition[$highestRole[$client[id]]]<$rolePosition[$highestRole[$mentioned[1]]];{title:<:error:850913520466919450>A problem has arisen!}{description:**My role is not greater than <@$mentioned[1]>!**}{color:FF0000}]
    $onlyIf[$roleExists[$getServerVar[mute]]==true;{title:<:error:850913520466919450> Something went wrong!}{description:**The mute role has not been defined or does not exist!**}{color:FF0000}]
    $onlyIf[$userExists[$mentioned[1]]==true;{title:<:error:850913520466919450> Something went wrong!}{description:**The user does not exist!**}{color:FF0000}]
`
  
   })

bot.Command({
name: "setup",
  aliases: ["config"],
code: `
$title[ <:configs:850845714531090444> Big setup bot]
$description[
$addField[<:IconCommingSoon:850903127640113214> <:verysoon:850903127493312562> Soon..;
\`\`\` Soon... \`\`\`
;yes]
$addField[<:server:850898021821579334> Setup server:;
\`\`\` $server \`\`\`
;yes]
$addField[<:IconLogs:850897164255232010> Setup logs:;
\`\`\` $logs \`\`\`
;yes]
$addField[<:whiteedit:850893362873892905> Setup edit:;
\`\`\` $edit \`\`\`
;yes]
$addField[<:IconEmbed:850893363397263370> Setup embed:;
\`\`\` $embed \`\`\`
;yes]
$addField[<:IconGoToMessage:850895606524149780> Setup welcomer:;
\`\`\` $welcome \`\`\`
;yes]

]
$color[36393F]
`
})

bot.Command({
name: "seteditmsg",
  aliases: ["messageedit", "msgedit", "editmsg", "editmessage"], 
code: `
$setServerVar[messageedit;$message[]]
$deletecommand[30000ms]
$deleteIn[30s]
  <:success:850913520408068098> **Message ID for i edit is \`$message[]\`**
  $onlyIf[$isNumber[$message[1]]==true;You can't put a invalid id message ]


`
})

bot.Command({
name: "seteditchannel",
  aliases: ["channeledit", "cedit", "editc", "editchannel"], 
code: `
$setServerVar[channeledit;$mentionedChannels[1]]
$deletecommand[30000ms]
$deleteIn[30s]
<:success:850913520408068098> **Channel ID for the edit is <#$mentionedChannels[1]> (\`$message[]\`)**
$onlyIf[$channelExists[$findChannel[$message[]]]==true;That's not a channel]

`
})


bot.Command({
name: "edit",
code: `
$deletecommand[3000ms]
$deleteIn[3s]
<:systeme1:850824160267206698><:systeme2:850824160313999370><:systeme3:850824160216481823> **Message edited.**
$editMessage[$getServerVar[channeledit];$getServerVar[messageedit];$message[]]
$onlyIf[$getServerVar[messageedit]!=Nothing;{description:<:error:850913520466919450> **The message for edit not set, make the command, make the command \`$messageedit ID_Message\`**}{color:ff0000}]
$onlyIf[$getServerVar[channeledit]!=Nothing;{description:<:error:850913520466919450> **The channel for edit not set, make the command \`$channeledit #channel\`**}{color:ff0000}]
$onlyIf[$message[1]!=;<:error:850913520466919450> **You didn't say anything, to make an edit you have to do the command \`$variable\` or \`$channeledit\` and \`$messageedit\`.**]
$onlyAdmin[]
`
})

bot.Command({
  name: "embed",
  code: `
 
  $deletecommand[3ms]
  $channelSendMessage[$getServerVar[channelembed];$message[]]
   $onlyIf[$message[1]!=;<:error:850913520466919450> **You didn't say anything, to make an embed you have to do the command \`$variable\` .**]
  $onlyIf[$getServerVar[channelembed]!=Nothing;{description:<:error:850913520466919450> **The channel to send an embed has not yet been defined, make the command \`$channelembed #channel\`**}{color:ff0000}]
 
  $onlyAdmin[]
`})



bot.Command({
  name: "channelembed",
  aliases: ["embedc","channele","embedchannel"],
  code: `
  $deletecommand[10000ms]
  $deleteIn[15s]
  $description[
<:Verified:850830649351077899> **Channel embed send definied {hyper:success:$message[]} \`($mentionedChannels[1])\`.** ]
  $setServerVar[channelembed;$mentionedChannels[1]]
  $onlyIf[$channelExists[$findChannel[$message[]]]==true;That's not a channel]
  $onlyAdmin[]
`})



bot.Command({
  name: "setupembed",
  aliases: ["setembed","configembed"],
  code: `
 
 $description[
 
<:configs:850845714531090444> **Channel Config: **
 \`$getServerVar[channelembed]\`
 \`\`\` $channelembed #channel  \`\`\` 
 
 
 ]
 $color[36393F]
`})

bot.Command({
  name: "help",
  aliases: ["h"],
  code: `
  $thumbnail[https://images-ext-2.discordapp.net/external/Y9A63cPGCVL68b-6taEwu9qDHHgF6BMWBpw_kL-qezU/https/images-ext-2.discordapp.net/external/TZV2fqBShHzofz9fhYUYZupLBVtMs7rH-MU9u3dR0gM/%253Fsize%253D128/https/cdn.discordapp.com/avatars/850572464794501140/f29fece4d87b52ff15eb84348161ccf1.webp]
  $author[ Help Command Miuri ;https://images-ext-2.discordapp.net/external/Y9A63cPGCVL68b-6taEwu9qDHHgF6BMWBpw_kL-qezU/https/images-ext-2.discordapp.net/external/TZV2fqBShHzofz9fhYUYZupLBVtMs7rH-MU9u3dR0gM/%253Fsize%253D128/https/cdn.discordapp.com/avatars/850572464794501140/f29fece4d87b52ff15eb84348161ccf1.webp]
$description[
<:arrow:850847622491013120> **I am <@851253649522294804> and I'm happy to be on this server ! **
\`・\` **Make the command \`$commands\` for check all my commands.**
<:Staffs:850860950949068824> {hyper:**Support**:https://discord.gg/vNgZej8mca} | <:invites:850860394805198938> {hyper:**Invite**:https://discord.com/api/oauth2/authorize?client_id=851253649522294804&permissions=8&scope=applications.commands%20bot} | <:partner_server_owner:850862999639294054> {hyper:**Partner**:https://discord.gg/YuuNEmkBVP}

]
$color[03d995]

`})


bot.Command({
  name: "support",
  code: `
<:mods:850797010465849364> **$username **Here is my server support, come if you have any issues, suggestions or any ask about me.
\`・\` https://discord.gg/HkKRyJrEHb
`})



bot.Command({
  name: "welcome",
  aliases: ["wlc"],
  code: `
  $color[36393F]
$description[

<:IconMessageSettings:850933869024641024> **Welcome config**
$addField[<:variablesstocks:850930485772812320> Variable:;
\`\`\`$variable\`\`\`
;yes]
$addField[<:IconMessageChecked:850895606134079549> Setup message:;
\`\`\`$setmsg <message>\`\`\`
;yes]
$addField[<:channelmsg:850934605267861534> Setup channel:;
\`\`\`$setjoin #channel\`\`\`
;yes]



]
`})

bot.Command({
name: "google",
description: "Google something without leaving Discord!",
usage: "$google <question>",
code: `
$author[Google Search;https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png]
$description[Here's what I found. {hyper:Click this Google link!:https://www.google.com/search?q=$replaceText[$message[]; ;+]}]

$addField[Search;$message[]]
$footer[$client[tag];$client[avatar]]
$addTimestamp
$color[$randomText[3cba54;f4c20d;db3236;4885ed]]
$argsCheck[>1;🚫 Correct Usage: **$**google \`{question}\` 🚫]
`
})

bot.Command({
 name: "warn",
 code: `

$setUserVar[warnings;$sum[$getUserVar[warnings;$mentioned[1]];1];$mentioned[1]]

$channelSendMessage[$channelID[];{authoricon:https://cdn.discordapp.com/attachments/551653964597428225/814228124471787590/6773_Alert.png}
{author:Warning}
 {thumbnail:$serverIcon}
 {field:Warning logged in:<#$getServerVar[regmodlogs]>:no}
 {field:Warned: <@$mentioned[1]>:no}
 {field:Reason:$messageSlice[>1]:no}
 {field:Warned By: <@$authorID>:no}
 {color:ff0000}]

$channelSendMessage[$getServerVar[regmodlogs];
{author:Moderation Action: Warn Given} 
{thumbnail:$serverIcon}{authoricon:https://cdn.discordapp.com/attachments/551653964597428225/814228124471787590/6773_Alert.png}
 
{field:Warned:$tag[$mentioned[1]]:no} 
{field:Number of warnings:$sum[$getUserVar[warnings;$mentioned[1]];1]:no} 
{field:Reason:$messageSlice[>1]:no} 
{field:Moderator:$tag[$authorID]:no} 
{field:ID'S:\`\`\`
User = $mentioned[1]
Moderator = $authorID\`\`\`:no} 
{color:ff0000}]

$onlyIf[$messageSlice[>1]!=;You have to provide a reason for warning someone.]
$onlyIf[$mentioned[1]!=$client[id];I can't warn myself]
$onlyIf[$mentioned[1]!=$authorID;You can't warn yourself]
$onlyIf[$mentioned[1]!=;You have to mention someone to warn them.]
$onlyIf[$getServerVar[regmodlogs]!=Nothing; You dont have a moderation logs channel set up. Please set one up with: \`$set-modlogchannel #mention-channel\`]
$onlyPerms[managemessages;You must be a moderator to do this.]

`
})

bot.Command({
 name: "addemoji",
  aliases: ["addemote","emojiadd","emoteadd"],
 description: "Add emojis to this server from any server you are in",
 usage: "$addemoji <emoji>",
 code: `
 
$addEmoji[https://cdn.discordapp.com/emojis/$replaceText[$splitText[3];>;].$replaceText[$replaceText[*$splitText[1]*;*<*;png];*<a*;gif];$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];:;]1;1;]2;2;]3;3;]4;4;]5;5;]6;6;]7;7;]8;8;]9;9;]0;0;]<;<;]>;>;];yes]
$textSplit[$message[1];:]
$suppressErrors[Error]
$onlyPerms[managemessages;You gotta be a moderator to add emojis!]
$onlyIf[$message[1]!=;Missing Argument]

 `
})

bot.Command({
 name: "profil2",
 aliases: ['p2','customprofil'],
 description: "Get profile for mentioned user.", 
 usage: "$profile <@mentioned-user>",
 
 code: `
$title[$username[$mentioned[1;yes]]'s Profile Custom Vip]
$thumbnail[$userAvatar[$mentioned[1]]]
$description[_<:arrow:850847622491013120> **For custome you need make the command \`$set<catagorie> <new value>\`** _]

$addField[<:title:850966075108622386> Bio;\`・\` $getVar[bio;$mentioned[1;yes]];yes]

$addField[<:gamer:851531178679074827> Gamer tag;\`・\` $getVar[gamerTags;$mentioned[1;yes]];yes]

$addField[<:birthday:851528336055205958> Birthday;\`・\` $getVar[birthday;$mentioned[1;yes]];yes]

$addField[<:relation:851528899015475220> Relationship Status;\`・\` $getVar[rStatus;$mentioned[1;yes]];yes]

$addField[<:pronoun:851528335796076545> Pronouns;\`・\` $getVar[pronouns;$mentioned[1;yes]];yes]

$addField[<:color:850959564849020979> Color;\`・\` $getVar[color;$mentioned[1;yes]];yes]

$addField[<:Pets:851528336702046257> Pets;\`・\` $getVar[pets;$mentioned[1;yes]];yes]

$addField[<:name:851528336068444170> Name;\`・\` $getVar[name;$mentioned[1;yes]];yes]

$footer[$client[tag];$client[avatar]]
$color[$getVar[color;$mentioned[1;yes]]]
`
});

bot.Command({
name: "setcolor",
  aliases: ["setupcolor","set-color"],
description: "Set profile color.",
usage: "set-color <hex-code>",
code: `
<:success:850913520408068098> Your profile color has been set to **$message[]**
$setVar[color;$message[];$authorID]
$onlyIf[$message[1]!=;What you don't want a cool color to add to your profile?]`});

bot.Command({
 name: "setpets",
  aliases: ["setuppets","set-pets"],
 description: "Set pets on profile.",
 usage: "set-pets <pets>",
 code: `
<:success:850913520408068098> Your Pet(s) has been set to **$message[]**
$setVar[pets;$message[];$authorID]
$onlyIf[$message[1]!=;If you don't have any pets, just say none.]`});

bot.Command({
 name: "setname",
  aliases: ["setupname","set-name"],
 description: "Set name on profile.",
 usage: "set-name <name>",
 code: `
<:success:850913520408068098> Your name has been set to **$message[]**
$setVar[name;$message[];$authorID]
$onlyIf[$message[1]!=;That birth certificate of your has to have a name on it right? Either put that here or use a fake name, don't worry I won't report you to the FBI or CIA.]`});

bot.Command({
 name: "setpronouns",
  aliases: ["setuppronons","set-pronouns"],
 description: "Set pronouns on profile.",
 usage: "set-pronouns <pronouns>",
 code: `
<:success:850913520408068098> Your pronouns have been set to **$message[]**
$setVar[pronouns;$message[];$authorID]
$onlyIf[$message[1]!=;Nice try, but your pronouns can't be nothing!]`});

bot.Command({
 name: "setrstatus",
  aliases: ["setuprstatus","set-rstatus"],
 description: "Set relationship status on profile.",
 usage: "set-rstatus <relationship status>",
 code: `
<:success:850913520408068098> Your relationship status has been set to **$message[]**
$setVar[rStatus;$message[];$authorID]
$onlyIf[$message[1]!=;Try as hard as you want to but you can't put nothing as a relationship status.]`});

bot.Command({
 name: "setbirthday",
  aliases: ["setupbirthday","set-birthday"],
 description: "Set birthday on profile.",
 usage:"set-birthday <birthday>",
 code: `
<:success:850913520408068098> Your birthday has been set to **$message[]**
$setVar[birthday;$message[];$authorID]
$onlyIf[$message[1]!=;So wait, you are telling me that you don't have a birthday? Everyone has a birthday. Even me and I'm a robot!]`});

bot.Command({
 name: "setbio",
  aliases: ["setupbio","set-bio"],
 description: "Add a little bit about yourself here;please keep this within server rules.",
 usage: "set-bio <bio>",
 code: `
 <:success:850913520408068098> Your bio has been set to **$message[]**
 $setVar[bio;$message[];$authorID]
 $onlyIf[$message[1]!=;Write your mini biography!]`});

bot.Command({
 name: "set-gamertag",
  aliases: ["setupgamertag","setgamertag"],
 description: "Set your gamer tags for Xbox, PlayStation, Nintendo Switch (friend code), and other game systems.",
usage: "set-gamertag <gamer tag(s)>",
 code: `
 <:success:850913520408068098> Your Gamertag(s) has been set to **$message[]**
$setVar[gamerTags;$message[];$authorID]
$onlyIf[$message[1]!=;Put your gamer tag(s) down so people can play games with you. **And please specify what game system it is from.**]`});

bot.MessageDeleteCommand({
name: "$channelID[]",
code: `
$setChannelVar[username;$username#$discriminator[];$channelID[]]
$setChannelVar[useravatar;$authorAvatar;$channelID[]]
$setChannelVar[usertext;$message[];$channelID[]]
$onlyIf[$message[]!=;]`})
bot.onMessageDelete()

bot.Command({
  
  name: "snipe",
code:`
$channelSendMessage[$channelID[];{description:$getChannelVar[usertext]}{author:$getChannelVar[username]}{authoricon:$getChannelVar[useravatar]}{timestamp}{color:RANDOM}]
$onlyIf[$getChannelVar[usertext]!=;{title::x: Something went wrong!}{color:d0321d}{description:There is nothing to snipe!}]`
})


bot.Command({

name:"vote",
code:`<:error:850913520466919450> **You not voted for me, please vote for me for got your reward.**

$onlyIf[$api[https://normal-api.ffj1.repl.co/topgg/hasvoted?bot=$client[id]&user=$authorID&token=top.gg_token_here;voted]!=true;{execute:claim}]
`

})


bot.ExecutableCommand({
name:"claim",
code:`Thanks you for the vote`
})

bot.Command({
    name: 'listbans',
    aliases: ["lbans"],
    description: "List's bans for $serverName[]. Bot returns: \`__**SYSTEM:**__ No reason provided for ban\` if ban reason is left blank.",
    
    code: ` $author[Total number of bans/ban reasons for $serverName[]]
$title[Total number of users banned in **$serverName[]**: **$bansCount[]**
Reason for bans below:]
$description[$replaceText[$replaceText[$fetchBans[$bansCount[];
 - ];null;__**SYSTEM:**__ No reason provided for ban!];Unspecified;__**SYSTEM:**__ Banned by Discord bot!]]

$color[36393F]
$onlyPerms[ban;You must be a moderator/administrator to use this command.]

`
})
  



bot.Command({
name: "setsuggestion",
  aliases: ["ssuggest","setupsuggestion"],
code: `
$setServerVar[suggestion_channel;$mentionedChannels[1]]
$author[The command was performed correctly;https://cdn.discordapp.com/emojis/850913520408068098.png?v=1]
$description[]
$addField[Administrator;$tag[$authorID];yes]
$addField[The channel that has been set;<#$mentionedChannels[1]>;yes]
$footer[$serverName[$guildID];$serverIcon]
$color[36393F]
$onlyIf[$channelExists[$mentionedChannels[1]]==true;{author:Error!}
{authoricon:https://cdn.discordapp.com/emojis/850913520466919450.png?v=1} 
{description:This is not a channel! }
{footer:$tag[]}
{footericon:$authorAvatar[webp;true;512]}
{timestamp}
{color:RED}]
$onlyPerms[admin;{author:Error!}
{authoricon:https://cdn.discordapp.com/emojis/850913520466919450.png?v=1} 
{description:You're missing a permissions!}
{footer:$tag[]}
{footericon:$authorAvatar[webp;true;512]}
{timestamp}
{color:RED}]`
})

bot.SpaceCommand({
name: "suggestion",
  aliases: ["suggest"],
code: `
$deletecommand[1ms]
$addReactions[✅;➖;❌]
$channelSendMessage[$channelID[];{author:$tag[$authorID]} {color:36393F} {authoricon:$authorAvatar[webp;true;512]} {description:**Suggestion:** \`$message[]\`} ]
$onlyIf[$channelID[]==$getServerVar[suggestion_channel];]

`
})

bot.Command({

name: "8ball",
code: `
$title[8 Ball]
$description[
Question: $message[]
Answer: $randomText[Yes;No;Maybe]
]
$color[$replaceText[$replaceText[$replaceText[$randomText[Yes;No;Maybe];Yes;009900];No;ff0000];Maybe;ffff00]]
$onlyIf[$message[1]!=; Your question?]
`

})

bot.Command({
 name: "ban",
 code:`
$ban[$findUser[$message[1]];$replaceText[$replaceText[$checkCondition[$messageSlice[>1]==];true;No provided];false;( By: $username[]#$discriminator[] ) - $messageSlice[>1]]]

 $author[$findUser[$message[1]]]
 $color[576ec9]
 $thumbnail[$userAvatar[$findUser[$message[1]]]]
 $title[$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]] has been banned!]
 $description[
 Reason: $replaceText[$replaceText[$checkCondition[$messageSlice[>1]==];true;None provided];false;$messageSlice[>1]]
 ]
 $footer[Banned by: $username[]#$discriminator[]]
 
 $onlyIf[$rolePosition[$highestRole[$client[id]]]<=$rolePosition[$highestRole[$findUser[$message[1]]]];I cannot ban **$username[$findUser[$message[1]]]**. Please position $username[$client[id]]'s role ($roleName[$highestRole[$client[id]]]) above ($roleName[$highestRole[$findUser[$message[1]]]]).]
 
 $onlyIf[$findUser[$message[1]]!=$ownerID;Nice try XD, I can't ban the server owner]
 $onlyIf[$findUser[$message[1]]!=$client[id];Ban me then XD, I can't ban myself lol.]

 $onlyIf[$findUser[$message[1]]!=$authorID;F: You can't ban yourself]
 $onlyIf[$userExists[$findUser[$message[1]]]==true;*$message[1]* is not a valid user. Try again\n\`$getServerVar[prefix]ban <userID/mention> (reason)\` - Reason is optional]
 $onlyIf[$findUser[$message[1]]!=undefined;*$message[1]* is not a valid user. Try again\n\`$getServerVar[prefix]ban <userID/mention> (reason)\` - Reason is optional]
 $onlyIf[$message[]!=;Who should I ban?\n\`$getServerVar[prefix]ban <userID/mention> (reason)\` - Reason is optional]
 $onlyBotPerms[ban;**I cannot ban without the \`{perms}\` permission**]
 $onlyPerms[ban;**You're missing the \`{perms}\` permission!**]
`});

bot.Command({
  name:"remind",
 code:`
 <@$authorID> wake up! ⏰
 
 $replyIn[$message[]]
 
 $channelSendMessage[$channelID[];I will remind you in $replaceText[$replaceText[$message[];m; minutes];h; hours]! ⏰]
$onlyIf[$isNumber[$replaceText[$replaceText[$replaceText[$replaceText[$message[];s;];m;];h;];d;]]==true;Invalid time format.]`

})



bot.Command({
   name: "extraping",
 code: `
 API latency = $replaceText[$ping;-;]ms, $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[true;$checkCondition[$replaceText[$ping;-;]>300];If the ping stays this high for another 15 minutes, contact my developer. He probably needs to reboot the server];$checkCondition[$replaceText[$ping;-;]>200];Watching server stability!];$checkCondition[$replaceText[$ping;-;]>100];Not too bad];$checkCondition[$replaceText[$ping;-;]>60];Pretty good!];$checkCondition[$replaceText[$ping;-;]>45];Solid];$checkCondition[$replaceText[$ping;-;]<45];Excellent!]
 $onlyIf[$message[1]!=help;{execute:helpping}]
 `
})

bot.Command({
   name: "variable",
 code: `
 $color[36393F]
 
 $description[
 <:settings:850845365003223090> **Here are all the variables you can use on the bot.**
 $addField[<:addfield:850966075033387058> Field;
\`\`\`{field:TITLE:BODY:yes/no}\`\`\`
;yes]
 $addField[<:attachement:850959565361381377> Attachement;
\`\`\`{attachment}\`\`\`
;yes]
  $addField[<:Timestamp:850959565331628043> Timestamp;
\`\`\`{timestamp}\`\`\`
;yes]
 $addField[<:images:850959565184565259> Image;
\`\`\`{image:IMAGEURL}\`\`\`
;yes]
   $addField[<:footer2:850959565305806848> FooterIcon;
\`\`\`{footericon:IMAGEURL}\`\`\`
;yes]
 $addField[<:footer:850959565431242812> Footer;
\`\`\` {footer:STUFF HERE}\`\`\`
;yes]
  $addField[<:image:850959565125320725> Thumbnail;
\`\`\`{thumbnail:IMAGEURL}\`\`\`
;yes]
 $addField[<:color:850959564849020979> Color;
\`\`\` {color:COLOR}\`\`\`
;yes]
   $addField[<:authorIcon:850966075016609852> AuthorIcon;
\`\`\`{authoricon:IMAGEURL}\`\`\`
;yes]
 $addField[<:author:850959565075644416> Author;
\`\`\`{author:STUFF HERE}\`\`\`
;yes]
  $addField[<:title:850966075108622386> Title;
\`\`\`{title:STUFF HERE}\`\`\`
;yes]
 $addField[<:rr:850959564957810708> Description;
\`\`\`{description:TEXT}\`\`\`
;yes]
 
 
 
 ]
 $footer[For more help make the command $support;https://images-ext-1.discordapp.net/external/mAOeFbfJExEySphC00eDc8Xdvx-LjxMvFPJkmq167aM/https/images-ext-2.discordapp.net/external/Y9A63cPGCVL68b-6taEwu9qDHHgF6BMWBpw_kL-qezU/https/images-ext-2.discordapp.net/external/TZV2fqBShHzofz9fhYUYZupLBVtMs7rH-MU9u3dR0gM/%25253Fsize%25253D128/https/cdn.discordapp.com/avatars/850572464794501140/f29fece4d87b52ff15eb84348161ccf1.webp]
 $addTimestamp
 `
})

bot.Command({
   name: "mod",
 code: `
 $thumbnail[https://media.discordapp.net/attachments/850565692545302594/851104176007938058/staff.png]
 $color[36393F]
 $description[
 <:mod:850855772400910346> **These are the moderation commands.**
 \`・\` Please execute commands correctly.
  $addField[<:Tools:851115020871008276> All others Tools;
\`\`\`$userinfo $setnick $servinfo $channelcount $categorycount $snipe\`\`\`
;yes]
$addField[<:IconOptionBlackList:851115243996184628> Black List;
\`\`\`$bl \`\`\`
;yes]
$addField[<:lock:851114785692450847> Lock / <:unlock:851114785884995644> Unlock;
\`\`\`$lock $unlock\`\`\`
;yes]
$addField[<:slowmode:851114785672396861> SlowMode;
\`\`\`$slowmod\`\`\`
;yes]
$addField[<:role:850969653824061441> Role;
\`\`\`$role\`\`\`
;yes]
  $addField[<:muted:851114785671610408> Mute / <:unmuted:851114785600307220> Unlmute;
\`\`\`$mute $tempmute $unmute\`\`\`
;yes]
  $addField[<:ban:851114786040315925> Ban / <:kick:851114785806352405> Kick;
\`\`\`$ban/kick $tempban\`\`\`
;yes]
 ]
 
 `
})

bot.Command({
   name: "giveaway",
 code: `
**Soon..**
 `
})

bot.Command({
   name: "economy",
 code: `
**No all commands is avalaible, try basic commands...**
 `
})

bot.Command({
   name: "music",
 code: `
**Soon..**
 `
})

bot.Command({
   name: "setjoin",
 code: `
**Soon..**
 `
})

bot.Command({
   name: "setmsg",
 code: `
**Soon..**
 `
})

bot.Command({
   name: "logs",
 code: `
**Soon..**
 `
})

bot.Command({
   name: "server",
 code: `
**Soon..**
 `
})