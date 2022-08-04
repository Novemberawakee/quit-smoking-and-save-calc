const button = document.querySelector('#btn');
button.addEventListener('click', calculateAmount);

function calculateAmount(e){
    e.preventDefault();
    const cigarettes = document.querySelector('#cigarettesPerDay').value;
    const pack = document.querySelector('#packSize').value;
    const cost = document.querySelector('#packCost').value;

    if (cigarettes === "" || pack === "" || cost === "") {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'please enter your information',
        })
        return false;
    }

    let cigarettesPerYear = cigarettes * 365;
    let packsPerYear = Math.ceil(cigarettesPerYear/pack);
    let savedMoney = packsPerYear * cost;

    savedMoney = savedMoney.toFixed(2);

    document.querySelector('#totalPacks').textContent = packsPerYear;
    document.querySelector('#totalMoney').textContent = savedMoney;
}