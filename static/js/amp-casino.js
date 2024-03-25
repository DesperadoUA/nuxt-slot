{
	const EVENT_ACTIVATE_FLAG = 'referral_pop_up_activate'
	let casinoList = {}
	const btn = document.querySelector('.loadMoreBtn')
	const container = document.querySelector('#casino_loop')
	const dataSetPostType = container.attributes.filter(item => item.name === 'data-post-type')
	const postType = dataSetPostType.length ? dataSetPostType[0].value : 'page'

	const dataSetPostUrl = container.attributes.filter(item => item.name === 'data-post-url')
	const postUrl = dataSetPostUrl.length ? dataSetPostUrl[0].value : '/'

	const dataSetApiUrl = container.attributes.filter(item => item.name === 'data-apiurl')
	const apiUrl = dataSetApiUrl.length ? dataSetApiUrl[0].value : ''

	const dataSetAmpPrefix = container.attributes.filter(item => item.name === 'data-ampprefix')
	const ampPrefix = dataSetAmpPrefix.length ? dataSetAmpPrefix[0].value : '/amp'

	const dataSetGoTo = container.attributes.filter(item => item.name === 'data-translate-go-to')
	const goTo = dataSetGoTo.length ? dataSetGoTo[0].value : ''

	const dataSetReferralModalTitle = container.attributes.filter(
		item => item.name === 'data-translate-referral-modal-title'
	)
	const ReferralModalTitle = dataSetReferralModalTitle.length ? dataSetReferralModalTitle[0].value : ''

	const dataSetReferralModalDescription = container.attributes.filter(
		item => item.name === 'data-translate-referral-modal-description'
	)
	const ReferralModalDescription = dataSetReferralModalDescription.length
		? dataSetReferralModalDescription[0].value
		: ''
	const dataSetReferralModalBtn = container.attributes.filter(item => item.name === 'data-translate-referral-modal-btn')
	const ReferralModalBtn = dataSetReferralModalBtn.length ? dataSetReferralModalBtn[0].value : ''

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
	const refActivate = item => {
		if (!item.classList.contains(EVENT_ACTIVATE_FLAG)) {
			item.classList.add(EVENT_ACTIVATE_FLAG)
			item.addEventListener('click', () => {
				const attributesId = item.attributes.filter(item => item.name === 'data-id')
				if (attributesId.length) {
					const id = attributesId[0].value
					createModal(casinoList[id])
				}
			})
		}
	}
	function createModal(casinoItem) {
		if (casinoItem) {
			const container = document.querySelector('.referralModalContainer')
			const title = casinoItem.title_pop_up ? casinoItem.title_pop_up : ReferralModalTitle
			const description = casinoItem.description_pop_up ? casinoItem.description_pop_up : ReferralModalDescription
			let html = ''
			let cardLoop = ''
			casinoItem.relative_casino.forEach(casino => {
				cardLoop += `<div class="item_ReferralModal">
								<div class="card_ReferralModal">
									<div class="img_wrapper_ReferralModal">
										<amp-img src="${casino.thumbnail}" width="200" height="100"></amp-img>
									</div> 
									<div class="title_card_ReferralModal">${casino.title}</div> 
									<div class="card_action_ReferralModal">
										<a href='${getRef(casino)}' class="card_btn_ReferralModal">${goTo}</a>
									</div>
								</div>
							</div>`
			})

			html += `<div class="modal">
						<div class="wrapper_modal">
							<div class="close"></div>
							<div class="wrapper_ReferralModal">
								<div class="title_ReferralModal">${title}</div> 
								<div class="description_ReferralModal">${description}</div> 
								<div class="loop_ReferralModal">${cardLoop}</div> 
								<div class="actions_ReferralModal">
									<a href='${ampPrefix}/' class="btn_ReferralModal">${ReferralModalBtn}</a>
								</div>
							</div>
						</div>
					</div>`
			container.innerHTML += html
			const close = container.querySelector('.close')
			close.addEventListener('click', () => {
				container.innerHTML = ''
			})
		}
	}
	if (btn) {
		let posts = []
		let counter = 0
		const loadContainer = document.querySelector('.loadContainer')

		const dataSetPostsOnQuery = btn.attributes.filter(item => item.name === 'data-postsonquery')
		const postsOnQuery = dataSetPostsOnQuery.length ? dataSetPostsOnQuery[0].value : 20

		const dataSetReview = btn.attributes.filter(item => item.name === 'data-translate-review')
		const review = dataSetReview.length ? dataSetReview[0].value : ''

		function renderTemplate(posts, counter) {
			const length = (counter + 1) * postsOnQuery > posts.length ? posts.length : (counter + 1) * postsOnQuery
			let html = ''
			for (let i = counter * postsOnQuery; i < length; i++) {
				const thumbnail =
					posts[i].relative_casino.length === 0
						? `<a href="${getRef(posts[i])}">
					<amp-img src="${posts[i].thumbnail}" width="200" height="100"></amp-img>
				   </a>`
						: `<div data-id="${posts[i].id}" class="jsReferralPopUp">
						<amp-img src="${posts[i].thumbnail}" width="200" height="100"></amp-img>
					</div>`
				const btnAction =
					posts[i].relative_casino.length === 0
						? `<a class="btn_ref" href="${getRef(posts[i])}">${goTo}</a>`
						: `<div data-id="${posts[i].id}" class="btn_ref jsReferralPopUp">${goTo}</div>`
				html += `<div class="casino_item">
                                <div class="casino_item_thumbnail">
                                    ${thumbnail}
                                    <amp-img src="${posts[i].marker}" 
									    class="casino_item_marker" width="38" height="38"></amp-img>`
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
                                    ${btnAction}
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
						const nodesWithRef = document.querySelectorAll('.jsReferralPopUp')
						nodesWithRef.forEach(item => refActivate(item))
						if (!isShowBtn(posts, counter)) btn.remove()
					})
			} else {
				counter++
				renderTemplate(posts, counter)
				const nodesWithRef = document.querySelectorAll('.jsReferralPopUp')
				nodesWithRef.forEach(item => refActivate(item))
				if (!isShowBtn(posts, counter)) btn.remove()
			}
		})
	}
	{
		let initState = false
		container.addEventListener('click', async () => {
			if (!initState) {
				initState = true
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
						const request = data.body.posts
						request.forEach(item => (casinoList[item.id] = item))
					})
			}
			const nodesWithRef = document.querySelectorAll('.jsReferralPopUp')
			nodesWithRef.forEach(item => refActivate(item))
		})
	}
}
