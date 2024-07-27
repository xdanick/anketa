document.addEventListener('DOMContentLoaded', () => {
    const formElement = document.getElementById('surveyForm');
    if (formElement) {
        formElement.addEventListener('submit', async (event) => {
            event.preventDefault();

            const form = event.target;
            const formData = new FormData(form);

            try {
                const response = await fetch('https://a342-31-132-84-86.ngrok-free.app/upload', { // Ensure the URL is correct
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
    } else {
        console.error('Form element not found');
    }
});
