ServerEvents.recipes(event => {

	event.remove({ id: 'createdieselgenerators:casting/chocolate_bar' })

	event.custom({
		type: "createdieselgenerators:casting",
		ingredients: [
			{
				fluid: "create:chocolate",
				amount: 250
			}
		],
		mold: "createdieselgenerators:bar",
		results: [
			{
				item: "create:bar_of_chocolate",
				count: 1
			}
		]
	})

})