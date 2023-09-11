{
	const btn = document.querySelector('.loadMoreBtn')
	if (btn) {
		let posts = []
		let counter = 0
		const loadContainer = document.querySelector('.loadContainer')

		const dataSetApiUrl = btn.attributes.filter(item => item.name === 'data-apiurl')
		const apiUrl = dataSetApiUrl.length ? dataSetApiUrl[0].value : ''

		const dataSetPostsOnQuery = btn.attributes.filter(item => item.name === 'data-postsonquery')
		const postsOnQuery = dataSetPostsOnQuery.length ? dataSetPostsOnQuery[0].value : 20

		const dataSetAmpPrefix = btn.attributes.filter(item => item.name === 'data-ampprefix')
		const ampPrefix = dataSetAmpPrefix.length ? dataSetAmpPrefix[0].value : '/amp'

		const dataSetPostType = btn.attributes.filter(item => item.name === 'data-post-type')
		const postType = dataSetPostType.length ? dataSetPostType[0].value : 'page'

		const dataSetPostUrl = btn.attributes.filter(item => item.name === 'data-post-url')
		const postUrl = dataSetPostUrl.length ? dataSetPostUrl[0].value : '/'

		const dataSetGoTo = btn.attributes.filter(item => item.name === 'data-translate-go-to')
		const goTo = dataSetGoTo.length ? dataSetGoTo[0].value : ''

		const dataSetReview = btn.attributes.filter(item => item.name === 'data-translate-review')
		const review = dataSetReview.length ? dataSetReview[0].value : ''

		function renderTemplate(posts, counter) {
			const length = (counter + 1) * postsOnQuery > posts.length ? posts.length : (counter + 1) * postsOnQuery
			let html = ''
			for (let i = counter * postsOnQuery; i < length; i++) {
				html += `<div class="casino_item">
                                <div class="casino_item_thumbnail">
                                    <a href="${getRef(posts[i])}">
                                    <amp-img src="${posts[i].thumbnail}" width="200" height="100"></amp-img>
                                    </a>
                                    <amp-img src="${
																			posts[i].marker
																		}" class="casino_item_marker" width="38" height="38"></amp-img>`
				if (posts[i].licensed.length) {
					html += `<div class="casino_item_licensed">`
					posts[i].licensed.forEach(element => {
						html += `<amp-img src="${element}" width="45" height="45"
                                        ></amp-img>`
					})
					html += `</div>`
				}

				html += `</div>
                                <div class="casino_item_rating casino_item_column ">
                                    <div>
                                    <div class="casino_item_title">${posts[i].title}</div>
                                    <div class="casino_item_subtitle">${posts[i].sub_title}</div>
                                    <div class="casino_item_rating_wrapper">
                                        <div class="casino_item_rating_container">
                                            <div class="casino_item_rating_box">
                                                <div class="casino_item_rating_empty"></div>
                                                <div class="casino_item_rating_full width${posts[i].rating}"></div>
                                            </div>
                                            <div>
                                                <span class="casino_item_ratin_value">${Math.trunc(
																									posts[i].rating / 10
																								)}</span>/10
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>`

				html += `<div class="casino_item_packet casino_item_column ">`
				if (posts[i].bonuses.length) {
					html += `<div class="casino_item_packet_item">
                                    <div class="casino_item_title_packet">${posts[i].bonuses[0].bonuses_title}</div>
                                    <div class="casino_item_sub_title_packet">${posts[i].bonuses[0].bonuses_value}</div>
                                    <div class="casino_item_title_packet">${posts[i].bonuses[0].bonuses_sub_title}</div>
                                </div>`
				}
				html += `</div>
                                <div class="casino_item_weiger casino_item_column ">`
				if (posts[i].bonuses.length > 1) {
					html += `<div class="casino_item_packet_item">
                                <div class="casino_item_title_packet">${posts[i].bonuses[1].bonuses_title}</div>
                                <div class="casino_item_sub_title_packet">${posts[i].bonuses[1].bonuses_value}</div>
                                <div class="casino_item_title_packet">${posts[i].bonuses[1].bonuses_sub_title}</div>
                            </div>`
				}
				html += `</div>
                                <div class="casino_item_buttons casino_item_column ">
                                    <div class="casino_item_buttons_box"  >
                                    <a class="btn_ref" href="${getRef(posts[i])}">${goTo}</a>
                                    <a class="btn_review" 
                                        href="${ampPrefix}${posts[i].permalink}" 
                                    >${review}</a>
                                    </div>
                                </div>
                            </div>`
			}
			loadContainer.innerHTML += html
		}
		function isShowBtn(posts, counter) {
			return (counter + 1) * postsOnQuery < posts.length
		}
		function getRef(item) {
			if (item.ref.length !== 0) {
				const min = 0
				const max = item.ref.length - 1
				const random = Math.floor(Math.random() * (max - min + 1)) + min
				return item.ref[random].casino_ref
			} else {
				return '#'
			}
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
					body: JSON.stringify({ type: 'casino_ajax', postType, postUrl })
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
