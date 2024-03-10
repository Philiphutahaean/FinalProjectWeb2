<template>
  <div class="p-4">
    <div class="mb-4">
      <router-link
        to="/"
        class="bg-gray-300 hover:bg-gray-400 transition-colors rounded-md py-2 px-4"
        >&larr; Back</router-link
      >
    </div>
    <h1 class="text-3xl font-bold mb-4">Service Details</h1>
    <div class="bg-white rounded-lg p-4 shadow-md" v-if="service">
      <h3 class="text-xl font-bold mb-2">{{ service.brand }}</h3>
      <p class="text-gray-500 text-sm mb-2">{{ service.description }}</p>
      <p class="text-gray-700 font-semibold text-lg mb-4">
        {{ service.service }}
      </p>
      <img class="mx-auto mb-4" width="200" :src="service.image" alt="" />
      <div class="flex justify-between">
        <router-link
          :to="`/service/${service.id}/edit`"
          class="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition-colors"
          >Edit</router-link
        >
        <button
          @click="deleteService"
          class="bg-red-500 text-white rounded-md py-2 px-4 hover:bg-red-600 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
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
const deleteService = async () => {
  if (confirm("Are you sure you want to delete this service?")) {
    await axios.delete(
      `http://localhost:8000/api/services/${service.value.id}`
    );
    router.push("/");
  }
};
</script>
