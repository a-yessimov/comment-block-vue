<template>
  <div class="modal-wrapper">
    <div class="modal">
      <p class="modal__text">Вы уверенны что вы хотите удалить комментарий?</p>
      <div class="modal__btn-wrapper">
        <button @click="handleConfirm" class="confirm">ОК</button>
        <button @click="handleCancel" class="danger">Отмена</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      commentToDelete: "getCommentToDelete"
    })
  },
  methods: {
    handleConfirm() {
      this.$store.commit("removeComment", this.commentToDelete);
      this.handleCancel()
    },
    handleCancel() {
      this.$store.commit("setModalOpen", {
        status: false,
        comment: {}
      });
    }
  }
};
</script>

<style>
.modal-wrapper {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0000006b;
}

.modal {
  background: #fff;
  padding: 25px;
  max-width: 400px;
  width: 100%;
}

.modal__text {
  font-size: 25px;
}
.modal__btn-wrapper {
  margin-top: 20px;
}
.modal__btn-wrapper button {
  margin-right: 20px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
}
.confirm {
  background: #28a745;
}
.danger {
  background: #dc3545;
}
</style>