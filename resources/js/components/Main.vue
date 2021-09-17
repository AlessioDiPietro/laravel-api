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
        <div class="my-4">
            <h4><strong>Risultati {{currentPage}} di {{lastPage}} pagine</strong> </h4>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><button class="page-link" href="#" @click="getPosts(currentPage - 1)">Prima</button></li>
                    
                    <li class="page-item"><button class="page-link" href="#"  @click="getPosts(currentPage + 1)">Dopo</button></li>
                </ul>
            </nav>
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
            posts: [],
            lastPage: null,
            currentPage: 1
        }
    },
    created(){
        this.getPosts(1);
        },
    methods: {
        getPosts(move){
            axios.get(this.apiUrl, {
                params: {
                    page: move

                }
            })
                .then(res=> {
                    this.posts = res.data.results.data;
                    this.lastPage = res.data.results.last_page;
                    this.currentPage = res.data.results.current_page;
                    console.log(this.posts);
                })
        }

    }
}
</script>
<style lang="scss" scoped>

</style>
