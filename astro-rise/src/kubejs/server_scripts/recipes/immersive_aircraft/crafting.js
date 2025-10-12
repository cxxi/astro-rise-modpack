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

	// industrial_gears

	event.remove({ id: 'immersive_aircraft:industrial_gears' })

	global.craft(event, 'immersive_aircraft:industrial_gears', [
   		'thermal:iron_gear',
   		'thermal:copper_gear'
   	])

})