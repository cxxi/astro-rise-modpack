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

	// molten manyullyn

	event.remove({ id: 'tconstruct:smeltery/alloys/molten_manyullyn' })

	event.recipes.tconstruct.alloy(
	    { fluid: "tconstruct:molten_manyullyn", amount: 270 },
	    [
	    	{ fluid: "tconstruct:molten_cobalt", amount: 180 },
	    	{ fluid: "astro_rise:molten_redstone_alloy", amount: 180 },
	    	{ fluid: "astro_rise:molten_end_steel", amount: 90 }
	    ],
	    1400
	)

	// molten hepatizon

	event.remove({ id: 'tconstruct:smeltery/alloys/molten_hepatizon' })

	event.recipes.tconstruct.alloy(
	    { fluid: "tconstruct:molten_hepatizon", amount: 270 },
	    [
	    	{ fluid: "tconstruct:molten_cobalt", amount: 180 },
	    	{ fluid: "astro_rise:molten_redstone_alloy", amount: 180 },
	    	{ fluid: "tconstruct:molten_netherite", amount: 90 }
	    ],
	    1400
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

	// molten conductive alloy

	event.recipes.tconstruct.alloy(
	    { fluid: "astro_rise:molten_conductive_alloy", amount: 180 },
	    [
	    	{ fluid: "tconstruct:molten_constantan", amount: 270 },
	    	{ fluid: "tconstruct:molten_quartz", amount: 270 }
	    ],
	    1350
	)

	// molten copper alloy

	event.recipes.tconstruct.alloy(
	    { fluid: "astro_rise:molten_copper_alloy", amount: 180 },
	    [
	    	{ fluid: "astro_rise:molten_conductive_alloy", amount: 180 },
	    	{ fluid: "tconstruct:molten_copper", amount: 500 }
	    ],
	    1350
	)

	// molten redstone alloy

	event.recipes.tconstruct.alloy(
	    { fluid: "astro_rise:molten_redstone_alloy", amount: 180 },
	    [
	    	{ fluid: "astro_rise:molten_conductive_alloy", amount: 270 },
	    	{ fluid: "thermal:redstone", amount: 500 }
	    ],
	    1350
	)

	// molten pulsating alloy

	event.recipes.tconstruct.alloy(
	    { fluid: "astro_rise:molten_pulsating_alloy", amount: 180 },
	    [
	    	{ fluid: "astro_rise:molten_energetic_alloy", amount: 500 },
	    	{ fluid: "tconstruct:molten_uranium", amount: 270 },
	    	{ fluid: "thermal:glowstone", amount: 250 }
	    ],
	    1350
	)

	// molten vibrant alloy

	event.recipes.tconstruct.alloy(
	    { fluid: "astro_rise:molten_vibrant_alloy", amount: 180 },
	    [
	    	{ fluid: "astro_rise:molten_pulsating_alloy", amount: 270 },
	    	{ fluid: "tconstruct:molten_enderium", amount: 270 }
	    ],
	    1350
	)

	// molten dark steel

	event.recipes.tconstruct.alloy(
	    { fluid: "astro_rise:molten_dark_steel", amount: 180 },
	    [
	    	{ fluid: "tconstruct:molten_steel", amount: 500 },
	    	{ fluid: "tconstruct:molten_netherite", amount: 270 },
	    	{ fluid: "astro_rise:liquid_infinity", amount: 270 }
	    ],
	    1350
	)

	// molten soularium

	event.recipes.tconstruct.alloy(
	    { fluid: "astro_rise:molten_soularium", amount: 180 },
	    [
	    	{ fluid: "tconstruct:liquid_soul", amount: 500 },
	    	{ fluid: "tconstruct:molten_netherite", amount: 270 }
	    ],
	    1350
	)

	// molten signalum

	event.remove('tconstruct:smeltery/alloys/molten_signalum')

	event.recipes.tconstruct.alloy(
	    { fluid: "tconstruct:molten_signalum", amount: 180 },
	    [
	    	{ fluid: "astro_rise:molten_desh", amount: 270 },
	    	{ fluid: "astro_rise:molten_ostrum", amount: 100 },
	    	{ fluid: "thermal:redstone", amount: 500 }
	    ],
	    1350
	)

	// molten lumium

	event.remove('tconstruct:smeltery/alloys/molten_lumium')

	event.recipes.tconstruct.alloy(
	    { fluid: "tconstruct:molten_lumium", amount: 180 },
	    [
	    	{ fluid: "astro_rise:molten_calorite", amount: 270 },
	    	{ fluid: "astro_rise:molten_aerolyte", amount: 100 },
	    	{ fluid: "thermal:glowstone", amount: 500 }
	    ],
	    1350
	)

	// molten etrium

	event.recipes.tconstruct.alloy(
	    { fluid: "astro_rise:molten_etrium", amount: 180 },
	    [
	    	{ fluid: "tconstruct:molten_lumium", amount: 270 },
	    	{ fluid: "astro_rise:molten_fluix", amount: 100 },
	    	{ fluid: "tconstruct:molten_enderium", amount: 500 }
	    ],
	    1350
	)

})