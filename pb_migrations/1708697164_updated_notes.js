/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("famodv44jfusaqw")

  collection.listRule = "user = @request.auth.id"
  collection.viewRule = "user = @request.auth.id"
  collection.createRule = "user = @request.auth.id"
  collection.updateRule = "user = @request.auth.id"
  collection.deleteRule = "user = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("famodv44jfusaqw")

  collection.listRule = "user.id = @request.data.user.id"
  collection.viewRule = "user.id = @request.data.user.id"
  collection.createRule = "user.id = @request.data.user.id"
  collection.updateRule = "user.id = @request.data.user.id"
  collection.deleteRule = "user.id = @request.data.user.id"

  return dao.saveCollection(collection)
})
