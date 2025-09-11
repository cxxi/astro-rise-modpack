ServerEvents.recipes(event => {

	// wine_cellar

	event.remove({ id: 'create_winery:wine_cellar_recipe' })
	event.remove({ id: 'create_winery:create/wine_cellar_recipe' })

	event.shaped('create_winery:wine_cellar', [
	    'ABA', 
	    'C C',
	    'ABA'  
	], {
	    A: 'tconstruct:blazewood', 
	    B: 'tconstruct:blazewood_slab',
	    C: 'ad_astra:calorite_plate'
	})

})