<template>
<div class="container">
    <div class="row">
        <div class="col-6" v-for="post in  posts" :key="post.id">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{{post.title}}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{post.created_at}}</h6>
                <p class="card-text">{{post.article}}</p>
                <a href="#" class="card-link">Show more</a>
                
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
                    console.log(this.posts);
                })
        }

    }
}
</script>
<style lang="scss" scoped>

</style>
