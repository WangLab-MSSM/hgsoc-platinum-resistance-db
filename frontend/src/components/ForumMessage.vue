<template>
  <div class='forum-message'>
    <section>
        <b-message :title="post.title" :closable="false">
            {{ post.message }}
                <div class="message-details">
                    <b-button icon-left="account" size="is-small">
                        <span>{{ post.name }} -- {{ post.timestamp }}</span>
                    </b-button>
                </div>
        </b-message>
    </section>
  </div>
</template>

<script>
export default {
    props: ['post'],
}
</script>

<style>
.forum-message {
    width: 800px;
    margin: 10px 30px;
}

.message-details {
    margin-top: 20px;
}
</style>