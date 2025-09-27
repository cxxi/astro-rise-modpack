ServerEvents.recipes(event => {

	// molten_enderium

	event.remove({ id: 'tconstruct:smeltery/alloys/molten_enderium' })

	event.recipes.tconstruct.alloy(
	    { fluid: "tconstruct:molten_enderium", amount: 180 },
	    [
	    	{ fluid: "tconstruct:molten_lead", amount: 270 },
	    	{ fluid: "tconstruct:molten_diamond", amount: 100 },
	    	{ fluid: "thermal:ender", amount: 500 }
	    ],
	    1350
	)

	event.recipes.tconstruct.alloy(
	    { fluid: "thermal:ender", amount: 180 },
	    [
	    	{ fluid: "tconstruct:molten_ender", amount: 270 },
	    	{ fluid: "astro_rise:liquid_sculk", amount: 270 }
	    ],
	    1350
	)

})