ServerEvents.recipes(event => {

	// rainbow_glass
	
	event.remove({ id: 'alexsmobs:rainbow_glass' })

	event.recipes.create.mechanical_crafting('alexsmobs:rainbow_glass', [
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