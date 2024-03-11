let inpString: string = "Lorem ipsus magicaa astroungarico ciao";
let reversed: string = reverseWords(inpString);
console.log(reversed);

function reverseWords(phrase: string): string {
    let words: string[] = phrase.split('');

    for(let i: number = 0; i < words.length; i++) {
        if(words[i].length >= 5) {
            words[i] = words[i].split('').reverse().join('');
        }
    }
    
    return words.join(' ');
} 