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
		Item.of('farmersdelight:tomato_seeds').withChance(0.1)
	], ['minecraft:dirt','createsifter:zinc_mesh'])

	event.recipes.createsifter.sifting([
		Item.of('minecraft:flint').withChance(0.05),
		Item.of('minecraft:bone_meal').withChance(0.05),
		Item.of('astro_rise:andesite_nugget').withChance(0.1)
	], ['minecraft:gravel','createsifter:zinc_mesh'])

	// brass mesh
	// brass -> gravel / sand

	// event.custom({
	// 	type: 'createsifter:sifting',
	// 	input: { item: 'minecraft:gravel' },
	// 	mesh: { count: 1, id: 'createsifter:brass_mesh' },
	// 	processingTime: 500,
	// 	results: [
	// 		{ id: 'minecraft:quartz', chance: 0.1 },
	// 		{ id: 'minecraft:nether_wart', chance: 0.05 },
	// 		{ id: 'create:experience_nugget', chance: 0.1 }
	// 	]
	// })

	// event.custom({
	// 	type: 'createsifter:sifting',
	// 	input: { item: 'minecraft:sand' },
	// 	mesh: { count: 1, id: 'createsifter:brass_mesh' },
	// 	processingTime: 500,
	// 	results: [
	// 		{ id: 'minecraft:quartz', chance: 0.1 },
	// 		{ id: 'minecraft:nether_wart', chance: 0.05 },
	// 		{ id: 'create:experience_nugget', chance: 0.1 }
	// 	]
	// })

	// advanced brass mesh
	// advanced brass -> gravel / sand / soulsand

})