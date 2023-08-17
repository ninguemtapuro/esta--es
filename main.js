const checkBtn = document.getElementById('checkBtn');
const result = document.getElementById('result');

checkBtn.addEventListener('click', () => {
    const dateInput = document.getElementById('date');
    const dateString = dateInput.value;

    const date = new Date(dateString);
    const month = date.getMonth() + 1;

    let season = '';

    if (month >= 3 && month <= 5) {
        season = 'Primavera';
    } else if (month >= 6 && month <= 8) {
        season = 'Verão';
    } else if (month >= 9 && month <= 11) {
        season = 'Outono';
    } else {
        season = 'Inverno';
    }

    result.textContent = `A estação do ano para a data ${dateString} é: ${season}`;
});