StartupEvents.registry('minecraft:configured_feature', event => {

    const ConfiguredFeature = Java.type('net.minecraft.world.gen.feature.ConfiguredFeature')
    const Feature = Java.type('net.minecraft.world.gen.feature.Feature')
    const ResourceLocation = Java.type('net.minecraft.resources.ResourceLocation')

    const emptyFeature = new ConfiguredFeature(Feature.NO_OP, null)

    // remplace la feature "yellorite_ore"
    event.replace(new ResourceLocation('bigreactors', 'yellorite_ore'), emptyFeature)
    event.replace(new ResourceLocation('bigreactors', 'yellorite_deepslate_ore'), emptyFeature)

    console.info('[KubeJS] BigReactors Yellorite features neutralized.')
})