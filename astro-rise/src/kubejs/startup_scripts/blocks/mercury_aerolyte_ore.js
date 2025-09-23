StartupEvents.registry('block', event => {

	event
		.create('astro_rise:mercury_aerolyte_ore')
		.displayName('Mercury Aerolyte Ore')
		.material("stone")                               
	    .hardness(3.0)                                   
	    .resistance(3.0)                                 
	    .requiresTool(true)                              
	    .texture("astro_rise:block/mercury_aerolyte_ore")
	    .tagBlock("mineable/pickaxe")                    
	    .tagBlock("minecraft:needs_iron_tool")           
	    .tagBlock("forge:ores")                          
	    .tagBlock("forge:ores/mercury_aerolyte")
})