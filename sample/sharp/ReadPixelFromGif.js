const sharp = require( 'sharp' );

const { extractPix } = require( './ReadPixel' );

extractPix( `${__dirname}/../../data/images/Image.gif` );
// OUTPUT: rgb(255,0,0)