<template>
  <div class="speak-container">
    <button
      class="speak-button"
      @click="speakText">Speak Text</button>
  </div>

  <div
    v-if="showSuccessAlert"
    class="alert success">
    Modification saved successfully!
  </div>

  <div
    v-if="showErrorAlert"
    class="alert error">
    Error saving modification. Please try again.
  </div>

  <div class="box-with-shadow">
    <div class="room-header">
      <img
        src="@/../public/livingroomPng.png"
        alt="Living Room Logo"
        class="room-logo" />
      <div class="text-subtitle-2 font-bold">Living Room</div>
    </div>
    <ul>
      <li
        v-for="entityLivingRoom in entitiesLivingRoom"
        :key="entityLivingRoom?.id">
        {{ entityLivingRoom?.name }}
        <p>Type: {{ entityLivingRoom.type }}</p>
        <p>Status: {{ entityLivingRoom.status }}</p>
        <div
          class="mt-4 modify-box"
          v-if="selectedEntity === entityLivingRoom.id">
          <label for="modifiedNameLivingRoom">Modified Name:</label>
          <input
            v-model="modifiedDataLivingRoom.name"
            type="text"
            id="modifiedNameLivingRoom">
          <label for="modifiedTypeLivingRoom">Modified Type:</label>
          <select
            v-model="modifiedDataLivingRoom.type"
            id="modifiedTypeLivingRoom">
            <option value="sensor">Sensor</option>
            <option value="light">Light</option>
            <option value="switch">Switch</option>
            <option value="multimedia">Multimedia</option>
            <option value="air_conditioner">Air Conditioner</option>
          </select>
          <label for="modifiedStatusLivingRoom">Modified Status:</label>
          <select
            v-model="modifiedDataLivingRoom.status"
            id="modifiedStatusLivingRoom">
            <option value="on">On</option>
            <option value="off">Off</option>
            <option value="unavailable">Unavailable</option>
          </select>
          <button
            class="modify-button"
            @click="modifyEntity(entityLivingRoom.id, modifiedDataLivingRoom)">Modify Entity</button>
        </div>
        <button
          class="selecting-button"
          v-if="selectedEntity !== entityLivingRoom.id"
          @click="selectEntity(entityLivingRoom.id)">Select Entity</button>
      </li>
    </ul>
  </div>

  <div class="box-with-shadow">
    <div class="room-header">
      <img
        src="@/../public/bedroomPng.png"
        alt="Bedroom Logo"
        class="room-logo" />
      <div class="text-subtitle-2 font-bold">Bedroom</div>
    </div>
    <ul>
      <li
        v-for="entityBedroom in entitiesBedroom"
        :key="entityBedroom?.id">
        {{ entityBedroom?.name }}
        <p>Type: {{ entityBedroom.type }}</p>
        <p>Status: {{ entityBedroom.status }}</p>
        <div
          class="mt-4"
          v-if="selectedEntity === entityBedroom.id">
          <label for="modifiedNameBedroom">Modified Name:</label>
          <input
            v-model="modifiedDataBedroom.name"
            type="text"
            id="modifiedNameBedroom">
          <label for="modifiedTypeBedroom">Modified Type:</label>
          <select
            v-model="modifiedDataBedroom.type"
            id="modifiedTypeBedroom">
            <option value="sensor">Sensor</option>
            <option value="light">Light</option>
            <option value="switch">Switch</option>
            <option value="multimedia">Multimedia</option>
            <option value="air_conditioner">Air Conditioner</option>
          </select>
          <label for="modifiedStatusLivingRoom">Modified Status:</label>
          <select
            v-model="modifiedDataBedroom.status"
            id="modifiedStatusLivingRoom">
            <option value="on">On</option>
            <option value="off">Off</option>
            <option value="unavailable">Unavailable</option>
          </select>
          <button
            class="modify-button"
            @click="modifyEntity(entityBedroom.id, modifiedDataBedroom)">Modify Entity</button>
        </div>
        <button
          class="selecting-button"
          v-if="selectedEntity !== entityBedroom.id"
          @click="selectEntity(entityBedroom.id)">Select Entity</button>
      </li>
    </ul>
  </div>

  <div class="box-with-shadow">
    <div class="room-header">
      <img
        src="@/../public/bathroomPng.png"
        alt="Bathroom Logo"
        class="room-logo" />
      <div class="text-subtitle-2 font-bold">Bathroom</div>
    </div>
    <ul>
      <li
        v-for="entityBathroom in entitiesBathroom"
        :key="entityBathroom?.id">
        {{ entityBathroom?.name }}
        <p>Type: {{ entityBathroom.type }}</p>
        <p>Status: {{ entityBathroom.status }}</p>
        <div
          class="mt-4"
          v-if="selectedEntity === entityBathroom.id">
          <label for="modifiedNameBathroom">Modified Name:</label>
          <input
            v-model="modifiedDataBathroom.name"
            type="text"
            id="modifiedNameBathroom">
          <label for="modifiedTypeBathroom">Modified Type:</label>
          <select
            v-model="modifiedDataBathroom.type"
            id="modifiedTypeBathroom">
            <option value="sensor">Sensor</option>
            <option value="light">Light</option>
            <option value="switch">Switch</option>
            <option value="multimedia">Multimedia</option>
            <option value="air_conditioner">Air Conditioner</option>
          </select>
          <label for="modifiedStatusLivingRoom">Modified Status:</label>
          <select
            v-model="modifiedDataBathroom.status"
            id="modifiedStatusLivingRoom">
            <option value="on">On</option>
            <option value="off">Off</option>
            <option value="unavailable">Unavailable</option>
          </select>
          <button
            class="modify-button"
            @click="modifyEntity(entityBathroom.id, modifiedDataBathroom)">Modify Entity</button>
        </div>
        <button
          class="selecting-button"
          v-if="selectedEntity !== entityBathroom.id"
          @click="selectEntity(entityBathroom.id)">Select Entity</button>
      </li>
    </ul>
  </div>

  <div class="box-with-shadow">
    <div class="room-header">
      <img
        src="@/../public/kitchenPng.png"
        alt="Kitchen Logo"
        class="room-logo" />
      <div class="text-subtitle-2 font-bold">Kitchen</div>
    </div>
    <ul>
      <li
        v-for="entityKitchen in entitiesKitchen"
        :key="entityKitchen?.id">
        {{ entityKitchen?.name }}
        <p>Type: {{ entityKitchen.type }}</p>
        <p>Status: {{ entityKitchen.status }}</p>
        <div
          class="mt-4"
          v-if="selectedEntity === entityKitchen.id">
          <label for="modifiedNameKitchen">Modified Name:</label>
          <input
            v-model="modifiedDataKitchen.name"
            type="text"
            id="modifiedNameKitchen">
          <label for="modifiedTypeKitchen">Modified Type:</label>
          <select
            v-model="modifiedDataKitchen.type"
            id="modifiedTypeKitchen">
            <option value="sensor">Sensor</option>
            <option value="light">Light</option>
            <option value="switch">Switch</option>
            <option value="multimedia">Multimedia</option>
            <option value="air_conditioner">Air Conditioner</option>
          </select>
          <label for="modifiedStatusLivingRoom">Modified Status:</label>
          <select
            v-model="modifiedDataKitchen.status"
            id="modifiedStatusLivingRoom">
            <option value="on">On</option>
            <option value="off">Off</option>
            <option value="unavailable">Unavailable</option>
          </select>
          <button
            class="modify-button"
            @click="modifyEntity(entityKitchen.id, modifiedDataKitchen)">Modify Entity</button>
        </div>
        <button
          class="selecting-button"
          v-if="selectedEntity !== entityKitchen.id"
          @click="selectEntity(entityKitchen.id)">Select Entity</button>
      </li>
    </ul>
  </div>
