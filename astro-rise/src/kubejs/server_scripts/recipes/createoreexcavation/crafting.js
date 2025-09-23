ServerEvents.recipes(event => {

	event.remove({ id: 'createoreexcavation:vein_finder' })

	event.shaped('createoreexcavation:vein_finder', [
	    ' BA', 
	    ' DC',
	    'D  '  
	], {
	    A: 'minecraft:ender_eye', 
	    B: 'thermal:sapphire',
	    C: 'thermal:ruby',
	    D: 'createaddition:brass_rod'
	})

})