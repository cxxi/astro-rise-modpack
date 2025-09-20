ServerEvents.recipes(event => {

    // rubber

	event.remove({ id: 'thermal:rubber_3' })
    event.remove({ id: 'thermal:rubber_from_vine' })
	event.remove({ id: 'thermal:rubber_from_dandelion' })

    // kelp to rubber

    const targetMods = ['create', 'petrolsparts', 'createdieselgenerators']
	const skipIds = ['createdieselgenerators:crafting/kelp_handle']

	event.forEachRecipe({ }, recipe => {

		const mod = recipe.getId().split(':').at(0)

		if (!targetMods.includes(mod)) return
		if (skipIds.includes(recipe.getId())) return

		let changed = false
		let json = recipe.json

		if (json.ingredients) {
			json.ingredients.forEach(ing => {
				if (ing.item === 'minecraft:dried_kelp') {
					ing.item = 'thermal:cured_rubber'
					changed = true
				}
			})
		}

		if (json.key) {
			Object.keys(json.key).forEach(k => {
				let ing = json.key[k]
				if (ing.item === 'minecraft:dried_kelp') {
					ing.item = 'thermal:cured_rubber'
					changed = true
				}
			})
		}

		if (changed) {
			event.custom(json).id(recipe.getId())
		}
	})

})