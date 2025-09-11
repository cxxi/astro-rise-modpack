ServerEvents.recipes(event => {

	// coal_generator

	event.remove({ id: 'ad_astra:coal_generator' })

	// etrionic_blast_furnace

	event.remove({ id: 'ad_astra:etrionic_blast_furnace' })

	// compressor

	event.remove({ id: 'ad_astra:compressor' })

	event.shaped('ad_astra:compressor', [
	    'BAB', 
	    'B B',
	    'BAB'  
	], {
	    A: 'create:mechanical_press', 
	    B: 'mekanism:block_steel'
	})

	// fuel_refinery

	event.remove({ id: 'ad_astra:fuel_refinery' })

	event.recipes.create.mechanical_crafting('ad_astra:fuel_refinery', [
	    'ABCBA', 
	    'BDEDB',
	    'CEFEC',
	    'BDEDB',
	    'ABCBA'
	], {
	    A: 'mekanism:ingot_refined_obsidian', 
	    B: 'createdieselgenerators:distillation_controller',
	    C: 'enderio:weather_crystal',
	    D: 'bigreactors:inanite_block',
	    E: 'mekanism:dust_lithium',
	    F: 'enderio:confusing_powder'
	})

	// nasa_workbench

	event.remove({ id: 'ad_astra:nasa_workbench' })

	event.recipes.create.mechanical_crafting('ad_astra:nasa_workbench', [
		'ABCBA',
		'BEDEB',
		'CGFGC',
		'BEDEB',
		'ABCBA'
	], {
		A: 'create:mechanical_arm',
		B: 'enderio:dark_steel_block',
		C: 'createaddition:electrum_block',
		D: 'mekanism:ultimate_control_circuit',
		E: 'deeperdarker:resonarium_plate',
		F: 'twilightforest:fiery_block',
		G: 'enderio:weather_crystal'
	})

})