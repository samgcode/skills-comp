<template>
    <embed
        :src="mapSrc"
        class="map"
        frameborder="0"
        allowfullscreen="" 
        aria-hidden="false" 
        tabindex="0"
    />
</template>

<script>
export default {
    name: 'EmbedMap',
    props: ['mapSrc'],
}
</script>

<style scoped>
.map {
  width: 80%; 
  height: 18rem;
  border: 0;
}
</style>