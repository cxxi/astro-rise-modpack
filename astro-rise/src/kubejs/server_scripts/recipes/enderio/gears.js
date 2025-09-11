ServerEvents.recipes(event => {

	// wood_gear

	event.remove({ id: 'enderio:wood_gear' })
	event.remove({ id: 'enderio:wood_gear_corner' })

	// stone_gear

	event.remove({ id: 'enderio:stone_gear' })
	event.remove({ id: 'enderio:stone_gear_upgrade' })

	// iron_gear
	
	event.remove({ id: 'enderio:iron_gear' })

	event.shaped('enderio:iron_gear', [
	    'ABA', 
	    'BCB',
	    'ABA'  
	], {
	    A: 'minecraft:iron_nugget', 
	    B: 'mekanism:ingot_steel',
	    C: 'enderio:grains_of_infinity'
	})

})