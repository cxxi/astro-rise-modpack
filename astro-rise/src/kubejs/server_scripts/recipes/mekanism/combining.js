ServerEvents.recipes(event => {

	// confusing_powder

	event.recipes.mekanismCombining('enderio:confusing_powder', Item.of('bigreactors:ridiculite_dust', 32), 'alexsmobs:rainbow_glass')

	// ores

	event.recipes.mekanismCombining('ad_astra:moon_desh_ore', Item.of('ad_astra:raw_desh', 8), 'ad_astra:moon_cobblestone')
	event.recipes.mekanismCombining('ad_astra:moon_ice_shard_ore', Item.of('ad_astra:ice_shard', 14), 'ad_astra:moon_cobblestone')
	event.recipes.mekanismCombining('ad_astra:mars_ostrum_ore', Item.of('ad_astra:raw_ostrum', 8), 'ad_astra:mars_cobblestone')
	event.recipes.mekanismCombining('ad_astra:venus_calorite_ore', Item.of('ad_astra:raw_calorite', 8), 'ad_astra:venus_cobblestone')
	event.recipes.mekanismCombining('astro_rise:mercury_aerolyte_ore', Item.of('astro_rise:raw_aerolyte', 8), 'ad_astra:mercury_cobblestone')
	event.recipes.mekanismCombining('create:zinc_ore', Item.of('create:raw_zinc', 8), 'minecraft:cobblestone')
	event.recipes.mekanismCombining('create:deepslate_zinc_ore', Item.of('create:raw_zinc', 8), 'minecraft:cobbled_deepslate')
	event.recipes.mekanismCombining('mekanismaaa:moon_osmium_ore', Item.of('mekanism:raw_osmium', 8), 'ad_astra:moon_cobblestone')
	event.recipes.mekanismCombining('thermal:apatite_ore', Item.of('thermal:apatite_dust', 27), 'chipped:cobbled_end_stone')
	event.recipes.mekanismCombining('thermal:cinnabar_ore', Item.of('thermal:cinnabar_dust', 8), 'chipped:cobbled_netherrack')
	event.recipes.mekanismCombining('thermal:niter_ore', Item.of('thermal:niter_dust', 27), 'ad_astra:venus_cobblestone')
	event.recipes.mekanismCombining('thermal:sulfur_ore', Item.of('thermal:sulfur_dust', 16), 'ad_astra:mercury_cobblestone')
	event.recipes.mekanismCombining('thermal:silver_ore', Item.of('thermal:raw_silver', 8), 'minecraft:cobblestone')
	event.recipes.mekanismCombining('thermal:deepslate_silver_ore', Item.of('thermal:raw_silver', 8), 'minecraft:cobbled_deepslate')
	event.recipes.mekanismCombining('thermal:nickel_ore', Item.of('thermal:raw_nickel', 8), 'minecraft:cobblestone')
	event.recipes.mekanismCombining('thermal:deepslate_nickel_ore', Item.of('thermal:raw_nickel', 8), 'minecraft:cobbled_deepslate')
	event.recipes.mekanismCombining('thermal:ruby_ore', Item.of('thermal:ruby_dust', 5), 'minecraft:cobblestone')
	event.recipes.mekanismCombining('thermal:deepslate_ruby_ore', Item.of('thermal:ruby_dust', 5), 'minecraft:cobbled_deepslate')
	event.recipes.mekanismCombining('thermal:sapphire_ore', Item.of('thermal:sapphire_dust', 5), 'minecraft:cobblestone')
	event.recipes.mekanismCombining('thermal:deepslate_sapphire_ore', Item.of('thermal:sapphire_dust', 5), 'minecraft:cobbled_deepslate')
	event.recipes.mekanismCombining('tconstruct:cobalt_ore', Item.of('tconstruct:raw_cobalt', 8), 'chipped:cobbled_netherrack')
	event.recipes.mekanismCombining('simplemetals_aluminum:aluminum_ore', Item.of('astro_rise:aluminum_dust', 5), 'minecraft:cobblestone')
	event.recipes.mekanismCombining('simplemetals_aluminum:deepslate_aluminum_ore', Item.of('astro_rise:aluminum_dust', 5), 'minecraft:cobbled_deepslate')
	event.recipes.mekanismCombining('platinum_mod:platinum_ore', Item.of('astro_rise:platinum_dust', 5), 'minecraft:cobblestone')
	event.recipes.mekanismCombining('platinum_mod:deepslate_platinum_ore', Item.of('astro_rise:platinum_dust', 5), 'minecraft:cobbled_deepslate')

	event.remove({ id: 'mekanism:processing/uranium/ore/from_raw' })
	event.recipes.mekanismCombining('mekanism:uranium_ore', Item.of('mekanism:raw_uranium', 8), 'deeperdarker:cobbled_gloomslate')

	event.remove({ id: 'mekanism:processing/fluorite/to_ore' })
	event.recipes.mekanismCombining('mekanism:fluorite_ore', Item.of('mekanism:dust_fluorite', 14), 'deeperdarker:cobbled_sculk_stone')

})