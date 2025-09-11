ServerEvents.recipes(event => {

	// molten_electrum

	event.recipes.tconstruct.alloy(
	    { fluid: "tconstruct:molten_electrum", amount: 90 },
	    [
	    	{ fluid: "tconstruct:molten_gold", amount: 360 },
	    	{ fluid: "tconstruct:molten_quartz", amount: 300 },
	    	{ fluid: "tconstruct:molten_ender", amount: 250 },
	    	{ fluid: "tconstruct:molten_uranium", amount: 90 }
	    ],
	    1500
	)

})