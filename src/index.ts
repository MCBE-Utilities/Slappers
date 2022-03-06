import './listeners/index.js'
import { create, edit } from './forms/index.js'
import { createSlapper, removeSlapper, getAllSlappers } from './utils/index.js'
import { slapperModal as database } from './database/index.js'

const forms = {
  create,
  edit,
}

export const slappers = {
  createSlapper,
  removeSlapper,
  getAllSlappers,
  database,
  forms,
}