</template>
<style>
.box-with-shadow {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
}

input, select {
    border-radius: 10px !important;
}

button {
    border: none;
    padding: 5px 10px;
    margin: 5px;
    border-radius: 4px;
}
.room-header {
    display: flex;
    align-items: center;
}

.room-logo {
    width: 30px;
    margin-right: 10px;
}

.modify-box {
    display: grid;
    gap: 10px;
    width: fit-content;
}

.speak-container {
    text-align: right;
    margin-bottom: 10px;
}

.speak-button {
    background-color: #e6e6fa;
}
.speak-button:hover {
    background-color: #9e9ee2;
    color: white;
    transition: .2s;
}

.selecting-button {
    background-color: #d2e6f9;
}
.selecting-button:hover {
    background-color: #8cb9e3;
    transition: .2s;
}

.modify-button {
    background-color: #ddfada;
}
.modify-button:hover{
    background-color: #9ae592;
    transition: .2s;
}

.alert {
    position: fixed;
    top: 10px;
    right: 10px;
    padding: 10px;
    border-radius: 4px;
    z-index: 999;
}

.success {
    background-color: #4caf50; /* Green */
    color: white;
}

.error {
    background-color: #f44336; /* Red */
    color: white;
}
</style>

<script>
import coreApi from "@/providers/core-api"

