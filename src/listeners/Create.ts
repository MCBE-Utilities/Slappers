import { client } from 'beapi-core'
import { create } from '../forms/index.js'

client.on('PlayerTag', (data) => {
    if (data.tag !== 'create_slapper') return

    return create(data.player)
})
