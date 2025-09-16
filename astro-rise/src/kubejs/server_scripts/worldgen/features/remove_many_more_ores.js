ServerEvents.highPriorityData(event => {

    const ores = [
        'adamantite',
        'cobalt',
        'infernal',
        'lead',
        'mythril',
        'orichalcum',
        'palladium',
        'platinum',
        'silver',
        'tin',
        'titanium',
        'tungsten'
    ]
    
    ores.forEach(ore => {
        event.remove(`many_more_ores_and_crafts:worldgen/placed_feature/${ore}_ore_placed`)
        event.remove(`many_more_ores_and_crafts:worldgen/configured_feature/${ore}_ore`)
    })

})