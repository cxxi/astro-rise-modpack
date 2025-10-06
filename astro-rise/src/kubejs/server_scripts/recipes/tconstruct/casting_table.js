ServerEvents.recipes(event => {

	// TODO : REFACT

	// bars

	event.remove({ id: 'tconstruct:smeltery/casting/metal/gold/bars' })
  	event.remove({ id: 'tconstruct:smeltery/casting/metal/iron/bars' })
	
	// gear
	
	event.remove({ id: 'tconstruct:smeltery/casting/metal/iron/gear_sand_cast' })
	event.remove({ id: 'tconstruct:smeltery/casting/metal/iron/gear_gold_cast' })

	global.withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'tconstruct:molten_steel',
	    	amount: 360
	    },
	    result: {
	    	item: 'enderio:iron_gear'
	    },
	    cooling_time: 40
	}, 'gear')

	// plates

	global.withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_soularium',
	    	amount: 90
	    },
	    result: {
	    	item: 'astro_rise:soularium_plate'
	    },
	    cooling_time: 60
	}, 'plate')

	// rods

	global.withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_etrium',
	    	amount: 45
	    },
	    result: {
	    	item: 'ad_astra:etrium_rod'
	    },
	    cooling_time: 80
	}, 'rod')

	global.withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'tconstruct:molten_copper',
	    	amount: 45
	    },
	    result: {
	    	item: 'createaddition:copper_rod'
	    },
	    cooling_time: 80
	}, 'rod')

	global.withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'tconstruct:molten_gold',
	    	amount: 45
	    },
	    result: {
	    	item: 'createaddition:gold_rod'
	    },
	    cooling_time: 80
	}, 'rod')

	global.withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'tconstruct:molten_electrum',
	    	amount: 45
	    },
	    result: {
	    	item: 'createaddition:electrum_rod'
	    },
	    cooling_time: 80
	}, 'rod')

	global.withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'tconstruct:molten_brass',
	    	amount: 45
	    },
	    result: {
	    	item: 'createaddition:brass_rod'
	    },
	    cooling_time: 80
	}, 'rod')

	global.withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:liquid_infinity',
	    	amount: 45
	    },
	    result: {
	    	item: 'enderio:infinity_rod'
	    },
	    cooling_time: 80
	}, 'rod')

	// fluix_crystal

	global.withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_fluix',
	    	amount: 100
	    },
	    result: {
	    	item: 'ae2:fluix_crystal'
	    },
	    cooling_time: 100
	}, 'gem')

	// copper_alloy

	global.withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_copper_alloy',
	    	amount: 10
	    },
	    result: {
	    	item: 'enderio:copper_alloy_nugget'
	    },
	    cooling_time: 20
	}, 'nugget')

	global.withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_copper_alloy',
	    	amount: 90
	    },
	    result: {
	    	item: 'enderio:copper_alloy_ingot'
	    },
	    cooling_time: 180
	}, 'ingot')

	// energetic_alloy

	global.withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_energetic_alloy',
	    	amount: 10
	    },
	    result: {
	    	item: 'enderio:energetic_alloy_nugget'
	    },
	    cooling_time: 20
	}, 'nugget')

	global.withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_energetic_alloy',
	    	amount: 90
	    },
	    result: {
	    	item: 'enderio:energetic_alloy_ingot'
	    },
	    cooling_time: 180
	}, 'ingot')

	// vibrant_alloy

	global.withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_vibrant_alloy',
	    	amount: 10
	    },
	    result: {
	    	item: 'enderio:vibrant_alloy_nugget'
	    },
	    cooling_time: 20
	}, 'nugget')

	global.withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_vibrant_alloy',
	    	amount: 90
	    },
	    result: {
	    	item: 'enderio:vibrant_alloy_ingot'
	    },
	    cooling_time: 180
	}, 'ingot')

	// redstone_alloy

	global.withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_redstone_alloy',
	    	amount: 10
	    },
	    result: {
	    	item: 'enderio:redstone_alloy_nugget'
	    },
	    cooling_time: 20
	}, 'nugget')

	global.withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_redstone_alloy',
	    	amount: 90
	    },
	    result: {
	    	item: 'enderio:redstone_alloy_ingot'
	    },
	    cooling_time: 180
	}, 'ingot')

	// conductive_alloy

	global.withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_conductive_alloy',
	    	amount: 10
	    },
	    result: {
	    	item: 'enderio:conductive_alloy_nugget'
	    },
	    cooling_time: 20
	}, 'nugget')

	global.withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_conductive_alloy',
	    	amount: 90
	    },
	    result: {
	    	item: 'enderio:conductive_alloy_ingot'
	    },
	    cooling_time: 180
	}, 'ingot')

	// pulsating_alloy

	global.withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_pulsating_alloy',
	    	amount: 10
	    },
	    result: {
	    	item: 'enderio:pulsating_alloy_nugget'
	    },
	    cooling_time: 20
	}, 'nugget')

	global.withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_pulsating_alloy',
	    	amount: 90
	    },
	    result: {
	    	item: 'enderio:pulsating_alloy_ingot'
	    },
	    cooling_time: 180
	}, 'ingot')

	// dark_steel

	global.withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_dark_steel',
	    	amount: 10
	    },
	    result: {
	    	item: 'enderio:dark_steel_nugget'
	    },
	    cooling_time: 20
	}, 'nugget')

	global.withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_dark_steel',
	    	amount: 90
	    },
	    result: {
	    	item: 'enderio:dark_steel_ingot'
	    },
	    cooling_time: 180
	}, 'ingot')

	// end_steel

	global.withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_end_steel',
	    	amount: 10
	    },
	    result: {
	    	item: 'enderio:end_steel_nugget'
	    },
	    cooling_time: 20
	}, 'nugget')

	global.withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_end_steel',
	    	amount: 90
	    },
	    result: {
	    	item: 'enderio:end_steel_ingot'
	    },
	    cooling_time: 180
	}, 'ingot')

	// soularium

	global.withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_soularium',
	    	amount: 10
	    },
	    result: {
	    	item: 'enderio:soularium_nugget'
	    },
	    cooling_time: 20
	}, 'nugget')

	global.withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_soularium',
	    	amount: 90
	    },
	    result: {
	    	item: 'enderio:soularium_ingot'
	    },
	    cooling_time: 180
	}, 'ingot')

	// redstone_ingot

	global.withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'thermal:redstone',
	    	amount: 10
	    },
	    result: {
	    	item: 'extendedcrafting:redstone_nugget'
	    },
	    cooling_time: 20
	}, 'nugget')

	global.withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'thermal:redstone',
	    	amount: 90
	    },
	    result: {
	    	item: 'extendedcrafting:redstone_ingot'
	    },
	    cooling_time: 180
	}, 'ingot')

	// ender_ingot

	global.withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'tconstruct:molten_ender',
	    	amount: 28
	    },
	    result: {
	    	item: 'extendedcrafting:ender_nugget'
	    },
	    cooling_time: 80
	}, 'nugget')

	global.withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'tconstruct:molten_ender',
	    	amount: 250
	    },
	    result: {
	    	item: 'extendedcrafting:ender_ingot'
	    },
	    cooling_time: 9
	}, 'ingot')

	// infinity_ingot

	global.withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:liquid_infinity',
	    	amount: 90
	    },
	    result: {
	    	item: 'astro_rise:infinity_ingot'
	    },
	    cooling_time: 80
	}, 'ingot')

	// ender_pearl

	event.remove({ id: 'tconstruct:smeltery/casting/ender/pearl' })

	event.custom({
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'tconstruct:molten_ender',
	    	amount: 250
	    },
	    result: {
	    	item: 'minecraft:ender_pearl'
	    },
	    cooling_time: 80
	})

	// wither_skeleton_skull

	event.custom({
	    type: 'tconstruct:casting_table',
	    cast: {
	    	item: 'minecraft:skeleton_skull'
	    },
	    cast_consumed: true,
	    fluid: {
	    	fluid: 'astro_rise:molten_necrotic_bone',
	    	amount: 400
	    },
	    result: {
	    	item: 'minecraft:wither_skeleton_skull'
	    },
	    cooling_time: 100
	})

	// necrotic_bone

	event.custom({
	    type: 'tconstruct:casting_table',
	    cast: {
	    	item: 'minecraft:bone'
	    },
	    cast_consumed: true,
	    fluid: {
	    	fluid: 'astro_rise:molten_necrotic_bone',
	    	amount: 100
	    },
	    result: {
	    	item: 'tconstruct:necrotic_bone'
	    },
	    cooling_time: 100
	})

	// mold

	event.custom({
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'tconstruct:molten_aluminum',
	    	amount: 360
	    },
	    result: {
	    	item: 'astro_rise:mold'
	    },
	    cooling_time: 150
	})

	event.custom({
	    type: 'tconstruct:casting_table',
	    cast: {
	    	item: 'astro_rise:bowl_mold'
	    },
	    cast_consumed: false,
	    fluid: {
	    	fluid: 'thermal:latex',
			amount: 250
	    },
	    result: {
	    	item: 'thermal:rubber'
	    },
	    cooling_time: 150
	})

	event.custom({
	    type: 'tconstruct:casting_table',
	    cast: {
	    	item: 'astro_rise:bar_mold'
	    },
	    cast_consumed: false,
	    fluid: {
	    	fluid: "create:chocolate",
			amount: 250
	    },
	    result: {
	    	item: 'create:bar_of_chocolate'
	    },
	    cooling_time: 77
	})

	// experience_nugget

	global.withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'enderio:xp_juice',
	    	amount: 250
	    },
	    result: {
	    	item: 'create:experience_nugget'
	    },
	    cooling_time: 80
	}, 'nugget')

	// extendedCrafting components

	const componentMapping = [
		['basic', 'tconstruct:molten_aluminum'],
		['advanced', 'tconstruct:molten_electrum'],
		['elite', 'tconstruct:molten_platinum'],
		['ultimate', 'astro_rise:molten_pulsating_alloy'],
		// ['redstone', ''],
		// ['enhanced_redstone', ''],
		// ['ender', ''],
		// ['enhanced_ender', ''],
		// ['crystaltine', ''],
		// ['the_ultimate', '']
	]

	componentMapping.forEach(([type, fluid]) => {

		event.custom({
		    type: 'tconstruct:casting_table',
		    cast: {
		    	item: 'astro_rise:base_component'
		    },
		    cast_consumed: true,
		    fluid: {
		    	fluid: fluid,
				amount: 180
		    },
		    result: {
		    	item: `extendedcrafting:${type}_component`
		    },
		    cooling_time: 80
		})

	})

})