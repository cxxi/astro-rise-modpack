ServerEvents.recipes(event => {

	event.remove({ id: 'mekanism:crushing/venus_sandstone_to_venus_sand' })

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
	    'BAB',
	    '   ' 
	], {
		A: 'createaddition:electrum_spool',
		B: 'mekanism:ingot_steel'
	})

	// basic mechanical pipe

	event.remove({ id: 'mekanism:transmitter/mechanical_pipe/basic' })

	event.shaped('mekanism:basic_mechanical_pipe', [
		'   ', 
	    'BAB',
	    '   '  
	], {
		A: 'create:fluid_pipe',
		B: 'mekanism:ingot_steel'
	})

	// basic pressurized tube

	event.remove({ id: 'mekanism:transmitter/pressurized_tube/basic' })

	event.shaped('mekanism:basic_pressurized_tube', [
		'   ', 
	    'BAB',
	    '   ' 
	], {
		A: '#enderio:clear_glass',
		B: 'mekanism:ingot_steel'
	})

	// basic logistical transporter

	event.remove({ id: 'mekanism:transmitter/logistical_transporter/basic' })

	event.shaped('mekanism:basic_logistical_transporter', [
		'   ', 
	    'BAB',
	    '   ' 
	], {
		A: 'create:belt_connector',
		B: 'mekanism:ingot_steel'
	})

	// basic thermodynamic conductor

	event.remove({ id: 'mekanism:transmitter/thermodynamic_conductor/basic' })

	event.shaped('mekanism:basic_thermodynamic_conductor', [
		'   ', 
	    'BAB',
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

	// factory

	const factoryTypes = {
		smelting: 'mekanism:energized_smelter',
		enriching: 'mekanism:enrichment_chamber',
		crushing: 'mekanism:crusher',
		compressing: 'mekanism:osmium_compressor',
		combining: 'mekanism:combiner',
		purifying: 'mekanism:purification_chamber',
		injecting: 'mekanism:chemical_injection_chamber',
		infusing: 'mekanism:metallurgic_infuser',
		sawing: 'mekanism:precision_sawmill'
	}

	Object.entries(factoryTypes).forEach(([type, base]) => {

		event.remove({ id: `mekanism:factory/basic/${type}` })

		event.shaped(`mekanism:basic_${type}_factory`, [
			'ABA', 
		    'CDC',
		    'ABA' 
		], {
			A: 'enderio:vibrant_alloy_ingot',
			B: 'mekanism:basic_control_circuit',
			C: 'astro_rise:earth_steel_mechanism',
			D: base
		})

	})

	Object.keys(factoryTypes).forEach(type => {

		event.remove({ id: `mekanism:factory/advanced/${type}` })

		event.shaped(`mekanism:advanced_${type}_factory`, [
			'ABA', 
		    'CDC',
		    'ABA' 
		], {
			A: 'enderio:redstone_alloy_ingot',
			B: 'mekanism:advanced_control_circuit',
			C: 'astro_rise:ichor_steel_mechanism',
			D: `mekanism:basic_${type}_factory`
		})

	})

	Object.keys(factoryTypes).forEach(type => {

		event.remove({ id: `mekanism:factory/elite/${type}` })

		event.shaped(`mekanism:elite_${type}_factory`, [
			'ABA', 
		    'CDC',
		    'ABA' 
		], {
			A: 'enderio:pulsating_crystal',
			B: 'mekanism:elite_control_circuit',
			C: 'astro_rise:sky_steel_mechanism',
			D: `mekanism:advanced_${type}_factory`
		})

	})

	Object.keys(factoryTypes).forEach(type => {

		event.remove({ id: `mekanism:factory/ultimate/${type}` })

		event.shaped(`mekanism:ultimate_${type}_factory`, [
			'ABA', 
		    'CDC',
		    'ABA' 
		], {
			A: 'enderio:weather_crystal',
			B: 'mekanism:ultimate_control_circuit',
			C: 'astro_rise:ender_steel_mechanism',
			D: `mekanism:elite_${type}_factory`
		})

	})
})