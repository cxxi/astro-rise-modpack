ServerEvents.recipes(event => {

	// ores

	event.remove({
		type: 'enderio:sag_milling',
		input: '#forge:ores'
	})

	// coal

	event.remove({ id: 'enderio:sag_milling/coal' })
	
	// clay

	event.remove({ id: 'enderio:sag_milling/clay' })
	
	// sand

	event.remove({ id: 'enderio:sag_milling/sand' })

	// cobalt_ingot

	event.recipes.enderio.sag_milling(
      	[ "enderio:powdered_cobalt" ],
      	"tconstruct:cobalt_ingot",
      	2400,
      	EnderIOBonusType.NONE
  	)

})