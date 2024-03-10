<template>
  <div class="p-4">
    <div class="mb-4">
      <router-link
        to="/"
        class="bg-gray-300 hover:bg-gray-400 transition-colors rounded-md py-2 px-4"
        >&larr; Back</router-link
      >
    </div>
    <h1 class="text-3xl font-bold mb-4">Create Service</h1>
    <form class="flex flex-col space-y-4" @submit.prevent="createService">
      <label class="text-lg font-semibold" for="name">Brand:</label>
      <input
        class="border rounded-md p-2"
        v-model="brand"
        type="text"
        id="name"
      />
      <label class="text-lg font-semibold" for="description"
        >Description:</label
      >
      <input
        class="border rounded-md p-2"
        v-model="description"
        type="text"
        id="description"
      />
      <label class="text-lg font-semibold" for="price">Service:</label>
      <input
        class="border rounded-md p-2"
        v-model="service"
        type="text"
        id="price"
      />
      <label class="text-lg font-semibold" for="image">Image URL:</label>
      <input
        class="border rounded-md p-2"
        v-model="image"
        type="text"
        id="image"
      />
      <button
        class="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition-colors"
        type="submit"
      >
        Create
      </button>
    </form>
  </div>
</template>
<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import router from "../router";
const authStore = useAuthStore();

const router = useRouter();
const brand = ref("");
const description = ref("");
const service = ref("");
const image = ref("");

const createService = async () => {
  await axios.post(
    "http://localhost:8000/api/services",
    {
      brand: brand.value,
      description: description.value,
      service: service.value,
      image: image.value,
    },
    {
      headers: {
        Authorization: `Bearer ${authStore.token}`,
      },
    }
  );
  router.push("/");
};
</script>
