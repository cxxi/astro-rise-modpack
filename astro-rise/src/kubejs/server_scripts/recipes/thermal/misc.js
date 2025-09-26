ServerEvents.recipes(event => {

	event.remove({ id: 'thermal:rubber_3' })
    event.remove({ id: 'thermal:rubber_from_vine' })
	event.remove({ id: 'thermal:rubber_from_dandelion' })

	// event.remove({ id: 'thermal:earth_charge/sulfur_dust_from_sulfur' })
	// event.remove({ id: 'thermal:earth_charge/niter_dust_from_niter' })

	event.remove({ input: 'thermal:earth_charge' })

    // kelp to rubber

    const modList = ["create", "petrolsparts"]

	modList.forEach(modid => {
		event.replaceInput({ mod: modid }, "minecraft:dried_kelp", "thermal:cured_rubber")
	})

	event.replaceInput({ id: 'createdieselgenerators:crafting/pumpjack_head' }, "minecraft:dried_kelp", "thermal:cured_rubber")
})