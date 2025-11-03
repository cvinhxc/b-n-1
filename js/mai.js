document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const body = document.body;
    const navLinks = document.querySelectorAll('nav a');

    // 1. Chức năng Mở/Đóng Menu
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            // Chuyển đổi trạng thái của body (dùng để hiển thị/ẩn menu trong CSS)
            body.classList.toggle('menu-open');
            // Chuyển đổi trạng thái của nút toggle (để hiển thị X)
            menuToggle.classList.toggle('open');
        });
    }

    // 2. Chức năng Đóng Menu khi nhấp vào Link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Chỉ đóng menu nếu nó đang mở
            if (body.classList.contains('menu-open')) {
                // Tạm thời dừng cuộn mượt để menu đóng nhanh hơn
                // window.scrollTo(0, 0); 
                
                // Đóng menu và chuyển nút toggle về trạng thái ban đầu
                body.classList.remove('menu-open');
                if (menuToggle) {
                    menuToggle.classList.remove('open');
                }
            }
        });
    });

    // 3. (Tùy chọn) Chức năng Toggle Theme 
    const themeCheckbox = document.getElementById('theme-checkbox');
    if (themeCheckbox) {
        themeCheckbox.addEventListener('change', () => {
            // Thêm logic chuyển đổi theme (dark/light mode) tại đây
            console.log('Theme toggle clicked.');
        });
    }
});