
ServerEvents.commandRegistry(event => {

	const { commands: Commands, arguments: Arguments } = event

	const arg = Commands.argument('gamemode', Arguments.GAMEMODE.create(event))

	const cmd = Commands.literal('gm').then(arg).executes(ctx => {
		let gamemode = Arguments.GAMEMODE.getResult(ctx, 'gamemode')
		ctx.source.server.runCommand(`gamemode ${gamemode} ${ctx.source.player.name.string}`)
		return 1
	})

	event.register(cmd)

})