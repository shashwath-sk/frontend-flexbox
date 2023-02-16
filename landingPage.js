const element = document.querySelector('blogs')
console/log(element)
const displayData=(data)=>{
    data.map(blog=>{
        console.log(blog.title)
        const {date,readingTime,title,description,claps,liked,image} = blog;
        const likedImage = liked? 'heart-red.svg' : 'heart-black.svg';
        const html = ` <div class="image">
        <img  src="./Image/${image}" alt="${image}">
    </div>
    <div class="image-padding ">
        <div class="image-post-details image-margin">
            <span>${date}</span>
            <span>${readingTime}</span>
        </div>
        <div class="image-header image-margin">
            <span>${title}</span>
        </div>
        <div class="image-description image-margin">
            <span>${description}</span>
        </div>
        <hr class="image-margin">
        <div class="image-like image-margin">
            <img src="./Icons/${claps}" alt="">
            <span>10</span>
            <img src="./Icons/${likedImage}"alt="">
        </div>
    </div>`
    
    element.innerHTML = "html";
    })
}
console.log("im here")
const fetchData = async() => {
    const data = await fetch()
    let res = await data.json()
    console.log(res)
    // displayData(res)
}
fetchData()