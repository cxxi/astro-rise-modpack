ServerEvents.recipes(event => {

	event.remove({ id: 'mekanism:processing/coal/from_ore' })

	event.custom({
		type: 'mekanism:enriching',
		input: { ingredient: { tag: 'forge:ores/coal' }},
		output: { count: 2, item: 'mekanism:dust_coal' }
	})

	event.remove({ id: 'mekanism:processing/redstone/from_ore' })

	event.custom({
		type: 'mekanism:enriching',
		input: { ingredient: { tag: 'forge:ores/redstone' }},
		output: { count: 2, item: 'minecraft:redstone' }
	})

	event.remove({ id: 'mekanism:processing/emerald/from_ore' })

	event.custom({
		type: 'mekanism:enriching',
		input: { ingredient: { tag: 'forge:ores/emerald' }},
		output: { count: 2, item: 'mekanism:dust_emerald' }
	})

	event.remove({ id: 'mekanism:processing/lapis_lazuli/from_ore' })

	event.custom({
		type: 'mekanism:enriching',
		input: { ingredient: { tag: 'forge:ores/lapis' }},
		output: { count: 2, item: 'mekanism:dust_lapis_lazuli' }
	})

	event.remove({ id: 'mekanism:processing/diamond/from_ore' })

	event.custom({
		type: 'mekanism:enriching',
		input: { ingredient: { tag: 'forge:ores/diamond' }},
		output: { count: 2, item: 'mekanism:dust_diamond' }
	})

	event.remove({ id: 'mekanism:processing/quartz/from_ore' })

	event.custom({
		type: 'mekanism:enriching',
		input: { ingredient: { tag: 'forge:ores/quartz' }},
		output: { count: 2, item: 'mekanism:dust_quartz' }
	})

	event.custom({
		type: 'mekanism:enriching',
		input: { ingredient: { item: 'ad_astra:moon_desh_ore' }},
		output: { count: 2, item: 'astro_rise:dust_desh' }
	})

	event.custom({
		type: 'mekanism:enriching',
		input: { ingredient: { item: 'ad_astra:moon_ice_shard_ore' }},
		output: { count: 2, item: 'astro_rise:dust_ice_shard' }
	})

	event.custom({
		type: 'mekanism:enriching',
		input: { ingredient: { item: 'ad_astra:mars_ostrum_ore' }},
		output: { count: 2, item: 'astro_rise:dust_ostrum' }
	})

	event.custom({
		type: 'mekanism:enriching',
		input: { ingredient: { item: 'ad_astra:venus_calorite_ore' }},
		output: { count: 2, item: 'astro_rise:dust_calorite' }
	})

	event.custom({
		type: 'mekanism:enriching',
		input: { ingredient: { item: 'astro_rise:mercury_aerolyte_ore' }},
		output: { count: 2, item: 'astro_rise:dust_aerolyte' }
	})

	event.custom({
		type: 'mekanism:enriching',
		input: { ingredient: { tag: 'forge:ores/zinc' }},
		output: { count: 2, item: 'astro_rise:dust_zinc' }
	})

	event.custom({
		type: 'mekanism:enriching',
		input: { ingredient: { tag: 'forge:ores/tin' }},
		output: { count: 2, item: 'mekanism:dust_tin' }
	})

	event.custom({
		type: 'mekanism:enriching',
		input: { ingredient: { tag: 'forge:ores/lead' }},
		output: { count: 2, item: 'mekanism:dust_lead' }
	})

	event.custom({
		type: 'mekanism:enriching',
		input: { ingredient: { tag: 'forge:ores/osmium' }},
		output: { count: 2, item: 'mekanism:dust_osmium' }
	})

	event.custom({
		type: 'mekanism:enriching',
		input: { ingredient: { tag: 'forge:ores/uranium' }},
		output: { count: 2, item: 'mekanism:dust_uranium' }
	})

	event.custom({
		type: 'mekanism:enriching',
		input: { ingredient: { tag: 'forge:ores/fluorite' }},
		output: { count: 2, item: 'mekanism:dust_fluorite' }
	})

	event.custom({
		type: 'mekanism:enriching',
		input: { ingredient: { tag: 'forge:ores/silver' }},
		output: { count: 2, item: 'thermal:silver_dust' }
	})

	event.custom({
		type: 'mekanism:enriching',
		input: { ingredient: { tag: 'forge:ores/nickel' }},
		output: { count: 2, item: 'thermal:nickel_dust' }
	})

	event.custom({
		type: 'mekanism:enriching',
		input: { ingredient: { tag: 'forge:ores/apatite' }},
		output: { count: 2, item: 'thermal:apatite_dust' }
	})

	event.custom({
		type: 'mekanism:enriching',
		input: { ingredient: { tag: 'forge:ores/cinnabar' }},
		output: { count: 2, item: 'thermal:cinnabar_dust' }
	})

	event.custom({
		type: 'mekanism:enriching',
		input: { ingredient: { tag: 'forge:ores/sulfur' }},
		output: { count: 2, item: 'mekanism:dust_sulfur' }
	})

	event.custom({
		type: 'mekanism:enriching',
		input: { ingredient: { tag: 'forge:ores/niter' }},
		output: { count: 2, item: 'thermal:niter_dust' }
	})

	event.custom({
		type: 'mekanism:enriching',
		input: { ingredient: { tag: 'forge:ores/ruby' }},
		output: { count: 2, item: 'thermal:ruby_dust' }
	})

	event.custom({
		type: 'mekanism:enriching',
		input: { ingredient: { tag: 'forge:ores/sapphire' }},
		output: { count: 2, item: 'thermal:sapphire_dust' }
	})

	event.custom({
		type: 'mekanism:enriching',
		input: { ingredient: { tag: 'forge:ores/cobalt' }},
		output: { count: 2, item: 'enderio:powdered_cobalt' }
	})

	event.custom({
		type: 'mekanism:enriching',
		input: { ingredient: { tag: 'forge:ores/aluminum' }},
		output: { count: 2, item: 'astro_rise:dust_aluminum' }
	})

	event.custom({
		type: 'mekanism:enriching',
		input: { ingredient: { tag: 'forge:ores/platinum' }},
		output: { count: 2, item: 'astro_rise:dust_platinum' }
	})

	// event.recipes.mekanismCrushing('astro_rise:dust_zinc', 'create:zinc_ingot')
	// event.recipes.mekanismCrushing('astro_rise:dust_aluminum', 'simplemetals_aluminum:aluminum_ingot')
	// event.recipes.mekanismCrushing('astro_rise:dust_platinum', 'platinum_mod:platinum')
	// event.recipes.mekanismCrushing('astro_rise:dust_desh', 'ad_astra:desh_ingot')
	// event.recipes.mekanismCrushing('astro_rise:dust_ostrum', 'ad_astra:ostrum_ingot')
	// event.recipes.mekanismCrushing('astro_rise:dust_calorite', 'ad_astra:calorite_ingot')
	// event.recipes.mekanismCrushing('astro_rise:dust_aerolyte', 'astro_rise:ingot_aerolyte')
	// event.recipes.mekanismCrushing('astro_rise:dust_ice_shard', 'ad_astra:ice_shard')
	// event.recipes.mekanismCrushing('mekanism:dust_sulfur', 'thermal:sulfur')
	// event.recipes.mekanismCrushing('thermal:apatite_dust', 'thermal:apatite')
	// event.recipes.mekanismCrushing('thermal:cinnabar_dust', 'thermal:cinnabar')
	// event.recipes.mekanismCrushing('thermal:niter_dust', 'thermal:niter')
	// event.recipes.mekanismCrushing('thermal:ender_pearl_dust', 'minecraft:ender_pearl')
	// event.recipes.mekanismCrushing('thermal:silver_dust', 'thermal:silver_ingot')
	// event.recipes.mekanismCrushing('thermal:nickel_dust', 'thermal:nickel_ingot')
	// event.recipes.mekanismCrushing('thermal:ruby_dust', 'thermal:ruby')
	// event.recipes.mekanismCrushing('thermal:sapphire_dust', 'thermal:sapphire')
	// event.recipes.mekanismCrushing('minecraft:blaze_powder', 'minecraft:blaze_rod')
	// event.recipes.mekanismCrushing('create:powdered_obsidian', 'minecraft:obsidian')
	// event.recipes.mekanismCrushing('create:powdered_obsidian', 'minecraft:crying_obsidian')
	// event.recipes.mekanismCrushing('enderio:powdered_cobalt', 'tconstruct:cobalt_ingot')
	// event.recipes.mekanismCrushing('enderio:soul_powder', 'enderio:soularium_ingot')
	// event.recipes.mekanismCrushing('enderio:withering_powder', 'tconstruct:necrotic_bone')
	// event.recipes.mekanismCrushing('enderio:withering_powder', 'minecraft:wither_skeleton_skull')
	// event.recipes.mekanismCrushing('deeperdarker:soul_dust', 'create_deep_dark:echo_ingot')
})