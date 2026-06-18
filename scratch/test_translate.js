const translate = require('google-translate-api-x');
translate('Hello world', { to: 'zh-TW' })
  .then(res => console.log(res.text))
  .catch(err => console.error(err));
