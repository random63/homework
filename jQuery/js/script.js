/* Функция закрывает по нажатие на кнопку модальное окно */
function bclose() {
	$("#popup_window").bPopup().close();
	return false;
}

/* Функция показывает модальное окно по нажатию на кнопку */
function bopen() {
	$('#popup_window').bPopup();
	return false;
}

/* Функция отображает модальное окно автоматически после загрузки страницы через одну секунду */
$( document ).ready(function() {
	setTimeout(function() {        
        /* Вызываем модальное окно */
        $('#popup_window').bPopup();	
	}, 15000);
});