ServerEvents.recipes(event => {

	event.custom({
		type: "extendedcrafting:combination",
		power_cost: 400000,
		input: {
		  item: "minecraft:iron_ingot"
		},
		ingredients: [
			{ item: "minecraft:potato" },
			{ item: "minecraft:potato" },
			{ item: "minecraft:potato" },
			{ item: "minecraft:potato" },
			{ item: "minecraft:potato" },
			{ item: "minecraft:potato" },
			{ item: "minecraft:potato" },
			{ item: "minecraft:potato" }
		],
		result: {
			item: "minecraft:stone"
		}
	})

})
