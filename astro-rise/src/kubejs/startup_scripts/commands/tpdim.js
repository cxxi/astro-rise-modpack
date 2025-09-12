ServerEvents.commandRegistry(event => {

	const { commands: Commands, arguments: Arguments } = event

	const arg = Commands.argument('dimension', Arguments.STRING.create(event))

	const cmd = Commands.literal('tpdim').then(arg).executes(ctx => {
		let dimension = Arguments.STRING.getResult(ctx, 'dimension')
		ctx.source.server.runCommand(`execute in ${dimension} run tp ${ctx.source.player.name.string} 0 80 0`)
		return 1
	})

	event.register(cmd)

})