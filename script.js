var exam = alert("O'zbekiston davlat jahon tillari universiteti imtihon natijalarini quyida tekshirishingiz mumkin!")

var elExamForm = document.querySelector(".form");
var elFormInput = elExamForm.querySelector(".form__input");

var elFormOutput = document.querySelector(".form__output");

elExamForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  if (isNaN(elFormInput.value))  {
    elFormOutput.textContent = "Iltimos, raqam kiriting!";
  } else if (elFormInput.value < 0){
    elSiteOutput.textContent = "Iltimos, noldan katta miqdor kiriting!";
  } else if (elFormInput.value >= 0 && elFormInput.value <= 130) {
    elFormOutput.textContent = "Talabalikka tavsiya etilmadingiz!";
  } else if (elFormInput.value > 130 && elFormInput.value <= 165) {
    elFormOutput.textContent = "To'lov-shartnoma asosida talabalikka tavsiya etildingiz!";
  } else if (elFormInput.value > 165 && elFormInput.value <=189) {
    elFormOutput.textContent = "Davlat granti asosida talabalikka tavsiya etildingiz!";
  }
})