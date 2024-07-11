let dropdown = document.getElementById("dropdown")
let dropdownContent = document.getElementById("dropdown_content")

dropdown.addEventListener("mouseover",()=>{
    dropdownContent.classList.add("active")
})
dropdown.addEventListener("mouseout",()=>{  
    dropdownContent.classList.remove("active")
    })

    let dropdown2 = document.getElementById("dropdown2")
    let dropdownContent2 = document.getElementById("dropdown_content2")
    dropdown2.addEventListener("mouseover",()=>{
        dropdownContent2.classList.add("active")
        })
        dropdown2.addEventListener("mouseout",()=>{
            dropdownContent2.classList.remove("active")
            })
  
            const sub_dropdown = document.getElementById("sub_dropdown")
            const sub_dropdown_content = document.getElementById("sub_dropdown_content")
            sub_dropdown.addEventListener("mouseover",()=>{
                sub_dropdown_content.style.display = "block"
                })
                sub_dropdown.addEventListener("mouseout",()=>{
                    sub_dropdown_content.style.display = "none"
                    })
