<template>
    <div>
        <OrbitalsLoader :size="150" :color="'#6ee02b'" class="center-page" :class="{ 'd-none': !loading }"/>
    </div>
</template>

<script>
import OrbitalsLoader from '@bit/joshk.vue-spinners-css.orbitals-loader';

export default {
    props: ['loading'],
    components: {
        OrbitalsLoader
    },
}
</script>