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
		Item.of('minecraft:wheat_seeds').withChance(0.03),
		Item.of('minecraft:pumpkin_seeds').withChance(0.01),
		Item.of('minecraft:melon_seeds').withChance(0.01),
		Item.of('minecraft:beetroot_seeds').withChance(0.01),
		Item.of('minecraft:torchflower_seeds').withChance(0.001),
		Item.of('farmersdelight:cabbage_seeds').withChance(0.01),
		Item.of('farmersdelight:tomato_seeds').withChance(0.01),
		Item.of('farmersdelight:rice').withChance(0.01),
		Item.of('minecraft:cacao_beans').withChance(0.01)
	], ['minecraft:dirt','createsifter:zinc_mesh'])

	event.recipes.createsifter.sifting([
		Item.of('minecraft:flint').withChance(0.005),
		Item.of('minecraft:bone_meal').withChance(0.005),
		Item.of('minecraft:coal').withChance(0.007),
		Item.of('astro_rise:andesite_nugget').withChance(0.010)
	], ['minecraft:gravel','createsifter:zinc_mesh'])

	// brass mesh

	event.remove({ id: 'createsifter:sifting/gravel_brass_mesh' })
	event.remove({ id: 'createsifter:sifting/sand_brass_mesh' })
	event.remove({ id: 'createsifter:sifting/soul_sand_brass_mesh' })

	event.recipes.createsifter.sifting([
		Item.of('minecraft:iron_nugget').withChance(0.005),
		Item.of('create:copper_nugget').withChance(0.005),
		Item.of('create:zinc_nugget').withChance(0.005),
		Item.of('mekanism:nugget_tin').withChance(0.004),
		Item.of('mekanism:nugget_lead').withChance(0.004)
	], ['minecraft:gravel','createsifter:brass_mesh'])

	event.recipes.createsifter.sifting([
		Item.of('minecraft:gold_nugget').withChance(0.005),
		Item.of('minecraft:glowstone_dust').withChance(0.003),
		Item.of('minecraft:quartz').withChance(0.003),
		Item.of('minecraft:nautilus_shell').withChance(0.001)
	], ['minecraft:sand','createsifter:brass_mesh'])

	// advanced brass mesh

	event.remove({ id: 'createsifter:sifting/gravel_advanced_brass_mesh' })
	event.remove({ id: 'createsifter:sifting/soul_sand_advanced_brass_mesh' })

	event.recipes.createsifter.sifting([
		Item.of('minecraft:iron_nugget').withChance(0.005),
		Item.of('create:copper_nugget').withChance(0.005),
		Item.of('create:zinc_nugget').withChance(0.005),
		Item.of('mekanism:nugget_tin').withChance(0.004),
		Item.of('simplemetals_aluminum:aluminum_nugget').withChance(0.004),
		Item.of('mekanism:nugget_lead').withChance(0.004),
		Item.of('thermal:nickel_nugget').withChance(0.004),
		Item.of('thermal:silver_nugget').withChance(0.004),
		Item.of('mekanism:nugget_osmium').withChance(0.003),
		Item.of('astro_rise:platinum_nugget').withChance(0.001)
	], ['minecraft:gravel','createsifter:advanced_brass_mesh'])

	event.recipes.createsifter.sifting([
		Item.of('minecraft:gold_nugget').withChance(0.005),
		Item.of('minecraft:lapis_lazuli').withChance(0.005),
		Item.of('minecraft:emerald').withChance(0.003),
		Item.of('thermal:ruby').withChance(0.003),
		Item.of('thermal:sapphire').withChance(0.003),
		Item.of('minecraft:diamond').withChance(0.001)
	], ['minecraft:sand','createsifter:advanced_brass_mesh'])

	event.recipes.createsifter.sifting([
		Item.of('create:experience_nugget').withChance(0.010),
		Item.of('thermal:cinnabar').withChance(0.003),
		Item.of('minecraft:ghast_tear').withChance(0.003),
		Item.of('minecraft:bone_meal').withChance(0.005),
		Item.of('miencraft:coal').withChance(0.005)
	], ['minecraft:soul_sand','createsifter:advanced_brass_mesh'])

	event.recipes.createsifter.sifting([
		Item.of('minecraft:quartz').withChance(0.005),
		Item.of('minecraft:glowstone_dust').withChance(0.005),
		Item.of('minecraft:nether_wart').withChance(0.003),
		Item.of('minecraft:blaze_powder').withChance(0.003),
		Item.of('enderio:withering_powder').withChance(0.001)
	], ['astro_rise:crushed_netherrack','createsifter:advanced_brass_mesh'])

	event.recipes.createsifter.sifting([
		Item.of('thermal:apatite').withChance(0.003),
		Item.of('platinum_mod:ender_tear').withChance(0.003),
		Item.of('astro_rise:shulker_scute').withChance(0.002),
		Item.of('tconstruct:dragon_scale').withChance(0.002),
		Item.of('thermal:ender_pearl_dust').withChance(0.005)
	], ['createsifter:crushed_end_stone','createsifter:advanced_brass_mesh'])

})