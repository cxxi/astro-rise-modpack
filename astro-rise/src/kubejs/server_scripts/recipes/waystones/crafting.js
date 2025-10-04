ServerEvents.recipes(event => {

	// warp_dust

	event.remove({ id: 'waystones:warp_dust' })

	global.craft(event, 'waystones:warp_dust', [
	    'CAC', 
	    'BDB',
	    'CAC'  
	],{
	    A: 'thermal:sapphire_dust', 
	    B: 'thermal:ruby_dust',
	    C: 'create:powdered_obsidian',
	    D: 'thermal:enderium_dust'
	})

	// return_scroll

	event.remove({ id: 'waystones:return_scroll' })

	global.craft(event, 'waystones:return_scroll', [
	    '   ', 
	    'ABA',
	    'CCC'  
	],{
	    A: 'minecraft:gold_nugget', 
	    B: 'waystones:warp_dust',
	    C: 'minecraft:paper'
	})

	// bound_scroll

	event.remove({ id: 'waystones:bound_scroll' })

	global.craft(event, 'waystones:bound_scroll', [
	    'DDD', 
	    'ABA',
	    'CCC'  
	],{
	    A: 'minecraft:gold_nugget', 
	    B: 'waystones:warp_dust',
	    C: 'minecraft:paper',
	    D: 'thermal:enderium_nugget'
	})

	// warp_scroll

	event.remove({ id: 'waystones:warp_scroll' })

	global.craft(event, 'waystones:warp_scroll', [
	    'DAD', 
	    'ABA',
	    'CCC'  
	],{
	    A: 'minecraft:gold_nugget', 
	    B: 'waystones:warp_dust',
	    C: 'minecraft:paper',
	    D: 'thermal:enderium_nugget'
	})

})