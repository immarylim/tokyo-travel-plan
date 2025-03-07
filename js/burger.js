document.querySelectorAll('.comm-btn').forEach((btn) => {
    // this를 사용하려면 function 사용!
    btn.addEventListener('click', function() {
        // 바로 다음 형제 요소 찾기
        const commCon = this.nextElementSibling;
        const commDisplay = window.getComputedStyle(commCon).display;

        if(commDisplay === 'none') {
            commCon.style.display = 'block';
            btn.style.borderBottom = '1px solid #fffafa';
        } else {
            commCon.style.display = 'none';
            btn.style.borderBottom = '1px solid #bf5f5f';
        }
    });
});