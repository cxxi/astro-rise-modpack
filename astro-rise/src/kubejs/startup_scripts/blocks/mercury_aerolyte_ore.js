StartupEvents.registry('block', event => {

	event
		.create('astro_rise:mercury_aerolyte_ore')
		.displayName('Mercury Aerolyte Ore')                              
	    .hardness(3.0)                                   
	    .resistance(3.0)                                 
	    .requiresTool(true)                              
	    .textureAll("astro_rise:block/mercury_aerolyte_ore")
	    .tagBlock("mineable/pickaxe")                    
	    .tagBlock("minecraft:needs_iron_tool")           
	    .tagBlock("forge:ores")                      
	    .tagBlock("forge:ores/mercury_aerolyte")
})