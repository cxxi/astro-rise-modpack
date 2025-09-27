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

	// molten ender

	event.recipes.tconstruct.alloy(
	    { fluid: "thermal:ender", amount: 250 },
	    [
	    	{ fluid: "tconstruct:molten_ender", amount: 250 },
	    	{ fluid: "astro_rise:liquid_sculk", amount: 500 }
	    ],
	    1350
	)

	// molten signalum

	event.remove('tconstruct:smeltery/alloys/molten_signalum')

	// event.recipes.tconstruct.alloy(
	//     { fluid: "tconstruct:molten_signalum", amount: 360 },
	//     [
	//     	{ fluid: "tconstruct:molten_ender", amount: 250 },
	//     	{ fluid: "tconstruct:molten_ender", amount: 250 },
	//     	{ fluid: "thermal:redstone", amount: 400 }
	//     ],
	//     1350
	// )

	// molten lumium

	event.remove('tconstruct:smeltery/alloys/molten_lumium')

	// event.recipes.tconstruct.alloy(
	//     { fluid: "tconstruct:molten_lumium", amount: 360 },
	//     [
	//     	{ fluid: "tconstruct:molten_ender", amount: 250 },
	//     	{ fluid: "tconstruct:molten_ender", amount: 250 },
	//     	{ fluid: "thermal:glowstone", amount: 400 }
	//     ],
	//     1350
	// )

})