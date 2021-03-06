const _ = require( 'wTools' );
require( 'wFiles' );
const fs = require( 'fs' );
const UTIF = require( 'utif' );

let buf = Buffer.from( {
  type : 'Buffer',
  data : [
    255, 0, 0, 255,
    0, 255, 0, 255,
    0, 0, 255, 255,
    255, 255, 255, 255
  ]
} );

let ifds = UTIF.encodeImage( buf, 2, 2 )
let outBuf = Buffer.from( ifds );
fs.writeFileSync( `${__dirname}/../../data/image/WrittenPixelsUtif.tif`, outBuf )
console.log( _.fileProvider.statRead( `${__dirname}/../../data/image/WrittenPixelsUtif.tif` ).size );
