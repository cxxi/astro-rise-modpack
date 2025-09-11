ServerEvents.recipes(event => {
	
	// experience_bottle

	event.shaped('minecraft:experience_bottle', [
	    'AAA', 
	    'ABA',
	    'AAA'  
	], {
	    A: 'create:experience_nugget', 
	    B: 'minecraft:glass_bottle'
	})

	// cake

	event.remove({id: 'minecraft:cake'})

})