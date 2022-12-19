(() => {
   const refs = {
     openModalBtn: document.querySelector("[data-buy-now-open]"),
     closeModalBtn: document.querySelector("[data-buy-now-close]"),
     modal: document.querySelector("[data-buy-now]"),
   };
 
   refs.openModalBtn.addEventListener("click", toggleModal);
   refs.closeModalBtn.addEventListener("click", toggleModal);
 
   function toggleModal() {
      document.body.classList.toggle("no-scroll");
      refs.modal.classList.toggle("is-hidden");
   }
 })();