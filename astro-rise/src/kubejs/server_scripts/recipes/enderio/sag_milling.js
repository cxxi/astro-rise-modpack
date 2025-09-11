ServerEvents.recipes(event => {

	// redstone_ore

	event.remove({ id: 'enderio:sag_milling/redstone_ore' })
	
	// clay

	event.remove({ id: 'enderio:sag_milling/clay' })
	
	// sand

	event.remove({ id: 'enderio:sag_milling/sand' })

	// cobalt_ingot

	event.recipes.enderio.sag_milling(
      	[
       		"enderio:powdered_cobalt"
      	],
      	"tconstruct:cobalt_ingot",
      	2400,
      	EnderIOBonusType.NONE
  	)

})