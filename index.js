function showMoreContent() {
    const content = document.getElementById("additional-content");
    const moreInfoButton = document.querySelector(".more-info");
    
    content.style.display = "block"; // 숨겨진 콘텐츠 보이기
    moreInfoButton.style.display = "none"; // "더 알기" 버튼 숨기기
}

function hideMoreContent() {
    const content = document.getElementById("additional-content");
    const moreInfoButton = document.querySelector(".more-info");

    content.style.display = "none"; // 숨겨진 콘텐츠 숨기기
    moreInfoButton.style.display = "block"; // "더 알기" 버튼 다시 표시
}