const API_KEY ="c3af4a9901e84ccda0a9db665d749f30"
const URL = "https://newsapi.org/v2/everything?q="
window.addEventListener("load",()=>fetchNews("India"));

 function reload(){
    window.location.reload();
}
async function fetchNews(query){
    const response = await fetch(`${URL}${query}&apiKey=${API_KEY}`)
    const data = await response.json()
    bindData(data.articles)
}
function bindData(articles){
const cardContainer = document.getElementById("card_container")
const newsCardTemplate =document.getElementById("template_news_card")
 
cardContainer.innerHTML="";
articles.forEach((article)=>{
    if(!article.urlToImage) return;
    const cardClone = newsCardTemplate.content.cloneNode(true);
    fillDataInCard(cardClone,article)
 cardContainer.appendChild(cardClone)
})
}

function fillDataInCard(cardClone,article){
    const newsImg = cardClone.querySelector('#news_img')
    const newsTitle = cardClone.querySelector('#news_title')
    const newsSource = cardClone.querySelector('#news_source')
    const newDesc = cardClone.querySelector('#news_desc')
    
    newsImg.src = article.urlToImage
    newsTitle.textContent = article.title
    
    const date = new Date(article.publishedAt).toLocaleString("en-us",{
        timeZone:"Asia/Jakarta"
    })
    newsSource.textContent = `${article.source.name}  ${date} `
    newDesc.textContent = article.description

    cardClone.firstElementChild.addEventListener("click",()=>{
        window.open(article.url,"_blank")
    })
}

let currentSelectedNav=null;
function onNavItemClick(id){
    fetchNews(id)
    const navItem = document.getElementById(id)
    currentSelectedNav?.classList.remove('active')
    currentSelectedNav=navItem;
    currentSelectedNav.classList.add('active')
}

const searchButton = document.getElementById("search_button")
const searchInput = document.getElementById("news_input")

searchButton.addEventListener("click",()=>{
    const searchValue = searchInput.value
    if(!searchValue) return;
    fetchNews(searchValue)
    currentSelectedNav?.classList.remove('active')
    currentSelectedNav=null;

})