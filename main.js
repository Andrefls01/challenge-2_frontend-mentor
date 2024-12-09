const faqbtns = document.querySelectorAll('.faq-btn')

faqbtns.forEach(btn => {
    btn.addEventListener('click', function () {
        
        const faqdescription = this.nextElementSibling
        const plusIcon = this.querySelector('.plus-icon')
        const minusIcon = this.querySelector('.minus-icon')

        if (faqdescription.style.maxHeight) {
            faqdescription.style.maxHeight = null
            plusIcon.style.display = 'block'
            minusIcon.style.display = 'none'
        } else {
            faqdescription.style.maxHeight = faqdescription.scrollHeight + 'px'
            plusIcon.style.display = 'none'
            minusIcon.style.display = 'block'
        }
    })
})