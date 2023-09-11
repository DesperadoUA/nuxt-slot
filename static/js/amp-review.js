{
	const btn = document.querySelector('.loadMoreBtn')
	if (btn) {
		let posts = []
		let counter = 0
		const loadContainer = document.querySelector('.loadContainer')

		const dataSetApiUrl = btn.attributes.filter(item => item.name === 'data-apiurl')
		const apiUrl = dataSetApiUrl.length ? dataSetApiUrl[0].value : ''

		const dataSetPostsOnQuery = btn.attributes.filter(item => item.name === 'data-postsonquery')
		const postsOnQuery = dataSetPostsOnQuery.length ? dataSetPostsOnQuery[0].value : 4

		const dataSetPostType = btn.attributes.filter(item => item.name === 'data-post-type')
		const postType = dataSetPostType.length ? dataSetPostType[0].value : 'page'

		const dataSetPostUrl = btn.attributes.filter(item => item.name === 'data-post-url')
		const postUrl = dataSetPostUrl.length ? dataSetPostUrl[0].value : '/'

		function renderTemplate(posts, counter) {
			const length = (counter + 1) * postsOnQuery > posts.length ? posts.length : (counter + 1) * postsOnQuery
			let html = ''
			for (let i = counter * postsOnQuery; i < length; i++) {
				html += `<div class="review_item">
                        <div class="review_item_title">
                            <span itemprop = 'author'>${posts[i].review_name}</span>
                            <span itemprop = 'datePublished'>${posts[i].review_date}</span>
                        </div>
                        <div class="review_item_rating">
                            <div class="casino_item_rating_box">
                                <div class="casino_item_rating_empty"></div>
                                <div class="casino_item_rating_full width${posts[i].review_rating}"></div>
                            </div>
                            <div class="revie_item_box_value">
                                <span class="casino_item_ratin_value">${Math.trunc(
																	posts[i].review_rating / 10
																)}</span>/10
                            </div>
                        </div>
                        <div class="review_item_desc" itemprop='reviewBody'>
                            ${posts[i].review_text}
                        </div>
                    </div>`
			}
			loadContainer.innerHTML += html
		}
		function isShowBtn(posts, counter) {
			return (counter + 1) * postsOnQuery < posts.length
		}
		btn.addEventListener('click', () => {
			if (counter === 0) {
				btn.disabled = true
				fetch(apiUrl, {
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json'
					},
					method: 'POST',
					body: JSON.stringify({ type: 'review_ajax', postType, postUrl })
				})
					.then(response => response.json())
					.then(data => {
						btn.disabled = false
						counter++
						posts = data.body.posts
						renderTemplate(posts, counter)
						if (!isShowBtn(posts, counter)) btn.remove()
					})
			} else {
				counter++
				renderTemplate(posts, counter)
				if (!isShowBtn(posts, counter)) btn.remove()
			}
		})
	}
}
