/*L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/


const first_words = String(prompt("Inserire prima parola"))

const other_words =  String(prompt("Inserire seconda parola"))

if (first_words < other_words){
    console.log(first_words, other_words);
} else if (other_words < first_words){
    console.log(other_words, first_words);
} else {
    console.log(first_words, other_words);
}
    
