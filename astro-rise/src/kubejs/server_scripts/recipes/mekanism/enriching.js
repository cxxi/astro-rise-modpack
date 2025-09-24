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

	event.custom({
		type: 'mekanism:enriching',
		input: {
			ingredient: {
				tag: 'forge:ores/tin'
			}
		},
		output: {
			count: 2,
			item: 'mekanism:dust_tin'
		}
	})

	event.custom({
		type: 'mekanism:enriching',
		input: {
			ingredient: {
				tag: 'forge:ores/lead'
			}
		},
		output: {
			count: 2,
			item: 'mekanism:dust_lead'
		}
	})

	event.custom({
		type: 'mekanism:enriching',
		input: {
			ingredient: {
				tag: 'forge:ores/osmium'
			}
		},
		output: {
			count: 2,
			item: 'mekanism:dust_osmium'
		}
	})

	event.custom({
		type: 'mekanism:enriching',
		input: {
			ingredient: {
				tag: 'forge:ores/uranium'
			}
		},
		output: {
			count: 2,
			item: 'mekanism:dust_uranium'
		}
	})

	event.custom({
		type: 'mekanism:enriching',
		input: {
			ingredient: {
				tag: 'forge:ores/fluorite'
			}
		},
		output: {
			count: 2,
			item: 'mekanism:dust_fluorite'
		}
	})

	event.custom({
		type: 'mekanism:enriching',
		input: {
			ingredient: {
				tag: 'forge:ores/silver'
			}
		},
		output: {
			count: 2,
			item: 'thermal:silver_dust'
		}
	})

	event.custom({
		type: 'mekanism:enriching',
		input: {
			ingredient: {
				tag: 'forge:ores/nickel'
			}
		},
		output: {
			count: 2,
			item: 'thermal:nickel_dust'
		}
	})

	event.custom({
		type: 'mekanism:enriching',
		input: {
			ingredient: {
				tag: 'forge:ores/apatite'
			}
		},
		output: {
			count: 2,
			item: 'thermal:apatite_dust'
		}
	})

	event.custom({
		type: 'mekanism:enriching',
		input: {
			ingredient: {
				tag: 'forge:ores/cinnabar'
			}
		},
		output: {
			count: 2,
			item: 'thermal:cinnabar_dust'
		}
	})

	event.custom({
		type: 'mekanism:enriching',
		input: {
			ingredient: {
				tag: 'forge:ores/sulfur'
			}
		},
		output: {
			count: 2,
			item: 'mekanism:dust_sulfur'
		}
	})

	event.custom({
		type: 'mekanism:enriching',
		input: {
			ingredient: {
				tag: 'forge:ores/niter'
			}
		},
		output: {
			count: 2,
			item: 'thermal:niter_dust'
		}
	})

	event.custom({
		type: 'mekanism:enriching',
		input: {
			ingredient: {
				tag: 'forge:ores/ruby'
			}
		},
		output: {
			count: 2,
			item: 'thermal:ruby_dust'
		}
	})

	event.custom({
		type: 'mekanism:enriching',
		input: {
			ingredient: {
				tag: 'forge:ores/sapphire'
			}
		},
		output: {
			count: 2,
			item: 'thermal:sapphire_dust'
		}
	})

	event.custom({
		type: 'mekanism:enriching',
		input: {
			ingredient: {
				tag: 'forge:ores/cobalt'
			}
		},
		output: {
			count: 2,
			item: 'enderio:powdered_cobalt'
		}
	})
})