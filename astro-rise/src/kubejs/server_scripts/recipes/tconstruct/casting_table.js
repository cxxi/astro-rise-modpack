ServerEvents.recipes(event => {


	const withAllCast = (event, recipe, castType) => {

		recipe.cast = { tag: `tconstruct:casts/single_use/${castType}` }
		recipe.cast_consumed = true

		event.custom(recipe)

		recipe.cast = { tag: `tconstruct:casts/multi_use/${castType}` }
	    recipe.cast_consumed = false

	    event.custom(recipe)
	}

	// bars

	event.remove({ id: 'tconstruct:smeltery/casting/metal/gold/bars' })
  	event.remove({ id: 'tconstruct:smeltery/casting/metal/iron/bars' })
	
	// gear
	
	event.remove({ id: 'tconstruct:smeltery/casting/metal/iron/gear_sand_cast' })
	event.remove({ id: 'tconstruct:smeltery/casting/metal/iron/gear_gold_cast' })

	withAllCast(event, {
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

	// fluix_crystal

	withAllCast(event, {
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

	withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_copper_alloy',
	    	amount: 100
	    },
	    result: {
	    	item: 'enderio:copper_alloy_nugget'
	    },
	    cooling_time: 20
	}, 'nugget')

	withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_copper_alloy',
	    	amount: 900
	    },
	    result: {
	    	item: 'enderio:copper_alloy_ingot'
	    },
	    cooling_time: 180
	}, 'ingot')

	// energetic_alloy

	withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_energetic_alloy',
	    	amount: 100
	    },
	    result: {
	    	item: 'enderio:energetic_alloy_nugget'
	    },
	    cooling_time: 20
	}, 'nugget')

	withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_energetic_alloy',
	    	amount: 900
	    },
	    result: {
	    	item: 'enderio:energetic_alloy_ingot'
	    },
	    cooling_time: 180
	}, 'ingot')

	// vibrant_alloy

	withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_vibrant_alloy',
	    	amount: 100
	    },
	    result: {
	    	item: 'enderio:vibrant_alloy_nugget'
	    },
	    cooling_time: 20
	}, 'nugget')

	withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_vibrant_alloy',
	    	amount: 900
	    },
	    result: {
	    	item: 'enderio:vibrant_alloy_ingot'
	    },
	    cooling_time: 180
	}, 'ingot')

	// redstone_alloy

	withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_redstone_alloy',
	    	amount: 100
	    },
	    result: {
	    	item: 'enderio:redstone_alloy_nugget'
	    },
	    cooling_time: 20
	}, 'nugget')

	withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_redstone_alloy',
	    	amount: 900
	    },
	    result: {
	    	item: 'enderio:redstone_alloy_ingot'
	    },
	    cooling_time: 180
	}, 'ingot')

	// conductive_alloy

	withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_conductive_alloy',
	    	amount: 100
	    },
	    result: {
	    	item: 'enderio:conductive_alloy_nugget'
	    },
	    cooling_time: 20
	}, 'nugget')

	withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_conductive_alloy',
	    	amount: 900
	    },
	    result: {
	    	item: 'enderio:conductive_alloy_ingot'
	    },
	    cooling_time: 180
	}, 'ingot')

	// pulsating_alloy

	withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_pulsating_alloy',
	    	amount: 100
	    },
	    result: {
	    	item: 'enderio:pulsating_alloy_nugget'
	    },
	    cooling_time: 20
	}, 'nugget')

	withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_pulsating_alloy',
	    	amount: 900
	    },
	    result: {
	    	item: 'enderio:pulsating_alloy_ingot'
	    },
	    cooling_time: 180
	}, 'ingot')

	// dark_steel

	withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_dark_steel',
	    	amount: 100
	    },
	    result: {
	    	item: 'enderio:dark_steel_nugget'
	    },
	    cooling_time: 20
	}, 'nugget')

	withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_dark_steel',
	    	amount: 900
	    },
	    result: {
	    	item: 'enderio:dark_steel_ingot'
	    },
	    cooling_time: 180
	}, 'ingot')

	// end_steel

	withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_end_steel',
	    	amount: 100
	    },
	    result: {
	    	item: 'enderio:end_steel_nugget'
	    },
	    cooling_time: 20
	}, 'nugget')

	withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_end_steel',
	    	amount: 900
	    },
	    result: {
	    	item: 'enderio:end_steel_ingot'
	    },
	    cooling_time: 180
	}, 'ingot')

	// soularium

	withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_soularium',
	    	amount: 100
	    },
	    result: {
	    	item: 'enderio:soularium_nugget'
	    },
	    cooling_time: 20
	}, 'nugget')

	withAllCast(event, {
	    type: 'tconstruct:casting_table',
	    fluid: {
	    	fluid: 'astro_rise:molten_soularium',
	    	amount: 900
	    },
	    result: {
	    	item: 'enderio:soularium_ingot'
	    },
	    cooling_time: 180
	}, 'ingot')

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

})