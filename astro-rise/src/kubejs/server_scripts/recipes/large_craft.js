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

	event.remove({ id: 'createaddition:mechanical_crafting/electric_motor' })

	event.recipes.create.mechanical_crafting('createaddition:electric_motor', [
	    '  A  ', 
	    ' BCB ',
	    'BCDCB',
	    ' BEB '
	], {
	    A: 'create:andesite_alloy', 
	    B: 'create:brass_sheet',
	    C: 'createaddition:copper_spool',
	    D: 'astro_rise:sky_mechanism',
	    E: 'createaddition:capacitor'
	})

	event.remove({ id: 'createaddition:mechanical_crafting/alternator' })

	event.recipes.create.mechanical_crafting('createaddition:alternator', [
	    '  A  ', 
	    ' BCB ',
	    'BCDCB',
	    ' BEB '
	], {
	    A: 'create:andesite_alloy', 
	    B: 'create:iron_sheet',
	    C: 'createaddition:copper_spool',
	    D: 'astro_rise:sky_mechanism',
	    E: 'createaddition:capacitor'
	})

	event.remove({ id: 'createaddition:mechanical_crafting/tesla_coil' })

	event.recipes.create.mechanical_crafting('createaddition:tesla_coil', [
	    'AAA', 
	    ' B ',
	    'CDC',
	    'EFE'
	], {
	    A: 'createaddition:copper_spool', 
	    B: 'astro_rise:sky_mechanism',
	    C: 'createaddition:capacitor',
	    D: 'create:brass_casing',
	    E: 'create:brass_sheet',
	    F: 'create:electron_tube'
	})

})