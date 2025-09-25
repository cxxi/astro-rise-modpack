ServerEvents.recipes(event => {

	event.custom({
		type: 'createdieselgenerators:compression_molding',
		ingredients: [
			{
				fluid: 'thermal:latex',
				amount: 1000
			}
		],
		mold: 'astro_rise:bowl_mold',
		results: [
			{ item: 'thermal:rubber' }
		]
	})

	event.remove({ id: 'createdieselgenerators:compression_molding/chain' })

	event.custom({
	 	type: "createdieselgenerators:compression_molding",
	 	ingredients: [
	 		{ tag: "forge:nuggets/iron" },
	 		{ tag: "forge:nuggets/iron" },
	 		{ tag: "forge:nuggets/iron" },
	 		{ tag: "forge:nuggets/iron" },
	 		{ tag: "forge:nuggets/iron" },
	 		{ tag: "forge:nuggets/iron" }
	 	],
	 	mold: "astro_rise:chain_mold",
	 	results: [
	 		{ item: "minecraft:chain" }
	 	]
	})

	event.remove({ id: 'createdieselgenerators:compression_molding/minecart_coupling' })

	event.custom({
		type: "createdieselgenerators:compression_molding",
		ingredients: [
			{ item: "create:andesite_alloy" }
		],
		mold: "astro_rise:chain_mold",
		results: [
		 	{ item: "create:minecart_coupling" }
		]
	})

	event.remove({ id: 'createdieselgenerators:compression_molding/bucket' })

	event.custom({
		type: "createdieselgenerators:compression_molding",
		ingredients: [
			{ tag: "forge:plates/iron" }
		],
		mold: "astro_rise:bowl_mold",
		results: [
			{ item: "minecraft:bucket" }
		]
	})

	event.remove({ id: 'createdieselgenerators:compression_molding/bowl' })

	event.custom({
		type: "createdieselgenerators:compression_molding",
		ingredients: [
			{ item: "createdieselgenerators:wood_chip" },
			{ item: "createdieselgenerators:wood_chip" },
			{ item: "createdieselgenerators:wood_chip" },
			{ item: "createdieselgenerators:wood_chip" }
		],
		mold: "astro_rise:bowl_mold",
		results: [
			{ item: "minecraft:bowl" }
		]
	})

	event.remove({ id: 'createdieselgenerators:compression_molding/sheet_metal_panel' })

	event.custom({
		type: "createdieselgenerators:compression_molding",
		ingredients: [
		    { tag: "forge:plates/iron" }
		],
		mold: "astro_rise:wavy_mold",
		results: [
		    {
		      item: "createdieselgenerators:sheet_metal_panel",
		      count: 4
		    }
		]
	})

	event.remove({ id: 'createdieselgenerators:compression_molding/stick' })

	event.custom({
		type: "createdieselgenerators:compression_molding",
		ingredients: [
			{ item: "createdieselgenerators:wood_chip" },
			{ item: "createdieselgenerators:wood_chip" },
			{ item: "createdieselgenerators:wood_chip" },
			{ item: "createdieselgenerators:wood_chip" }
		],
		mold: "astro_rise:wavy_mold",
		results: [
			{
				item: "minecraft:stick",
				count: 4
			}
		]
	})

	event.remove({ id: 'createdieselgenerators:compression_molding/blaze_rod' })

	event.custom({
		type: "createdieselgenerators:compression_molding",
		ingredients: [
		  { item: "minecraft:blaze_powder" },
		  { item: "minecraft:blaze_powder" },
		  { item: "minecraft:blaze_powder" },
		  { item: "minecraft:blaze_powder" }
		],
		mold: "astro_rise:wavy_mold",
		heatRequirement: "heated",
		results: [
			{
				item: "minecraft:blaze_rod",
				count: 1
			}
		]
	})

})