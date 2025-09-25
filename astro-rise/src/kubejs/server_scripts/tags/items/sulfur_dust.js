ServerEvents.tags('item', event => {

	event.remove('balm:dyes', 'mekanism:dust_sulfur')
	event.remove('forge:dyes', 'mekanism:dust_sulfur')
	event.remove('forge:dyes/yellow', 'mekanism:dust_sulfur')
	event.remove('balm:yellow_dyes', 'mekanism:dust_sulfur')

})