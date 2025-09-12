
// ServerEvents.recipes(event => {
// 	event.remove({ output: "sophisticatedbackpacks:auto_feeder_upgrade" })
// })

PlayerEvents.playerChangedDimension(event => {

	let player = event.player
	let inventory = player.inventory

	if (!event.to.toString().startsWith("ad_astra:")) return

	for (let i = 0; i < inventory.size(); i++)
	{
		let stack = inventory.get(i)

		if (stack.isEmpty()) continue

		if (stack.item.foodProperties) {
			if (stack.id === "astro_rise:space_food") continue
			inventory.set(i, Item.of("minecraft:rotten_flesh", stack.count))
			player.tell(`The food ${stack.displayName} decomposed in the hostile atmosphere!`)
		}
	}

})

PlayerEvents.inventoryChanged(event => {

  	let player = event.player
  	let stack = event.item

	if (!player.level.dimension.toString().startsWith("ad_astra:")) return

  	if (!stack.item.foodProperties) return

  	if (stack.id === "astro_rise:space_food") return

	player.inventory.setItem(event.slot, Item.of("minecraft:rotten_flesh", stack.count))
	player.tell(`The food ${stack.displayName} decomposed in the hostile atmosphere!`)

})