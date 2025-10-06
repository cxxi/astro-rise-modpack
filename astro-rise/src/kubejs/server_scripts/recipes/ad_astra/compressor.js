ServerEvents.recipes(event => {

	event.custom({
		type: 'ad_astra:compressing',
		cookingtime: 800,
		energy: 20,
		ingredient: {
			item: "enderio:soularium_block"
		},
		result: {
			count: 9,
			id: 'astro_rise:soularium_plate'
		}
	})

	event.custom({
		type: 'ad_astra:compressing',
		cookingtime: 100,
		energy: 20,
		ingredient: {
			item: 'enderio:soularium_ingot'
		},
		result: {
			count: 1,
			id: 'astro_rise:soularium_plate'
		}
	})

})