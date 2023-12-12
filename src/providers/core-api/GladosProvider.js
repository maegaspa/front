import coreApiClient from "@/providers/core-api/CoreApi"

export default {
  getEntities() {
    return coreApiClient.sendRequest("get", "/entities", {})
  },
  //Personnellement avec plus de temps j'aurais fait plutot un ajout d'un champ room dans les entités pour récupérer sans passer par le filtre.
  getEntitiesKitchen() {
    return coreApiClient.sendRequest("get", "/entities?room=Kitchen", {})
  },
  getEntitiesBedroom() {
    return coreApiClient.sendRequest("get", "/entities?room=Bedroom", {})
  },
  getEntitiesBathroom() {
    return coreApiClient.sendRequest("get", "/entities?room=Bathroom", {})
  },
  getEntitiesLivingRoom() {
    return coreApiClient.sendRequest("get", "/entities?room=Living Room", {})
  },
  putEntity(entityId, updatedData) {
    return coreApiClient.sendRequest("put", `/entities/${entityId}`, updatedData)
  }
}
