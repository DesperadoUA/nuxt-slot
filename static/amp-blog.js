{
const btn = document.querySelector('.jsBlogLoadMore')
const blogContainer = document.querySelector('.jsBlogContainer')
let counter = 0
const dataSetApiUrl = btn.attributes.filter((item) => item.name === 'data-apiurl')
const apiUrl = dataSetApiUrl.length ? dataSetApiUrl[0].value : ''
const dataSetPostsOnQuery = btn.attributes.filter((item) => item.name === 'data-postsonquery')
const postsOnQuery = dataSetPostsOnQuery.length ? dataSetPostsOnQuery[0].value : 8
const dataSetAmpPrefix = btn.attributes.filter((item) => item.name === 'data-ampprefix')
const ampPrefix = dataSetAmpPrefix.length ? dataSetAmpPrefix[0].value : '/amp'
let posts = []
const dataSetReviewAuthor = document.querySelector('.blog_card_item_author') 
  ? document.querySelector('.blog_card_item_author').attributes.filter((item) => item.name === 'data-translate-value')
  : []
const reviewAuthor = dataSetReviewAuthor.length ? dataSetReviewAuthor[0].value : ""
const dataSetDetailedOverview = document.querySelector('.blog_card_item_btn') 
  ? document.querySelector('.blog_card_item_btn').attributes.filter((item) => item.name === 'data-translate-value')
  : []
const detailedOverview = dataSetDetailedOverview.length ? dataSetDetailedOverview[0].value : ""

function renderTemplate(posts, counter) {
    const length = ((counter+1) * postsOnQuery) > posts.length ? posts.length : (counter+1) * postsOnQuery
    let html = ''
    for(let i = counter * postsOnQuery; i<length; i++) {
        html += `<div class="blog_card_item">
                <div class="blog_card_item_left">
                    <div class="blog_card_item_img_wrapper">
                    <amp-img src="${posts[i].thumbnail}"
                            class="blog_card_item_thumbnail" 
                            width="320" 
                            height="190"></amp-img>
                    </div>
                </div>
                <div class="blog_card_item_right">
                    <div class="blog_card_item_title">
                        <a href="${ampPrefix}${posts[i].permalink}" 
                                class="blog_card_item_permalink">
                                ${posts[i].title}
                        </a>
                    </div>
                    <div class="blog_card_item_author">
                    <p>${reviewAuthor}: <span>${posts[i].author}</span>${posts[i].date.slice(0, -9)}</p>    
                    </div>   
                    <div class="blog_card_item_excerpt">
                        ${posts[i].excerpt}
                    </div>
                    <div class="blog_card_item_btn_wrapper">
                        <a href="${ampPrefix}${posts[i].permalink}" 
                            class="blog_card_item_btn">${detailedOverview}
                        </a>
                    </div>
                </div>
            </div>`
    }
    blogContainer.innerHTML += html
}
function isShowBtn(posts, counter) {
    return ((counter+1) * postsOnQuery) < posts.length
}

btn.addEventListener('click', () => {
    if(counter === 0) {
        btn.disabled = true
        fetch(apiUrl, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({type: "blog_ajax"})
        })
        .then(response => response.json())
        .then(data => {
            btn.disabled = false
            counter++
            posts = data.body.posts
            renderTemplate(posts, counter)
            if(!isShowBtn(posts, counter)) btn.remove()
        })
    } else {
        counter++
        renderTemplate(posts, counter)
        if(!isShowBtn(posts, counter)) btn.remove()
    }
})
}