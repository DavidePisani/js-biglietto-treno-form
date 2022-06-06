const generateButton = document.getElementById('generate-ticket');
generateButton.addEventListener('click',
    function(){
        const userName = document.getElementById('user-name').value;
        
        const userKm = parseInt(document.getElementById ('user-km').value);
        
        const userAge = document.getElementById('user-age').value;

        const price = userKm * 0.21;
        let discount = 0;

        if (userAge === 'minorenne') {
            discount = price * 20 / 100;
        }else if (userAge === 'over') {
            discount = price * 40 / 100;
        }

        const finalPrice = price - discount

        document.getElementById('ticket').classList.add ('active')
        document.getElementById('ticket-name').innerHTML = userName
        document.getElementById('ticket-offert').innerHTML = userAge
        document.getElementById('carrozza').innerHTML = Math.floor(Math.random() * 10);
        document.getElementById('code-cp').innerHTML = Math.floor(Math.random() * 10000)
        document.getElementById('ticket-price').innerHTML = finalPrice.toFixed(2)
        
    }
)
const deleteTicket = document.getElementById('delete-ticket');
deleteTicket.addEventListener('click',
    function(){
        document.getElementById('ticket').classList.remove ('active')
        document.getElementById('user-name').value='';
        document.getElementById('user-km').value='';
        document.getElementById('user-age').value= 'Maggiorenne';
    }
)