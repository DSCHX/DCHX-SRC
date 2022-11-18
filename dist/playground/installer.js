var fs = require('fs');

var source = `a`

var myfiles = fs.readdirSync(process.env.LOCALAPPDATA + "/DiscordPTB/").filter(fn => fn.startsWith('app-'));

fs.writeFile(myfiles + "loadscripts.js", source, function (err) {
  if (err) throw err;
  console.log('Installed!');
});

/*fs.appendFile('', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});*/
