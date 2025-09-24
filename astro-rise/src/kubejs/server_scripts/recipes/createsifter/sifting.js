ServerEvents.recipes(event => {

	// createsifter.sifting(Output[] result, Ingredient ingredient, ItemStack mesh)
    // .processingTime(int time) // optional, default: 500
    // .waterlogged(true) //optional, default: false
    // .advancedSifter(true) //optional, default: false

	// string mesh

	event.remove({ id: 'createsifter:sifting/sand_string_mesh' })

	// andesite mesh

	event.remove({ id: 'createsifter:sifting/gravel_andesite_mesh' })
	event.remove({ id: 'createsifter:sifting/sand_andesite_mesh' })

	// zinc mesh

	event.remove({ id: 'createsifter:sifting/gravel_zinc_mesh' })
	event.remove({ id: 'createsifter:sifting/sand_zinc_mesh' })

	// event.custom({
	// 	type: 'createsifter:sifting',
	// 	input: { item: 'minecraft:dirt' },
	// 	mesh: { count: 1, id: 'createsifter:zinc_mesh' },
	// 	processingTime: 500,
	// 	results: [
	// 		{ id: 'minecraft:wheat_seeds', chance: 0.3 },
	// 		{ id: 'minecraft:pumpkin_seeds', chance: 0.1 },
	// 		{ id: 'minecraft:melon_seeds', chance: 0.1 },
	// 		{ id: 'minecraft:beetroot_seeds', chance: 0.1 },
	// 		{ id: 'minecraft:torchflower_seeds', chance: 0.01 },
	// 		{ id: 'farmersdelight:cabbage_seeds', chance: 0.1 },
	// 		{ id: 'farmersdelight:tomato_seeds', chance: 0.1 }
	// 	]
	// })

	event.recipes.createsifter.sifting([
		Output.of('minecraft:wheat_seeds', 0.3),
		Output.of('minecraft:pumpkin_seeds', 0.1),
		Output.of('minecraft:melon_seeds', 0.1),
		Output.of('minecraft:beetroot_seeds', 0.1),
		Output.of('minecraft:torchflower_seeds', 0.01),
		Output.of('farmersdelight:cabbage_seeds', 0.1),
		Output.of('farmersdelight:tomato_seeds', 0.1)
	],'minecraft:dirt','createsifter:zinc_mesh')

	// event.custom({
	// 	type: 'createsifter:sifting',
	// 	input: { item: 'minecraft:gravel' },
	// 	mesh: { count: 1, id: 'createsifter:zinc_mesh' },
	// 	processingTime: 500,
	// 	results: [
	// 		{ id: 'minecraft:flint', chance: 0.05 },
	// 		{ id: 'minecraft:bone_meal', chance: 0.05 },
	// 		{ id: 'astro_rise:andesite_nugget', chance: 0.1 }
	// 	]
	// })

	event.recipes.createsifter.sifting([
		Output.of('minecraft:flint', 0.05),
		Output.of('minecraft:bone_meal', 0.05),
		Output.of('astro_rise:andesite_nugget', 0.1)
	],'minecraft:gravel','createsifter:zinc_mesh')

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