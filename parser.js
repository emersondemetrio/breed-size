let Baby        = require( "babyparse" );
let fs 	        = require( "fs" );

let parsed      = Baby.parseFiles( "./input/train.csv" );
let rows        = parsed.data
let header      = 0;

let newFilePath = __dirname + "/output/data.json";

let newLines = [];
let k = 0;
rows.map( (line) => {
	if( k > 0 ){
		newLines.push( line );
	}
	k++;
});

fs.writeFile(newFilePath, JSON.stringify( newLines ), function(err) {
	if( err ) {
		return console.log(err);
	}
	console.log("\n-> Arquivo de Saida:", newFilePath);    
}); 
