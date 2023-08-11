<template>
<amp-script layout="container" :src="`${config.BASE_URL[config.LANG]}/amp-review-form.js`" class="sample">
  <section class="form_review">
      <div class="container">
          <div class="reviews_title">{{translates.LEAVE_YOUR_REVIEW[config.LANG]}}</div>
          <div class="reviews_form_wrapper">
              <div class="reviews_form_wrapper_input">
                  <input type="text" 
                         class="form_input jsInputName" 
                         name="name"
                         :placeholder="translates.NAME[config.LANG]"
                         >
                  <input type="text" 
                         class="form_input jsInputEmail" 
                         name="email"
                         :placeholder="translates.OUR_EMAIL[config.LANG]"
                         > 
              </div>
              <textarea class="form_textarea jsInputMsg" 
                        name="msg"
                        :placeholder="translates.WRITE_TEXT_YOUR_REVIEW[config.LANG]"
              ></textarea>     
              <div class="form_review_rating">
                    <span class="jsRatingContainer">
                        <amp-img v-for="item in 10" 
                            :key="item" 
                            :src="(item) <= currentRating ? '/img/Star.png': '/img/Star_empty.png'" 
                            class="rating_stars jsRating"
                            width="16" height="16"
                            :data-index="item"
                        ></amp-img>
                    </span>
                    <span class="form_rating_value"><b class="jsCurrentRating">{{currentRating}}</b>/10</span>
              </div>   
              <div class="form_review_submit">
                  <button class="form_review_send"
                    :data-apiUrl="config.API_URL[config.LANG]+'reviews/'" 
                    :data-post-id="id"
                    :data-translate-enter-name="translates.ENTER_YOUR_NAME[config.LANG]"
                    :data-translate-invalid-postal-address="translates.INVALID_POSTAL_ADDRESS[config.LANG]"
                    :data-translate-add-your-review="translates.ADD_YOUR_REVIEW[config.LANG]"
                    :data-translate-review-added-for-moderation="translates.REVIEW_ADDED_FOR_MODERATION[config.LANG]"
                  >{{translates.SEND[config.LANG]}}</button>
              </div>
              <div class="error jsErrorContainer"></div>            
          </div>
      </div>
  </section>
</amp-script>
</template>

<script>
    import translateMixin from '~/mixins/translate.js'
    export default {
        name: "app_form_review",
        props: ['id'],
        mixins: [translateMixin],
        data(){
            return {
               name: '',
               email: '',
               text: '',
               msg: [],
               currentRating: 1
            }
        },
        /*
        methods: {
            chengRating(item){
                this.currentRating = item
            },
           async sendReview(){
              this.msg = []
              if(this.name === '') this.msg.push('Введите имя') 
              if(!this.email.includes('@')) this.msg.push('Не корректный почтовый адрес')
              if(this.text === '') this.msg.push('Добавьте свой отзыв') 
              if(this.msg.length === 0) {
                  const DTO = {
                      id: this.id,
                      name: this.name,
                      email: this.email,
                      text: this.text,
                      rating: this.currentRating
                  }
                  const response = await DAL_Reviews.setReview(DTO)
                  if(response.data.status === '200') {
                      this.msg.push('Отзыв добавлен на модерацию')
                  } 
                  this.name = ''
                  this.email = ''
                  this.text = ''
              }
            }
        }*/
    }
</script>