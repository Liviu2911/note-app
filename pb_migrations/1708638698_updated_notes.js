/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("famodv44jfusaqw")

  collection.listRule = "user.notes.id = @request.auth.notes.id"
  collection.createRule = "user.notes.id = @request.auth.notes.id"
  collection.updateRule = "user.notes.id = @request.auth.notes.id"
  collection.deleteRule = "user.notes.id = @request.auth.notes.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("famodv44jfusaqw")

  collection.listRule = "user.notes.id != @request.auth.notes.id"
  collection.createRule = ""
  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
})
