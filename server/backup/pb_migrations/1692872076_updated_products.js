/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y7krzuucyifetf7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vpyiwwxk",
    "name": "cost",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ipij3qab",
    "name": "tmb",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q4didoso",
    "name": "img",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zfiu9tib",
    "name": "description",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y7krzuucyifetf7")

  // remove
  collection.schema.removeField("vpyiwwxk")

  // remove
  collection.schema.removeField("ipij3qab")

  // remove
  collection.schema.removeField("q4didoso")

  // remove
  collection.schema.removeField("zfiu9tib")

  return dao.saveCollection(collection)
})
