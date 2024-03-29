const planets = document.querySelectorAll(".planet")
const container = document.querySelector(".container")


for (const planet of planets) {
    planet.addEventListener("click", getData)
}


async function getData(){
 // console.log(this.dataset.id);
    let element = this.dataset.id
    console.log(element);
    return await getFetch(element)
    
}



async function getFetch(file){
    const response = await fetch(`assets/json/${file}.json`)
    const data = await response.json()
    console.log(data);
    container.innerHTML = `
    
  
    <div class="container">
    <div class="hero">

            <div class="hero-left-side">
            <img src="${data[0].images.planet}" alt="">
            <img class="viewOptionThereimg" style="display: none;"src="${data[0].images.geology}" alt="">
            </div>
        
            <div class="hero-right-side">
        
                <h1>${data[0].name}</h1>
                <p>${data[0].overview.content}</p>
                <div class="wikipedia">
                <div class="divA"><a href="${data[0].overview.source}"><span> Source : </span> <span class="underline-style">Wikipedia </span>  </a></div> 
                <img src="assets/img/arrow.png" alt="">
                </div>  
               
                
                <div class="hero-right-viewoptions">
                    <div class="viewoptions viewoptions-one">
                    <h4>01</h4>
                    <span>OVERVIEW</span>
                    </div>
                    <div class="viewoptions viewoptions-two">
                        <h4>02</h4>
                        <span>Internal Structure</span>
                    </div>
                    <div class="viewoptions viewoptions-there">
                        <h4>03</h4>
                        <span>Surface Geology</span>
                    </div>
                </div>
            </div>
    </div>

    <div class="footer">
        
            <div class="footer-box">
                    <h6>ROTATION TIME</h6>
                    <h1>${data[0].rotation}</h1>
            </div>


            <div class="footer-box">
                    <h6>REVOLUTION TIME</h6>
                    <h1>${data[0].revolution}</h1>
            </div>


            <div class="footer-box">
                <h6>radius</h6>
                <h1>${data[0].radius}</h1>
            </div>


            <div class="footer-box">
                <h6>AVERAGE TEMP.</h6>
                <h1>${data[0].temperature}</h1>
            </div>

    </div>
</div>

    `
    // bindEvents()

    const viewoptionsOne = document.querySelectorAll(".viewoptions-one")
    const viewoptionsTwo = document.querySelectorAll(".viewoptions-two")
    const viewoptionsthere = document.querySelectorAll(".viewoptions-there")
    const viewOptionThereimg = document.querySelector(".viewOptionThereimg")
    const wikipedia = document.querySelector(".divA")

    for (const viewoption3 of viewoptionsthere) {
        viewoption3.addEventListener("click" ,  function(){
            console.log("fkngfkonb");
            this.parentElement.parentElement.children[1].innerHTML=`${data[0].geology.content}`
            viewOptionThereimg.style.display="block"
        })
    }

    for (const viewoption2 of viewoptionsTwo ) {
        
        viewoption2.addEventListener("click" ,  function(){
            this.parentElement.parentElement.children[1].innerHTML=`${data[0].structure.content}`
            this.parentElement.parentElement.parentElement.children[0].innerHTML=`
                    <img src="${data[0].images.internal}" alt="">
            `;
            wikipedia.innerHTML=`
            <a href="${data[0].structure.source}"><span> Source : </span> <span class="underline-style">Wikipedia </span>  </a>
            `
        })
    }

    for (const viewoption1 of viewoptionsOne) {
        viewoption1.addEventListener("click" ,  function(){
            console.log("fkngfkonb");
            this.parentElement.parentElement.children[1].innerHTML=`${data[0].overview.content}`
            this.parentElement.parentElement.parentElement.children[0].innerHTML=`
                    <img src="${data[0].images.planet}" alt="">
            `;
            wikipedia.innerHTML=`
            <a href="${data[0].geology.source}"><span> Source : </span> <span class="underline-style">Wikipedia </span>  </a>
            `
        })
    }

}

// function bindEvents(){

// }


// async function getViewOptions(){

//     let element = this.parentElement
//     console.log(element);
//     // const data = await getFetch(element)
//     // console.log(data);
//     //    console.log(this.parentElement.parentElement.children[1].innerHTML);
//     //   const viewOptionTwoContent = 
//     // this.parentElement.parentElement.children[1].innerHTML=`sgdjhgıd`
//     //   console.log(viewOptionTwoContent);
//     }

getFetch()
