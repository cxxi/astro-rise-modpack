ServerEvents.recipes(event => {

	event.remove({ id: 'thermal:tinker_bench' })
	event.remove({ id: 'thermal:redstone_servo' })
	event.remove({ input: 'thermal:rf_coil' })
	event.remove({ output: 'thermal:rf_coil' })
	event.remove({ input: 'thermal:upgrade_augment_1' })
	event.remove({ output: 'thermal:upgrade_augment_1' })
	event.remove({ input: 'thermal:upgrade_augment_2' })
	event.remove({ output: 'thermal:upgrade_augment_2' })
	event.remove({ input: 'thermal:upgrade_augment_3' })
	event.remove({ output: 'thermal:upgrade_augment_3' })
	event.remove({ output: 'thermal:xp_storage_augment' })
	event.remove({ output: 'thermal:fluid_tank_augment' })
	event.remove({ output: 'thermal:item_filter_augment' })
	event.remove({ output: 'thermal:fluid_filter_augment' })

	event.remove({ id: 'thermal:rubber_3' })
    event.remove({ id: 'thermal:rubber_from_vine' })
	event.remove({ id: 'thermal:rubber_from_dandelion' })

	event.remove({ input: 'thermal:earth_charge' })
	event.remove({ id: /thermal:fire_charge\/.*/ })

	event.remove({ id: 'thermal:electrum_dust_2' })
	event.remove({ id: 'thermal:enderium_dust_2' })
	event.remove({ id: 'thermal:constantan_dust_2' })
	event.remove({ id: 'thermal:invar_dust_3' })
	event.remove({ id: 'thermal:signalum_dust_4' })
	event.remove({ id: 'thermal:lumium_dust_4' })
	event.remove({ id: 'thermal:bronze_dust_4' })

    // kelp to rubber

    const modList = ["create", "petrolsparts"]

	modList.forEach(modid => {
		event.replaceInput({ mod: modid }, "minecraft:dried_kelp", "thermal:cured_rubber")
	})

	event.replaceInput({ id: 'createdieselgenerators:crafting/pumpjack_head' }, "minecraft:dried_kelp", "thermal:cured_rubber")

	// phytogro

	event.replaceInput({ output: 'thermal:phytogro' }, 'thermal:niter', 'thermal:compost')
	event.replaceInput({ output: 'thermal:phytogro' }, 'thermal:niter_dust', 'thermal:compost')

	// xp crystal

	event.remove({ id: 'thermal:tools/xp_crystal' })

	global.craft(event, 'thermal:xp_crystal', [
	    ' A ', 
	    'BCB',
	    ' A '  
	],{
	    A: 'enderio:pulsating_crystal', 
	    B: 'enderio:vibrant_crystal',
	    C: 'minecraft:experience_bottle'
	})

})