const handleError = (message) => {
    document.getElementById('errorMessage').textContent = message;
    document.getElementById('domoMessage').classList.remove('hidden');
};
