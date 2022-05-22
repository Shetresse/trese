import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './Menu2.jpg'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 
    

let str = `
*HOLA ${name}, AQUI ESTA EL MENU, RECUERDA QUE ESTE BOT ES PROPIEDAD DEL GRUPO ➻❥⛄ᗅℕⅈℳℰ🎄ℱᗅℕՏ🌟★ 3.0*  

*<JUEGOS/>*
° _${usedPrefix}ppt *papel / tijera /piedra*_
° _${usedPrefix}gay2 *<nombre @tag>*_
° _${usedPrefix}pajero *<nombre @tag>*_
° _${usedPrefix}rata *<nombre @tag>*_
° _${usedPrefix}love *<nombre @tag>*_
° _${usedPrefix}pvp *<nombre @tag>*_
° _${usedPrefix}doxear *<nombre @tag>*_
° _${usedPrefix}simi *<texto>*_
° _${usedPrefix}topgays_
° _${usedPrefix}formarpareja_

*<DESCARGAS/>*
° _${usedPrefix}tiktok *<enlace / link /*_
° _${usedPrefix}play.1 *<texto / enlace / link / para audio/*_
° _${usedPrefix}play.2 *<texto / enlace / link / para videos/*_
° _${usedPrefix}imagen *<texto>*_
° _${usedPrefix}pinteret *<texto>*_
° _${usedPrefix}wallpaper *<texto>*_

*<COMANDOS CRISTIANOS XD/>*

° _${usedPrefix}ecchi_
° _${usedPrefix}yaoi_
° _${usedPrefix}yaoi2_
° _${usedPrefix}yuri_
° _${usedPrefix}yuri2_
° _${usedPrefix}trapito_
° _${usedPrefix}nsfwloli_
° _${usedPrefix}nsfwfoot_
° _${usedPrefix}nsfwass_
° _${usedPrefix}nsfwcum_

*<AUDIOS ESCRIBELOS SIN EL PUNTITO XD/>* 

° _Audio hentai_
° _Vete a la vrg_
° _Pasa pack Bot_
° _Murio el grupo_
° _Oh me vengo_
° _Viernes_
° _Baneado_
° _Sexo_
° _Nyanpasu_
° _Te amo_
° _Yamete_
° _Bañate_
° _Es puto_
° _La biblia_
° _Onichan_
° _Siuuu_
° _Rawr_
° _UwU_
° _:c_
° _a_

*<COSAS RAMDON XD/>*
° _${usedPrefix}cristianoronaldo_
° _${usedPrefix}messi_
° _${usedPrefix}loli_
° _${usedPrefix}neko_
° _${usedPrefix}waifu_
° _${usedPrefix}hinata_
° _${usedPrefix}itori_
° _${usedPrefix}kagura_
° _${usedPrefix}kaori_
° _${usedPrefix}mikasa_
° _${usedPrefix}miku_
° _${usedPrefix}nezuko_

*<GRUPO/>* 

° _${usedPrefix}add *<numero>*_
° _${usedPrefix}kick *<@tag>*_
° _${usedPrefix}promote *<@tag>*_
° _${usedPrefix}demote *<@tag>*_
° _${usedPrefix}link_
° _${usedPrefix}invocar *<texto>*_
° _${usedPrefix}hidetag *<texto>*_

*<BUSCADORES/>*
° _${usedPrefix}animeinfo *<texto>*_
° _${usedPrefix}google *<texto>*_
° _${usedPrefix}wikipedia *<texto>*_

*<STICKERS/>*

° _${usedPrefix}attp *<texto>*_
° _${usedPrefix}ttp *<texto>*_
° _${usedPrefix}pat *<@tag>*_
° _${usedPrefix}kiss *<@tag>*_
° _${usedPrefix}s *<responder a imagen>*_

*<EFECTOS DE AUDIO/>*
*-RESPONDE A UN AUDIO O NOTA DE VOZ*

° _${usedPrefix}bass_
° _${usedPrefix}blown_
° _${usedPrefix}deep_
° _${usedPrefix}fast_
° _${usedPrefix}nightcore_
° _${usedPrefix}reverse_
° _${usedPrefix}robot_

*<HERRAMIENTAS O NO SE, YA NO SE QUE PONER XD/>*
° _${usedPrefix}calc *<operacion math>*_
° _${usedPrefix}qrcode *<texto>*_
° _${usedPrefix}del *<responde al mensaje del bot para eliminarlo si sos admin>*_

*<RPG - ECONOMIA/>*

° 💵 _${usedPrefix}balance_
° 💵 _${usedPrefix}claim_
° 💵 _${usedPrefix}top_
° 💵 _${usedPrefix}levelup_
° 💵 _${usedPrefix}myns_
° 💵 _${usedPrefix}perfil_
° 💵 _${usedPrefix}work_
° 💵 _${usedPrefix}minar_
° 💵 _${usedPrefix}buy_
° 💵 _${usedPrefix}buyall_
° 💵 _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
° 💵 _${usedPrefix}verificar_
° 💵 _${usedPrefix}unreg *<numero de serie>*_
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/BrunoSobrino/TheMystic-Bot-MD', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [

], m,)
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true})
} catch (e) {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
throw e
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menucompleto|menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
