const logFilePath = 'kubejs/logs/ores_overview.txt'

ServerEvents.worldLoad(event => {
	File.write(logFilePath, '=== Ore Generation Overview ===\n')
})

WorldgenEvents.ore(event => {
	const line = `[Ore] ${event.block.id} | Dim: ${event.dimensionIds.join(',')} | Layer: ${event.minY}-${event.maxY} | Size: ${event.size}\n`
	console.log(line.trim())
	File.append(logFilePath, line)
})