ServerEvents.recipes(event => {

	// primitive_alloy_smelter

	event.remove({ id: 'enderio:primitive_alloy_smelter' })

	event.shaped('enderio:primitive_alloy_smelter', [
		'AAA', 
	    'BCB',
	    'DBD' 
	], {
		A: 'minecraft:blast_furnace',
		B: 'minecraft:deepslate',
		C: 'enderio:grains_of_infinity',
		D: 'mekanism:enriched_iron'
	})

	// alloy_smelter

	event.remove({ id: 'enderio:alloy_smelter' })

	event.shaped('enderio:alloy_smelter', [
		'ABA', 
	    'BCB',
	    'DED' 
	], {
		A: 'enderio:dark_steel_ingot',
		B: 'enderio:primitive_alloy_smelter',
		C: 'enderio:void_chassis',
		D: 'enderio:iron_gear',
		E: 'create:basin'
	})

	// crafter

	event.remove({ id: 'enderio:crafter' })

	event.shaped('enderio:crafter', [
	    'AAA', 
	    'BCB',
	    'DED'
	], {
	    A: 'mekanism:enriched_redstone', 
	    B: 'mekanism:ingot_osmium',
	    C: 'enderio:void_chassis',
	    D: 'enderio:iron_gear',
	    E: 'create:mechanical_crafter'
	})
	
})