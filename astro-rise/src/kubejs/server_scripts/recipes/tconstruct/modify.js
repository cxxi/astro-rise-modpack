ServerEvents.recipes(event => {

	// draconic

	event.remove({id: 'tconstruct:tools/modifiers/slotless/draconic_from_head'})
	  
	event.custom({
	    type: 'tconstruct:modifier',
	    inputs: [
	    	{ tag: 'forge:reptils_head' },
	    ],
	    tools: {
	    	tag: 'tconstruct:modifiable/durability'
	    },
	    level: {
	        min: 1,
	        max: 2
	    },
	    result: "tconstruct:draconic"
	})

	event.remove({id: 'tconstruct:tools/modifiers/slotless/draconic_from_scales'})
	  
	event.custom({
	    type: 'tconstruct:modifier',
	    inputs: [
	    	{ item: 'minecraft:wither_rose' },
	    	{ tag: 'forge:reptils_scale' },
	    	{ item: 'minecraft:wither_rose' },
	    	{ tag: 'forge:reptils_scale' },
	    	{ tag: 'forge:reptils_scale' }
	    ],
	    tools: {
	    	tag: 'tconstruct:modifiable/durability'
	    },
	    level: 1,
	    result: "tconstruct:draconic"
	})

	event.custom({
	    type: 'tconstruct:modifier',
	    inputs: [
	    	{ item: 'deeperdarker:heart_of_the_deep' },
	    ],
	    tools: {
	    	tag: 'tconstruct:modifiable/durability'
	    },
	    level: {
	        min: 1,
	        max: 2
	    },
	    result: "tconstruct:draconic"
	})

	// harmonious
	  
	event.custom({
	    type: 'tconstruct:modifier',
	    inputs: [
	    	{ item: 'alexsmobs:mimicream' },
	    ],
	    tools: {
	    	tag: 'tconstruct:modifiable/durability'
	    },
	    level: 1,
	    result: "tconstruct:harmonious"
	})

})