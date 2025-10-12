ServerEvents.tags('item', event => {

	event.remove('forge:gears', [
		'enderio:wood_gear',
		'enderio:stone_gear',
		'enderio:iron_gear',
		'enderio:dark_bimetal_gear',
		'enderio:vibrant_gear',
		'enderio:energized_gear'
	])

	event.remove('forge:gears/wood', 'enderio:wood_gear')
	event.remove('forge:gears/stone', 'enderio:stone_gear')
	event.remove('forge:gears/iron', 'enderio:iron_gear')
	event.remove('forge:gears/dark_bimetal', 'enderio:dark_bimetal_gear')
	event.remove('forge:gears/vibrant', 'enderio:vibrant_gear')
	event.remove('forge:gears/energized', 'enderio:energized_gear')

})