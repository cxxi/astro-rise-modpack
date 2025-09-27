ServerEvents.recipes(event => {

	event.remove({ id: 'enderstorage:ender_chest' })

	event.shaped('enderstorage:ender_chest', [
	    'ABA', 
	    'BCB',
	    'ADA'  
	],{
	    A: 'createaddition:electrum_rod', 
	    B: '#mekanism:colorable/wool',
	    C: 'create:item_vault',
	    D: 'thermal:enderium_ingot'
	})

	event.remove({ id: 'enderstorage:ender_tank' })

	event.shaped('enderstorage:ender_tank', [
	    'ABA', 
	    'BCB',
	    'ADA'  
	],{
	    A: 'createaddition:electrum_rod', 
	    B: '#mekanism:colorable/wool',
	    C: 'create:fluid_tank',
	    D: 'thermal:enderium_ingot'
	})

})