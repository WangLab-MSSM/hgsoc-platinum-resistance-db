<template>
  <div class='forum-input'>
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
</template>

<script>

import { getForumPosts, setForumPosts } from '../firebase'

export default {
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
            this.$forceUpdate()
        }
    }
}
</script>

<style>
.forum-input {
    background: #f8f8f8;
    width: 400px;
    height: 600px;
    padding: 10px;
}
</style>