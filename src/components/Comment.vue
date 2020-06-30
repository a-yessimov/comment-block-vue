<template>
  <li class="comment-list__item">
    <p class="comment-list__text">{{comment.text}}</p>
    <div class="comment-info">
      <font-awesome-icon icon="user-circle" />
      <span class="comment-info__name">{{comment.author}},</span>
      <span class="comment-info__date">{{comment.date | getTimeStr}}</span>
      <div>
        <button @blur="handleBlurTooltip" class="comment-btn" @click="handleClick">
          <font-awesome-icon icon="chevron-down" />
        </button>
        <div v-if="isTooltipActive" class="tooltip">
          <button @click="handleChange">Редактировать</button>
          <button @click="handleRemove">Удалить</button>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  data() {
    return {
      isTooltipActive: false
    };
  },
  props: {
    comment: Object,
    handleChangeComment: Function
  },
  methods: {
    handleClick() {
      this.isTooltipActive = !this.isTooltipActive;
    },
    handleChange() {
      this.isTooltipActive = false;
      this.handleChangeComment(this.comment);
    },
    handleRemove() {
      this.$store.commit("removeComment", this.comment);
    },
    handleBlurTooltip() {
      setTimeout(() => {
        this.isTooltipActive = false;
      }, 140);
    }
  },
  filters: {
    getTimeStr(date) {
      const mounts = [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря"
      ];
      return `${date.getDate()} ${mounts[date.getMonth()]}`
    }
  }
};
</script>

<style scoped>
.comment-list__item {
  margin-top: 15px;
}

.comment-info {
  font-size: 10px;
  text-transform: uppercase;
  color: #8f999c;
  display: flex;
  align-items: center;
}

.comment-btn {
  border: none;
  outline: none;
  cursor: pointer;
  background: inherit;
  color: #97a1a1;
}

.comment-info__name {
  font-weight: bold;
  margin-left: 5px;
}

.tooltip {
  min-width: 150px;
  background: #ffffff;
  position: absolute;
  box-shadow: 1px red 1px red;
  box-shadow: 0 0 10px #ebeddb;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}

.tooltip button {
  outline: none;
  font-size: 14px;
  text-align: left;
  padding: 15px;
  border: none;
  background: inherit;
  border: 1px solid #f5f5f5;
  cursor: pointer;
}

.tooltip button:hover {
  background-color: #f5f5f5;
}
</style>