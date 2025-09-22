ServerEvents.tags('item', event => {

	event.remove('forge:ores/redstone', [
		'deeperdarker:sculk_stone_redstone_ore',
		'deeperdarker:gloomslate_redstone_ore'
	])

	event.remove('minecraft:redstone_ores', [
		'deeperdarker:sculk_stone_redstone_ore',
		'deeperdarker:gloomslate_redstone_ore'
	])

})