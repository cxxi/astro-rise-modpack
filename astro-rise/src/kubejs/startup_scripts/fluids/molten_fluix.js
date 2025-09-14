StartupEvents.registry('fluid', event => {
  
    event.create('astro_rise:molten_fluix')
        .stillTexture('astro_rise:fluid/molten_fluix_still')
        .flowingTexture('astro_rise:fluid/molten_fluix_flow')
        .displayName('Molten Fluix')
        .noBlock()
})