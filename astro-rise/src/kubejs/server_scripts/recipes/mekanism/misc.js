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

})