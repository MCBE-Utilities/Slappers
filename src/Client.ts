import { Client } from 'beapi-core'

const client = new Client({
  commandsDisabled: true,
})

client.removeEvent('EntityScoreUpdated')
client.removeEvent('EntityTagsUpdated')

export {
  client,
}
