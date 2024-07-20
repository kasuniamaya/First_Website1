window.onload = ()=>{
    loadHeader();
    loadFooter();
}

const loadHeader = ()=>{
    fetch('/pages/header.html')
    .then(response=>response.text())
    .then(data=>{
        document.getElementById('header').innerHTML=data;
    })
}

const loadFooter = ()=>{
    fetch('/pages/footer.html')
    .then(response=>response.text())
    .then(data=>{
        document.getElementById('footer').innerHTML=data;
    })
}