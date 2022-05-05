import { Client } from 'beapi-core'

const client = new Client()

client.removeEvent('EntityScoreUpdated')
client.removeEvent('EntityTagsUpdated')

export {
  client,
}
