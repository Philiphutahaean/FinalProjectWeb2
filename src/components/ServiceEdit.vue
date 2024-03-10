<template>
  <div class="p-4">
    <div class="mb-4">
      <router-link
        to="/"
        class="bg-gray-300 hover:bg-gray-400 transition-colors rounded-md py-2 px-4"
        >&larr; Back</router-link
      >
    </div>
    <h1 class="text-3xl font-bold mb-4">Edit Service</h1>
    <form
      class="flex flex-col space-y-4"
      v-if="service"
      @submit.prevent="updateService"
    >
      <label class="text-lg font-semibold" for="name">Brand:</label>
      <input
        class="border rounded-md p-2"
        v-model="service.brand"
        type="text"
        id="brand"
      />
      <label class="text-lg font-semibold" for="description"
        >Description:</label
      >
      <inputs
        class="border rounded-md p-2"
        v-model="service.description"
        type="text"
        id="description"
      />
      <label class="text-lg font-semibold" for="price">Service:</label>
      <input
        class="border rounded-md p-2"
        v-model="service.service"
        type="text"
        id="service"
      />
      <label class="text-lg font-semibold" for="image">Image URL:</label>
      <input
        class="border rounded-md p-2"
        v-model="service.image"
        type="text"
        id="image"
      />
      <button
        class="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition-colors"
        type="submit"
      >
        Save Changes
      </button>
    </form>
  </div>
</template>
<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const service = ref(null);
onMounted(async () => {
  const response = await axios.get(
    `http://localhost:8000/api/services/${route.params.id}`
  );
  service.value = response.data.data;
});
const updateService = async () => {
  await axios.put(`http://localhost:8000/api/services/${service.value.id}`, {
    brand: service.value.name,
    description: service.value.description,
    service: service.value.service,
    image: service.value.service,
  });
  router.push(`/service/${service.value.id}`);
};
</script>