export default {
  name: "Dashboard",
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
      modifiedDataLivingRoom: [{
        name: "",
        type: "",
        status: ""
      }],
      modifiedDataBedroom: [{
        name: "",
        type: "",
        status: ""
      }],
      modifiedDataKitchen: [{
        name: "",
        type: "",
        status: ""
      }],
      modifiedDataBathroom: [{
        name: "",
        type: "",
        status: ""
      }],
      isDataLoaded: false,
      isLoading: false,
      isError: false,
      showSuccessAlert: false,
      showErrorAlert: false,
    }
  },
  mounted() {
    this.fetchData()
      .then(() => {
        this.isDataLoaded = true
      })
      .catch(error => {
        console.error("Erreur de chargement des données", error)
        this.isError = true
      })
  },
  methods: {
    fetchData() {
      this.isLoading = true

      return Promise.all([
        this.getEntities(),
        this.getEntitiesLivingRoom(),
        this.getEntitiesBedroom(),
        this.getEntitiesBathroom(),
        this.getEntitiesKitchen(),
      ])
        .then(() => {
          this.isDataLoaded = true
        })
        .catch((error) => {
          console.error("Error while fetching data", error)
          this.isError = true
          throw error
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    selectEntity(entityId) {
      this.selectedEntity = entityId
    },
    modifyEntity(entityId, modifiedData) {
      const updatedData = {
        modifications: {
          name: modifiedData.name,
          type: modifiedData.type,
          status: modifiedData.status,
        },
        id: entityId,
      }
      coreApi.glados.putEntity(entityId, updatedData)
        .then(() => {
          this.showSuccessAlert = true
          this.showErrorAlert = false

          // Hide the alert after 3 seconds
          setTimeout(() => {
            this.showSuccessAlert = false
          }, 3000)

          this.refreshData()
        })
        .catch(() => {
          this.showSuccessAlert = false
          this.showErrorAlert = true

          // Hide the error alert after 3 seconds
          setTimeout(() => {
            this.showErrorAlert = false
          }, 3000)
        })
    },
    refreshData() {
      this.fetchData()
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

      return coreApi.glados.getEntitiesLivingRoom()
        .then((entitiesLivingRoom) => {
          this.entitiesLivingRoom = entitiesLivingRoom
          return entitiesLivingRoom
        })
        .catch((error) => {
          console.error(error)
          this.isError = true
          throw error
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
    speakText() {
      if ("speechSynthesis" in window) {
        const utter = new SpeechSynthesisUtterance(this.generateEntitiesText())

        utter.lang = "en-US"
        utter.rate = 1.0
        utter.volume = 0.5

        window.speechSynthesis.speak(utter)

      } else {
        console.error("SpeechSynthesis is not supported in this browser.")
      }
    },
    generateEntitiesText() {
      const entitiesText = this.entities.map(entity => {
        return `${entity.name} is ${entity.status}`
      })

      return `Current entities and their states: ${entitiesText.join(", ")}`
    },
  } 
}
</script>