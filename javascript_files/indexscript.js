const productContainers = [...document.querySelectorAll('.product_container')]; //selects the element with the class "product_container" and converts it into an array
const nextbutton = [...document.querySelectorAll('.nxt_btn')];//Selects the element with the class ".nxt_btn" and converts it into an array
const prebutton = [...document.querySelectorAll('.pre_btn')]; //selects the element with the class ".pre_btn" and converts it into an array

productContainers.forEach((item, i) =>{ //iterates over each product container
    let containerDimensions = item.getBoundingClientRect();//gets the size of the product container
    let containerWidth = containerDimensions.width;//gets the width of the product container

    nextbutton[i].addEventListener('click', () =>{
        item.scrollLeft += containerWidth;//on click scrolls the content to the right in the container by its width
    })

    prebutton[i].addEventListener('click', () =>{
        item.scrollLeft -= containerWidth;//on click scrolls the content to the left in the container by its width
    })
})
