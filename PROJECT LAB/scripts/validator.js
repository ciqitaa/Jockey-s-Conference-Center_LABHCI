

    var nameError1 = document.getElementById('Name-Error');
    var nameError2 = document.getElementById('Name-Error2');
    var emailError = document.getElementById('Email-Error');
    var phoneError = document.getElementById('Phone-Error');
    var messageError = document.getElementById('Message-Error');
    var methodError = document.getElementById('Method-Error');
    var submitError = document.getElementById('submit');

    
   


    function validateName1(){
      var name1 = document.getElementById('name1').value;
        if (name1.length == 0) {
          nameError1.innerHTML = "Name is required";
          return false;
        }
      
        if (!name1[0].match(/^[A-Z]/)) {
          nameError1.innerHTML = "Write full name";
          return false;
        }
        nameError1.innerHTML = '<i class="fa-solid fa-check"></i>';
        return true;
    }

    function validateName2(){
      var name2 = document.getElementById('name2').value;
      if (name2.length == 0) {
        nameError2.innerHTML = "Name is required";
        return false;
      }
    
      if (!name2[0].match(/^[A-Z]/)) {
        nameError2.innerHTML = "Write full name";
        return false;
      }
      nameError2.innerHTML = '<i class="fa-solid fa-check"></i>';
      return true;
  }


    function validatePhoneNum(){
      var phone = document.getElementById('phoneNum').value;
      if (phoneNum.length == 0) {
        phoneError.innerHTML = "Number is required";
        return false;
      }
      if (phoneNum.length !== 12) {
        phoneError.innerHTML = "12 Digits only";
        return false;
      }
      if (!phoneNum.match(/^[0-9]{12}$/)) {
        phoneError.innerHTML = "Only digits please.";
        return false;
      }
    
      phoneError.innerHTML = '<i class="fa-solid fa-check"></i>';
      return true;
    }

    function validateEmailID(){
      var email = document.getElementById('emailID').value;
      if (email.length == 0) {
        emailError.innerHTML = "Email is required";
        return false;
      }
      if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Email Invalid";
        return false;
      }
    
      emailError.innerHTML = '<i class="fa-solid fa-check"></i>';
      return true;
    }

    function validateMessage(){
      var message = document.getElementById('Message').value;
      var required = 30;
      var left = required - message.length;
    
      if (left > 0) {
        messageError.innerHTML = left + "more characters required";
        return false;
      }
    
      messageError.innerHTML = '<i class="fa-solid fa-check"></i>';
      return true;
    }

    function validateMethod(){
      var method1 = document.getElementById('phoneMet');
      var method2 = document.getElementById('EmailMet');
      if (!method1.checked && !method2.checked) {
        methodError.innerHTML = "Min Choose 1";
        return false;
      }
    
      messageError.innerHTML = '<i class="fa-solid fa-check"></i>';
      return true;
    }

    function validateForm() {
      if (
        !validateName1() ||
        !validateName2() ||
        !validatePhoneNum() ||
        !validateEmailID() ||
        !validateMessage() ||
        !validateMethod()
      ) {
        submitError.style.display = "block";
        setTimeout(function () {
          submitError.style.display = "none";
        }, 3000);
        return false;
      }
    }