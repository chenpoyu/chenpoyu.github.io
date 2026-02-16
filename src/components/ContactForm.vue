<template>
  <div class="contact-form-wrapper">
    <q-card flat bordered class="contact-form-card">
      <q-card-section>
        <div class="text-h5 q-mb-md text-center form-title">
          <q-icon name="email" size="32px" class="title-icon q-mr-sm" />
          {{ $t('contact_form.title') }}
        </div>
        <p class="text-body2 form-subtitle text-center q-mb-lg">
          {{ $t('contact_form.subtitle') }}
        </p>

        <q-form
          ref="formRef"
          @submit="onSubmit"
          class="q-gutter-md"
        >
          <!-- Name Field -->
          <q-input
            v-model="formData.name"
            :label="$t('contact_form.name')"
            :rules="[val => !!val || $t('contact_form.name_required')]"
            outlined
            dense
            :disable="isSubmitting"
          >
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-input>

          <!-- Email Field -->
          <q-input
            v-model="formData.email"
            type="email"
            :label="$t('contact_form.email')"
            :rules="[
              val => !!val || $t('contact_form.email_required'),
              val => /.+@.+\..+/.test(val) || $t('contact_form.email_invalid')
            ]"
            outlined
            dense
            :disable="isSubmitting"
          >
            <template v-slot:prepend>
              <q-icon name="email" />
            </template>
          </q-input>

          <!-- Phone Field (Optional) -->
          <q-input
            v-model="formData.phone"
            :label="$t('contact_form.phone')"
            outlined
            dense
            :disable="isSubmitting"
            :hint="$t('contact_form.phone_optional')"
          >
            <template v-slot:prepend>
              <q-icon name="phone" />
            </template>
          </q-input>

          <!-- Subject Field -->
          <q-select
            v-model="formData.subject"
            :options="subjectOptions"
            :label="$t('contact_form.subject')"
            :rules="[val => !!val || $t('contact_form.subject_required')]"
            outlined
            dense
            emit-value
            map-options
            :disable="isSubmitting"
          >
            <template v-slot:prepend>
              <q-icon name="topic" />
            </template>
          </q-select>

          <!-- Message Field -->
          <q-input
            v-model="formData.message"
            type="textarea"
            :label="$t('contact_form.message')"
            :rules="[val => !!val || $t('contact_form.message_required')]"
            outlined
            rows="5"
            :disable="isSubmitting"
          >
            <template v-slot:prepend>
              <q-icon name="message" />
            </template>
          </q-input>

          <!-- Submit Button -->
          <div class="text-center q-mt-lg">
            <q-btn
              type="submit"
              color="primary"
              size="lg"
              :label="$t('contact_form.submit')"
              :loading="isSubmitting"
              :disable="isSubmitting"
              icon-right="send"
              unelevated
              class="full-width"
            />
          </div>
        </q-form>

        <!-- Success Message -->
        <q-banner
          v-if="submitSuccess"
          class="bg-positive text-white q-mt-md"
          rounded
        >
          <template v-slot:avatar>
            <q-icon name="check_circle" size="24px" />
          </template>
          {{ $t('contact_form.success_message') }}
        </q-banner>

        <!-- Error Message -->
        <q-banner
          v-if="submitError"
          class="bg-negative text-white q-mt-md"
          rounded
        >
          <template v-slot:avatar>
            <q-icon name="error" size="24px" />
          </template>
          {{ submitError }}
        </q-banner>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'ContactForm',

  props: {
    formspreeId: {
      type: String,
      required: true,
      default: 'YOUR_FORMSPREE_ID' // 請替換為你的 Formspree ID
    }
  },

  setup(props) {
    const { t } = useI18n()
    const $q = useQuasar()
    const formRef = ref(null)

    const formData = ref({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })

    const isSubmitting = ref(false)
    const submitSuccess = ref(false)
    const submitError = ref('')

    const subjectOptions = computed(() => [
      { label: t('contact_form.subjects.consulting'), value: 'consulting' },
      { label: t('contact_form.subjects.development'), value: 'development' },
      { label: t('contact_form.subjects.architecture'), value: 'architecture' },
      { label: t('contact_form.subjects.team_management'), value: 'team_management' },
      { label: t('contact_form.subjects.other'), value: 'other' }
    ])

    const onSubmit = async () => {
      isSubmitting.value = true
      submitSuccess.value = false
      submitError.value = ''

      try {
        const response = await fetch(`https://formspree.io/f/${props.formspreeId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: formData.value.name,
            email: formData.value.email,
            phone: formData.value.phone || 'N/A',
            subject: subjectOptions.value.find(opt => opt.value === formData.value.subject)?.label || formData.value.subject,
            message: formData.value.message
          })
        })

        if (response.ok) {
          submitSuccess.value = true

          // 顯示成功通知
          $q.notify({
            type: 'positive',
            message: t('contact_form.success_message'),
            icon: 'check_circle',
            position: 'top'
          })

          // 重置表單
          formData.value = {
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          }

          // 等待下一個 Vue tick 再重置驗證，避免顯示錯誤
          setTimeout(() => {
            formRef.value?.resetValidation()
          }, 100)

          // 3 秒後隱藏成功訊息
          setTimeout(() => {
            submitSuccess.value = false
          }, 5000)
        } else {
          throw new Error('Form submission failed')
        }
      } catch (error) {
        submitError.value = t('contact_form.error_message')

        $q.notify({
          type: 'negative',
          message: t('contact_form.error_message'),
          icon: 'error',
          position: 'top'
        })

        // 5 秒後隱藏錯誤訊息
        setTimeout(() => {
          submitError.value = ''
        }, 5000)
      } finally {
        isSubmitting.value = false
      }
    }

    return {
      formRef,
      formData,
      isSubmitting,
      submitSuccess,
      submitError,
      subjectOptions,
      onSubmit
    }
  }
})
</script>

<style lang="scss" scoped>
.contact-form-wrapper {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.contact-form-card {
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

  .q-card__section {
    padding: 32px;
  }

  // 標題樣式
  .form-title {
    color: #1a1a1a;
    font-weight: 600;

    .title-icon {
      color: #c9a860;
    }
  }

  .form-subtitle {
    color: #666;
  }
}

// Dark mode support
body.body--dark {
  .contact-form-card {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.1);

    .form-title {
      color: #ffffff;

      .title-icon {
        color: #c9a860;
      }
    }

    .form-subtitle {
      color: rgba(255, 255, 255, 0.7);
    }

    // 確保輸入框的 icon 可見
    .q-field__prepend .q-icon {
      color: rgba(255, 255, 255, 0.7);
    }
  }
}

// Mobile responsive
@media (max-width: 600px) {
  .contact-form-wrapper {
    padding: 10px;
  }

  .contact-form-card .q-card__section {
    padding: 20px;
  }
}
</style>
