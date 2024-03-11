const originalPhrase: string = "Hello, World!";
const shift: number = 3;
const cryptedPhrase: string = cifrarioDiCesare(originalPhrase, shift);

console.log("Testo originale: ", originalPhrase);
console.log("Testo cifrato: ", cryptedPhrase);

function cifrarioDiCesare(phrase: string, shift: number): string {
    return phrase.toUpperCase().split('').map((char: string) => {
        if (char >= 'A' && char <= 'Z') {
            // 0 - 65 trova il valore ascii, il primo %26 fa in modo di riuscire a gestire shift negativi
            // il rimanente aggiunge 26 prima di fare il modulo di 26 sempre per shift negativi e si aggiunge 65 per ottenere il valore ascii della lettera
            const nuovoCharCode: number = ((char.charCodeAt(0) - 65 + shift) % 26 + 26) % 26 + 65;
            return String.fromCharCode(nuovoCharCode);
        } else {
            return char;
        }
    }).join('');
}