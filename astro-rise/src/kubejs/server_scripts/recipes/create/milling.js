ServerEvents.recipes(event => {

	event.remove({ id: 'create:milling/charcoal' })
	event.recipes.create.milling([
		'mekanism:dust_charcoal',
		Item.of('minecraft:black_dye').withChance(0.5)
	], 'minecraft:charcoal')

	event.remove({ id: 'create:milling/coal' })
	event.recipes.create.milling([
		'mekanism:dust_coal',
		Item.of('minecraft:black_dye').withChance(0.5)
	], 'minecraft:coal')

	event.remove({ id: 'create:milling/lapis_lazuli' })
	event.recipes.create.milling([
		'mekanism:dust_lapis_lazuli',
		Item.of('minecraft:blue_dye').withChance(0.5)
	], 'minecraft:lapis_lazuli')

	event.remove({ id: 'create:milling/compat/tconstruct/nercotic_bone' })
	event.recipes.create.milling('enderio:withering_powder', 'tconstruct:necrotic_bone')

	event.recipes.create.milling('mekanism:dust_iron', 'create:crushed_raw_iron')
	event.recipes.create.milling('mekanism:dust_gold', 'create:crushed_raw_gold')
	event.recipes.create.milling('mekanism:dust_copper', 'create:crushed_raw_copper')
	event.recipes.create.milling('astro_rise:dust_zinc', 'create:crushed_raw_zinc')
	event.recipes.create.milling('mekanism:dust_osmium', 'create:crushed_raw_osmium')
	event.recipes.create.milling('astro_rise:dust_platinum', 'create:crushed_raw_platinum')
	event.recipes.create.milling('thermal:silver_dust', 'create:crushed_raw_silver')
	event.recipes.create.milling('mekanism:dust_tin', 'create:crushed_raw_tin')
	event.recipes.create.milling('mekanism:dust_lead', 'create:crushed_raw_lead')
	event.recipes.create.milling('astro_rise:dust_aluminum', 'create:crushed_raw_aluminum')
	event.recipes.create.milling('mekanism:dust_uranium', 'create:crushed_raw_uranium')
	event.recipes.create.milling('astro_rise:dust_cobalt', 'astro_rise:crushed_raw_cobalt')
	event.recipes.create.milling('thermal:nickel_dust', 'create:crushed_raw_nickel')
	event.recipes.create.milling('astro_rise:dust_aerolyte', 'astro_rise:crushed_raw_aerolyte')
	event.recipes.create.milling('astro_rise:dust_desh', 'create_ad_astra_compat:crushed_desh_ore')
	event.recipes.create.milling('astro_rise:dust_ostrum', 'create_ad_astra_compat:crushed_ostrum_ore')
	event.recipes.create.milling('astro_rise:dust_calorite', 'create_ad_astra_compat:crushed_calorite_ore')

	event.recipes.create.milling('astro_rise:dust_ice_shard', 'ad_astra:ice_shard')
	event.recipes.create.milling('mekanism:dust_fluorite', 'mekanism:fluorite_gem')
	event.recipes.create.milling('mekanism:dust_lapis_lazuli', 'minecraft:lapis_lazuli')
	event.recipes.create.milling('mekanism:dust_quartz', 'minecraft:quartz')
	event.recipes.create.milling('mekanism:dust_emerald', 'minecraft:emerald')
	event.recipes.create.milling('createaddition:diamond_grit', 'minecraft:diamond')
	event.recipes.create.milling('thermal:ruby_dust', 'thermal:ruby')
	event.recipes.create.milling('thermal:sapphire_dust', 'thermal:sapphire')
	event.recipes.create.milling('thermal:apatite_dust', 'thermal:apatite')
	event.recipes.create.milling('thermal:cinnabar_dust', 'thermal:cinnabar')
	event.recipes.create.milling('thermal:niter_dust', 'thermal:niter')
	event.recipes.create.milling('mekanism:dust_sulfur', 'thermal:sulfur')

	event.recipes.create.milling('mekanism:dust_emerald', 'createoreexcavation:raw_emerald')
	event.recipes.create.milling('createaddition:diamond_grit', 'createoreexcavation:raw_diamond')
	event.recipes.create.milling('3x mekanism:dust_lapis_lazuli', 'astro_rise:raw_lapis_lazuli')
	event.recipes.create.milling('mekanism:dust_quartz', 'astro_rise:raw_quartz')

})