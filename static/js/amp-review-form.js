{
	const btn = document.querySelector('.form_review_send')
	const inputName = document.querySelector('.jsInputName')
	const inputEmail = document.querySelector('.jsInputEmail')
	const inputMsg = document.querySelector('.jsInputMsg')
	const ratingInput = document.querySelectorAll('.jsRating')
	const currentRating = document.querySelector('.jsCurrentRating')
	const ratingContainer = document.querySelector('.jsRatingContainer')
	const errorContainer = document.querySelector('.jsErrorContainer')

	const dataSetPostId = btn.attributes.filter(item => item.name === 'data-post-id')
	const postId = dataSetPostId.length ? dataSetPostId[0].value : 0

	const dataSetApiUrl = btn.attributes.filter(item => item.name === 'data-apiurl')
	const apiUrl = dataSetApiUrl.length ? dataSetApiUrl[0].value : ''

	const dataSetEnterName = btn.attributes.filter(item => item.name === 'data-translate-enter-name')
	const enterName = dataSetEnterName.length ? dataSetEnterName[0].value : ''

	const dataSetInvalidPostalAddress = btn.attributes.filter(
		item => item.name === 'data-translate-invalid-postal-address'
	)
	const invalidPostalAddress = dataSetInvalidPostalAddress.length ? dataSetInvalidPostalAddress[0].value : ''

	const dataSetAddYourReview = btn.attributes.filter(item => item.name === 'data-translate-add-your-review')
	const addYourReview = dataSetAddYourReview.length ? dataSetAddYourReview[0].value : ''

	const dataSetReviewAddedForModeration = btn.attributes.filter(
		item => item.name === 'data-translate-review-added-for-moderation'
	)
	const reviewAddedForModeration = dataSetReviewAddedForModeration.length
		? dataSetReviewAddedForModeration[0].value
		: ''

	let rating = 1
	const onClickRatingInput = event => {
		rating = event.currentTarget.attributes.filter(attr => attr.name === 'data-index')[0].value
		changeRating(rating)
	}
	btn.addEventListener('click', event => {
		const errors = []
		if (!inputName.value) errors.push({ key: 'name', textError: enterName })
		if (!inputEmail.value.includes('@')) errors.push({ key: 'email', textError: invalidPostalAddress })
		if (!inputMsg.value) errors.push({ key: 'name', textError: addYourReview })
		if (errors.length) {
			renderError(errors)
		} else {
			errorContainer.innerHTML = ''
			const DTO = {
				id: postId,
				name: inputName.value,
				email: inputEmail.value,
				text: inputMsg.value,
				rating
			}
			fetch(apiUrl, {
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify(DTO)
			})
				.then(response => response.json())
				.then(data => {
					errorContainer.innerHTML = reviewAddedForModeration
					inputEmail.innerHTML = ''
					inputName.innerHTML = ''
					inputMsg.innerHTML = ''
				})
		}
	})
	ratingInput.forEach(item => {
		item.addEventListener('click', onClickRatingInput)
	})
	function changeRating(rating) {
		currentRating.innerHTML = rating
		let html = ''
		for (let i = 1; i <= 10; i++) {
			let src = i <= rating ? '/img/Star.png' : '/img/Star_empty.png'
			html += `<amp-img v-for="item in 10"  
                       src="${src}" 
                       class="rating_stars jsRating"
                       width="16" height="16"
                       data-index="${i}"
                       ></amp-img>`
		}
		ratingContainer.innerHTML = html
		const ratingInput = document.querySelectorAll('.jsRating')
		ratingInput.forEach(item => {
			item.addEventListener('click', onClickRatingInput)
		})
	}
	function renderError(errors) {
		let html = ''
		errors.forEach(item => {
			html += `<p>${item.textError}</p>`
		})
		errorContainer.innerHTML = html
	}
}
