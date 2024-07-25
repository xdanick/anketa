document.getElementById('surveyForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
        const response = await fetch('https://4395-37-151-129-32.ngrok-free.app/upload', { // Убедитесь, что вы используете правильный URL ngrok
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Ошибка при отправке формы');
        }

        const result = await response.json();
        alert(result.message);
    } catch (error) {
        console.error('Error:', error);
        alert('Ошибка при отправке формы');
    }
});
