<template>
  <div>
    <h1>Star Wars Characters</h1>
    <ul>
      <li v-for="character in characters" :key="character.url" @click="selectCharacter(character)">
        {{ character.name }}
      </li>
    </ul>
    <button @click="prevPage" :disabled="!prev">Previous</button>
    <button @click="nextPage" :disabled="!next">Next</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      characters: [],
      next: null,
      prev: null,
      apiUrl: 'https://swapi.dev/api/people/'
    };
  },
  methods: {
    fetchCharacters(url) {
      axios.get(url).then(response => {
        this.characters = response.data.results;
        this.next = response.data.next;
        this.prev = response.data.previous;
      });
    },
    nextPage() {
      if (this.next) this.fetchCharacters(this.next);
    },
    prevPage() {
      if (this.prev) this.fetchCharacters(this.prev);
    },
    selectCharacter(character) {
      this.$emit('character-selected', character);
    }
  },
  created() {
    this.fetchCharacters(this.apiUrl);
  }
};
</script>
