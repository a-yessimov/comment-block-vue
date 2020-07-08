<template>
  <div id="app">
    <CommentBlock />
    <ModalPrompt v-if="isModalOpen" />
  </div>
</template>

<script>
import CommentBlock from "./components/CommentBlock";
import ModalPrompt from "./components/ModalPrompt";
import { mapGetters } from 'vuex'

export default {
  name: "App",
  computed: {
    ...mapGetters({
      isModalOpen: 'getIsModalOpen'
    })
  },
  components: {
    CommentBlock,
    ModalPrompt
  }
};
</script>

<style>
#app {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 50px;
}
</style>
