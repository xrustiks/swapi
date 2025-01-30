<!-- src/components/CharacterDetail.vue -->
<template>
  <div class="character-details" v-if="character">
    <h2>{{ character.name }}</h2>
    <p>Height: {{ character.height }} cm</p>
    <p>Mass: {{ character.mass }} kg</p>
    <p>Hair Color: {{ character.hair_color }}</p>
    <p>Skin Color: {{ character.skin_color }}</p>
    <p>Eye Color: {{ character.eye_color }}</p>
    <p>Birth Year: {{ character.birth_year }}</p>
    <p>Gender: {{ character.gender }}</p>
  </div>
</template>

<script>
export default {
  props: ['character']
};
</script>

<style src="./CharacterDetail.css"></style>