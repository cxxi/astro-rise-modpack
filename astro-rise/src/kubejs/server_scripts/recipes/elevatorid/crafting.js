ServerEvents.recipes(event => {

	event.remove({ id: /elevatorid:elevator_.*/ })

	event.shaped('elevatorid:elevator_white', [
	    'ABA', 
	    'BCB',
	    'ABA'  
	],{
	    A: 'minecraft:white_wool', 
	    B: 'tconstruct:sky_slime',
	    C: 'astro_rise:ender_mechanism'
	})

})