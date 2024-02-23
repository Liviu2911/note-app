/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("famodv44jfusaqw")

  collection.listRule = "user.notes.content = @request.auth.notes.content"
  collection.viewRule = "user.notes.content = @request.auth.notes.content"
  collection.createRule = "user.notes.content = @request.auth.notes.content"
  collection.updateRule = "user.notes.content = @request.auth.notes.content"
  collection.deleteRule = "user.notes.content = @request.auth.notes.content"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("famodv44jfusaqw")

  collection.listRule = "user.notes.id = @request.auth.notes.id"
  collection.viewRule = "user.notes.id = @request.auth.notes.id"
  collection.createRule = "user.notes.id = @request.auth.notes.id"
  collection.updateRule = "user.notes.id = @request.auth.notes.id"
  collection.deleteRule = "user.notes.id = @request.auth.notes.id"

  return dao.saveCollection(collection)
})
