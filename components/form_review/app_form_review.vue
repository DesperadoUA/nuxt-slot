<template>
  <section class="form_review">
      <div class="container">
          <div class="reviews_title">{{translates.LEAVE_YOUR_REVIEW[config.LANG]}}</div>
          <form class="reviews_form_wrapper">
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
                  <img v-for="item in 10" 
                       :key="item" 
                       :src="(item) <= currentRating ? '/img/Star.png': '/img/Star_empty.png'" 
                       @click="chengRating(item)" 
                       class="rating_stars"
                       width="16" height="16"
                       loading="lazy"
                       />
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
              if(this.name === '') this.msg.push(translates.ENTER_YOUR_NAME[config.LANG])
              if(!this.email.includes('@')) this.msg.push(translates.INVALID_POSTAL_ADDRESS[config.LANG])
              if(this.text === '') this.msg.push(translates.ADD_YOUR_REVIEW[config.LANG]) 
              if(this.msg.length === 0) {
                  const TDO = {
                      id: this.id,
                      name: this.name,
                      email: this.email,
                      text: this.text,
                      rating: this.currentRating
                  }
                  const response = await DAL_Reviews.setReview(TDO)
                  if(response.data.status === '200') {
                      this.msg.push(translates.REVIEW_ADDED_FOR_MODERATION[config.LANG])
                  } 
                  this.name = ''
                  this.email = ''
                  this.text = ''
              }
            }
        }
    }
</script>
<style> 
.error {
    margin-top: 100px;
}
.error p {
    color: var(--red);
    margin-bottom: 10px;
    font-family: var(--font);
}
.form_review_submit {
    margin-top: 25px;
}

.form_review_send {
    position: absolute;
    width: 180px;
    height: 46px;
    background: var(--green);
    border: 1px solid var(--white-opacity-max);
    box-sizing: border-box;
    box-shadow: inset 0px 0px 4px rgba(255, 255, 255, 0.25);
    border-radius: 10px;
    font-family: var(--font);
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    text-align: center;
    color: var(--white);
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
    cursor: pointer;
}
   .form_rating_value b{
       font-family: var(--font);
       font-size: 18px;
       line-height: 25px;
        color: var(--middle-black);
   }
   .rating_stars {
       margin-right: 5px;
       cursor: pointer;
   }
  .form_input {
      width: 48%;
      margin-bottom: 20px;
      padding: 10px 15px;
      box-sizing: border-box;
      border: 1px solid var(--gray);
      border-radius: 8px;
  }
  .form_input:active, .form_input:focus {
       border: 1px solid var(--blue);
  }
  .form_textarea {
      background: var(--white);
      border: 1px solid var(--gray);
      box-sizing: border-box;
      border-radius: 8px;
      margin-bottom: 10px;
      padding: 10px 15px;
      width: 100%;
      height: 155px;
  }
  .reviews_form_wrapper_input {
      display: flex;
      justify-content: space-between;
      width: 100%;
  }
  .form_review {
      padding-top: 50px;
      padding-bottom: 100px;
      background: var(--strong-blue-gradient);
  }
  .reviews_form_wrapper {
      max-width: 606px;
  }
  @media (min-width: 320px) and (max-width: 767px) {
      .review_item, .reviews_show_more {
          width: 100%;
      }
      .reviews_form_wrapper_input {
          flex-wrap: wrap;
      }
      .form_input {
          width: 100%;
      }
  }
</style>