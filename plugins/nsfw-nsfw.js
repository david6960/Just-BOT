import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, usedPrefix, command }) => {
	
	if (!global.db.data.chats[m.chat].nsfw) throw `🚫 group doesnt supprt nsfw \n\n enable it by \n*${usedPrefix}enable* nsfw HV 
   
m.react(rwait)
let type = (command).toLowerCase()

switch (type) {

case 'ass':
case 'gand':
    let as = await (await fetch(global.API('fgmods', '/api/nsfw/ass', { }, 'apikey'))).json() 
    conn.sendButton(m.chat, `✅ Random *${command}*`, fgyt, as.result, [['▷▷ NEXT', `${usedPrefix + command}`]], m)
   m.react(xmoji) 
break

case 'boobs':
case 'boobies':
   let xb = await (await fetch(global.API('fgmods', '/api/nsfw/boobs', { }, 'apikey'))).json()
    conn.sendButton(m.chat, `✅ Random *${command}*`, fgyt, xb.result, [['▷▷ NEXT', `${usedPrefix + command}`]], m)
   m.react(xmoji) 
break

case 'pussy':
case 'chut':		
   let xp = await (await fetch(global.API('fgmods', '/api/nsfw/pussy', { }, 'apikey'))).json()
    conn.sendButton(m.chat, `✅ Random *${command}*`, fgyt, xp.result, [['▷▷ NEXT', `${usedPrefix + command}`]], m)
   m.react(xmoji) 
break

case 'lesbians':
case 'lesbian':
   let les = await (await fetch(global.API('fgmods', '/api/nsfw/lesbian', { }, 'apikey'))).json()
   conn.sendButton(m.chat, `✅ Random *${command}*`, fgyt, les.result, [['▷▷ NEXT', `${usedPrefix + command}`]], m)
   m.react(xmoji) 
break

case 'pack':
case 'cosplay':
	     let img = await conn.getFile(global.API('fgmods', '/api/nsfw/cosplay', {}, 'apikey'))
	     conn.sendButton(m.chat, `✅ Result 🤭\n Random *${command}*`, fgyt, img.data, [['▷▷ NEXT', `${usedPrefix + command}`]], m)
	     m.react(xmoji) 
	break


default:
 }
}
handler.help = ['ass', 'boobs', 'lesbian', 'pussy', 'pack']
handler.tags = ['nsfw']
handler.command = /^(ass|gand|boobs|boobies|lesbian|lesbians|pussy|chut|cosplay|pack)$/i
handler.diamond = true
handler.register = true
handler.group = true

export default handler
