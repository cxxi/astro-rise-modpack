ServerEvents.recipes(event => {

	event.remove({ id: 'createaddition:crafting/small_connector_copper' })

	event.shapeless('3x createaddition:connector', [
   		'createaddition:copper_rod',
   		'create:andesite_alloy',
   		'thermal:cinnabar'
   	])

   	event.remove({ id: 'createaddition:crafting/large_connector_gold' })

	event.shapeless('2x createaddition:large_connector', [
   		'createaddition:gold_rod',
   		'create:andesite_alloy',
   		'create:andesite_alloy',
   		'thermal:cinnabar'
   	])

   	event.remove({ id: 'createaddition:crafting/large_connector_electrum' })

	event.shapeless('2x createaddition:large_connector', [
   		'createaddition:electrum_rod',
   		'create:andesite_alloy',
   		'create:andesite_alloy',
   		'thermal:cinnabar'
   	])

   	event.remove({ id: 'createaddition:crafting/capacitor_1' })

	event.shaped('createaddition:capacitor', [
	    ' A ', 
	    ' B ',
	    'CDC'  
	], {
	    A: 'create:copper_sheet', 
	    B: 'createaddition:zinc_sheet',
	    C: 'thermal:cinnabar',
	    D: 'minecraft:redstone_torch'
	})

   	event.remove({ id: 'createaddition:crafting/capacitor_2' })

	event.shaped('createaddition:capacitor', [
	    ' A ', 
	    ' B ',
	    'CDC'  
	], {
	    A: 'createaddition:zinc_sheet', 
	    B: 'create:copper_sheet',
	    C: 'thermal:cinnabar',
	    D: 'minecraft:redstone_torch'
	})

})