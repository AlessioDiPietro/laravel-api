<template>
<div class="container">
    <div class="row">
        <div class="col-6" v-for="post in  posts" :key="post.id">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>
        </div>
    </div>
</div>
</template>
<script>

export default {
    name: "Main",
    data(){
        return {
            apiUrl: 'http://127.0.0.1:8000/api/posts',
            posts: []
        }
    },
    created(){
        this.getPosts();
        },
    methods: {
        getPosts(){
            axios.get(this.apiUrl)
                .then(res=> {
                    this.posts = res.data.results;
                })
        }

    }
}
</script>
<style lang="scss" scoped>

</style>
