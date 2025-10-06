
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

global.ORES = [
	...global.VANILLA_ORES.map(ore => ['minecraft', ore]),
	...global.CREATE_ORES.map(ore => ['create', ore]),
	...global.MEKANISM_ORES.map(ore => ['mekanism', ore]),
	...global.THERMAL_ORES.map(ore => ['thermal', ore]),
	...global.SIMPLEMETALS_ORES.map(ore => ['simplemetals_aluminum', ore]),
	...global.PLATINUM_ORES.map(ore => ['platinum_mod', ore]),
	...global.TCONSTRUCT_ORES.map(ore => ['tconstruct', ore]),
	...global.AD_ASTRA_ORES.map(ore => ['ad_astra', ore]),
	...global.ASTRO_RISE_ORES.map(ore => ['astro_rise', ore])
]

global.CUSTOM_SLURRIES = [
	...global.SIMPLEMETALS_ORES,
	...global.PLATINUM_ORES,
	...global.TCONSTRUCT_ORES,
	...global.AD_ASTRA_ORES,
	...global.ASTRO_RISE_ORES,
	...global.THERMAL_ORES,
	...global.CREATE_ORES
]

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