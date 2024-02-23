/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("famodv44jfusaqw")

  collection.indexes = [
    "CREATE INDEX `idx_jJ5qfS3` ON `notes` (\n  `title`,\n  `content`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("famodv44jfusaqw")

  collection.indexes = []

  return dao.saveCollection(collection)
})
