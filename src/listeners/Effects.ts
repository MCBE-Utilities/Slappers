import { client, Minecraft } from 'beapi-core'
import { slapperModal } from '../database/index.js'

client.on('Tick', () => {
    for (const slapper of slapperModal.findAll({})) {
        const entity = client.entities.getByUniqueId(slapper.uniqueId)
        if (!entity) continue
        entity.executeCommand('tp @s ~ ~ ~')
        entity.addEffect(Minecraft.MinecraftEffectTypes.instantHealth, 20, 255)
    }
})
