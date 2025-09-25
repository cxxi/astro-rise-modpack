ServerEvents.recipes(event => {

	event.stonecutting(
	    Item.of('createdieselgenerators:mold', { tag: { Mold: 'createdieselgenerators:bowl' }}),
	    'simplemetals_aluminum:aluminum_sheet'
	)

	event.stonecutting(
	    Item.of('createdieselgenerators:mold', { tag: { Mold: 'createdieselgenerators:wavy' }}),
	    'simplemetals_aluminum:aluminum_sheet'
  	)

	event.stonecutting(
	    Item.of('createdieselgenerators:mold', { tag: { Mold: 'createdieselgenerators:chain' }}),
	    'simplemetals_aluminum:aluminum_sheet'
  	)

	event.stonecutting(
	    Item.of('createdieselgenerators:mold', { tag: { Mold: 'createdieselgenerators:bar' }}),
	    'simplemetals_aluminum:aluminum_sheet'
  	)

})