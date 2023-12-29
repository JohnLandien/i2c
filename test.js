const i2c = require('i2c-bus');
const i2c_ADDR1 = 0x20;
const i2c_ADDR2 = 0x26;
const OFF = 0x0000;

const rbuf = Buffer.alloc(4);
const wbuf = Buffer.from([OFF]);


i2c.openPromisified(1).
then(i2c1 => i2c1.i2cWrite(i2c_ADDR1, wbuf.length, wbuf).
  then(_ => i2c1.i2cRead(i2c_ADDR1, rbuf.length, rbuf)).
  then(data => console.log(data)).
  then(_ => i2c1.close())
).catch(console.log);