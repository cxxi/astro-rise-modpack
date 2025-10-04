ServerEvents.recipes(event => {

	event.remove({ output: /twilightforest:hollow_.*/ })

	event.remove({ id: 'twilightforest:carminite_reactor' })

	// carminite
	
	event.remove({ id: 'twilightforest:material/carminite' })

	global.craft(event, 'twilightforest:carminite', [
	    'ABA', 
	    'BCB',
	    'ABA'  
	],{
	    A: 'twilightforest:borer_essence', 
	    B: 'thermal:cinnabar',
	    C: 'minecraft:ghast_tear'
	})

})
