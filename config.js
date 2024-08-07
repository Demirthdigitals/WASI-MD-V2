//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "demirthdigitals@gmail.com";
global.location = "Osun,Nigeria.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "2349159868548@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VakXwSWHVvTZfXG15y0C";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VakXwSWHVvTZfXG15y0C";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/455d0ec020eab3c571549.jpg";
global.devs = "2349159868548";
global.sudo = process.env.SUDO || "2349159868548";
global.owner = process.env.OWNER_NUMBER || "2349159868548";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "SUHAIL_14_17_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxLFxuICAgICAgICA2MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDksXG4gICAgICAgIDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI3LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjksXG4gICAgICAgIDIwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI5LFxuICAgICAgICA5NixcbiAgICAgICAgNjcsXG4gICAgICAgIDIsXG4gICAgICAgIDMzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNixcbiAgICAgICAgNjMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA3LFxuICAgICAgICA1MixcbiAgICAgICAgMSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDgwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjM1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTcyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjA4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEyLFxuICAgICAgICA1LFxuICAgICAgICA5NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUzLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDM3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODIsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMzLFxuICAgICAgICA2LFxuICAgICAgICA0MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMyxcbiAgICAgICAgMTczLFxuICAgICAgICAyOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDc1LFxuICAgICAgICA1OSxcbiAgICAgICAgMzksXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgxLFxuICAgICAgICA0NCxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjExLFxuICAgICAgICA5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjYsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTksXG4gICAgICAgIDk4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzksXG4gICAgICAgIDkwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDgzLFxuICAgICAgICA2MyxcbiAgICAgICAgODUsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTksXG4gICAgICAgIDIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ2LFxuICAgICAgICA5MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkNXbllOTXJmU0wrYlhNdlgyQy9UN0g5akppdGhNOWdWdWFwUFAxQXRHOUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlJ4NDZFcnlmUkVxNjFPLTlFeHlYdUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTBlMTIyODQtMjhkMS00NTkzLWJhYTQtNzIwNTZlMTJjNjBiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwLFxuICAgICAgMTg5LFxuICAgICAgMTE2LFxuICAgICAgMjQ5LFxuICAgICAgNzQsXG4gICAgICAyMzcsXG4gICAgICA1MixcbiAgICAgIDI1MSxcbiAgICAgIDIyMixcbiAgICAgIDIyNyxcbiAgICAgIDE1OSxcbiAgICAgIDE0OCxcbiAgICAgIDE5MixcbiAgICAgIDI2LFxuICAgICAgMTgzLFxuICAgICAgMTAzLFxuICAgICAgMTQyLFxuICAgICAgNzEsXG4gICAgICAxMCxcbiAgICAgIDUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMSxcbiAgICAgIDQwLFxuICAgICAgMjM2LFxuICAgICAgMTg0LFxuICAgICAgNjEsXG4gICAgICA2OCxcbiAgICAgIDI1MSxcbiAgICAgIDEzLFxuICAgICAgMTAsXG4gICAgICAxNTEsXG4gICAgICAyMTEsXG4gICAgICAxNzAsXG4gICAgICAyMSxcbiAgICAgIDIzOSxcbiAgICAgIDg2LFxuICAgICAgMTA2LFxuICAgICAgMTIyLFxuICAgICAgMTYwLFxuICAgICAgMjMsXG4gICAgICA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIko5U1kyWkdSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTU5ODY4NTQ4Ojk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4MjIzNjA0MDgxODc5MDo5OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKSEUvSWtDRUlxRXpyVUdHQ0FnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJ0NWtCT1g0d0pqdEF2c0hRb0h5YXc2SlYvdEI2Q0VYSHFSc2U2ZG43U2c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiM0Nackkrd01DYkZvbXl3OFR4c3BYUnZyUlJYVjUxS29kaEZOc1NaMFJBM0EyZlBTUnlDNCtObWI4d3J4NXZQWnBJem0wT2RraGxpVE1oaWxySjNmRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiN1VLbnBObm02SFhZNm5XM2tWWmFyNU45eS9YNWt3UldqbXM5eHFWc3FRQzN3NXVpOW1hY2FmZEpWTHBMMG1lNkJLbjNtSFpyR2EyRXJHa0UrTC9MZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE1OTg2ODU0ODo5OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDQwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMwNDAyNzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKejBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUp6MC5qc29uIjogIntcImtleURhdGFcIjpcIk52YXgyNTJieUhIV3NaYndRYzQyZ1kzTG5WeEMyeUE1dmhGZURIbjJSTkU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTU3Nzg1NjE3LFwiY3VycmVudEluZGV4XCI6MjAsXCJkZXZpY2VJbmRleGVzXCI6WzAsMTEsMTVdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "Mighty Tech",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "Mighty Tech",
  ownername: process.env.OWNER_NAME || "Mighty Tech",
  errorChat: process.env.ERROR_CHAT || "2349159868548",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
