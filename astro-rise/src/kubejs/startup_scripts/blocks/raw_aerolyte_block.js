StartupEvents.registry('block', event => {

	event
		.create('astro_rise:raw_aerolyte_block')
		.displayName('Raw Aerolyte Block')                              
	    .hardness(3.0)                                   
	    .resistance(3.0)                                 
	    .requiresTool(true)                              
	    .textureAll("astro_rise:block/raw_aerolyte_block")
	    .tagBlock("mineable/pickaxe")                    
	    .tagBlock("minecraft:needs_diamond_tool")           
	    .tagBlock("forge:storage_blocks")                      
	    .tagBlock("forge:storage_blocks/aerolyte")
})