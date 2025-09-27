ServerEvents.recipes(event => {

	event.remove({ id: 'enderstorage:ender_chest' })

	event.shaped('enderstorage:ender_chest', [
	    'ABA', 
	    'ECE',
	    'ADA'  
	],{
	    A: 'createaddition:electrum_sheet', 
	    B: '#mekanism:colorable/wool',
	    C: 'minecraft:ender_chest',
	    D: 'astro_rise:ender_mechanism',
	    E: 'bedrockbreakers:pure_obsidian'
	})

	event.remove({ id: 'enderstorage:ender_tank' })

	event.shaped('enderstorage:ender_tank', [
	    'ABA', 
	    'ECE',
	    'ADA'  
	],{
	    A: 'bedrockbreakers:pure_obsidian', 
	    B: '#mekanism:colorable/wool',
	    C: 'tconstruct:scorched_fuel_tank',
	    D: 'astro_rise:ender_mechanism',
	    E: 'createaddition:electrum_rod'
	})

})