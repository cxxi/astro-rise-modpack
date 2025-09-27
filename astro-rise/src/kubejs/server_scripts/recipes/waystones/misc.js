ServerEvents.recipes(event => {

	event.remove({ input: 'waystones:warp_dust' })

	event.shaped('waystones:warp_dust', [
	    'CAC', 
	    'BDB',
	    'CAC'  
	],{
	    A: 'thermal:sapphire_dust', 
	    B: 'thermal:ruby_dust',
	    C: 'create:powdered_obsidian',
	    D: 'thermal:enderium_dust'
	})

	event.remove({ id: 'waystones:return_scroll' })

	event.shaped('waystones:return_scroll', [
	    '   ', 
	    'ABA',
	    'CCC'  
	],{
	    A: 'minecraft:gold_nugget', 
	    B: 'waystones:warp_dust',
	    C: 'minecraft:paper'
	})

	event.remove({ id: 'waystones:bound_scroll' })

	event.shaped('waystones:bound_scroll', [
	    'DDD', 
	    'ABA',
	    'CCC'  
	],{
	    A: 'minecraft:gold_nugget', 
	    B: 'waystones:warp_dust',
	    C: 'minecraft:paper',
	    D: 'thermal:enderium_nugget'
	})

	event.remove({ id: 'waystones:warp_scroll' })

	event.shaped('waystones:warp_scroll', [
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