ServerEvents.recipes(event => {

	// gold_bars

	event.remove({ id: 'tconstruct:smeltery/casting/metal/gold/bars' })

  	// iron_bars

  	event.remove({ id: 'tconstruct:smeltery/casting/metal/iron/bars' })
	
	// iron_gear
	
	event.remove({ id: 'tconstruct:smeltery/casting/metal/iron/gear_sand_cast' })

	event.custom({
	    type: 'tconstruct:casting_table',
	    cast: {
	    	tag: 'tconstruct:casts/single_use/gear'
	    },
	    cast_consumed: true,
	    fluid: {
	    	fluid: 'tconstruct:molten_steel',
	    	amount: 360
	    },
	    result: {
	    	item: 'enderio:iron_gear'
	    },
	    cooling_time: 40
	})

	event.remove({ id: 'tconstruct:smeltery/casting/metal/iron/gear_gold_cast' })

	event.custom({
	    type: 'tconstruct:casting_table',
	    cast: {
	    	tag: 'tconstruct:casts/multi_use/gear'
	    },
	    cast_consumed: false,
	    fluid: {
	    	fluid: 'tconstruct:molten_steel',
	    	amount: 360
	    },
	    result: {
	    	item: 'enderio:iron_gear'
	    },
	    cooling_time: 40
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
	    	amount: 100
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
	    	item: 'tconstruct:casts/single_use/gear'
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

	event.custom({
	    type: 'tconstruct:casting_table',
	    cast: {
	    	item: 'tconstruct:casts/multi_use/gear'
	    },
	    cast_consumed: false,
	    fluid: {
	    	fluid: 'astro_rise:molten_necrotic_bone',
	    	amount: 100
	    },
	    result: {
	    	item: 'tconstruct:necrotic_bone'
	    },
	    cooling_time: 100
	})

	// sculk

	event.custom({
	    type: 'tconstruct:casting_basin',
	    fluid: {
	    	fluid: 'astro_rise:liquid_sculk',
	    	amount: 900
	    },
	    result: {
	    	item: 'minecraft:sculk'
	    },
	    cooling_time: 60
	})

})