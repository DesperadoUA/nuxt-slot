<template>
    <section class="faq" itemscope itemtype="https://schema.org/FAQPage" v-if="value.length !== 0">
        <div class="container">
            <div class="faq_title">{{title}}</div>
        </div>
        <div class="container faq_wrapper">
             <div class='faq_row' 
                  itemscope 
                  itemprop='mainEntity' 
                  itemtype='https://schema.org/Question' 
                  v-for="(item, index) in value"
                  :key="index"
                  >
                  <div class='faq_question' 
                        @click="activate(item)"
                        :class="{faq_active: item.status === 'open'}"
                        >
                        <span itemprop='name'>{{item.question}}</span>
                        <span class='faq_close'></span>
                        </div>
                        <div class='faq_answer' 
                            :class="{fadeIn: item.status === 'open'}"
                            itemscope 
                            itemprop='acceptedAnswer' 
                            itemtype='https://schema.org/Answer' >
                            <span  itemprop='text' v-html="item.answer"></span>
                        </div> 
             </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "app_faq_amp",
        props: ['value', 'title'],
        data(){
            return {
            }
        },
        methods: {
            activate(item) {
                item.status === 'close' ? item.status = 'open' : item.status = 'close'
            }
        }
    }
</script>