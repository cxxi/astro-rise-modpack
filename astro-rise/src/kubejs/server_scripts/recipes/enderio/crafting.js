ServerEvents.recipes(event => {

	event.remove({ id: 'enderio:painting_machine' })
	event.remove({ id: 'enderio:stirling_generator' })
	event.remove({ id: 'enderio:slice_and_splice' })
	event.remove({ id: 'enderio:soul_engine' })
	event.remove({ id: 'enderio:drain' })
	event.remove({ id: 'enderio:sag_mill' })
	event.remove({ id: 'enderio:glider_wing' })
	event.remove({ id: 'enderio:infinity_rod' })
	event.remove({ id: 'enderio:conduit_binder_composite' })

	event.remove({ output: /enderio:.*_grinding_ball/ })

	event.remove({ id: 'enderio:tank_fill/nutritious_stick' })
	event.remove({ id: 'enderio:soulbinding/frank_n_zombie' })
	event.remove({ id: 'enderio:soulbinding/sentient_ender' })

	// void_chassis

	event.remove({ id: 'enderio:void_chassis' })

	global.craft(event, 'enderio:void_chassis', [
	    'ABA', 
	    'BCB',
	    'ABA'  
	], {
	    A: 'ad_astra:steel_plate', 
	    B: 'enderio:infinity_rod',
	    C: 'mekanism:steel_casing'
	})

	// ensouled_chassis

	event.remove({ id: 'enderio:ensouled_chassis' })

	global.craft(event, 'enderio:ensouled_chassis', [
	    'ABA', 
	    'BCB',
	    'ABA'  
	], {
	    A: 'astro_rise:soularium_plate', 
	    B: 'enderio:infinity_rod',
	    C: 'enderio:void_chassis'
	})

	// industrial_insulation_block

	global.craft(event, 'enderio:industrial_insulation_block', [
	    'ABA', 
	    'BAB',
	    'ABA'  
	], {
	    A: 'minecraft:sponge', 
	    B: 'astro_rise:infinity_block'
	})

	// enchanter

	event.remove({ id: 'enderio:enchanter' })

	global.craft(event, 'enderio:enchanter', [
	    'ABA', 
	    'CDC',
	    'EEE'  
	], {
	    A: 'twilightforest:carminite', 
	    B: 'minecraft:book',
	    C: 'enderio:prescient_powder',
	    D: 'minecraft:enchanting_table',
	    E: 'enderio:dark_steel_ingot'
	})

	// wired_charger

	event.remove({ id: 'enderio:wired_charger' })

	global.craft(event, 'enderio:wired_charger', [
	    'AAA', 
	    'BCB',
	    'ADA'  
	], {
	    A: 'enderio:copper_alloy_ingot', 
	    B: 'thermal:constantan_gear',
	    C: 'enderio:void_chassis',
	    D: 'enderio:conductive_alloy_ingot'
	})

	// fluid_tank

	event.remove({ id: 'enderio:fluid_tank' })

	global.craft(event, 'enderio:fluid_tank', [
		'ABA', 
	    'BCB',
	    'ABA' 
	], {
		A: 'minecraft:iron_ingot',
		B: 'minecraft:iron_bars',
		C: 'create:fluid_tank'
	})

	// pressurized_fluid_tank

	event.remove({ id: 'enderio:pressurized_fluid_tank' })

	global.craft(event, 'enderio:pressurized_fluid_tank', [
		'ABA', 
	    'BCB',
	    'ABA' 
	], {
		A: 'enderio:dark_steel_ingot',
		B: 'enderio:dark_steel_bars',
		C: 'enderio:fluid_tank'
	})

	// fluid_tank

	event.remove({ id: 'enderio:reinforced_obsidian_block' })

	global.craft(event, 'enderio:reinforced_obsidian_block', [
		'ABA', 
	    'BCB',
	    'ABA' 
	], {
		A: 'astro_rise:infinity_block',
		B: 'enderio:dark_steel_bars',
		C: 'bedrockbreakers:pure_obsidian'
	})

	// soul_binder

	event.remove({ id: 'enderio:soul_binder' })

	global.craft(event, 'enderio:soul_binder', [
		'ABA', 
	    'CDC',
	    'AEA' 
	], {
		A: 'enderio:soularium_ingot',
		B: 'enderio:empty_soul_vial',
		C: 'thermal:enderium_gear',
		D: 'enderio:ensouled_chassis',
		E: 'astro_rise:sculk_steel_mechanism'
	})

	// powered_spawner

	event.remove({ id: 'enderio:powered_spawner' })

	global.craft(event, 'enderio:powered_spawner', [
		'ABA', 
	    'ACA',
	    'DED' 
	], {
		A: 'enderio:soularium_ingot',
		B: 'enderio:broken_spawner',
		C: 'enderio:ensouled_chassis',
		D: 'enderio:vibrant_crystal',
		E: 'enderio:redstone_alloy_ingot'
	})

	// vacuum_chest

	event.remove({ id: 'enderio:vacuum_chest' })

	global.craft(event, 'enderio:vacuum_chest', [
		'ABA', 
	    'BCB',
	    'ADA' 
	], {
		A: 'enderio:dark_steel_ingot',
		B: 'thermal:electrum_gear',
		C: '#forge:chests',
		D: 'mekanismgenerators:electromagnetic_coil'
	})

	// xp_vacuum

	event.remove({ id: 'enderio:xp_vacuum' })

	global.craft(event, 'enderio:xp_vacuum', [
		'ABA', 
	    'BCB',
	    'ADA' 
	], {
		A: 'enderio:dark_steel_ingot',
		B: 'thermal:electrum_gear',
		C: 'enderio:experience_rod',
		D: 'create:experience_block'
	})

	// experience_rod

	event.remove({ id: 'enderio:experience_rod' })

	global.craft(event, 'enderio:experience_rod', [
		' AB', 
	    ' CA',
	    'D  ' 
	], {
		A: 'create:experience_nugget',
		B: 'thermal:xp_crystal',
		C: 'ad_astra:steel_rod',
		D: 'enderio:infinity_rod'
	})

	// basic_capacitor_bank

	event.remove({ id: 'enderio:basic_capacitor_bank' })

	global.craft(event, 'enderio:basic_capacitor_bank', [
		'ABA', 
	    'BCB',
	    'ABA' 
	], {
		A: 'minecraft:iron_ingot',
		B: 'enderio:basic_capacitor',
		C: 'createaddition:modular_accumulator'
	})
	
	// travel_anchor

	event.remove({ id: 'enderio:travel_anchor' })

	global.craft(event, 'enderio:travel_anchor', [
	    'ABA', 
	    'BCB',
	    'ABA'  
	], {
	    A: 'enderio:dark_steel_ingot', 
	    B: 'enderio:pulsating_crystal',
	    C: 'mekanism:teleporter'
	})

	// alloy

	global.craft(event, 'enderio:energetic_alloy_ingot', [
	    'CAC', 
	    'ABA',
	    'CAC'   
	], {
	    A: 'mekanism:dust_fluorite', 
	    B: 'enderio:conductive_alloy_ingot',
	    C: 'twilightforest:carminite'
	})

	global.craft(event, 'enderio:end_steel_ingot', [
	    'CAC', 
	    'ABA',
	    'CAC'   
	], {
	    A: 'minecraft:end_stone', 
	    B: 'enderio:dark_steel_ingot',
	    C: 'platinum_mod:dragon_charge'
	})

	// cake

	event.remove({ id: 'enderio:cake' })

	// empty_soul_vial

	event.remove({ id: 'enderio:empty_soul_vial' })

	global.craft(event, 'enderio:empty_soul_vial', [
	    ' A ', 
	    'B B',
	    ' B '
	], {
	    A: 'enderio:soularium_ingot', 
	    B: 'tconstruct:soul_glass'
	})

	// pressurized_fluid_conduit

	event.remove({ id: 'enderio:pressurized_fluid_conduit' })
	
	// ender_fluid_conduit

	event.remove({ id: 'enderio:ender_fluid_conduit' })

	// fluid_conduit

	event.remove({ id: 'enderio:fluid_conduit' })

	global.craft(event, 'enderio:fluid_conduit', [
	    'AAA', 
	    'BBB',
	    'AAA'  
	], {
	    A: 'enderio:conduit_binder', 
	    B: 'mekanism:ultimate_mechanical_pipe'
	})

	// item_conduit

	event.remove({ id: 'enderio:item_conduit' })

	global.craft(event, 'enderio:item_conduit', [
	    'CAC', 
	    'BBB',
	    'CAC'  
	], {
	    A: 'enderio:conduit_binder', 
	    B: 'mekanism:ultimate_logistical_transporter',
	    C: 'enderio:pulsating_alloy_nugget'
	})

	// energy_conduit

	event.remove({ id: 'enderio:energy_conduit' })

	global.craft(event, 'enderio:energy_conduit', [
	    'CAC', 
	    'BBB',
	    'CAC'  
	], {
	    A: 'enderio:conduit_binder', 
	    B: 'mekanism:ultimate_universal_cable',
	    C: 'enderio:conductive_alloy_ingot'
	})

	// wood_gear

	event.remove({ id: 'enderio:wood_gear' })
	event.remove({ id: 'enderio:wood_gear_corner' })

	// stone_gear

	event.remove({ id: 'enderio:stone_gear' })
	event.remove({ id: 'enderio:stone_gear_upgrade' })

	// iron_gear
	
	event.remove({ id: 'enderio:iron_gear' })

	global.craft(event, 'enderio:iron_gear', [
	    'ABA', 
	    'BCB',
	    'ABA'  
	], {
	    A: 'minecraft:iron_nugget', 
	    B: 'mekanism:ingot_steel',
	    C: 'enderio:grains_of_infinity'
	})

	// primitive_alloy_smelter & alloy_smelter

	event.remove({ type: 'enderio:alloy_smelting' })

	// crafter

	event.remove({ id: 'enderio:crafter' })

	global.craft(event, 'enderio:crafter', [
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

	// yeta_wrench

	event.remove({ id: 'enderio:yeta_wrench' })

	global.craft(event, 'enderio:yeta_wrench', [
		'A A', 
	    ' B ',
	    ' A ' 
	], {
		A: 'enderio:copper_alloy_ingot',
		B: 'enderio:iron_gear'
	})
	
	// staff_of_travelling

	event.remove({ id: 'enderio:staff_of_travelling' })

	global.craft(event, 'enderio:staff_of_travelling', [
	    'CBC', 
	    'BAB',
	    'CBC'  
	], {
	    A: 'twilightforest:twilight_scepter', 
	    B: 'mekanism:teleportation_core',
	    C: 'alexsmobs:void_worm_mandible'
	})

	// basic_item_filter

	event.remove({ id: 'enderio:basic_item_filter' })

	global.craft(event, 'enderio:basic_item_filter', [
	    'ABA', 
	    'BCB',
	    'ABA'  
	], {
	    A: 'enderio:black_paper', 
	    B: 'minecraft:paper',
	    C: 'minecraft:hopper'
	})

	// advanced_item_filter

	event.remove({ id: 'enderio:advanced_item_filter' })

	global.craft(event, 'enderio:advanced_item_filter', [
	    'AAA', 
	    'ABA',
	    'AAA'  
	], {
	    A: 'enderio:basic_item_filter', 
	    C: 'minecraft:hopper'
	})

	// basic_fluid_filter

	event.remove({ id: 'enderio:basic_fluid_filter' })

	global.craft(event, 'enderio:basic_fluid_filter', [
	    'ABA', 
	    'BCB',
	    'ABA'  
	], {
	    A: 'enderio:black_paper', 
	    B: 'minecraft:paper',
	    C: 'minecraft:bucket'
	})

	// entity_filter

	event.remove({ id: 'enderio:entity_filter' })

	global.craft(event, 'enderio:entity_filter', [
	    'ABA', 
	    'BCB',
	    'ABA'  
	], {
	    A: 'enderio:black_paper', 
	    B: 'minecraft:paper',
	    C: 'enderio:empty_soul_vial'
	})

	// entity_filter

	event.remove({ id: 'enderio:redstone_filter_base' })

	global.craft(event, 'enderio:redstone_filter_base', [
	    'ABA', 
	    'BCB',
	    'ABA'  
	], {
	    A: 'enderio:black_paper', 
	    B: 'minecraft:paper',
	    C: 'enderio:redstone_alloy_ingot'
	})

})