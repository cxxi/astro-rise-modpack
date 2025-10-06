
global.COLORS = [
	'white',
	'light_gray',
	'gray',
	'black',
	'brown',
	'red',
	'orange',
	'yellow',
	'lime',
	'green',
	'cyan',
	'light_blue',
	'blue',
	'purple',
	'magenta',
	'pink'
]

global.VANILLA_ORES = [
	'iron',
	'copper',
	'gold'
]

global.CREATE_ORES = [
	'create'
]

global.MEKANISM_ORES = [
	'tin',
	'lead',
	'osmium',
	'uranium'
]

global.THERMAL_ORES = [
	'silver',
	'nickel'
]

global.SIMPLEMETALS_ORES = [
	'aluminum'
]

global.PLATINUM_ORES = [
	'platinum'
]

global.TCONSTRUCT_ORES = [
	'cobalt'
]

global.AD_ASTRA_ORES = [
	'desh',
	'ostrum',
	'calorite'
]

global.ASTRO_RISE_ORES = [
	'aerolyte'
]

global.ORES = []
	.concat(global.VANILLA_ORES.map(ore => ['minecraft', ore]))
	.concat(global.CREATE_ORES.map(ore => ['create', ore]))
	.concat(global.MEKANISM_ORES.map(ore => ['mekanism', ore]))
	.concat(global.THERMAL_ORES.map(ore => ['thermal', ore]))
	.concat(global.SIMPLEMETALS_ORES.map(ore => ['simplemetals_aluminum', ore]))
	.concat(global.PLATINUM_ORES.map(ore => ['platinum_mod', ore]))
	.concat(global.TCONSTRUCT_ORES.map(ore => ['tconstruct', ore]))
	.concat(global.AD_ASTRA_ORES.map(ore => ['ad_astra', ore]))
	.concat(global.ASTRO_RISE_ORES.map(ore => ['astro_rise', ore]))


global.CUSTOM_SLURRIES = []
	.concat(global.SIMPLEMETALS_ORES)
	.concat(global.PLATINUM_ORES)
	.concat(global.TCONSTRUCT_ORES)
	.concat(global.AD_ASTRA_ORES)
	.concat(global.ASTRO_RISE_ORES)
	.concat(global.THERMAL_ORES)
	.concat(global.CREATE_ORES)


// global.ORES = [
// 	['minecraft', 'iron'],
// 	['minecraft', 'copper'],
// 	['minecraft', 'gold'],
// 	['create', 'zinc'],
// 	['thermal', 'silver'],
// 	['thermal', 'nickel'],
// 	['mekanism', 'tin'],
// 	['mekanism', 'lead'],
// 	['mekanism', 'osmium'],
// 	['mekanism', 'uranium'],
// 	['simplemetals_aluminum', 'aluminum'],
// 	['platinum_mod', 'platinum'],
// 	['ad_astra', 'desh'],
// 	['ad_astra', 'ostrum'],
// 	['ad_astra', 'calorite'],
// 	['astro_rise', 'aerolyte'],
// 	['tconstruct', 'cobalt']
// ]

// global.CUSTOM_SLURRIES = [
// 	'aerolyte',
// 	'aluminum',
// 	'calorite',
// 	'cobalt',
// 	'desh',
// 	'nickel',
// 	'ostrum',
// 	'platinum',
// 	'silver',
// 	'zinc'
// ]