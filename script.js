function flipPage(page) {
    page.classList.toggle('flip');

    // Set z-index of the other page based on the current page flip state
    const otherPage = page.classList.contains('page_1') ? document.querySelector('.page_2') : document.querySelector('.page_1');
    if (page.classList.contains('flip')) {
        // Increase z-index for the clicked page when flipped
        page.style.zIndex = 100;
        // Decrease z-index for the other page when flipped
        otherPage.style.zIndex = 99;
    } else {
        // Reset z-index to its original value when not flipped
        page.style.zIndex = '';
        otherPage.style.zIndex = '';
    }
}
