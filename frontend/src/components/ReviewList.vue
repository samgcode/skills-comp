<template>
        <div class="container">
            <div>    
                <div class="review-list" v-for="item in reviews" :key="item.id">
                    <review :review="item" />
                </div>
            </div>
        </div>
</template>

<script>
    import Review from './Review';

    export default {
        name: 'reviewList',
        props: ['reviews'],
        components: {
            Review
        }
    }
</script>