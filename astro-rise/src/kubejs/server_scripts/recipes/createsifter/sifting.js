ServerEvents.recipes(event => {

	// string mesh

	event.remove({ id: 'createsifter:sifting/sand_string_mesh' })

	// andesite mesh

	event.remove({ id: 'createsifter:sifting/gravel_andesite_mesh' })
	event.remove({ id: 'createsifter:sifting/sand_andesite_mesh' })

	// zinc mesh

	event.remove({ id: 'createsifter:sifting/gravel_zinc_mesh' })
	event.remove({ id: 'createsifter:sifting/sand_zinc_mesh' })

	event.recipes.createsifter.sifting([
		Item.of('minecraft:wheat_seeds').withChance(0.3),
		Item.of('minecraft:pumpkin_seeds').withChance(0.1),
		Item.of('minecraft:melon_seeds').withChance(0.1),
		Item.of('minecraft:beetroot_seeds').withChance(0.1),
		Item.of('minecraft:torchflower_seeds').withChance(0.01),
		Item.of('farmersdelight:cabbage_seeds').withChance(0.1),
		Item.of('farmersdelight:tomato_seeds').withChance(0.1),
		Item.of('minecraft:cacao_beans').withChance(0.1)
	], ['minecraft:dirt','createsifter:zinc_mesh'])

	event.recipes.createsifter.sifting([
		Item.of('minecraft:flint').withChance(0.05),
		Item.of('minecraft:bone_meal').withChance(0.05),
		Item.of('astro_rise:andesite_nugget').withChance(0.10)
	], ['minecraft:gravel','createsifter:zinc_mesh'])

	// brass mesh

	event.remove({ id: 'createsifter:sifting/gravel_brass_mesh' })
	event.remove({ id: 'createsifter:sifting/sand_brass_mesh' })
	event.remove({ id: 'createsifter:sifting/soul_sand_brass_mesh' })

	event.recipes.createsifter.sifting([
		Item.of('minecraft:iron_nugget').withChance(0.05),
		Item.of('create:copper_nugget').withChance(0.05),
		Item.of('create:zinc_nugget').withChance(0.05),
		Item.of('mekanism:nugget_tin').withChance(0.04),
		Item.of('simplemetals_aluminum:aluminum_nugget').withChance(0.04),
		Item.of('mekanism:nugget_lead').withChance(0.04),
		Item.of('thermal:nickel_nugget').withChance(0.04),
		Item.of('thermal:silver_nugget').withChance(0.04),
		Item.of('mekanism:nugget_osmium').withChance(0.03),
		Item.of('astro_rise:platinum_nugget').withChance(0.01)
	], ['minecraft:gravel','createsifter:brass_mesh'])

	event.recipes.createsifter.sifting([
		Item.of('minecraft:gold_nugget').withChance(0.05),
		Item.of('minecraft:redstone').withChance(0.03),
		Item.of('minecraft:glowstone_dust').withChance(0.03),
		Item.of('mekanism:dust_quartz').withChance(0.03),
		Item.of('mekanism:dust_coal').withChance(0.05),
		Item.of('minecraft:nautilus_shell').withChance(0.01)
	], ['minecraft:sand','createsifter:brass_mesh'])

	// advanced brass mesh

	event.remove({ id: 'createsifter:sifting/gravel_advanced_brass_mesh' })
	event.remove({ id: 'createsifter:sifting/soul_sand_advanced_brass_mesh' })

	event.recipes.createsifter.sifting([
		Item.of('mekanism:dust_iron').withChance(0.05),
		Item.of('mekanism:dust_copper').withChance(0.05),
		Item.of('astro_rise:dust_zinc').withChance(0.05),
		Item.of('mekanism:dust_tin').withChance(0.04),
		Item.of('astro_rise:dust_aluminum').withChance(0.04),
		Item.of('mekanism:dust_lead').withChance(0.04),
		Item.of('thermal:nickel_dust').withChance(0.04),
		Item.of('thermal:silver_dust').withChance(0.04),
		Item.of('mekanism:dust_osmium').withChance(0.03),
		Item.of('astro_rise:dust_platinum').withChance(0.01)
	], ['minecraft:gravel','createsifter:advanced_brass_mesh'])

	event.recipes.createsifter.sifting([
		Item.of('mekanism:dust_gold').withChance(0.05),
		Item.of('mekanism:dust_lapis_lazuli').withChance(0.05),
		Item.of('minecraft:redstone').withChance(0.05),
		Item.of('mekanism:dust_emerald').withChance(0.03),
		Item.of('thermal:ruby_dust').withChance(0.03),
		Item.of('thermal:sapphire_dust').withChance(0.03),
		Item.of('createaddition:diamond_grit').withChance(0.01)
	], ['minecraft:sand','createsifter:advanced_brass_mesh'])

	event.recipes.createsifter.sifting([
		Item.of('create:experience_nugget').withChance(0.10),
		Item.of('thermal:cinnabar_dust').withChance(0.03),
		Item.of('minecraft:ghast_tear').withChance(0.03),
		Item.of('minecraft:bone_meal').withChance(0.05),
		Item.of('mekanism:dust_coal').withChance(0.05)
	], ['minecraft:soul_sand','createsifter:advanced_brass_mesh'])

	event.recipes.createsifter.sifting([
		Item.of('mekanism:dust_quartz').withChance(0.05),
		Item.of('minecraft:glowstone_dust').withChance(0.05),
		Item.of('minecraft:nether_wart').withChance(0.03),
		Item.of('minecraft:blaze_powder').withChance(0.03),
		Item.of('enderio:withering_powder').withChance(0.01)
	], ['astro_rise:crushed_netherrack','createsifter:advanced_brass_mesh'])

	event.recipes.createsifter.sifting([
		Item.of('thermal:apatite_dust').withChance(0.03),
		Item.of('platinum_mod:ender_tear').withChance(0.03),
		Item.of('astro_rise:shulker_scute').withChance(0.02),
		Item.of('tconstruct:dragon_scale').withChance(0.02),
		Item.of('thermal:ender_pearl_dust').withChance(0.05)
	], ['createsifter:crushed_end_stone','createsifter:advanced_brass_mesh'])

})