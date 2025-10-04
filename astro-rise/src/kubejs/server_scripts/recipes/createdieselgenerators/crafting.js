ServerEvents.recipes(event => {

	// oil barrel

	event.remove({ id: 'createdieselgenerators:crafting/oil_barrel' })

	global.craft(event, 'createdieselgenerators:oil_barrel', [
	    '   ', 
	    'ABA',
	    '   '  
	], {
	    A: 'createaddition:zinc_sheet', 
	    B: 'minecraft:barrel'
	})

	// diesel_engine

	event.remove({ id: 'createdieselgenerators:crafting/diesel_engine' })

	global.craft(event, 'createdieselgenerators:diesel_engine', [
	    ' A ', 
	    'BCB',
	    'DED'  
	], {
	    A: 'astro_rise:ichor_mechanism', 
	    B: 'createdieselgenerators:engine_piston',
	    C: 'create:brass_block',
	    D: 'minecraft:polished_blackstone_slab',
	    E: 'create:fluid_tank'
	})

	// huge_diesel_engine

	event.remove({ id: 'createdieselgenerators:crafting/huge_diesel_engine' })

	global.craft(event, 'createdieselgenerators:huge_diesel_engine', [
	    'ABA', 
	    'CDC',
	    'EFE'  
	], {
	    A: 'create:andesite_alloy', 
	    B: 'astro_rise:ichor_mechanism',
	    C: 'create:brass_sheet',
	    D: 'create:steam_engine',
	    E: 'create:fluid_pipe',
	    F: 'create:brass_block'
	})

	// burner

	event.remove({ id: 'createdieselgenerators:crafting/burner' })

	global.craft(event, 'createdieselgenerators:burner', [
	    'ABA', 
	    ' C ',
	    'DED'  
	], {
	    A: 'minecraft:flint_and_steel', 
	    B: 'create:brass_ingot',
	    C: 'astro_rise:ichor_mechanism',
	    D: 'create:andesite_alloy',
	    E: 'create:empty_blaze_burner'
	})

})