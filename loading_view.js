//시작 후 로딩이 완료되는 3초 뒤에 클릭 이벤트 추가
document.addEventListener("DOMContentLoaded", () => {
    const loadingView = document.getElementById("loading-view");

    if (sessionStorage.getItem("close_loading")) {
        return;
    }
    
    loadingView.style.display = "block";

    let startTimeout = setTimeout(() => {
        const loadingClosingText = document.getElementById("loading-closing-text");
        loadingClosingText.style.display = 'block';
        loadingView.className = "cursorPointer";
        
        loadingView.onclick = e => {
            loadingView.style.display = "none";

            sessionStorage.setItem("close_loading", true);
        }

        clearTimeout(startTimeout);
        startTimeout = null;
    }, 3000);
});