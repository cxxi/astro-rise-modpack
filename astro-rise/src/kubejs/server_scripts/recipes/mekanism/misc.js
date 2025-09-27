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

	// basic universal cable

	event.remove({ id: 'mekanism:transmitter/universal_cable/basic' })

	event.shaped('mekanism:basic_universal_cable', [
		'   ', 
	    'ABA',
	    '   ' 
	], {
		A: 'createaddition:electrum_spool',
		B: 'mekanism:ingot_steel'
	})

	// basic mechanical pipe

	event.remove({ id: 'mekanism:transmitter/mechanical_pipe/basic' })

	event.shaped('mekanism:basic_mechanical_pipe', [
		'   ', 
	    'ABA',
	    '   '  
	], {
		A: 'create:fluid_pipe',
		B: 'mekanism:ingot_steel'
	})

	// basic pressurized tube

	event.remove({ id: 'mekanism:transmitter/pressurized_tube/basic' })

	event.shaped('mekanism:basic_pressurized_tube', [
		'   ', 
	    'ABA',
	    '   ' 
	], {
		A: '#enderio:clear_glass',
		B: 'mekanism:ingot_steel'
	})

	// basic logistical transporter

	event.remove({ id: 'mekanism:transmitter/logistical_transporter/basic' })

	event.shaped('mekanism:basic_logistical_transporter', [
		'   ', 
	    'ABA',
	    '   ' 
	], {
		A: 'create:belt_connector',
		B: 'mekanism:ingot_steel'
	})

	// basic thermodynamic conductor

	event.remove({ id: 'mekanism:transmitter/thermodynamic_conductor/basic' })

	event.shaped('mekanism:basic_thermodynamic_conductor', [
		'   ', 
	    'ABA',
	    '   ' 
	], {
		A: 'createaddition:copper_spool',
		B: 'mekanism:ingot_steel'
	})

	// sawdust

	event.replaceInput({}, 'thermal:sawdust', 'mekanism:sawdust')
	event.replaceInput({}, 'createdieselgenerators:wood_chip', 'mekanism:sawdust')
	event.replaceOutput({}, 'thermal:sawdust', 'mekanism:sawdust')
	event.replaceOutput({}, 'createdieselgenerators:wood_chip', 'mekanism:sawdust')
	event.remove({ input: 'createdieselgenerators:wood_chip' })
	event.remove({ input: 'thermal:sawdust_block' })
	event.remove({ output: 'thermal:sawdust_block' })

	event.remove({ id: 'createdieselgenerators:crafting/chip_wood_block' })

	event.shapeless('createdieselgenerators:chip_wood_block', [
	    '9x mekanism:sawdust' 
	])

})