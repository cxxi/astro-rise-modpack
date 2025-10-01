ServerEvents.recipes(event => {
	
	event.remove({ id: /botanypots:.*/ })

	// terracotta

	global.COLORS.forEach(color => {

		// `${color}_terracotta`
		// `${color}_concrete`
		// `${color}_glazed_terracotta`

		// event.remove({ id: `sleeping_bags:${color}_sleeping_bag` })

		// event.shapeless(`sleeping_bags:${color}_sleeping_bag`, [
		//     '#forge:sleeping_bags',
		//     `minecraft:${color}_dye`
		// ])
	})

})
