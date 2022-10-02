import BSN from 'bootstrap.native';

//console.log(modal);

const refs = {
  modal: document.querySelector('#exampleModal'),
  subscribedBtn: document.querySelector('button[data-subscribe]'),
};

const modal = new BSN.Modal('#exampleModal');
const PROMPT_DELAY = 1000;
const MAX_PROMPT_ATTEMPS = 3;
let promptCounter = 0;
let hasSubscribed = false;

openModal();

//Пробуем отловить событие при Закрытии (hide.bs.modal)на модалке

// refs.modal.addEventListener('hide.bs.modal', () => {
//   openModal();
// });
// Или выше переделали в ниже
refs.modal.addEventListener('hide.bs.modal',openModal)

refs.subscribedBtn.addEventListener('click', onSubscribeBtnClick);

//если нажали закрыть модалку - нужно еще раз запустить таймер (если хотим что она у нас открывалась MAX_PROMPT_ATTEMPS - РАЗ)
// можем зацепиться за дата артибут, который на X и на кнопке close -- data-bs-dismiss="modal"
// Но мы попробуем использоватьт метод в самой модалке есть Modal Events  -- hide.bs.modal

function openModal() {
  if (promptCounter === MAX_PROMPT_ATTEMPS || hasSubscribed) {
    console.log('Максимальное количество надоеданий или Подписался');
    return;
  }
  setTimeout(() => {
    console.log('Otkruvaem nodoedalku');
    modal.show();
    promptCounter += 1;
  }, PROMPT_DELAY);
}

function onSubscribeBtnClick(){
    hasSubscribed = true;
    modal.hide();
}