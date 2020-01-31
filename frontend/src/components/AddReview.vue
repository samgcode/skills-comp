<template>
    <div style="margin-top: 5em;">
        <h2>Write a review</h2>
        <form @submit.prevent="requestAdd()">
            <div class="from-row row">
                <div class="from-group col-md-6">
                    <label for="usernameInput">Username</label>
                    <input 
                        type="text" 
                        name="username" 
                        id="usernameInput" 
                        class="form-control" 
                        placeholder="Jeff"
                        v-model="formdata.username"
                    >
                </div>
                <div class="from-group col-md-6"> 
                    <label for="ratingInput">Rating</label>
                    <select 
                        id="ratingInput" 
                        class="form-control"
                        v-model="formdata.rating"
                        >
                        <option selected>5</option>
                        <option>4</option>
                        <option>3</option>
                        <option>2</option>
                        <option>1</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label for="reviewInput">Review</label>
                <textarea 
                    class="form-control" 
                    id="reviewInput" 
                    rows="5" 
                    placeholder="Write your review..."
                    v-model="formdata.review"
                    >
                </textarea>
            </div>
            <div class="form-row row">
                <div class="container">
                    <div class="text-center">
                        <button class="btn btn-primary" type="submit" style="color: white;">Submit</button>
                    </div>
                </div>    
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "AddReview",
        data() {
            return {
                formdata: []
            }
        } ,

        methods: {
            requestAdd: function() {
                //create a new http request
                let xhr = new XMLHttpRequest();

                xhr.open('POST', 'http://localhost:3000/reviews');

                xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                xhr.send(`username=${this.formdata.username}&rating=${this.formdata.rating}&review=${this.formdata.review}`);

                xhr.onload = () => {
                    if(xhr.status != 201) {
                        alert(`Error ${xhr.status}: ${xhr.statusText}`);
                    } else {
                        alert('*is dies*')
                        window.location.replace('http://localhost:8080/#/Store');
                    }
                };
            }
        }
    }
</script>