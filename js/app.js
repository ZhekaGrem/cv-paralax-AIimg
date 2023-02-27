window.addEventListener('scroll', e => {
   document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

ScrollSmoother.create({
   wrapper: '.wrapper',
   content: '.content'
}
)


const validateEmail = (email) => {
   return String(email)
      .toLowerCase()
      .match(
         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};



let isFormValid = false;
const btn = document.getElementById('button');

const form = document.querySelector('form');
const thankYou = document.querySelector('.thank-you');

const nameInput = document.querySelector('input[name="from_name"]');
const emailInput = document.querySelector('input[name="email_id"]');
const messageInput = document.querySelector('textarea[name="message"]');
const serviceID = 'default_service';
const templateID = 'template_og4evsg';
const divEnd = document.getElementById('End');





const nameInputId = document.querySelector('#from_name');
const emailInputId = document.querySelector('#email_id');
const messageArea  = document.querySelector('#message');
const submitBtn = document.querySelector('#button');

form.addEventListener('input', () => {
   if (nameInputId.value && emailInputId.value && messageArea.value   ) {
      submitBtn.disabled = false;
   } else {
      submitBtn.disabled = true;
   }
});

const resetInput = (elm) => {
   elm.classList.remove('invalid');
   elm.nextElementSibling.classList.add('hidden');
};

const invalidateINput = (elm) => {
   elm.classList.add('invalid');
   elm.nextElementSibling.classList.remove('hidden');
}

const validateInputs = () => {

   isFormValid = true;
   resetInput(nameInput);
   resetInput(emailInput);
   resetInput(messageInput);
   if (!nameInput.value) {
      isFormValid = false;
      invalidateINput(nameInput)
   }

   if (!validateEmail(emailInput.value)) {
      isFormValid = false;
      invalidateINput(emailInput)
   }
   if (!messageInput.value) {

      isFormValid = false;
      invalidateINput(messageInput)

   }
};





document.getElementById('form').addEventListener('submit', function (e) {
   e.preventDefault();

   btn.value = 'Sending...';

   
   emailjs.sendForm(serviceID, templateID, this)
      .then(() => {

         btn.value = 'Send Email';

      }, (err) => {
         btn.value = 'Send Email2';
         console.log(JSON.stringify(err));
      });
});



form.addEventListener('submit', (e) => {

   e.preventDefault();
   validateInputs();
   if (isFormValid) {
      form.remove();
      thankYou.classList.remove('hidden');
      setTimeout(function () {
         divEnd.remove();
      }, 3000);
   }
});




//setTimeout(function () {
//   divEnd.remove();
//}, 5000);