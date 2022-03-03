<template>
  <div class="bg-gray-200" id="app">
    <header
      class="bg-blue-10 flex flex-wrap flex-row items-center justify-between shadow-md text-white full-heigh px-10 py-3"
    >
      <div class="flex justify-between">
        <div class="border-4 flex items-center border-purple-600">
          <img
            class="md:w-1/4 w-1/4 h-full rounded-full"
            src="../assets/logo.png"
            alt=""
          />
        </div>
        <div class="border-4 border-purple-600 md:hidden">
          <button
            type="button"
            @click="getPoke()"
            class="block flex-grow text-white lg:hidden hover:text-gray-800 focus:text-white focus:outline-none"
          >
            <svg class="h-10 w-10 fill-current" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div class="break lg:hidden"></div>
      <div
        class="hidden lg:flex flex-grow flex-col items-center py-3 lg:py-0 lg:flex-row lg:justify-between text-lg"
        v-bind:class="{ hidden: show === true, flex: show === false }"
      >
        <div class="flex flow-row justify-start items-center w-full lg:w-10/12">
          <!-- <input
            id="input-search"
            v-model="searchString"
            class="w-10/12 shadow-md h-10 px-5 my-3 lg:my-0 text-lg text-black"
            @keyup.enter="search"
            placeholder="Buscar..."
            type="text"
          /> -->
          <!-- <button
            id="btn-search"
            @click="search"
            class="w-2/12 bg-gray-100 min-w-0 text-center px-2 h-10 shadow-md my-2 text-xl hover:bg-gray-300"
          >
            <img
              class="w-6 lg:w-6 block m-auto"
              src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/search-512.png"
              alt=""
            />
          </button> -->
        </div>
        <div
          class="w-full flex flex-col items-center lg:flex-row lg:justify-end"
        >
          <a
            class="mx-1 bg-gray-100 min-w-full lg:min-w-0 text-center text-gray-900 px-2 py-1 shadow-md rounded-lg my-2 text-xl hover:bg-gray-300"
            href="#"
            >Géneros</a
          >
          <a
            class="mx-1 bg-gray-100 min-w-full lg:min-w-0 text-center text-gray-900 px-2 py-1 shadow-md rounded-lg my-2 text-xl hover:bg-gray-300"
            href="#"
            >Películas
          </a>
          <a
            class="mx-1 bg-gray-100 min-w-full lg:min-w-0 text-center text-gray-900 px-2 py-1 shadow-md rounded-lg my-2 text-xl hover:bg-gray-300"
            href="#"
            >Series</a
          >
        </div>
      </div>
    </header>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    //HelloWorld,
  },
  setup() {
    let show = false;
    const getPoke = () => {
      show = !show;
    };
    return {
      show,
      getPoke,
    };
  },
};
</script>
