ServerEvents.recipes(event => {

	event.custom({
		type: "mekanism:infusion_conversion",
		input: {
			ingredient: {
				tag: "forge:gems/fluorite"
			}
		},
		output: {
			amount: 10,
			infuse_type: "mekanism:fluorite"
		}
	})

	event.custom({
		type: "mekanism:infusion_conversion",
		input: {
			ingredient: {
				tag: "forge:dusts/fluorite"
			}
		},
		output: {
			amount: 10,
			infuse_type: "mekanism:fluorite"
		}
	})

	event.custom({
		type: "mekanism:infusion_conversion",
		input: {
			ingredient: {
				tag: "forge:storage_blocks/fluorite"
			}
		},
		output: {
			amount: 10,
			infuse_type: "mekanism:fluorite"
		}
	})

})