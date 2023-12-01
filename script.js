document.addEventListener("DOMContentLoaded", function () {
    const lyrics = [
        "lalala",

    ];

    const delay = 70; 
    const lineDelay = delay * 20;
    const clearDelay = delay * 20;
    
    const lyricsElement = document.getElementById("lyrics");

    async function displayLyrics() {
        for (const line of lyrics) {
            for (const char of line) {
                lyricsElement.textContent += char;
                await new Promise((resolve) => setTimeout(resolve, delay));
            }

            lyricsElement.innerHTML += "<br>";

            await new Promise((resolve) => setTimeout(resolve, delay * 10));

            lyricsElement.innerHTML = "";

            await new Promise((resolve) => setTimeout(resolve, delay * 10));
        }
    }

    displayLyrics();
});

