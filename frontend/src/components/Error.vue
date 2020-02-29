<template>
    <div class="top-spacer">
        <span>Error occured: {{ error }}</span>
    </div>
</template>

<script>
export default {
    name: 'error',
    props: ['error'],
}
</script>