ServerEvents.recipes(event => {

	event.remove({ id: 'mekanism:crushing/venus_sandstone_to_venus_sand' })

	event.recipes.mekanismCrushing('bigreactors:blutonium_dust', 'bigreactors:blutonium_ingot')	
	event.recipes.mekanismCrushing('bigreactors:cyanite_dust', 'bigreactors:cyanite_ingot')
	event.recipes.mekanismCrushing('bigreactors:magentite_dust', 'bigreactors:magentite_ingot')
	event.recipes.mekanismCrushing('bigreactors:graphite_dust', 'bigreactors:graphite_ingot')
	event.recipes.mekanismCrushing('bigreactors:ludicrite_dust', 'bigreactors:ludicrite_ingot')
	event.recipes.mekanismCrushing('bigreactors:ridiculite_dust', 'bigreactors:ridiculite_ingot')
	event.recipes.mekanismCrushing('bigreactors:inanite_dust', 'bigreactors:inanite_ingot')
	event.recipes.mekanismCrushing('bigreactors:insanite_dust', 'bigreactors:insanite_ingot')

	event.recipes.mekanismCrushing('astro_rise:dust_zinc', 'create:zinc_ingot')
	event.recipes.mekanismCrushing('astro_rise:dust_aluminum', 'simplemetals_aluminum:aluminum_ingot')
	event.recipes.mekanismCrushing('astro_rise:dust_platinum', 'platinum_mod:platinum')
	event.recipes.mekanismCrushing('astro_rise:dust_desh', 'ad_astra:desh_ingot')
	event.recipes.mekanismCrushing('astro_rise:dust_ostrum', 'ad_astra:ostrum_ingot')
	event.recipes.mekanismCrushing('astro_rise:dust_calorite', 'ad_astra:calorite_ingot')
	event.recipes.mekanismCrushing('astro_rise:dust_aerolyte', 'astro_rise:ingot_aerolyte')
	event.recipes.mekanismCrushing('astro_rise:dust_ice_shard', 'ad_astra:ice_shard')
	event.recipes.mekanismCrushing('mekanism:dust_sulfur', 'thermal:sulfur')
	event.recipes.mekanismCrushing('thermal:apatite_dust', 'thermal:apatite')
	event.recipes.mekanismCrushing('thermal:cinnabar_dust', 'thermal:cinnabar')
	event.recipes.mekanismCrushing('thermal:niter_dust', 'thermal:niter')
	event.recipes.mekanismCrushing('thermal:ender_pearl_dust', 'minecraft:ender_pearl')
	event.recipes.mekanismCrushing('thermal:silver_dust', 'thermal:silver_ingot')
	event.recipes.mekanismCrushing('thermal:nickel_dust', 'thermal:nickel_ingot')
	event.recipes.mekanismCrushing('thermal:ruby_dust', 'thermal:ruby')
	event.recipes.mekanismCrushing('thermal:sapphire_dust', 'thermal:sapphire')
	event.recipes.mekanismCrushing('minecraft:blaze_powder', 'minecraft:blaze_rod')
	event.recipes.mekanismCrushing('create:powdered_obsidian', 'minecraft:obsidian')
	event.recipes.mekanismCrushing('create:powdered_obsidian', 'minecraft:crying_obsidian')
	event.recipes.mekanismCrushing('enderio:powdered_cobalt', 'tconstruct:cobalt_ingot')
	event.recipes.mekanismCrushing('enderio:soul_powder', 'enderio:soularium_ingot')
	event.recipes.mekanismCrushing('enderio:withering_powder', 'tconstruct:necrotic_bone')
	event.recipes.mekanismCrushing('enderio:withering_powder', 'minecraft:wither_skeleton_skull')
	event.recipes.mekanismCrushing('deeperdarker:soul_dust', 'create_deep_dark:echo_ingot')
	event.recipes.mekanismCrushing('thermal:enderium_dust', 'thermal:enderium_ingot')
	event.recipes.mekanismCrushing('enderio:grains_of_infinity', 'astro_rise:infinity_ingot')

	global.CUSTOM_SLURRIES.forEach(slurry => {

		event.custom({
			type: 'mekanism:crushing',
			input: {
				ingredient: {
					tag: `mekanism:clumps/${slurry}`
				}
			},
			output: {
				item: `astro_rise:dirty_dust_${slurry}`
			}
		})
	
	})

	const crushedOres = []
		.concat(global.VANILLA_ORES.map(ore => ['create', 'mekanism', ore]))
		.concat(global.MEKANISM_ORES.map(ore => ['create', 'mekanism', ore]))
		.concat(global.CREATE_ORES.map(ore => ['create', 'astro_rise', ore]))
		.concat(global.THERMAL_ORES.map(ore => ['create', 'astro_rise', ore]))
		.concat(global.SIMPLEMETALS_ORES.map(ore => ['create', 'astro_rise', ore]))
		.concat(global.PLATINUM_ORES.map(ore => ['create', 'astro_rise', ore]))
		.concat(global.TCONSTRUCT_ORES.map(ore => ['astro_rise', 'astro_rise', ore]))
		.concat(global.ASTRO_RISE_ORES.map(ore => ['astro_rise', 'astro_rise', ore]))
		.concat(global.AD_ASTRA_ORES.map(ore => ['create_ad_astra_compat', 'astro_rise', ore]))

	crushedOres.forEach(([nsIn, nsOut, crushed]) => {

		event.custom({
			type: 'mekanism:crushing',
			input: {
				ingredient: {
					item: nsIn === 'create_ad_astra_compat'
						? `${nsIn}:crushed_${crushed}_ore`
						: `${nsIn}:crushed_raw_${crushed}`
				}
			},
			output: {
				item: `${nsOut}:dirty_dust_${crushed}`
			}
		})

	})

})
