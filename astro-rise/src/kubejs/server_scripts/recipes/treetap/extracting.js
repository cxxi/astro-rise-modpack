ServerEvents.recipes(event => {

    // crying_obsidian

    event.remove({ id: 'treetap:water_from_crying_obsidian' })

    // rubberwood_log

    event.custom({
        type: 'treetap:tap_extract',
        log: {
            item: 'thermal:rubberwood_log'
        },
        processing_time: 1200,
        result: {
            item: 'thermal:resin_bucket'
        },
        collect_bucket: true,
        display_fluid: {
            fluid: 'thermal:resin'
        }
    })

})