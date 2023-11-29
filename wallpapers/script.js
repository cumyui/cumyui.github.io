document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.getElementById('gallery');

    // Replace the placeholder URLs with the actual URLs of your images
    const imageUrls = [
        'https://github.com/cumyui/cumyui.github.io/blob/main/wallpapers/0001.png?raw=true',
        'https://github.com/cumyui/cumyui.github.io/blob/main/wallpapers/0002.png?raw=true',
        'https://github.com/cumyui/cumyui.github.io/blob/main/wallpapers/0003.png?raw=true',
        'https://github.com/cumyui/cumyui.github.io/blob/main/wallpapers/0004.png?raw=true',
        'https://github.com/cumyui/cumyui.github.io/blob/main/wallpapers/0005.png?raw=true',
        // Add more image URLs as needed
    ];

    imageUrls.forEach((url, index) => {
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');

        const img = document.createElement('img');
        img.src = url;
        img.alt = `Wallpaper ${index + 1}`;

        const downloadButton = document.createElement('button');
        downloadButton.innerText = 'Download';
        downloadButton.addEventListener('click', () => downloadImage(url, `Wallpaper_${index + 1}.jpg`));

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
        buttonContainer.appendChild(downloadButton);

        imgContainer.appendChild(img);
        imgContainer.appendChild(buttonContainer);
        gallery.appendChild(imgContainer);
    });

    function downloadImage(imageUrl, fileName) {
        // Create an invisible link element
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = fileName;

        // Append the link to the document
        document.body.appendChild(link);

        // Trigger a click on the link
        link.click();

        // Remove the link from the document
        document.body.removeChild(link);
    }
});