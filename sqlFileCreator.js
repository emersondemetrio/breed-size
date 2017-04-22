let fs 				= require("fs");
let process 		= require("process");
let animalsPath 	= "./output/data.json";
let util 			= require("./modules/util");
let breedSizes		= require("./modules/sizes");

if (! fs.existsSync( animalsPath )) {
    console.log("ERRO!", "Arquivo de entrada [ ", animalsPath, "] não encontrado! \n\nRode: node parser");
    process.exit();
}

let animals	= require("./output/data.json");


let stringContains = function(searchFor, searchIn) {
	/** in contains for? */
	if( searchFor == searchIn ){
		return true;
	}	

	let contains = searchIn.includes( searchFor );
	return contains;
};

let notFound = 0;
let getAnimalSize = function ( animal ){

	if( animal[5] == "Cat" ){
		return 1;
	}

	let searchFor = util.onlyLetters( animal[8].toLowerCase() );
	let matches = [];

	for( let i = 0; i < breedSizes.length; i ++ ){
		let cb = breedSizes[i];
		for( let j = 0; j < cb.breeds.length; j++ ){
			let searchIn = cb.breeds[ j ];
			if( stringContains(searchIn, searchFor) ){
				matches.push( cb );
			}
		}
	}

	if( matches.length == 0 ){
		notFound++;
		return 0;
	}

	if( matches.length >= 1 ){
		return matches[0].sizeV;
	}
};

let createFile = function(data){
	let newFilePath = __dirname + "/output/BATCH.sql";
	fs.writeFile(newFilePath, data, function(err) {
		if( err ) {
			return console.log(err);
		}
		console.log("\n-> Arquivo de Saida:", newFilePath);    
	}); 
};

let SQL = "";

let createVerboseSQLFile = false;

animals.forEach(( animal, index ) => {
	if( index > 0 ){
		if( animal[0] !== "" ){
			animal[10] = getAnimalSize( animal );
			SQL += util.createSQL( animal, createVerboseSQLFile );
		}
	}
});

console.log("Total BreedSize not found:", notFound);
createFile(SQL);