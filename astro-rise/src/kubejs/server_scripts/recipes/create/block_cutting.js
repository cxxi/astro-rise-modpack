ServerEvents.recipes(event => {

  event.remove({ type: 'create:block_cutting', input: 'astro_rise:mold' })

})