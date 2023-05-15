const cardBody = document.querySelector("main");
const reviewerContainer = document.querySelector(".reviewer-container");
const navArrows = document.querySelectorAll(".nav-arrow");

const commasSrc = "https://www.fundacionproclade.org/wp-content/uploads/2021/10/Diseno-sin-titulo-copia-300x300.png";

let currentCarouselPosition = 0;
class reviewer {
    constructor(name, profession, review, photo) {
        this.name = name,
        this.profession = profession,
        this.review = review,
        this.photo = photo;
    }
}

const reviewerList = [
    new reviewer("Cristian Cano", "Developer student", "This is the most original review never written", "https://lh3.googleusercontent.com/pw/AJFCJaXEpiP6oPCU8Kab9VEXjrPbM8bjwReDvhJmljL1ltLJYwhG3RV5eVX72fS38AlZ0AsGrMM1f4xsQ6VTVEzzMNQtqanSvGOrHQuHYBzEP6H9G8G6Qmasl0LeUWWp68XYTG99Z-yNbYy06kogO-zeihJW=w918-h918-s-no?authuser=0"),
    new reviewer("Facundo Gomez", "Digital business", "The best project never made, this is the most invaluable work of art man has been seen", "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
    new reviewer("Facundo Gomez", "Digital business", "The best project never made, this is the most invaluable work of art man has been seen", "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
];

navArrows.forEach(arrow => {
    arrow.addEventListener("click", ()=>{
        if(arrow.classList.contains("left-arrow")){
            console.log("left");

            currentCarouselPosition --
            if(currentCarouselPosition < 0){
                currentCarouselPosition = reviewerList.length-1;
            }
        }
        else{
            console.log("rigth");

            currentCarouselPosition ++
            if(currentCarouselPosition > reviewerList.length-1){
                currentCarouselPosition = 0;
            }
        }
        reviewLayaout(reviewerList[currentCarouselPosition]);
    })
});

function carouselNav(){
    if(arrow.classList.contains("left-arrow")){
        console.log("left");

        currentCarouselPosition --
        if(currentCarouselPosition < 0){
            currentCarouselPosition = reviewerList.length-1;
        }
    }
    else{
        console.log("rigth");

        currentCarouselPosition ++
        if(currentCarouselPosition > reviewerList.length-1){
            currentCarouselPosition = 0;
        }
    }
    reviewLayaout(reviewerList[currentCarouselPosition]);
}
function reviewLayaout(reviewerData){
    reviewerContainer.innerHTML = "";

    /* Img container */
    let imgContainer = document.createElement("div");
    let imgProfilePhoto = document.createElement("img");
    let imgCommas = document.createElement("img");

    imgContainer.classList.add("img-container");
    imgContainer.append(imgProfilePhoto, imgCommas);
    imgProfilePhoto.classList.add("profile-photo");
    imgProfilePhoto.setAttribute("src", reviewerData.photo);
    imgCommas.classList.add("commas");
    imgCommas.setAttribute("src", commasSrc);

    /* Review text container */
    let reviewTextContainer = document.createElement("div");
    let reviewerNameH2 = document.createElement("h2");
    let reviewerProfessionP = document.createElement("p");
    let reviewP = document.createElement("p");

    reviewTextContainer.classList.add("review-text-container");
    reviewTextContainer.append(reviewerNameH2, reviewerProfessionP, reviewP);
    reviewerNameH2.classList.add("reviewer-name");
    reviewerNameH2.textContent = reviewerData.name;
    reviewerProfessionP.classList.add("reviewer-profession");
    reviewerProfessionP.textContent = reviewerData.profession;
    reviewP.classList.add("review");
    reviewP.textContent = reviewerData.review;

    /* Review Card */
    reviewerContainer.append(imgContainer, reviewTextContainer);
}

reviewLayaout(reviewerList[currentCarouselPosition]);