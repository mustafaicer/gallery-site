const gallery = document.getElementById("gallery");
const imageURL = document.getElementById("image-url");
const addImage = document.getElementById("add-image");
const clearGallery = document.getElementById("clear-gallery");

const modal = document.getElementById("image-modal");
const closeModal = document.getElementById("close-modal");
const modalImage = document.getElementById("modal-image");

addImage.addEventListener("click",addImageToGallery);
closeModal.addEventListener("click",hideModal);
clearGallery.addEventListener("click",clearImagesGallery);

window.addEventListener("click",function(event)
{
    if(event.target === modal)
    {
        modal.style.display = "none";
    }
});
function addImageToGallery()
{
    const URL = imageURL.value.trim();

    if(URL === "")
    {
        alert("Enter a valid URL");
        return;
    }

    const imgDiv = document.createElement("div");
    imgDiv.classList = "img-div";

    const img = document.createElement("img");
    const deleteImg = document.createElement("button");
    deleteImg.innerHTML = "X";
    deleteImg.classList = "btn btn-danger delete-image";
    deleteImg.addEventListener("click",function(event)
    {
        if(confirm("Are you sure for delete photo?"))
            event.target.parentElement.remove();
    });

    img.setAttribute('src',URL);
    img.setAttribute('alt','Gallery Image');

    gallery.appendChild(imgDiv);
    imgDiv.appendChild(img);
    imgDiv.appendChild(deleteImg);

    img.onerror = function()
    {
        alert("Error loading image. Please check the URL.");
        img.remove();
    }

    imageURL.value = "";

    img.addEventListener("click",imgClick);
}
function imgClick(event)
{
    modal.style.display = "block";
    modalImage.src = event.target.src;
    description.value = "";

}
function hideModal()
{
    modal.style.display = "none";
}
function clearImagesGallery()
{
    if(confirm("Are you sure for delete all photos?"))
        gallery.innerHTML = "";
}