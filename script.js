function rotateChevron(event){
    let chevron
    event.target.nodeName == "H3" ? chevron = event.target.getElementsByTagName("I")[0] : chevron = event.target   

    if(chevron.classList.contains('bi-chevron-down')){
        chevron.classList.replace('bi-chevron-down','bi-chevron-up')
    }else if(chevron.classList.contains('bi-chevron-up')){
        chevron.classList.replace('bi-chevron-up','bi-chevron-down')
    }  
}
