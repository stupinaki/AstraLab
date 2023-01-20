// Для пароля условия: от 8 символов, 2 заглавных, 1 специальный символ.

export function validatePassword(password) {
    if(!password) {
        return false;
    }
    const symbols = [
        '!', '#', '$', '%', '&', '(', ')', '*', '+',
        ',', '-', '.', '/', ':', ';', '<', '=', '>',
        '?', '@', '[', ']', '^', '_', '{', '}', '~'
    ]
    const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const arr = password.split('');
    const isEnoughCapitalLetters = arr.filter(char => capitalLetters.includes(char)).length > 1;
    const isSymbol = arr.some(char => symbols.includes(char));

    return arr.length > 7 && isEnoughCapitalLetters && isSymbol;
}

