<template>
  <section class="form_review">
      <div class="container">
          <div class="reviews_title">{{translates.LEAVE_YOUR_REVIEW[config.LANG]}}</div>
          <form class="reviews_form_wrapper" method="post" action-xhr="https://example.com/subscribe">
              <div class="reviews_form_wrapper_input">
                  <input type="text" 
                         class="form_input" 
                         v-model="name" 
                         :placeholder="translates.NAME[config.LANG]"
                         >
                  <input type="text" 
                         class="form_input" 
                         v-model="email"
                         :placeholder="translates.OUR_EMAIL[config.LANG]"
                         > 
              </div>
              <textarea class="form_textarea" 
                        v-model="text"
                        :placeholder="translates.WRITE_TEXT_YOUR_REVIEW[config.LANG]"
              ></textarea>     
              <div class="form_review_rating">
                  <amp-img v-for="item in 10" 
                       :key="item" 
                       :src="(item) <= currentRating ? '/img/Star.png': '/img/Star_empty.png'" 
                       @click="chengRating(item)" 
                       class="rating_stars"
                       width="16" height="16"
                       ></amp-img>
                       <span class="form_rating_value"><b>{{currentRating}}</b>/10</span>
              </div>   
              <div class="form_review_submit">
                  <button class="form_review_send"
                          v-on:click.stop.prevent="sendReview"
                  >{{translates.SEND[config.LANG]}}</button>
              </div>
              <div class="error" v-if="msg.length !== 0">
                    <p v-for="(item, index) in msg" :key="index">{{item}}</p>
              </div>            
          </form>
      </div>
  </section>
</template>

<script>
    import DAL_Reviews from '~/DAL/review'
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
        }
    }
</script>