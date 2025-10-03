StartupEvents.registry('mekanism:slurry', event => {

	// event.create('cobalt', 'forge:ores/cobalt').color(0x1133BA)

	// event.create('astro_rise:cobalt')
    //     .ore('forge:ores/cobalt')
    //     .color(0x1133BA)

	event.create('astro_rise:dirty_cobalt')
		.texture('mekanism:fluid/dirty')
		.color(0x2D58A5)
    
	event.create('astro_rise:clean_cobalt')
		.texture('mekanism:fluid/clean')
		.color(0x1133BA)

})