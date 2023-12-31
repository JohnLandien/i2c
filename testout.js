const i2c = require('i2c-bus');
const i2c_ADDR1 = 0x20;
const i2c_ADDR2 = 0x26;
const OFF = 0x0000;
const ON = 0xFFFF;

//const rbuf = Buffer.alloc(2);
const wbuf = Buffer.from([ON]);


// i2c.openPromisified(1).
// then(i2c1 => i2c1.i2cRead(i2c_ADDR1, rbuf.length, rbuf).
//   then(_ => i2c1.i2cWrite(i2c_ADDR1, wbuf.length, wbuf)).
//   then(data => console.log(data)).
//   then(_ => i2c1.close())
// ).catch(console.log);

const i2c1 = i2c.open(1, err => {
    if (err) throw err;
  
    i2c1.writeI2cBlock(i2c_ADDR1, 0, wbuf.length, wbuf, (err, rawData) => {
      if (err) throw err;
  
      console.log(rawData);
  
      i2c1.close(err => {
        if (err) throw err;
      });
    });
  });