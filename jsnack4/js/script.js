/* Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

const tickets = []

for (let i = 0; i < 6; i++) {
    const ticket = Number(prompt("Inserisci numero"));
    if (ticket % 2 !== 0) {
        tickets.push(ticket)
        console.log(ticket)
    }
}

