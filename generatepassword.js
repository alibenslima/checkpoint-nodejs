var generator = require("generate-password");
const password = generator.generate({
  length: 10,
  numbers: true,
});

// 'uEyMTw32v9'
console.log(password);
