<template>
    <div>
        <sync-loader :size="'13px'" :class="{ 'd-none': !loading }"/>
    </div>
</template>

<script>
import SyncLoader from 'vue-spinner/src/SyncLoader.vue';

export default {
    props: ['loading'],
    components: {
        SyncLoader
    },
}
</script>