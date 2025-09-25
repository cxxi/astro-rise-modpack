ServerEvents.recipes(event => {

	event.stonecutting(
	    Item.of('createdieselgenerators:mold', 1, { nbt: { Mold: 'createdieselgenerators:bowl' }}),
	    'simplemetals_aluminum:aluminum_sheet'
	).id('astro_rise:stonecut/mold_bowl')

	event.stonecutting(
	    Item.of('createdieselgenerators:mold', 1, { nbt: { Mold: 'createdieselgenerators:wavy' }}),
	    'simplemetals_aluminum:aluminum_sheet'
  	).id('astro_rise:stonecut/mold_wavy')

	event.stonecutting(
	    Item.of('createdieselgenerators:mold', 1, { nbt: { Mold: 'createdieselgenerators:chain' }}),
	    'simplemetals_aluminum:aluminum_sheet'
  	).id('astro_rise:stonecut/mold_chain')

	event.stonecutting(
	    Item.of('createdieselgenerators:mold', 1, { nbt: { Mold: 'createdieselgenerators:bar' }}),
	    'simplemetals_aluminum:aluminum_sheet'
  	).id('astro_rise:stonecut/mold_bar')

})