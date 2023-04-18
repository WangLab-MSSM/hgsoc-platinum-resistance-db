<template>
  <div class="forum-pathway">
      <div class="main-forum">
      Discussion about {{ pw.name }}
        <forum-message v-for="post in posts" :key="post.id" :post="post"/>
      </div>
    <div class="forum-input">
    <section>
        <b-field label="Title">
            <b-input maxlength="60" v-model="title"></b-input>
        </b-field>
        
        <b-field label="Message">
            <b-input minlength="60" type="textarea" v-model="message"></b-input>
        </b-field>

        <b-field label="Name/Affiliation">
            <b-input v-model="name"></b-input>
        </b-field>

        <b-field label="Email">
            <b-input type="email"
                v-model="email">
            </b-input>
        </b-field>

    <b-button expanded icon-left="pencil" rounded @click="postMessage">Post message about {{ pw.name }}</b-button>
    </section>
    </div>
  </div>
</template>

<script>
import ForumMessage from './ForumMessage.vue'

import { getForumPosts, setForumPosts } from '../firebase'

export default {
    components: {
        ForumMessage
    },
    props: ['pw'],
    data() {
        return {
            name: '',
            email: '',
            message: '',
            title: '',
        }
    },
    asyncComputed: {
        posts() {
            const forumPosts = getForumPosts(this.pw.id)
            return forumPosts
        }
    },
    methods: {
        postMessage() {
            const millisecondtime = Number(new Date())
            const timestamp = new Date(millisecondtime)
            let updatedPosts = this.posts.slice()
            updatedPosts.unshift(
                {
                    name: this.name.length > 0 ? this.name: 'Anonymous', 
                    email: this.email, 
                    message: this.message, 
                    title: this.title,
                    timestamp: timestamp.toString(),
                }
            )
            setForumPosts(this.pw.id, updatedPosts)
            this.posts = updatedPosts
        }
    }
}
</script>

<style>
.main-forum {
    display: flex;
    flex-direction: column;
}

.forum-pathway {
    display: flex;
    flex-direction: row;
    margin: 20px 10px;
    width: 100%;
}

.forum-input {
    background: #f8f8f8;
    width: 400px;
    height: 600px;
    padding: 10px;
}
</style>