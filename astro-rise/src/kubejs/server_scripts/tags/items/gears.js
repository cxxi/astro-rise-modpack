ServerEvents.tags('item', event => {

	event.remove('forge:gears', [
		'enderio:wood_gear',
		'enderio:stone_gear',
		'enderio:iron_gear',
		'enderio:dark_bimetal_gear',
		'enderio:vibrant_gear',
		'enderio:energized_gear'
	])
})

ServerEvents.tags('items', event => {

	event.remove('forge:gears', [
		'enderio:wood_gear',
		'enderio:stone_gear',
		'enderio:iron_gear',
		'enderio:dark_bimetal_gear',
		'enderio:vibrant_gear',
		'enderio:energized_gear'
	])
})