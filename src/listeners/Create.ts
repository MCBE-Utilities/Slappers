import { create } from '../forms/index.js'
import { client } from '../Client.js'

client.on('PlayerTag', (data) => {
    if (data.tag !== 'create_slapper') return

    return create(data.player)
})
