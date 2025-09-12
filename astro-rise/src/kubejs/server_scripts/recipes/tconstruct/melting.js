ServerEvents.recipes(event => {

	// molten_necrotic_bone

	event.recipes.tconstruct.melting(
	    { item: 'tconstruct:necrotic_bone' },
	    { fluid: 'astro_rise:molten_necrotic_bone', amount: 100 },
	    950
	)

})