<script lang="ts">
import type { Contact } from '@/types/contact.type'
export default {
  name: 'ContactList',
  components: {},
  props: {
    contacts: {
      type: Array<Contact>,
      default: () => []
    },
    activeIndex: {
      type: Number,
      default: -1
    }
  },
  emits: ['update:activeIndex'],
  methods: {
    updateActiveIndex(index: number) {
      this.$emit('update:activeIndex', index)
    }
  }
}
</script>

<template>
  <ul class="list-group">
    <li
      class="list-group-item"
      v-for="(contact, index) in contacts"
      :key="contact._id"
      :class="{ active: index === activeIndex }"
      @click="updateActiveIndex(index)"
    >
      {{ contact.name }}
    </li>
  </ul>
</template>

<style scoped></style>
