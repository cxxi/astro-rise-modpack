ServerEvents.recipes(event => {

	// raw_cobalt

	event.recipes.createoreexcavation.vein('{"text": "Raw Cobalt"}', 'tconstruct:raw_cobalt')
	    .placement(800, 256, 64825185)
	    .veinSize(5, 8)
	    .id('kubejs:cobalt_vein')
	    .alwaysInfinite()
	    .biomeWhitelist('forge:is_hot/nether')

})