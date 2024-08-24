$(document).ready(function () {
  function updateImage() {
    let windowWidth = $(window).width();
    let image = $(".signUp");
    if (windowWidth <= 750) {
      image.attr("src", "./assets/images/illustration-sign-up-mobile.svg");
      $(".home2").css({
        "width":"90%"
      })
     

    } else {
      image.attr("src", "./assets/images/illustration-sign-up-desktop.svg")
      $(".home2").css({
        "width":"30%"
      })
    }
  }
  updateImage();

  // Run on window resize
  $(window).resize(function () {
    updateImage();
  });

  function validation() {
    let input = $("input");

    if (input.val().length <= 15) {
      input.addClass("wrong");
      $(".msg").html(`
        please enter valid email address
        `)
    } else {
      input.removeClass("wrong")
      $(".papa").css({
        "height": "100vh",
    "display": "flex",
    "justify-content": "center",
    "align-items": "center"
    
      })
      $(".home").remove()
      $(".home3").html(`
        <img style="width: 40px;" src="./assets/images/icon-success.svg" alt="">
<h1>Thanks for subscribing!</h1>
<p>A confirmation email has been sent to <strong> ${input.val()} </strong>
    Please open it and click the button inside to confirm your subscription.</p>
    <button class="text-light">Dismiss Message</button>
        `)
      $(".home2").css({
        
    "background":"white",
    "border-radius":"20px",
    "padding":"30px"
      })

    }
  }
  let btn = $("button");
  // console.log(btn);

  btn.click(validation);
})
$(".home2").css({
  "width": "90%"
})