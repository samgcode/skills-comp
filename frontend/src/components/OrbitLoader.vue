<template>
    <div>
        <clip-loader :size="'50px'" :class="{ 'd-none': !loading }"/>
    </div>
</template>

<script>
import ClipLoader from 'vue-spinner/src/ClipLoader.vue';

export default {
    props: ['loading'],
    components: {
        ClipLoader
    },
}
</script>