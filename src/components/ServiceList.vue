<template>
  <div class="p-4">
    <h1 class="text-3xl font-bold mb-4">Laundry List</h1>
    <router-link
      to="/create"
      class="bg-blue-500 text-white rounded-md py-2 px-4 mb-4 inline-block hover:bgblue-600 transition-colors"
      >Create a new service</router-link
    >
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="service in services"
        :key="service.id"
        class="bg-white rounded-lg p-4 shadow-md"
      >
        <h3 class="text-xl font-bold mb-2">{{ service.brand }}</h3>
        <p class="text-gray-500 text-sm mb-2">{{ service.description }}</p>
        <p class="text-gray-700 font-semibold text-lg">{{ service.service }}</p>
        <img :src="service.image" alt="" class="w-full rounded-md mt-4" />
        <router-link
          :to="`/service/${service.id}`"
          class="bg-blue-500 text-white rounded-md py-2 px-4 mt-4 inline-block hover:bg-blue-600 transition-colors"
          >View Details</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

const services = ref([]);
onMounted(async () => {
  const response = await axios.get("http://localhost:8000/api/services", {
    headers: {
      Authorization: `Bearer ${authStore.accessToken}`,
    },
  });
  services.value = response.data.data;
});
</script>
