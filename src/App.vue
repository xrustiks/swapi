<!-- src/App.vue -->
<template>
  <div>
    <CharacterList @character-selected="selectedCharacter = $event" />
    <CharacterDetail v-if="selectedCharacter" :character="selectedCharacter" />
  </div>
</template>

<script>
  import CharacterList from './components/CharacterList.vue';
  import CharacterDetail from './components/CharacterDetail.vue';

  export default {
    components: { CharacterList, CharacterDetail },
    data() {
      return { selectedCharacter: null };
    }
  };
</script>