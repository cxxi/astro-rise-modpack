ServerEvents.recipes(event => {

	event.remove({ id: 'mekanism:processing/coal/from_ore' })

	event.custom({
		type: 'mekanism:enriching',
		input: {
			ingredient: {
				tag: 'forge:ores/coal'
			}
		},
		output: {
			count: 2,
			item: 'mekanism:dust_coal'
		}
	})

	event.remove({ id: 'mekanism:processing/redstone/from_ore' })

	event.custom({
		type: 'mekanism:enriching',
		input: {
			ingredient: {
				tag: 'forge:ores/redstone'
			}
		},
		output: {
			count: 2,
			item: 'minecraft:redstone'
		}
	})

	event.remove({ id: 'mekanism:processing/emerald/from_ore' })

	event.custom({
		type: 'mekanism:enriching',
		input: {
			ingredient: {
				tag: 'forge:ores/emerald'
			}
		},
		output: {
			count: 2,
			item: 'mekanism:dust_emerald'
		}
	})

	event.remove({ id: 'mekanism:processing/lapis_lazuli/from_ore' })

	event.custom({
		type: 'mekanism:enriching',
		input: {
			ingredient: {
				tag: 'forge:ores/lapis'
			}
		},
		output: {
			count: 2,
			item: 'mekanism:dust_lapis_lazuli'
		}
	})

	event.remove({ id: 'mekanism:processing/diamond/from_ore' })

	event.custom({
		type: 'mekanism:enriching',
		input: {
			ingredient: {
				tag: 'forge:ores/diamond'
			}
		},
		output: {
			count: 2,
			item: 'mekanism:dust_diamond'
		}
	})

	event.remove({ id: 'mekanism:processing/quartz/from_ore' })

	event.custom({
		type: 'mekanism:enriching',
		input: {
			ingredient: {
				tag: 'forge:ores/quartz'
			}
		},
		output: {
			count: 2,
			item: 'mekanism:dust_quartz'
		}
	})

	event.custom({
		type: 'mekanism:enriching',
		input: {
			ingredient: {
				item: 'ad_astra:moon_desh_ore'
			}
		},
		output: {
			count: 2,
			item: 'astro_rise:dust_desh'
		}
	})

	event.custom({
		type: 'mekanism:enriching',
		input: {
			ingredient: {
				item: 'ad_astra:moon_ice_shard_ore'
			}
		},
		output: {
			count: 2,
			item: 'astro_rise:dust_ice_shard'
		}
	})

	event.custom({
		type: 'mekanism:enriching',
		input: {
			ingredient: {
				item: 'ad_astra:mars_ostrum_ore'
			}
		},
		output: {
			count: 2,
			item: 'astro_rise:dust_ostrum'
		}
	})

	event.custom({
		type: 'mekanism:enriching',
		input: {
			ingredient: {
				item: 'ad_astra:venus_calorite_ore'
			}
		},
		output: {
			count: 2,
			item: 'astro_rise:dust_calorite'
		}
	})

	event.custom({
		type: 'mekanism:enriching',
		input: {
			ingredient: {
				item: 'astro_rise:mercury_aerolyte_ore'
			}
		},
		output: {
			count: 2,
			item: 'astro_rise:dust_aerolyte'
		}
	})

	event.custom({
		type: 'mekanism:enriching',
		input: {
			ingredient: {
				tag: 'forge:ores/zinc'
			}
		},
		output: {
			count: 2,
			item: 'astro_rise:dust_zinc'
		}
	})

})