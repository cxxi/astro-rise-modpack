ServerEvents.recipes(event => {

    // rubber

	event.remove({ id: 'thermal:rubber_3' })
    event.remove({ id: 'thermal:rubber_from_vine' })
	event.remove({ id: 'thermal:rubber_from_dandelion' })

    // kelp to rubber

    // const targetMods = ['create', 'petrolsparts', 'createdieselgenerators']
	// const skipIds = ['createdieselgenerators:crafting/kelp_handle']
	// const from = 'minecraft:dried_kelp'
	// const to = 'thermal:cured_rubber'

	// event.forEachRecipe({}, recipe => {

	//     const id = recipe.getId()
	//     if (!id) return

	//     const mod = id.split(':')[0]
	//     if (!targetMods.includes(mod)) return
	//     if (skipIds.includes(id)) return

	//     let json = recipe.json
	//     let changed = false

	//     if (json.key) {
	//     	for (const symbol in json.key) {
	//     		const ing = json.key[symbol]
	//     		if (ing.item === from) {
	//     			ing.item = to
	//     			changed = true
	//     		}
	//     	}
	//     }

	//     if (json.ingredients) {
	//     	json.ingredients.forEach(ing => {
	//     		if (ing.item === from) {
	//     			ing.item = to
	//     			changed = true
	//     		}
	//     	})
	//     }

	//     if (json.input && json.input.item === from) {
	//     	json.input.item = to
	//     	changed = true
	//     }

	//     if (json.inputs) {
	//     	json.inputs.forEach(ing => {
	//     		if (ing.item === from) {
	//     			ing.item = to
	//     			changed = true
	//     		}
	//     	})
	//     }

	//     if (changed) {
	//     	event.custom(json).id(id)
	//     }
	// })

})