StartupEvents.registry('block', event => {

	event
		.create('astro_rise:infinity_block')
		.displayName('Infinity Block')                              
	    .hardness(5.0)                                   
	    .resistance(5.0)                                 
	    .requiresTool(true)                              
	    .textureAll("astro_rise:block/infinity_block")
	    .tagBlock("mineable/pickaxe")                    
	    .tagBlock("minecraft:needs_netherite_tool")
})