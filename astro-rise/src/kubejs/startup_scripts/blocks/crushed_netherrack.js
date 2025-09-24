StartupEvents.registry('block', event => {

	event
		.create('astro_rise:crushed_netherrack')
		.displayName('Crushed Netherrack')                              
	    .hardness(1.5)                                   
	    .resistance(1.5)                                 
	    .requiresTool(true)                              
	    .textureAll("astro_rise:block/crushed_netherrack")
	    .tagBlock("mineable/pickaxe")                    
	    .tagBlock("minecraft:needs_stone_tool")
})