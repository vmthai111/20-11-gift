document.getElementById('show-gift').addEventListener('click', function() {
    const teacherName = document.getElementById('teacher-name').value.trim();
    const message = document.getElementById('message');

    if(teacherName === '') {
        alert('Vui lòng nhập tên thầy/cô!');
        return;
    }

    message.textContent = `Chúc ${teacherName} luôn mạnh khỏe, hạnh phúc và nhiều niềm vui trong công việc dạy học! 🎉`;
    message.classList.remove('hidden');
});
