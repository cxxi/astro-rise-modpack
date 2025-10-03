ServerEvents.recipes(event => {

	// andesite_alloy

	event.custom({
	    type: 'tconstruct:casting_basin',
	    cast: {
	    	item: 'minecraft:andesite'
	    },
	    cast_consumed: true,
	    fluid: {
	    	fluid: 'tconstruct:molten_aluminum',
	    	amount: 10
	    },
	    result: {
	    	item: 'create:andesite_alloy'
	    },
	    cooling_time: 20
	})

	// sculk

	event.custom({
	    type: 'tconstruct:casting_basin',
	    fluid: {
	    	fluid: 'astro_rise:liquid_sculk',
	    	amount: 1000
	    },
	    result: {
	    	item: 'minecraft:sculk'
	    },
	    cooling_time: 60
	})

	// redstone_ingot_block

	event.custom({
	    type: 'tconstruct:casting_basin',
	    fluid: {
	    	fluid: 'thermal:redstone',
	    	amount: 810
	    },
	    result: {
	    	item: 'extendedcrafting:redstone_ingot_block'
	    },
	    cooling_time: 720
	})

	// ender_ingot_block

	event.custom({
	    type: 'tconstruct:casting_basin',
	    fluid: {
	    	fluid: 'tconstruct:molten_ender',
	    	amount: 810
	    },
	    result: {
	    	item: 'extendedcrafting:ender_ingot_block'
	    },
	    cooling_time: 720
	})

})