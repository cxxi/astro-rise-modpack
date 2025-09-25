ServerEvents.recipes(event => {

	event
		.stonecutting('astro_rise:bowl_mold','simplemetals_aluminum:aluminum_sheet')
		.id('astro_rise:stonecut/mold_bowl')

	event
		.stonecutting('astro_rise:wavy_mold','simplemetals_aluminum:aluminum_sheet')
		.id('astro_rise:stonecut/mold_wavy')

	event
		.stonecutting('astro_rise:chain_mold','simplemetals_aluminum:aluminum_sheet')
		.id('astro_rise:stonecut/mold_chain')

	event
		.stonecutting('astro_rise:bar_mold','simplemetals_aluminum:aluminum_sheet')
		.id('astro_rise:stonecut/mold_bar')
})