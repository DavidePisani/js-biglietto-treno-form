// acquisizione dati tramite bottone

const generateButton = document.getElementById('generate-ticket');
generateButton.addEventListener('click',
    function(){
        const userName = document.getElementById('user-name').value;
        
        const userKm = parseInt(document.getElementById ('user-km').value);
        
        const userAge = document.getElementById('user-age').value;

// Calcolo vari prezzi 
        const price = userKm * 0.21;
        let discount = 0;

        if (userAge === 'minorenne') {
            discount = price * 20 / 100;
        }else if (userAge === 'over') {
            discount = price * 40 / 100;
        }
        const finalPrice = price - discount

// Tipo di tariffa
        let ticketOffert = "Biglietto standard";

        if (userAge === 'minorenne') {
            ticketOffert = "Biglietto minorenne"
        }else if (userAge === 'over') {
            ticketOffert = "Biglietto Over 65"
        }
        
// stampa del tipo di biglietto 
        document.getElementById('ticket').classList.add ('active')
        document.getElementById('ticket-name').innerHTML = userName
        document.getElementById('ticket-offert').innerHTML = ticketOffert
        document.getElementById('carrozza').innerHTML = Math.floor(Math.random() * 10);
        document.getElementById('code-cp').innerHTML = Math.floor(Math.random() * 100000);
        document.getElementById('ticket-price').innerHTML = finalPrice.toFixed(2)
        
    }
)
// reset delle informazioni
const deleteTicket = document.getElementById('delete-ticket');
deleteTicket.addEventListener('click',
    function(){
        document.getElementById('ticket').classList.remove ('active')
        document.getElementById('user-name').value='';
        document.getElementById('user-km').value ='';
        document.getElementById('user-age').value = 'maggiorenne';
    }
)