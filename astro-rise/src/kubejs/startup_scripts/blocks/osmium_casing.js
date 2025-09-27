StartupEvents.registry('block', event => {

	event
		.create('astro_rise:osmium_casing')
		.displayName('Osmium Casing')                              
	    .hardness(3.0)                                   
	    .resistance(3.0)                                 
	    .requiresTool(true)                              
	    .textureAll("astro_rise:block/osmium_casing")
	    .tagBlock("mineable/pickaxe")                    
	    .tagBlock("minecraft:needs_iron_tool")
	    .tagBlock("create/casing")     
})