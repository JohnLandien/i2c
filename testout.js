const i2c = require('i2c-bus');
const i2c_ADDR1 = 0x20;
const i2c_ADDR2 = 0x26;
const OFF = 0x00;
const ON = 0xFF;

//const rbuf = Buffer.alloc(2);
//const wbuf = Buffer.from([OFF]);


// i2c.openPromisified(1).
// then(i2c1 => i2c1.i2cRead(i2c_ADDR1, rbuf.length, rbuf).
//   then(_ => i2c1.i2cWrite(i2c_ADDR1, wbuf.length, wbuf)).
//   then(data => console.log(data)).
//   then(_ => i2c1.close())
// ).catch(console.log);

const i2c1 = i2c.open(1, err => {
    if (err) throw err;
  
    i2c1.readWord(i2c_ADDR1, 0x00,  ON, (err, rawData) => {
      if (err) throw err;
  
      console.log(rawData);
  
      i2c1.close(err => {
        if (err) throw err;
      });
    });
  });