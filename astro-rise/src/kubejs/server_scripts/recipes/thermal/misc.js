ServerEvents.recipes(event => {

    // rubber

	event.remove({ id: 'thermal:rubber_3' })
    event.remove({ id: 'thermal:rubber_from_vine' })
	event.remove({ id: 'thermal:rubber_from_dandelion' })

    // kelp to rubber

    const modList = ["create", "petrolsparts"]

	modList.forEach(modid => {
		event.replaceInput({ mod: modid }, "minecraft:dried_kelp", "thermal:cured_rubber")
	})

	event.replaceInput({ id: 'createdieselgenerators:crafting/pumpjack_head' }, "minecraft:dried_kelp", "thermal:cured_rubber")
	
	// event.replaceInput({ id: 'createdieselgenerators:crafting/chemical_sprayer' }, "minecraft:dried_kelp", "thermal:cured_rubber")

})