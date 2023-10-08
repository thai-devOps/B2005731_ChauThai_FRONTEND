<script lang="ts">
export default {
  name: 'InputSearch',
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },
  emits: ['submit', 'update:modelValue'],
  methods: {
    submit() {
      this.$emit('submit')
    },
    updateModelValue(event: any) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<template>
  <div class="input-group">
    <input
      type="text"
      class="form-control"
      placeholder="Nhập thông tin cần tìm"
      :value="modelValue"
      @input="updateModelValue"
      @keyup.enter="submit"
    />
    <div class="input-group-append">
      <button class="btn btn-outline-secondary" type="button" @click="submit">
        <span>Tìm kiếm</span>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
