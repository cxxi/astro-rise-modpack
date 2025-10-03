ServerEvents.recipes(event => {

	event.remove({ id: 'createaddition:crafting/small_connector_copper' })

	event.shapeless('3x createaddition:connector', [
   		'createaddition:copper_rod',
   		'create:andesite_alloy',
   		'thermal:cinnabar'
   	])

   	event.remove({ id: 'createaddition:crafting/large_connector_gold' })

	event.shapeless('2x createaddition:large_connector', [
   		'createaddition:gold_rod',
   		'create:andesite_alloy',
   		'create:andesite_alloy',
   		'thermal:cinnabar'
   	])

   	event.remove({ id: 'createaddition:crafting/large_connector_electrum' })

	event.shapeless('2x createaddition:large_connector', [
   		'createaddition:electrum_rod',
   		'create:andesite_alloy',
   		'create:andesite_alloy',
   		'thermal:cinnabar'
   	])

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