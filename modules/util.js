let createSQL = function( animal, v){
	let sql = "";
	if( v ){
		sql = `INSERT INTO treino (
		AnimalID, 
		Name, 
		DateTime, 
		OutcomeType, 
		OutcomeSubtype, 
		AnimalType, 
		SexuponOutcome, 
		AgeuponOutcome, 
		Breed, 
		Color,
		BreedSize 
		) VALUES ( 
		'${ animal[0] }', 
		'${ animal[1] }', 
		'${ animal[2] }', 
		'${ animal[3] }', 
		'${ animal[4] }',
		'${ animal[5] }', 
		'${ animal[6] }', 
		'${ animal[7] }', 
		'${ animal[8] }',
		'${ animal[9] }', 
		'${ animal[10] }'
		);\n`;
	} else {
		sql = `INSERT INTO treino (AnimalID, Name, DateTime, OutcomeType, OutcomeSubtype, AnimalType, SexuponOutcome, AgeuponOutcome, Breed, Color, BreedSize ) VALUES ( '${ animal[0] }', '${ animal[1] }', '${ animal[2] }', '${ animal[3] }', '${ animal[4] }', '${ animal[5] }', '${ animal[6] }', '${ animal[7] }', '${ animal[8] }', '${ animal[9] }', '${ animal[10] }' );\n`;
	}
	return sql;
};

let onlyLetters = function( k ){
	return k.replace(/[^a-zA-Z0-9 _]/g, " ");
};


module.exports.onlyLetters 	= onlyLetters;
module.exports.createSQL 	= createSQL;