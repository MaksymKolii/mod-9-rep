import BSN from 'bootstrap.native';
const modal = new BSN.Modal('#exampleModal');
console.log(modal);

//Пробуем отловить событие при (hide.bs.modal)на модалке 

const refs = {

    modal: document.querySelector('#exampleModal')
}

refs.modal.addEventListener('hide.bs.modal', ()=>{
    console.log('qweqeeeqqeqeeqw');
})

const PROMPT_DELAY = 3000;
const MAX_PROMPT_ATTEMPS = 3;

setTimeout(() => {
    console.log('Otkruvaem nodoedalku');
  modal.show();
}, PROMPT_DELAY);
//если нажали закрыть модалку - нужно еще раз запустить таймер (если хотим что она у нас открывалась MAX_PROMPT_ATTEMPS - РАЗ)
// можем зацепиться за дата артибут, который на X и на кнопке close -- data-bs-dismiss="modal" 
// Но мы попробуем использоватьт метод в самой модалке есть Modal Events  -- hide.bs.modal
