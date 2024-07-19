const $InfuseType = Java.loadClass('mekanism.api.chemical.infuse.InfuseType')
const $InfuseTypeBuilder = Java.loadClass('mekanism.api.chemical.infuse.InfuseTypeBuilder')

StartupEvents.registry('mekanism:infuse_type', event => {
    event.createCustom('rose_gold', () => new $InfuseType($InfuseTypeBuilder.builder().tint(0xEA6C54)))
    event.createCustom('platinum', () => new $InfuseType($InfuseTypeBuilder.builder().tint(0xC0C0C0)))
    event.createCustom('shellite', () => new $InfuseType($InfuseTypeBuilder.builder().tint(0x7F3997)))
})