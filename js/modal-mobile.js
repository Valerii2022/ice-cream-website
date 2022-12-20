(() => {
   const refs = {
     openModalBtn: document.querySelector("[data-buy-now-mobile-open]"),
     closeModalBtn: document.querySelector("[data-buy-now-mobile-close]"),
     modal: document.querySelector("[data-buy-now-mobile]"),
   };
 
   refs.openModalBtn.addEventListener("click", toggleModal);
   refs.closeModalBtn.addEventListener("click", toggleModal);
 
   function toggleModal() {
      document.body.classList.toggle("no-scroll");
      refs.modal.classList.toggle("is-hidden");
   }
 })();