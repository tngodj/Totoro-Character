function showMoreContent() {
    const content = document.getElementById("additional-content");
    content.style.display = "block";
}

/* // 버튼 정의
const moreButton = document.querySelector('.more-button');

// 숨겨진 행 보이기/숨기기 로직
moreButton.addEventListener('click', () => {
  const additionalContents = document.querySelectorAll('.additional-content'); // 숨겨진 행들
  let isVisible = moreButton.dataset.visible === 'true'; // 현재 표시 상태 확인

  additionalContents.forEach(row => {
    if (isVisible) {
      row.style.pointerEvents = 'none'; // 클릭 방지
    } else {
      row.style.pointerEvents = 'auto'; // 클릭 가능
    }
  });

  moreButton.textContent = isVisible ? '모두 보기' : '닫기'; // 버튼 텍스트 변경
  moreButton.dataset.visible = !isVisible; // 상태 업데이트
}); */