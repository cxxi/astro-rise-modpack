ServerEvents.recipes(event => {

	// yeta_wrench

	event.remove({ id: 'enderio:yeta_wrench' })

	event.shaped('enderio:yeta_wrench', [
		'A A', 
	    ' B ',
	    ' A ' 
	], {
		A: 'enderio:copper_alloy_ingot',
		B: 'enderio:iron_gear'
	})
	
	// staff_of_travelling

	event.remove({ id: 'enderio:staff_of_travelling' })

	event.shaped('enderio:staff_of_travelling', [
	    'CBC', 
	    'BAB',
	    'CBC'  
	], {
	    A: 'twilightforest:twilight_scepter', 
	    B: 'mekanism:teleportation_core',
	    C: 'alexsmobs:void_worm_mandible'
	})

})