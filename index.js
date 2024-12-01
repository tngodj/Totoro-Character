//상단 메뉴
// 드롭다운 메뉴 표시/숨김
function toggleDropdown() {
    const dropdown = document.getElementById('dropdown-menu');
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "flex"; // 메뉴 보이기
    } else {
        dropdown.style.display = "none"; // 메뉴 숨기기
    }
}

// 서브 버튼 클릭 처리
function clickSubButton(buttonId) {
    switch (buttonId) {
        case 0:
            window.location.href = "https://tngodj.github.io/Gibli_Fan_Page/"; // 버튼 0 클릭 시 이동할 URL
            break;
        case 1:
            window.location.href = "https://hyunjin0101.github.io/totoro-poster/"; // 버튼 1 클릭 시 이동할 URL
            break;
        case 2:
            window.location.href = "https://tngodj.github.io/Gibli-WorldCup-Main/"; // 버튼 2 클릭 시 이동할 URL
            break;
        case 3:
            window.location.href = "https://tngodj.github.io/OST_Game"; // 버튼 3 클릭 시 이동할 URL
            break;
        case 4:
            window.location.href = "https://tngodj.github.io/Character-Name-Game/"; // 버튼 4 클릭 시 이동할 URL
            break;
        default:
            console.error("잘못된 버튼 ID입니다."); // 디버그용
    }
};

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