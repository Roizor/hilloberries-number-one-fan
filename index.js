const cfg = require('./config');
fetch(cfg.pasteUrl).then(a => a.text()).then(t => {
    console.log(JSON.parse(t))
})