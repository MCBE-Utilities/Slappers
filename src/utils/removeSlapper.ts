import { client } from 'beapi-core'
import { slapperModal } from '../database/index.js'

export function removeSlapper(uniqueId: number): void {
  const entity = client.entities.getByUniqueId(uniqueId)
  const slapper = slapperModal.find({ uniqueId })
  entity.destroy()
  slapper.delete()
}
