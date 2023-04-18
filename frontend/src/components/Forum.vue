<template>
  <div class="forum">
    <section class="pathway-selector">
        <span>Select pathway to discuss</span>
        <b-field
                v-for="pw in pathways"
                :key="pw.id"
        >
            <b-radio-button
                v-model="pathway"
                size="is-default"
                :native-value="pw.id"
                >
                <span>{{ pw.name }}</span>
            </b-radio-button>
        </b-field>
    </section>
    <forum-pathway v-show="pathway > 0" :pw="selectedPathway" />
  </div>
</template>

<script>
import pwIds from '../pw_ids'
import ForumPathway from './ForumPathway.vue'

export default {
  components: { ForumPathway },
    data() {
        return {
            pathway: 12,
        }
    },
    computed: {
        pathways() {
            return pwIds
        },
        selectedPathway() {
            return this.pathways.filter(pw => pw.id === this.pathway)[0]
        }
    }
}
</script>

<style scoped>
.forum {
    margin: 15px 30px;
    display: flex;
    flex-direction: row;
}
 
.pathway-selector {
    display: block;
    min-width: 300px;
    /* background: rgb(230, 229, 229); */
    font-weight: bold;
    margin-right: 10px;
} 
</style>
