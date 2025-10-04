ServerEvents.recipes(event => {

	// engine

	event.remove({ id: 'immersive_aircraft:engine' })

	global.craft(event, 'immersive_aircraft:engine', [
	    ' A ', 
	    'BCB',
	    'DED'  
	], {
	    A: 'astro_rise:sky_mechanism', 
	    B: 'createdieselgenerators:diesel_engine',
	    C: 'create:blaze_burner',
	    D: 'createaddition:electrum_ingot',
	    E: 'immersive_aircraft:boiler'
	})

})