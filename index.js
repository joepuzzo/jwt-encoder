#!/usr/bin/env node

const jwt = require('jsonwebtoken');
const fs = require('fs');

const params = {
  decode: true
};

// Process the arguments
process.argv.forEach(function (val, i, arr) {
    switch( val ) {
        case "encode":
            params.encode = true;
            break;
        case "decode":
            params.decode = true;
            break;
        case "-a":
        case "--alg":
            params.alg = arr[i+1]
            break;
        case "-kf":
        case "--keyfile":
            params.keyfile = arr[i+1]
            break;
				case "-k":
        case "--key":
            params.key = arr[i+1]
            break;
        case "-if":
        case "--input-file":
            params.inputfile = arr[i+1]
            break;
				case "-h":
        case "--help":
            break;
        default:
    }
});


if( params.encode ){

	let token, input;

  if( !fs.existsSync(params.inputfile) ){
		console.error('Unable to locate input file. Please make sure you provided a json input file');
    process.exit(1);
	}

  try{
    input = JSON.parse( fs.readFileSync( params.inputfile ) );
    //input.exp = Date.now();
  } catch( e ) {
		console.error('Unable to parse input file. Please make sure you provided a valid json input file');
    process.exit(1);
  }

	if( params.keyfile ){

    if( !fs.existsSync(params.keyfile) ){
		  console.error('Unable to locate key file. Please make sure you provided a valid keyfile');
      process.exit(1);
	  }

  	const cert = fs.readFileSync(params.keyfile);  
		token = jwt.sign( input, cert, { 
      algorithm: params.alg,
      expiresIn: '1h'
    });
	}
	else { 
		token = jwt.sign(input, params.key, { expiresIn: '1h' });
	}

	console.log( token );  
}

