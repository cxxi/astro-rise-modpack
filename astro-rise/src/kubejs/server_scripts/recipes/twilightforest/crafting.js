ServerEvents.recipes(event => {
	
	event.remove({ id: 'twilighforest:material/carminite' })

	event.shaped('twilighforest:carminite', [
	    'ABA', 
	    'BCB',
	    'ABA'  
	],{
	    A: 'twilighforest:borer_essence', 
	    B: 'thermal:cinnabar',
	    C: 'minecraft:ghast_tear'
	})

})
