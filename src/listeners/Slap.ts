import { client } from 'beapi-core'
import { slapperModal } from '../database/index.js'

client.on('EntityHit', (data) => {
    const slapper = slapperModal.find({ uniqueId: data.target.getUniqueId() })
    if (!slapper) return
    data.attacker.executeCommand(slapper.command)
})
