/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("famodv44jfusaqw")

  collection.listRule = "@request.auth.notes.user.id = user.id"
  collection.viewRule = "@request.auth.notes.user.id = user.id"
  collection.createRule = "@request.auth.notes.user.id = user.id"
  collection.updateRule = "@request.auth.notes.user.id = user.id"
  collection.deleteRule = "@request.auth.notes.user.id = user.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("famodv44jfusaqw")

  collection.listRule = "user.notes.content = @request.auth.notes.content"
  collection.viewRule = "user.notes.content = @request.auth.notes.content"
  collection.createRule = "user.notes.content = @request.auth.notes.content"
  collection.updateRule = "user.notes.content = @request.auth.notes.content"
  collection.deleteRule = "user.notes.content = @request.auth.notes.content"

  return dao.saveCollection(collection)
})
