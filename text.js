document.getElementById("search").addEventListener("click", function search() {
    let textToSearch = document.getElementById("input-text").value;
    let paragraph = document.getElementById("paragraph");

    // Escape special characters
    textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    // Create a regular expression
    let pattern = new RegExp(`${textToSearch}`, "gi");

    // Replace matches with highlighted text
    paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`);
});
