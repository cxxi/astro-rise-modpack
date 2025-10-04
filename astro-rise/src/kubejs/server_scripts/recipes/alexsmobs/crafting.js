ServerEvents.recipes(event => {

	// warped_mixture

	global.craft(event, 'alexsmobs:warped_mixture', [
	    'ABA', 
	    'CFD',
	    'AEA'  
	], {
	    A: 'twilightforest:ironwood_ingot', 
	    B: 'chipped:bulbed_warped_fungus',
	    C: 'chipped:hooded_warped_fungus',
	    D: 'chipped:warped_fungus_trio',
	    E: 'chipped:wicked_warped_fungus',
	    F: 'minecraft:glass_bottle'
	})

	// rainbow_glass
	
	event.remove({ id: 'alexsmobs:rainbow_glass' })

	global.craft(event, 'alexsmobs:rainbow_glass', [
	    'AAAAA', 
	    'ACBCA',
	    'ABDBA',
	    'ACBCA',
	    'AAAAA'
	], {
	    A: 'alexsmobs:rainbow_jelly', 
	    B: 'twilightforest:magic_beans',
	    C: 'deeperdarker:resonarium_plate',
	    D: 'twilightforest:fiery_block'
	})

})