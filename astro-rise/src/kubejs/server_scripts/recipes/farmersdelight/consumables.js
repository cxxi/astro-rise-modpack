ServerEvents.recipes(event => {

	// sweet_berry_cheesecake

	event.remove({ id: 'farmersdelight:sweet_berry_cheesecake' })

	event.shaped('farmersdelight:sweet_berry_cheesecake', [
	    'AAA', 
	    'AAA',
	    'BCB'  
	], {
	    A: 'minecraft:sweet_berries', 
	    B: 'ad_astra:cheese',
	    C: 'farmersdelight:pie_crust'
	})

	// cake

	event.remove({id: 'farmersdelight:cake_from_milk_bottle'})

})