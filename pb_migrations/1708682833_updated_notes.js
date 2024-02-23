/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("famodv44jfusaqw")

  collection.listRule = "@request.auth.notes.id = user.notes.id"
  collection.viewRule = "@request.auth.notes.id = user.notes.id"
  collection.createRule = "@request.auth.notes.id = user.notes.id"
  collection.updateRule = "@request.auth.notes.id = user.notes.id"
  collection.deleteRule = "@request.auth.notes.id = user.notes.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("famodv44jfusaqw")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = ""
  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
})
