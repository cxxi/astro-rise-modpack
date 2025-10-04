ServerEvents.recipes(event => {

	// ender_chest

	event.remove({ id: 'enderstorage:ender_chest' })

	global.craft(event, 'enderstorage:ender_chest', [
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

	// ender_tank

	event.remove({ id: 'enderstorage:ender_tank' })

	global.craft(event, 'enderstorage:ender_tank', [
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