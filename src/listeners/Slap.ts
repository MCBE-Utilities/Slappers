import { client } from 'beapi-core'
import { slapperModal } from '../database/index.js'

client.on('EntityAttacked', (data) => {
    const slapper = slapperModal.find({ uniqueId: data.target.getUniqueId() })
    if (!slapper) return
    data.player.executeCommand(slapper.command)
})
