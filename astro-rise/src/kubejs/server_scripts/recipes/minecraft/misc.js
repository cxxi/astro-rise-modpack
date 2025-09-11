ServerEvents.recipes(event => {

	// bed

	global.COLORS.slice(1).forEach(color => {
		event.remove({ id: `minecraft:${color}_bed` })
	})

	// bell

	event.shaped('minecraft:bell', [
	    'AAA', 
	    'BCB',
	    ' D '  
	],{
	    A: 'minecraft:stick', 
	    B: 'minecraft:iron_nugget',
	    C: 'minecraft:gold_ingot',
	    D: 'minecraft:gold_block'
	})

	// saddle

	event.shaped('minecraft:saddle', [
	    'AAA', 
	    'A A',
	    'B B'  
	], {
	    A: 'minecraft:leather', 
	    B: 'minecraft:string'
	})

	// gilded_blackstone

	event.shaped('minecraft:gilded_blackstone', [
	    'ABA', 
	    'BCB',
	    'ABA'  
	], {
	    A: 'minecraft:gold_nugget', 
	    B: 'minecraft:blackstone',
	    C: 'minecraft:raw_gold'
	})

})