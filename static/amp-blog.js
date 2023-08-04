{
const btn = document.querySelector('.jsBlogLoadMore')
const blogContainer = document.querySelector('.jsBlogContainer')
let counter = 0
btn.addEventListener('click', ()=>{
    counter++
    console.log('Hello world', counter)
    // blogContainer.innerHTML = 'hello world'
})
}