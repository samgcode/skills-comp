<template>
    <div>
        <div class="alert alert-danger">
            <h6><strong>{{ errorData.message }}</strong></h6>
        </div>
    </div>
</template>

<script>

    export default {
        props: ['errorData'],
    }
</script>