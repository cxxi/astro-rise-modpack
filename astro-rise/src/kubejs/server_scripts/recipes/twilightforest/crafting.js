ServerEvents.recipes(event => {
	
	event.remove({ id: 'twilightforest:material/carminite' })

	event.shaped('twilightforest:carminite', [
	    'ABA', 
	    'BCB',
	    'ABA'  
	],{
	    A: 'twilightforest:borer_essence', 
	    B: 'thermal:cinnabar',
	    C: 'minecraft:ghast_tear'
	})

})
