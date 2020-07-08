<template>
  <section class="comment-block">
    <header class="header">
      <article class="header-title">
        <h4>Подумать</h4>
        <p>Продавец</p>
      </article>
      <div>
        <button class="header-btn btn">Сменить этап подбора</button>
      </div>  
    </header>
    <form @submit.prevent="handleSubmit" class="form-block">
      <input
        v-model="inputValue"
        type="text"
        class="form-block__input"
        placeholder="Написать коментарий"
        @focus="isInputActive = true"
        @blur="handleBlur"
        ref="comment"
        required
      />
      <div v-if="isInputActive" class="form-block__btns-b">
        <button type="submit" class="form-block__submit btn">Сохранить</button>
        <button type="button" @click="handleCancel" class="form-block__cancel btn">Отмена</button>
      </div>
    </form>
    <ul class="comment-list">
      <Comment
       v-for="comment of comments" 
       :key="comment.id" 
       v-bind:comment="comment" 
       v-bind:handleChangeComment="handleChangeComment"
       />
    </ul>
  </section>
</template>

<script>
import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Comment from "./Comment";

library.add(faChevronDown, faUserCircle);

Vue.component("font-awesome-icon", FontAwesomeIcon);

export default {
  data() {
    return {
      inputValue: "",
      isInputActive: false,
      comments: this.$store.state.comments,
      currentComment: {},
      isChange: false
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.comment.blur();
      if (this.isChange) {
        this.currentComment.text = this.inputValue;
        this.$store.commit("changeComment", this.currentComment);
        this.currentComment = "";
        this.isChange = false;
      } else {
        const comment = {
          text: this.inputValue,
          author: "Азамат Есимов",
          date: new Date(),
          id: new Date().getTime()
        };
        this.$store.commit("addComment", comment);
      }
      this.inputValue = "";
      this.isInputActive = false;
    },
    handleCancel() {
      this.inputValue = "";
      this.isChange = false;
    },
    handleBlur(e) {
      if(e.relatedTarget !== null && e.relatedTarget.type === 'submit') {
        return;
      }
      setTimeout(() => {
        this.isInputActive = false;
        this.isChange = false;
      }, 140);

    },
    handleChangeComment(payload) {
      this.$refs.comment.focus()
      this.currentComment = payload
      this.inputValue = this.currentComment.text
      this.isChange = true
    }
  },
  components: {
    Comment
  }
};
</script>

<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
}

.btn {
  text-transform: uppercase;
  font-size: 12px;
  padding: 10px;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  box-sizing: border-box;
}

.comment-block {
  width: 450px;
  background-color: #fdffec;
  padding: 15px 30px;
  border-left: 4px solid #7ac016;
  border-radius: 5px 0 0 5px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 15px;
}
.header-title h4 {
  font-size: 18px;
  font-weight: bold;
  color: #7ac016;
  margin-bottom: 4px;
}
.header-title p {
  color: #7ac016;
}
.header-btn {
  background-color: #7ac016;
  border: 1px solid #7ac016;
}

.form-block {
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  padding: 10px 0;
}
.form-block__input {
  width: 100%;
  outline: none;
  border: none;
  background: inherit;
  box-sizing: border-box;
  font-size: 16px;
  font-family: sans-serif;
}
.form-block__btns-b {
  padding-top: 10px;
}
.form-block__submit {
  background-color: #22bbd2;
  border: 1px solid #22bbd2;
  margin-right: 15px;
}
.form-block__cancel {
  border: 1px solid #cccccc;
  background-color: #fff;
  color: #38343f;
  font-weight: bold;
}

@media (max-width: 329px) {
  .header-btn.header-btn {
    margin-top: 20px;
  }
}
</style>