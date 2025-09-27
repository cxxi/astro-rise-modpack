ServerEvents.recipes(event => {

	event.remove({ id: 'enderstorage:ender_chest' })

	event.shaped('enderstorage:ender_chest', [
	    'ABA', 
	    'ECE',
	    'ADA'  
	],{
	    A: 'createaddition:electrum_rod', 
	    B: '#mekanism:colorable/wool',
	    C: 'create:item_vault',
	    D: 'astro_rise:ender_mechanism',
	    E: 'bedrockbreakers:pure_obsidian'
	})

	event.remove({ id: 'enderstorage:ender_tank' })

	event.shaped('enderstorage:ender_tank', [
	    'ABA', 
	    'ECE',
	    'ADA'  
	],{
	    A: 'createaddition:electrum_rod', 
	    B: '#mekanism:colorable/wool',
	    C: 'create:fluid_tank',
	    D: 'astro_rise:ender_mechanism',
	    E: 'bedrockbreakers:pure_obsidian'
	})

})