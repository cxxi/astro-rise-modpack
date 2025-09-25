ServerEvents.tags('item', event => {

	event.remove('balm:dyes', 'mekanism:sulfur_dust')
	event.remove('forge:dyes', 'mekanism:sulfur_dust')
	event.remove('forge:dyes/yellow', 'mekanism:sulfur_dust')
	event.remove('balm:yellow_dyes', 'mekanism:sulfur_dust')

})