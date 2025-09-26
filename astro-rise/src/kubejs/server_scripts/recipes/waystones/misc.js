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

})