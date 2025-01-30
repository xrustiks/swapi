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

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export default defineComponent({
  props: {
    character: {
      type: Object as PropType<Character>,
      required: false
    }
  }
});
</script>

<style src="./CharacterDetail.css"></style>
