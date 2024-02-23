/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("famodv44jfusaqw")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("famodv44jfusaqw")

  collection.listRule = "@request.auth.id = user"
  collection.viewRule = "@request.auth.id = user.id"
  collection.createRule = "@request.auth.id = user.id"

  return dao.saveCollection(collection)
})
