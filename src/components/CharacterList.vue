<template>
  <div>
    <h1>Star Wars Characters</h1>
    
    <input class="search" v-model="searchQuery" placeholder="Search characters..." />
    
    <div class="buttons">
      <div class="button" @click="prevPage">Previous</div>
      <div class="button" @click="nextPage">Next</div>
    </div>
    
    <div class="characters-list">
      <div
        class="character" 
        v-for="character in filteredCharacters" 
        :key="character.url" 
        @click="selectCharacter(character)"
      >
        {{ character.name }}
      </div>
    </div>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';

interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  url: string;
}

interface ApiResponse {
  results: Character[];
  next: string | null;
  previous: string | null;
}

export default defineComponent({
  setup(_, { emit }) {
    const characters = ref<Character[]>([]);
    const next = ref<string | null>(null);
    const prev = ref<string | null>(null);
    const error = ref<string | null>(null);
    const searchQuery = ref<string>('');
    const apiUrl = 'https://swapi.dev/api/people/';

    const fetchCharacters = async (url: string) => {
      try {
        error.value = null;
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data: ApiResponse = await response.json();
        characters.value = data.results;
        next.value = data.next;
        prev.value = data.previous;
      } catch (err) {
        error.value = (err as Error).message;
        console.error('Error fetching data:', err);
      }
    };

    const nextPage = () => {
      if (next.value) fetchCharacters(next.value);
    };

    const prevPage = () => {
      if (prev.value) fetchCharacters(prev.value);
    };

    const selectCharacter = (character: Character) => {
      emit('character-selected', character);
    };

    const filteredCharacters = computed(() => {
      return characters.value.filter(character =>
        character.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    onMounted(() => {
      fetchCharacters(apiUrl);
    });

    return { characters, next, prev, error, searchQuery, filteredCharacters, nextPage, prevPage, selectCharacter };
  }
});
</script>

<style src="./CharacterList.css"></style>