/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("famodv44jfusaqw")

  collection.listRule = "@request.auth.id = user.id"
  collection.viewRule = "@request.auth.id = user.id"
  collection.updateRule = "@request.auth.id = user.id"
  collection.deleteRule = "@request.auth.id = user.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("famodv44jfusaqw")

  collection.listRule = "@request.auth.email = user.email"
  collection.viewRule = "@request.auth.email = user.email"
  collection.updateRule = "@request.auth.email = user.email"
  collection.deleteRule = "@request.auth.email = user.email"

  return dao.saveCollection(collection)
})
