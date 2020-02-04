<template>
    <div class="col-md-5">
        <div class="card mb-4 shadow-sm">
            <div class="card-body">
              <h4>{{ review.username }}</h4>
              <p class="card-text">{{ review.review }}</p>
              <span>Rating: {{ review.rating }}/5</span>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Review',
    props: ["review"],
  }
</script>