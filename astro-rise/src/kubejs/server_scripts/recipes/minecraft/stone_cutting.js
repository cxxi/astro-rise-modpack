ServerEvents.recipes(event => {

	event.remove({ id: 'createdieselgenerators:cutting/bowl_mold' })
	event.remove({ id: 'createdieselgenerators:cutting/lines_mold' })
	event.remove({ id: 'createdieselgenerators:cutting/chain_mold' })
	event.remove({ id: 'createdieselgenerators:cutting/bar_mold' })

	event
		.stonecutting('astro_rise:bowl_mold','astro_rise:mold')
		.id('astro_rise:stonecut/mold_bowl')

	event
		.stonecutting('astro_rise:wavy_mold','astro_rise:mold')
		.id('astro_rise:stonecut/mold_wavy')

	event
		.stonecutting('astro_rise:chain_mold','astro_rise:mold')
		.id('astro_rise:stonecut/mold_chain')

	event
		.stonecutting('astro_rise:bar_mold','astro_rise:mold')
		.id('astro_rise:stonecut/mold_bar')
})