<template>
  <div>
    <div class="box-with-shadow">
      <div class="text-subtitle-2 font-bold ">Living Room</div>
      <ul>
        <li
          v-for="entityLivingRoom in entitiesLivingRoom"
          :key="entityLivingRoom.id">
          {{ entityLivingRoom.name }}
          <div class="mt-4">
            <label for="modifiedNameLivingRoom">Modified Name:</label>
            <input
              v-model="modifiedDataLivingRoom.name"
              type="text"
              id="modifiedNameLivingRoom">
            <label for="modifiedTypeLivingRoom">Modified Type:</label>
            <input
              v-model="modifiedDataLivingRoom.type"
              type="text"
              id="modifiedTypeLivingRoom">
            <label for="modifiedStatusLivingRoom">Modified Status:</label>
            <input
              v-model="modifiedDataLivingRoom.status"
              type="text"
              id="modifiedStatusLivingRoom">
          </div>
          <button @click="modifyEntity(entityLivingRoom.id, modifiedDataLivingRoom)">Modify Entity</button>
        </li>
      </ul>
    </div>

    <div class="box-with-shadow">
      <div class="text-subtitle-2 font-bold ">Bedroom</div>
      <ul>
        <li
          v-for="entityBedroom in entitiesBedroom"
          :key="entityBedroom.id">
          {{ entityBedroom.name }}
          <div class="mt-4">
            <label for="modifiedNameBedroom">Modified Name:</label>
            <input
              v-model="modifiedDataBedroom.name"
              type="text"
              id="modifiedNameBedroom">
            <label for="modifiedTypeBedroom">Modified Type:</label>
            <input
              v-model="modifiedDataBedroom.type"
              type="text"
              id="modifiedTypeBedroom">
            <label for="modifiedStatusBedroom">Modified Status:</label>
            <input
              v-model="modifiedDataBedroom.status"
              type="text"
              id="modifiedStatusBedroom">
          </div>
          <button @click="modifyEntity(entityBedroom.id, modifiedDataBedroom)">Modify Entity</button>
        </li>
      </ul>
    </div>

    <div class="box-with-shadow">
      <div class="text-subtitle-2 font-bold ">Kitchen</div>
      <ul>
        <li
          v-for="entityKitchen in entitiesKitchen"
          :key="entityKitchen.id">
          {{ entityKitchen.name }}
          <div class="mt-4">
            <label for="modifiedNameKitchen">Modified Name:</label>
            <input
              v-model="modifiedDataKitchen.name"
              type="text"
              id="modifiedNameKitchen">
            <label for="modifiedTypeKitchen">Modified Type:</label>
            <input
              v-model="modifiedDataKitchen.type"
              type="text"
              id="modifiedTypeKitchen">
            <label for="modifiedStatusKitchen">Modified Status:</label>
            <input
              v-model="modifiedDataKitchen.status"
              type="text"
              id="modifiedStatusKitchen">
          </div>
          <button @click="modifyEntity(entityKitchen.id, modifiedDataKitchen)">Modify Entity</button>
        </li>
      </ul>
    </div>


    <div class="box-with-shadow">
      <div class="d-flex align-center flex-column">
        <div class="text-subtitle-2 font-bold ">Bathroom</div>
        <ul>
          <li
            v-for="entityBathroom in entitiesBathroom"
            :key="entityBathroom.id">
            {{ entityBathroom.name }}
            <div class="mt-4">
              <label for="modifiedNameBathroom">Modified Name:</label>
              <input
                v-model="modifiedDataBathroom.name"
                type="text"
                id="modifiedNameBathroom">
              <label for="modifiedTypeBathroom">Modified Type:</label>
              <input
                v-model="modifiedDataBathroom.type"
                type="text"
                id="modifiedTypeBathroom">
              <label for="modifiedStatusBathroom">Modified Status:</label>
              <input
                v-model="modifiedDataBathroom.status"
                type="text"
                id="modifiedStatusBathroom">
            </div>
            <button @click="modifyEntity(entityBathroom.id, modifiedDataBathroom)">Modify Entity</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
.box-with-shadow {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
}
</style>

<script>
import coreApi from "@/providers/core-api"

export default {
  name: "Dashboard",
  created() {
    this.getEntities(),
    this.getEntitiesKitchen(),
    this.getEntitiesLivingRoom(),
    this.getEntitiesBedroom(),
    this.getEntitiesBathroom()
  },
  data() {
    return {
      entities: [],
      entitiesKitchen: [],
      entitiesBedroom: [],
      entitiesBathroom: [],
      entitiesLivingRoom: [],
      selectedEntity: null,
      modifiedData: {
        name: "",
        type: "",
        status: ""
      },
      isLoading: false,
      isError: false
    }
  },
  methods: {
    modifyEntity(entityId) {
      const updatedData = {
        name: this.modifiedData.name,
        type: this.modifiedData.type,
        status: this.modifiedData.status
      }

      this.putEntity(entityId, updatedData)
    },
    getEntities() {
      this.isLoading = true

      coreApi.glados.getEntities()
        .then((entities) => {
          this.entities = entities
        })
        .catch((error) => {
          console.error(error)
          this.isError = true
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    getEntitiesKitchen() {
      this.isLoading = true

      coreApi.glados.getEntitiesKitchen()
        .then((entitiesKitchen) => {
          this.entitiesKitchen = entitiesKitchen
        })
        .catch((error) => {
          console.error(error)
          this.isError = true
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    getEntitiesBedroom() {
      this.isLoading = true

      coreApi.glados.getEntitiesBedroom()
        .then((entitiesBedroom) => {
          this.entitiesBedroom = entitiesBedroom
        })
        .catch((error) => {
          console.error(error)
          this.isError = true
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    getEntitiesLivingRoom() {
      this.isLoading = true

      coreApi.glados.getEntitiesLivingRoom()
        .then((entitiesLivingRoom) => {
          this.entitiesLivingRoom = entitiesLivingRoom
        })
        .catch((error) => {
          console.error(error)
          this.isError = true
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    getEntitiesBathroom() {
      this.isLoading = true

      coreApi.glados.getEntitiesBathroom()
        .then((entitiesBathroom) => {
          this.entitiesBathroom = entitiesBathroom
        })
        .catch((error) => {
          console.error(error)
          this.isError = true
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  } 
}
</script>