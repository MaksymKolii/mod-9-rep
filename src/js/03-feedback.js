//если не нажмен на нотификашку - она не исчезнет =Поэтому нужно запланировать ее закрытие const NOTIFICATION_DELAY = 3000;
const NOTIFICATION_DELAY = 3000;
let timerID = null;
const refs = {
  notification: document.querySelector('.js-alert'),
};

refs.notification.addEventListener('click', onNotificationClick);

showNotification();

function onNotificationClick() {
  hideNotification();
  //Ели нажмем на нотификашку раньше чем установили в setTimeout -Нужно снять этот таймаут
  clearTimeout(timerID);
}

function showNotification() {
  refs.notification.classList.add('js-visible');

  timerID = setTimeout(() => {
    hideNotification();
    console.log('Закрываем алерт автоматическиБ чтоб не висел');
  }, NOTIFICATION_DELAY);
}

function hideNotification() {
  refs.notification.classList.remove('js-visible');
}
