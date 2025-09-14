ServerEvents.recipes(event => {

	// metallurgic_infuser

	event.remove({ id: 'mekanism:metallurgic_infuser' })

	event.shaped('mekanism:metallurgic_infuser', [
	    'ABA', 
	    'CDC',
	    'AEA'  
	], {
		A: 'twilightforest:knightmetal_ingot',
	    B: 'astro_rise:sculk_mechanism',
	    C: 'createaddition:electrum_spool',
	    D: 'mekanism:block_osmium',
	    E: 'createdieselgenerators:burner'
	})

	// heat_generator

	event.remove({ id: 'mekanismgenerators:generator/heat' })

	event.shaped('mekanismgenerators:heat_generator', [
		'AAA', 
	    'BCB',
	    'DED' 
	], {
		A: 'mekanism:enriched_iron',
		B: '#minecraft:planks',
		C: 'mekanism:ingot_osmium',
		D: 'create:copper_sheet',
		E: 'create:blaze_burner'
	})

})