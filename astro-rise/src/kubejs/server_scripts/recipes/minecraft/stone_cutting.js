ServerEvents.recipes(event => {

	// event.stonecutting(
	//     Item.of('createdieselgenerators:mold', 1, { Mold: 'createdieselgenerators:bowl' }).strongNBT(),
	//     'simplemetals_aluminum:aluminum_sheet'
	// ).id('astro_rise:stonecut/mold_bowl')

	// event.stonecutting(
	//     Item.of('createdieselgenerators:mold').withNBT({ Mold: 'createdieselgenerators:bar' }),
	//     'simplemetals_aluminum:aluminum_sheet'
  	// ).id('astro_rise:stonecut/mold_wavy')

	// event.stonecutting(
	//     Item.of('createdieselgenerators:mold', 1, { Mold: 'createdieselgenerators:chain' }).weakNBT(),
	//     'simplemetals_aluminum:aluminum_sheet'
  	// ).id('astro_rise:stonecut/mold_chain')

	// event.stonecutting(
	//     Item.withNBT('createdieselgenerators:mold', { Mold: 'createdieselgenerators:bar' }),
	//     'simplemetals_aluminum:aluminum_sheet'
  	// ).id('astro_rise:stonecut/mold_bar')

  	event.custom({
		type: 'minecraft:stonecutting',
		ingredient: {
			item: 'simplemetals_aluminum:aluminum_sheet'
		},
		result: {
			id: 'createdieselgenerators:mold',
			components: {
				Mold: 'createdieselgenerators:bar' 
			}
		}
  	})

})