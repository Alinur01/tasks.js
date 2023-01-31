let userName = prompt('Кто пришёл?');

if (userName.toUpperCase() === 'АДМИН') {
    let pass = prompt('Пароль?' );

    if (pass.toUpperCase() === 'ЧЕРНЫЙ ВЛАСТЕЛИН') {
        alert( 'Добро пожаловать!' );
    } else if (pass == null) {
        alert( 'Вход отменён' );
    } else {
        alert( 'Пароль неверен' );
    }
} else if (userName == null) {
    alert( 'Вход отменён' );

} else {

    alert( 'Я вас не знаю' );

}