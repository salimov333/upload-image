const image_input = document.querySelector("#image_input");

image_input.addEventListener("change", (e) => {

    if (window.File && window.FileReader && window.FileList && window.Blob) {
        console.log('File API supported.!');

        const imageList = e.target.files;
        const reader = new FileReader();
        
        reader.addEventListener("load", (e) => {
            const imgFile = e.target;
            const imgURL = imgFile.result;
            const display_image = document.querySelector("#display_image");
            display_image.style.backgroundImage = `url(${imgURL})`;
        });
        reader.readAsDataURL(imageList[0]);
    } else {
        alert('The File API not supported by this browser.');
    };
});