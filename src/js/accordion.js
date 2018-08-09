let accordion, accordionHeader, accordionContainer

accordion = document.getElementById('accordion')
accordionHeader = accordion.getElementsByTagName('h3')
accordionContainer = accordion.getElementsByTagName('div')

// loop header objects
for (let i = 0; i < accordionHeader.length; i++) { 

    const headerItem = accordionHeader[i]
    const containerItem = accordionContainer[i]

    // set not-active for [1,2,3]
    if (!containerItem.hasAttribute('class','active')){
        containerItem.setAttribute('class','not-active')
        headerItem.setAttribute('class', 'accordion-title accordion-title--not-active')
    } else {
        headerItem.setAttribute('class','accordion-title accordion-title--active')
    }

    headerItem.addEventListener('click', (e) => {

        // prevent default event
        e.preventDefault();

        // Shallow copy HTML elements to new array
        const arrContainer = [...accordionContainer]
        const arrHeader = [...accordionHeader]

        // get className for nextSibling
        const getClassName = accordionContainer[i].getAttribute('class')

        // rest all div container to not-active
        arrContainer.forEach(el => {
            el.setAttribute('class','not-active')
        })

        arrHeader.forEach(el => {
            el.setAttribute('class','accordion-title accordion-title--not-active')
        })

        if (getClassName === 'not-active'){
            accordionContainer[i].setAttribute('class','active')
            accordionHeader[i].setAttribute('class','accordion-title accordion-title--active')
        }

    })
    
}