/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("famodv44jfusaqw")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = ""
  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("famodv44jfusaqw")

  collection.listRule = "@request.auth.notes.user.id = user.id"
  collection.viewRule = "@request.auth.notes.user.id = user.id"
  collection.createRule = "@request.auth.notes.user.id = user.id"
  collection.updateRule = "@request.auth.notes.user.id = user.id"
  collection.deleteRule = "@request.auth.notes.user.id = user.id"

  return dao.saveCollection(collection)
})
