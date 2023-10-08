<template>
  <div v-if="contact" class="page">
    <h4>Hiệu chỉnh Liên hệ</h4>
    <ContactForm
      :contact="contact"
      @submit:contact="updateContact"
      @delete:contact="deleteContact"
    />
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import ContactForm from '@/components/ContactForm.vue'
import { deleteById, getById, update } from '@/services/contacts.service'
import type { Contact } from '@/types/contact.type'
export default {
  components: {
    ContactForm
  },
  props: {
    id: { type: String, required: true },
  },
  data() {
    return {
      contact: null as Contact | null,
      message: ''
    }
  },
  methods: {
    async getContact(id: string) {
      try {
        this.contact = await getById(id).then((response) => response.data)
      } catch (error) {
        console.log(error)
        // Chuyển sang trang NotFound đồng thời giữ cho URL không đổi
        this.$router.push({
          name: 'notfound',
          params: {
            pathMatch: this.$route.path.split('/').slice(1)
          },
          query: this.$route.query,
          hash: this.$route.hash
        })
      }
    },
    async updateContact(data: any) {
      try {
        const _data = { ...data }
        update(this.contact?._id as string, _data)
        this.message = 'Liên hệ được cập nhật thành công.'
      } catch (error) {
        console.log(error)
      }
    },
    async deleteContact() {
      if (confirm('Bạn muốn xóa Liên hệ này?')) {
        try {
          await deleteById(this.contact?._id as string)
          this.$router.push({ name: 'contactbook' })
        } catch (error) {
          console.log(error)
        }
      }
    }
  },
  created() {
    this.getContact(this.id)
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
