StartupEvents.registry('fluid', event => {
  
    event.create('astro_rise:liquid_sculk')
    	.stillTexture('astro_rise:fluid/liquid_sculk_still')
        .thickTexture(0x1F1F1F)
        .bucketColor(0x1F1F1F)
        .displayName('Liquid Sculk')
        .noBlock()
})