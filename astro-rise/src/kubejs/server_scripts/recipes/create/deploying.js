ServerEvents.recipes(event => {

	['ichor', 'sky', 'earth', 'ender'].forEach(type => {

		event.custom({
			type: "create:deploying",
			ingredients: [
			    { item: 'astro_rise:quartz_mechanism' },
			    { item: `tconstruct:${type}_slime_crystal` }
			],
			results: [
				{ item: `astro_rise:${type}_mechanism` }
			]
		})

		event.custom({
			type: "create:deploying",
			ingredients: [
			    { item: 'astro_rise:quartz_steel_mechanism' },
			    { item: `tconstruct:${type}_slime_crystal` }
			],
			results: [
				{ item: `astro_rise:${type}_steel_mechanism` }
			]
		})
	})

	// certus_mechanism

	event.custom({
		type: "create:deploying",
		ingredients: [
		    { item: 'astro_rise:quartz_steel_mechanism' },
		    { item: 'ae2:charged_certus_quartz_crystal' }
		],
		results: [
			{ item: 'astro_rise:certus_steel_mechanism' }
		]
	})

})