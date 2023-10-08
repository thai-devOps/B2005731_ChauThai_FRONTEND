<template>
  <div class="page">
    <h4>Tạo mới Liên hệ </h4>
    <ContactForm
      :contact="contact"
      @submit:contact="createContact"
    />
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import ContactForm from '@/components/ContactForm.vue'
import { create } from '@/services/contacts.service'
import type { Contact } from '@/types/contact.type'
export default {
  components: {
    ContactForm
  },
  data() {
    const contact: Contact = {
      name: '',
      email: '',
      address: '',
      phone: '',
      favorite: false
    }
    return {
      contact: contact as Contact,
      message: ''
    }
  },
  methods: {
    async createContact(data: any) {
      try {
        const _data = { ...data }
        await create( _data as Contact)
        this.message = 'Liên hệ được tạo thành công.'
      } catch (error) {
        console.log(error)
      }
    },
   
  },
  created() {
    this.message = ''
  }
}
</script>
<style scoped>
.page {
  max-width: 600px;
  margin: 0 auto;
}
</style>
