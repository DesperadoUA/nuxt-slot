{
	const container = document.querySelector('.jsReferralPopUp')
	const modalContainer = document.querySelector('.referralModalContainer')

	const dataSetRelativeCasino = container.attributes.filter(item => item.name === 'data-relative-casino')
	const relativeCasino = dataSetRelativeCasino.length ? JSON.parse(dataSetRelativeCasino[0].value) : []
	const dataSetTitle = container.attributes.filter(item => item.name === 'data-title')
	const title = dataSetTitle.length ? dataSetTitle[0].value : ''
	const dataSetDescription = container.attributes.filter(item => item.name === 'data-description')
	const description = dataSetDescription.length ? dataSetDescription[0].value : ''
	const dataSetBtn = container.attributes.filter(item => item.name === 'data-translate-btn')
	const ReferralModalBtn = dataSetBtn.length ? dataSetBtn[0].value : ''
	const dataSetGoTo = container.attributes.filter(item => item.name === 'data-translate-go-to')
	const goTo = dataSetGoTo.length ? dataSetGoTo[0].value : ''
	const dataSetAmpPrefix = container.attributes.filter(item => item.name === 'data-ampprefix')
	const ampPrefix = dataSetAmpPrefix.length ? dataSetAmpPrefix[0].value : ''

	container.addEventListener('click', () => createModal())
	function createModal() {
		let html = ''
		let cardLoop = ''
		relativeCasino.forEach(casino => {
			cardLoop += `<div class="item_ReferralModal">
								<div class="card_ReferralModal">
									<div class="img_wrapper_ReferralModal">
										<amp-img src="${casino.thumbnail}" width="200" height="100"></amp-img>
									</div> 
									<div class="title_card_ReferralModal">${casino.title}</div> 
									<div class="card_action_ReferralModal">
										<a href='${getRef(casino.ref)}' class="card_btn_ReferralModal">${goTo}</a>
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
		modalContainer.innerHTML += html
		const close = modalContainer.querySelector('.close')
		close.addEventListener('click', () => (modalContainer.innerHTML = ''))
	}
	function getRef(refs) {
		if (refs.length !== 0) {
			const min = 0
			const max = refs.length - 1
			const random = Math.floor(Math.random() * (max - min + 1)) + min
			return refs[random].casino_ref
		} else {
			return '#'
		}
	}
}
