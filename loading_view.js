//시작 후 로딩이 완료되는 3초 뒤에 클릭 이벤트 추가
document.addEventListener("DOMContentLoaded", () => {
    const loadingView = document.getElementById("loading-view");

    if (sessionStorage.getItem("close_loading")) {
        loadingView.style.display = "none";
        return;
    }

    let startTimeout = setTimeout(() => {
        const loadingClosingText = document.getElementById("loading-closing-text");
        loadingClosingText.style.display = 'block';
        
        loadingView.onclick = e => {
            e.target.style.display = 'none';
            e.target.className = 'cursorPointer';

            sessionStorage.setItem("close_loading", true);
        }

        clearTimeout(startTimeout);
        startTimeout = null;
    }, 3000);
});