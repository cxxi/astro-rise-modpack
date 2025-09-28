ServerEvents.recipes(event => {


	const withAllCast = (event, recipe) => {

		recipe.cast = { tag: 'tconstruct:casts/single_use/gear' }
		recipe.cast_consumed = true

		event.custom(recipe)

		recipe.cast = { tag: 'tconstruct:casts/multi_use/gear' }
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
	})

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

})