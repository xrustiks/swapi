<template>
  <div>
    <h1>Star Wars Characters</h1>
    <button @click="prevPage" :disabled="!prev">Previous</button>
    <button @click="nextPage" :disabled="!next">Next</button>

    <div class="characters-list">
      <div class="character" v-for="character in characters" :key="character.url" @click="selectCharacter(character)">
        {{ character.name }}
      </div>
    </div>
  </div>
</template>

<script>
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
      async fetchCharacters(url) {
        try {
          const response = await fetch(url);
          const data = await response.json();
          this.characters = data.results;
          this.next = data.next;
          this.prev = data.previous;
        } catch (error) {
          console.error('Error fetching data:', error);
        }
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

<style src="./CharacterList.css"></style>