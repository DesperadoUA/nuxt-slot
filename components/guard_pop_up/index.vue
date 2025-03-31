<template>
  <Modal :name="name" :showClose="false" customClass="bg">
    <div class="wrapper">
      <div class="title">{{translates.GUARD_POP_UP_TITLE[config.LANG]}}</div>
      <div class="actions">
        <button class="btn" @click="onClickYes">{{ translates.YES[config.LANG] }}</button>
        <button class="btn no">{{ translates.NO[config.LANG] }}</button>
      </div>
    </div>
  </Modal>
</template>
<script>
import translateMixin from '~/mixins/translate.js'
import Modal from '@/components/modal'
import { GUARD_MODAL_KEY, GUARD_COOKIE_STORAGE_KEY} from '@/constants.js'
export default {
  name: 'guard_pop_up',
  mixins: [translateMixin],
  components: { Modal },
  data() {
    return {
      name: GUARD_MODAL_KEY
    }
  },
  methods: {
    onClickYes() {
      document.cookie = `${GUARD_COOKIE_STORAGE_KEY}`
      this.$store.dispatch('modal/setStateModal', { key: GUARD_MODAL_KEY, status: false })
    },
  },
}
</script>
<style scoped>
.wrapper {
  width: 560px;
  max-width: 100%;
  background: white;
  border-radius: 8px;
  padding: 15px;
  box-sizing: border-box;
}
.title {
  text-align: center;
  font-family: var(--font);
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: var(--black);
}
.btn {
  background: #005c98;
  background: var(--green);
  border: 1px solid hsla(0, 0%, 100%, 0.2);
  box-sizing: border-box;
  box-shadow: inset 0 0 4px hsla(0, 0%, 100%, 0.25);
  border-radius: 10px;
  display: inline-block;
  font-family: 'Open Sans Bold';
  font-family: var(--font-bold);
  font-style: normal;
  font-size: 17px;
  text-align: center;
  color: var(--white);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  text-decoration: none;
  line-height: 40px;
  cursor: pointer;
  padding: 5px 15px;
  min-width: 180px;
}
.no {
  background: var(--red);
}
.actions {
  display: flex;
  justify-content: center;
  padding: 15px 0px;
  gap: 20px;
}
.bg {
  background: rgba(0, 0, 0, 0.9);
}
@media (min-width: 320px) and (max-width: 767px) {
  .title {
    font-size: 18px;
    line-height: 18px;
  }
  .btn {
    width: calc(50% - 15px);
    min-width: auto;
  }
}
</style>
