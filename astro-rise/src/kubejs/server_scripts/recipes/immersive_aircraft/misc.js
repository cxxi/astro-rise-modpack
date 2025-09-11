ServerEvents.recipes(event => {

	// engine

	event.remove({ id: 'immersive_aircraft:engine' })

	event.shaped('immersive_aircraft:engine', [
	    ' A ', 
	    'BCB',
	    'DED'  
	], {
	    A: 'create:precision_mechanism', 
	    B: 'createdieselgenerators:diesel_engine',
	    C: 'create:blaze_burner',
	    D: 'createaddition:electrum_ingot',
	    E: 'immersive_aircraft:boiler'
	})

})