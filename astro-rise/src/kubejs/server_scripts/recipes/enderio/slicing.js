ServerEvents.recipes(event => {

	// z_logic_controller

	event.remove({ id: "enderio:slicing/z_logic_controller" })

	event.recipes.enderio.slicing("enderio:z_logic_controller", [
		"enderio:soularium_ingot",
		"minecraft:zombie_head",
		"enderio:soularium_ingot",
		"enderio:nethercotta",
		"minecraft:redstone",
		"enderio:nethercotta"
	])

})