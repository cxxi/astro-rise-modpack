ServerEvents.recipes(event => {

	// basic_fluid_tank

	event.remove({ id: 'mekanism:fluid_tank/basic' })

	event.shaped('mekanism:basic_fluid_tank', [
		'ABA', 
	    'BCB',
	    'ABA' 
	], {
		A: 'minecraft:redstone',
		B: 'minecraft:iron_ingot',
		C: 'create:fluid_tank'
	})

	// basic_chemical_tank

	event.remove({ id: 'mekanism:chemical_tank/basic' })

	event.shaped('mekanism:basic_chemical_tank', [
		'ABA', 
	    'B B',
	    'ABA' 
	], {
		A: 'mekanism:ingot_osmium',
		B: 'ad_astra:steel_plate'
	})

	// sawdust

	event.replaceInput({}, 'thermal:sawdust', 'mekanism:sawdust')
	event.replaceInput({}, 'createdieselgenerators:wood_chip', 'mekanism:sawdust')
	event.replaceOutput({}, 'thermal:sawdust', 'mekanism:sawdust')
	event.replaceOutput({}, 'createdieselgenerators:wood_chip', 'mekanism:sawdust')
	event.remove({ input: 'createdieselgenerators:wood_chip' })

	event.remove({ input: 'thermal:sawdust_block' })
	event.remove({ output: 'thermal:sawdust_block' })

	event.shapeless('createdieselgenerators:chip_wood_block', [
	    '9x mekanism:sawdust' 
	])

})