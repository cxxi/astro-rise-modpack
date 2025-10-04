ServerEvents.recipes(event => {

	// sleeping_bag

	global.COLORS.slice(1).forEach(color => {

		event.remove({ id: `sleeping_bags:${color}_sleeping_bag` })

		global.craft(event, `sleeping_bags:${color}_sleeping_bag`, [
		    '#forge:sleeping_bags',
		    `minecraft:${color}_dye`
		])
	})

})