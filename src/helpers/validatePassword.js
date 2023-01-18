// Для пароля условия: от 8 символов, 2 заглавных, 1 специальный символ.

export function validatePassword(password) {
    const symbols = [
        '!', '#', '$', '%', '&', '(', ')', '*', '+',
        ',', '-', '.', '/', ':', ';', '<', '=', '>',
        '?', '@', '[', ']', '^', '_', '{', '}', '~'
    ]
    if(password.length < 8) {
        return false; // "недостаточная длина пароля"
    }
    const capitalLetters = /[A-Z]/g;
    const isEnoughCapitalLetters = password.match(capitalLetters).length < 2;
    if(isEnoughCapitalLetters) {
        return false; // "недостаточно Заглавных букв"
    }
    const isSymbol = password.split('').some(char => symbols.includes(char));
    if(isSymbol) {
        return true;
    }
}

