ServerEvents.recipes(event => {

	event.remove({ id: 'createoreexcavation:vein_finder' })

	event.shaped('createoreexcavation:vein_finder', [
	    'AB ', 
	    'CD ',
	    '  D'  
	], {
	    A: 'minecraft:ender_eye', 
	    B: 'thermal:sapphire',
	    C: 'thermal:ruby',
	    D: 'tconstruct:tough_handle'
	})

})