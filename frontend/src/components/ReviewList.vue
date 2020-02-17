<template>
        <div class="container">
            <div v-for="review in reviews" :key="review.id">
                <div class="col-md-12">
                    <div class="card mb-4 shadow-sm">
                        <div class="card-body">
                            <h4>{{ review.username }}</h4>
                            <p class="card-text">{{ review.review }}</p>
                            <star-rating 
                                :star-size="20"
                                :rating="review.rating"
                                :read-only="true"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    import StarRating from 'vue-star-rating';

    export default {
        name: 'reviewList',
        props: ['reviews'],
        components: {
            StarRating
        }

    }
</script>