<template>
  <div id="app">
    <CommentBlock />
  </div>
</template>

<script>
import CommentBlock from "./components/CommentBlock";

export default {
  name: "App",
  components: {
    CommentBlock
  }
};
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
