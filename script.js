const btn_up = document.querySelector("#btn_upload");
const btn_re = document.querySelector("#btn_remove");
const gallery = document.querySelector(".gal");
const mask = document.querySelector(".mask");

const getPhotos = () => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
        .then((res) => res.json())
        .then((data1) => data1.slice(0, 9))
        .then((data) => {
            data.forEach((element) => {
                const img = document.createElement("div");
                img.innerHTML = `<img src="${element.url}" alt="cat_photo">`;
                gallery.appendChild(img);
            });
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};
const removePhotos = () => {
    gallery.innerHTML = '';
}
btn_up.addEventListener("click", (e) => {
    e.preventDefault();
    mask.style.display = "flex";
    setTimeout(() => {  
        getPhotos();
        mask.style.display = "none";
        
    }, 1000);
});
btn_re.addEventListener("click", (e) => {
    e.preventDefault();
    removePhotos();
});