/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("famodv44jfusaqw")

  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("famodv44jfusaqw")

  collection.updateRule = "@request.auth.email = user.email"
  collection.deleteRule = "@request.auth.email = user.email"

  return dao.saveCollection(collection)
})
