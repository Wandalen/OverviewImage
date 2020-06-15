const gm = require( 'gm' ).subClass( { imageMagick : true } );

gm( `${__dirname}/../../data/images/Image.webp` ).identify( ( err, data ) =>
{
    if( err ) console.log( err );
    console.log( data.Histogram[ '1' ][ 2 ] )
} );
// log: (255,0,0) #FF0000 red
