document.addEventListener('DOMContentLoaded', () => {
    // ดึงปุ่มและหน้าจอต่างๆ มาใช้งาน
    const yesBtn = document.querySelector('.btn-yes') || document.getElementById('yes');
    const noBtn = document.getElementById('no') || document.querySelector('.btn-no');
    const successPage = document.getElementById('successPage');
    
    // ตั้งค่าเริ่มต้น: ซ่อนหน้าจอ "เย้ เป็นแฟนกันแล้ว" เอาไว้ก่อน
    if (successPage) {
        successPage.style.display = 'none';
    }

    // 1. ถ้ากดปุ่ม "เป็น" ให้โชว์หน้าสารภาพรักสำเร็จ
    if (yesBtn) {
        yesBtn.addEventListener('click', () => {
            const currentPage = yesBtn.closest('.page') || yesBtn.closest('.card') || yesBtn.parentElement;
            if (currentPage && successPage) {
                currentPage.style.display = 'none';
                successPage.style.display = 'block';
            }
        });
    }

    // 2. ถ้าเลื่อนเมาส์มาโดน หรือเอานิ้วไปแตะปุ่ม "ไม่เป็น" ให้ปุ่มวิ่งหนีสุ่มตำแหน่ง
    if (noBtn) {
        const moveButton = () => {
            // สุ่มตำแหน่งภายในขอบเขตหน้าจอ
            const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
            const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
            
            noBtn.style.position = 'fixed';
            noBtn.style.left = `${x}px`;
            noBtn.style.top = `${y}px`;
            noBtn.style.zIndex = '9999'; // ดันปุ่มให้อยู่หน้าสุดเสมอ
        };

        // รองรับทั้งคอมพิวเตอร์และมือถือ/แท็บเล็ต
        noBtn.addEventListener('mouseover', moveButton);
        noBtn.addEventListener('touchstart', (e) => {
            e.preventDefault(); // กันไม่ให้กดโดนจริง ให้วิ่งหนีอย่างเดียว
            moveButton();
        });
    }
});
