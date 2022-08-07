var regStatus = true;

// START CREATING END STYLING
var body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = '#2eb1ac';
body.style.fontFamily = '"Helvetica Neue", Helvetica, Arial, sans-serif';
body.style.color = '#333';
body.style.lineHeight = '1';
body.style.margin = '0';
body.style.padding = '0';
body.style.overflow = 'hidden';

var elContainer = document.createElement('div');
body.appendChild(elContainer);
elContainer.style.maxWidth = '1150px';
elContainer.style.margin = '0 auto';
elContainer.style.padding = '0 10px';
elContainer.style.display = 'flex';
elContainer.style.justifyContent = 'center';
elContainer.style.alignItems = 'center';
elContainer.style.height = '100vh';
elContainer.style.position = 'relative';

//WELCOME BOX

var elWelcomeBox = document.createElement('div');
elContainer.appendChild(elWelcomeBox);
elWelcomeBox.style.position = 'absolute';
elWelcomeBox.style.width = '600px';
elWelcomeBox.style.height = '400px';
elWelcomeBox.style.display = 'flex';
elWelcomeBox.style.justifyContent = 'center';
elWelcomeBox.style.alignItems = 'center';
elWelcomeBox.style.display = 'none';

var elWelcomeBoxInner = document.createElement('div');
elWelcomeBox.appendChild(elWelcomeBoxInner);
elWelcomeBoxInner.style.width = '100%';

var elWelcomeBoxTitle = document.createElement('h2');
elWelcomeBoxInner.appendChild(elWelcomeBoxTitle);
elWelcomeBoxTitle.style.fontSize = '30px';
elWelcomeBoxTitle.style.margin = '0';
elWelcomeBoxTitle.style.padding = '0';
elWelcomeBoxTitle.style.textAlign = 'center';
elWelcomeBoxTitle.style.color = '#f8f8f8';
elWelcomeBoxTitle.textContent = 'Assalomu alaykum';
elWelcomeBoxTitle.style.textShadow = '0 0 5px #fffff5';


var elWelcomeBoxParagrph = document.createElement('p');
elWelcomeBoxInner.appendChild(elWelcomeBoxParagrph);
elWelcomeBoxParagrph.style.fontSize = '17px';
elWelcomeBoxParagrph.style.margin = '0';
elWelcomeBoxParagrph.style.padding = '0';
elWelcomeBoxParagrph.style.textAlign = 'center';
elWelcomeBoxParagrph.style.color = '#e9e9e9';
elWelcomeBoxParagrph.textContent = 'iltimos ro\'yhatdan o\'ting , yoki shahsiy hisobingizga kiring';
elWelcomeBoxParagrph.style.width = '100%';

var elWelcomeBoxButtonBox = document.createElement('div');
elWelcomeBoxInner.appendChild(elWelcomeBoxButtonBox);
elWelcomeBoxButtonBox.style.display = 'flex';
elWelcomeBoxButtonBox.style.justifyContent = 'center';
elWelcomeBoxButtonBox.style.alignItems = 'center';
elWelcomeBoxButtonBox.style.marginTop = '10px';
elWelcomeBoxButtonBox.style.position = 'relative';

                                                           //Sign Up BTn

var elSignInButton = document.createElement('button');
elWelcomeBoxButtonBox.appendChild(elSignInButton);
elSignInButton.textContent = `Ro'yhatdan o'tish`;
elSignInButton.style.marginTop = '0';
elSignInButton.type = 'button';
elSignInButton.style.backgroundColor = '#2ca09c';
elSignInButton.style.border = 'none';
elSignInButton.style.borderRadius = '5px';
elSignInButton.style.color = '#fff3e0';
elSignInButton.style.textShadow = '0 0 7px #d6d6d6';
elSignInButton.style.fontSize = '1.2em';
elSignInButton.style.boxShadow = '0 0 7px #d6d6d6';
elSignInButton.style.padding = '6px 12px';
elSignInButton.style.cursor = 'default';
elSignInButton.onmouseover = function() {
  elSignInButton.style.boxShadow = '0 0 7px #d6d6d6';
}
elSignInButton.onmouseleave = function() {
  elSignInButton.style.boxShadow = '0 0 7px #d6d6d6';
}


var elSignUpButton = document.createElement('button');
elWelcomeBoxButtonBox.appendChild(elSignUpButton);
elSignUpButton.textContent = `Kirish`;
elSignUpButton.style.marginTop = '0';
elSignUpButton.style.marginLeft = '15px';
elSignUpButton.style.backgroundColor = 'transparent';
elSignUpButton.style.border = 'none';
elSignUpButton.style.borderRadius = '5px';
elSignUpButton.style.color = '#fff3e0';
elSignUpButton.style.textShadow = '0 0 7px #d6d6d6';
elSignUpButton.style.fontSize = '1.2em';
elSignUpButton.style.boxShadow = '0 0 7px #d6d6d6';
elSignUpButton.style.padding = '6px 12px';
elSignUpButton.style.cursor = 'pointer';
elSignUpButton.type = 'button';
elSignUpButton.onmouseover = function() {
  elSignUpButton.style.boxShadow = '0 0 15px #d6d6d6';
  elSignUpButton.style.transition = 'all 0.1s ease-in-out';
}
elSignUpButton.onmouseleave = function() {
  elSignUpButton.style.boxShadow = '0 0 7px #d6d6d6';
  elSignUpButton.style.transition = 'all 0.1s ease-in-out';
}

elSignUpButton.onclick = function() {
  elSignInButton.style.backgroundColor = 'transparent';
  elSignInButton.style.cursor = 'pointer';
  elSignInButton.onmouseover = function() {
    elSignInButton.style.boxShadow = '0 0 15px #d6d6d6';
    elSignInButton.style.transition = 'all 0.1s ease-in-out';
  }
  elSignInButton.onmouseleave = function() {
    elSignInButton.style.boxShadow = '0 0 7px #d6d6d6';
    elSignInButton.style.transition = 'all 0.1s ease-in-out';
  }

  elSignUpButton.style.backgroundColor = '#2ca09c';
  elSignUpButton.style.cursor = 'default';
  elSignUpButton.onmouseover = function() {
    elSignUpButton.style.boxShadow = '0 0 7px #d6d6d6';
  }
  elSignUpButton.onmouseleave = function() {
    elSignUpButton.style.boxShadow = '0 0 7px #d6d6d6';
  }
  elWelcomeFormBox.style.display = 'none';
  elWelcomeFormBoxSignIN.style.display = 'flex';
  elWelcomeSecondFormBox.style.display = 'none';
  elSignInFormBoxButton.style.display = 'none';
  elWelcomeFormBtnBox.style.display = 'flex';
  elWelcomeFormBoxLastLeft.style.display = 'none';
  elWelcomeBoxBtnBoxLine.style.display = 'none';
  userNameValue = 'Otamurod';
  userLastNameValue = 'Akbarov';
  userName.textContent = userNameValue + ' ' + userLastNameValue;
  userNickName.textContent = 'asn_me';
  var balanceMain = Math.floor(Math.random() * (10000000 - 1) + 1);
  userMoney.textContent = balanceMain;
  userMoney = balanceMain;
}

elSignInButton.onclick = function() {
  elSignUpButton.style.backgroundColor = 'transparent';
  elSignUpButton.style.cursor = 'pointer';
  elSignUpButton.onmouseover = function() {
    elSignUpButton.style.boxShadow = '0 0 15px #d6d6d6';
    elSignUpButton.style.transition = 'all 0.1s ease-in-out';
  }
  elSignUpButton.onmouseleave = function() {
    elSignUpButton.style.boxShadow = '0 0 7px #d6d6d6';
    elSignUpButton.style.transition = 'all 0.1s ease-in-out';
  }

  elSignInButton.style.backgroundColor = '#2ca09c';
  elSignInButton.style.cursor = 'default';
  elSignInButton.onmouseover = function() {
    elSignInButton.style.boxShadow = '0 0 7px #d6d6d6';
  }
  elSignInButton.onmouseleave = function() {
    elSignInButton.style.boxShadow = '0 0 7px #d6d6d6';
  }

  elWelcomeFormBox.style.display = 'flex';
  elWelcomeFormBoxSignIN.style.display = 'none';
  elWelcomeSecondFormBox.style.display = 'flex';
  elSignInFormBoxButton.style.display = 'block';
  elWelcomeFormBtnBox.style.display = 'none';
  elWelcomeFormBoxLastLeft.style.display = 'block';
  elWelcomeBoxBtnBoxLine.style.display = 'block';
  userNameValue = elWelcomeFormBoxLeftFirstInput.value;
  userLastNameValue = elWelcomeFormBoxRightInput.value;
  userName.textContent = userNameValue + ' ' + userLastNameValue;
  userNickName.textContent = elWelcomeFormBoxLeftSecondInput.value.toLowerCase();
}                                                             //Sign In BTn

var elWelcomeForm = document.createElement('form');
elWelcomeBoxInner.appendChild(elWelcomeForm);
// elWelcomeForm.action = 'https://echo.htmlacademy.ru';
elWelcomeForm.method = 'post';

// sing up section

var elWelcomeFormBox = document.createElement('div');
elWelcomeForm.appendChild(elWelcomeFormBox);
elWelcomeFormBox.style.display = 'flex';
elWelcomeFormBox.style.alignItems = 'center';
elWelcomeFormBox.style.justifyContent = 'space-between';
elWelcomeFormBox.style.marginTop = '13px';
elWelcomeFormBox.style.position = 'relative';

var elWelcomeBoxButtonBoxLine = document.createElement('div');
elWelcomeFormBox.appendChild(elWelcomeBoxButtonBoxLine);
elWelcomeBoxButtonBoxLine.style.position = 'absolute';
elWelcomeBoxButtonBoxLine.style.width = '100%';
elWelcomeBoxButtonBoxLine.style.height = '1px';
elWelcomeBoxButtonBoxLine.style.backgroundColor = '#d6d6d6';
elWelcomeBoxButtonBoxLine.style.marginTop = '-70px';

var elWelcomeFormBoxLeft = document.createElement('div');
elWelcomeFormBox.appendChild(elWelcomeFormBoxLeft);

var elWelcomeFormBoxLeftTitle = document.createElement('h3');
elWelcomeFormBoxLeft.appendChild(elWelcomeFormBoxLeftTitle);
elWelcomeFormBoxLeftTitle.style.fontSize = '18px';
elWelcomeFormBoxLeftTitle.style.margin = '0';
elWelcomeFormBoxLeftTitle.style.padding = '0';
elWelcomeFormBoxLeftTitle.textContent = `Ismingizni kiriting`;
elWelcomeFormBoxLeftTitle.style.color = '#fff3e0';


var elWelcomeFormBoxLeftFirstInput = document.createElement('input');
elWelcomeFormBoxLeft.appendChild(elWelcomeFormBoxLeftFirstInput);
elWelcomeFormBoxLeftFirstInput.type = 'text';
elWelcomeFormBoxLeftFirstInput.focus();
elWelcomeFormBoxLeftFirstInput.setAttribute('maxlength', 20);
elWelcomeFormBoxLeftFirstInput.style.border = 'none';
elWelcomeFormBoxLeftFirstInput.style.borderRadius = '5px';
elWelcomeFormBoxLeftFirstInput.style.backgroundColor = 'transparent';
elWelcomeFormBoxLeftFirstInput.style.boxShadow = '0 0 7px #d6d6d6';
elWelcomeFormBoxLeftFirstInput.style.padding = '7px 12px';
elWelcomeFormBoxLeftFirstInput.style.fontSize = '1.1em';
elWelcomeFormBoxLeftFirstInput.style.marginTop = '4px';
elWelcomeFormBoxLeftFirstInput.style.outline = 'none';
elWelcomeFormBoxLeftFirstInput.style.color = '#d6d6d6';
elWelcomeFormBoxLeftFirstInput.onmousemove = function() {
  elWelcomeFormBoxLeftFirstInput.style.boxShadow = '0 0 15px #d6d6d6';
  elWelcomeFormBoxLeftFirstInput.style.transition = 'all 0.1s ease-in-out';
}
elWelcomeFormBoxLeftFirstInput.onmouseleave = function() {
  elWelcomeFormBoxLeftFirstInput.style.boxShadow = '0 0 7px #d6d6d6';
  elWelcomeFormBoxLeftFirstInput.style.transition = 'all 0.1s ease-in-out';
}
elWelcomeFormBoxLeftFirstInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    elSignInFormBoxButton.click();
  }
});


var elWelcomeFormBoxLeft = document.createElement('div');
elWelcomeFormBox.appendChild(elWelcomeFormBoxLeft);

var elWelcomeFormBoxRightTitle = document.createElement('h3');
elWelcomeFormBoxLeft.appendChild(elWelcomeFormBoxRightTitle);
elWelcomeFormBoxRightTitle.style.fontSize = '18px';
elWelcomeFormBoxRightTitle.style.margin = '0';
elWelcomeFormBoxRightTitle.style.padding = '0';
elWelcomeFormBoxRightTitle.textContent = `Familyangizni kiriting`;
elWelcomeFormBoxRightTitle.style.color = '#fff3e0';


var elWelcomeFormBoxRightInput = document.createElement('input');
elWelcomeFormBoxLeft.appendChild(elWelcomeFormBoxRightInput);
elWelcomeFormBoxRightInput.type = 'text';
elWelcomeFormBoxRightInput.setAttribute('maxlength', 20);
elWelcomeFormBoxRightInput.style.border = 'none';
elWelcomeFormBoxRightInput.style.borderRadius = '5px';
elWelcomeFormBoxRightInput.style.backgroundColor = 'transparent';
elWelcomeFormBoxRightInput.style.boxShadow = '0 0 7px #d6d6d6';
elWelcomeFormBoxRightInput.style.padding = '7px 12px';
elWelcomeFormBoxRightInput.style.fontSize = '1.1em';
elWelcomeFormBoxRightInput.style.marginTop = '4px';
elWelcomeFormBoxRightInput.style.outline = 'none';
elWelcomeFormBoxRightInput.style.transition = 'all 0.1s ease-in-out';
elWelcomeFormBoxRightInput.style.color = '#d6d6d6';
elWelcomeFormBoxRightInput.onmousemove = function() {
  elWelcomeFormBoxRightInput.style.boxShadow = '0 0 15px #d6d6d6';
  elWelcomeFormBoxRightInput.style.transition = 'all 0.1s ease-in-out';
}
elWelcomeFormBoxRightInput.onmouseleave = function() {
  elWelcomeFormBoxRightInput.style.boxShadow = '0 0 7px #d6d6d6';
  elWelcomeFormBoxRightInput.style.transition = 'all 0.1s ease-in-out';
}
elWelcomeFormBoxRightInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    elSignInFormBoxButton.click();
  }
});

// second section

var elWelcomeSecondFormBox = document.createElement('div');
elWelcomeForm.appendChild(elWelcomeSecondFormBox);
elWelcomeSecondFormBox.style.display = 'flex';
elWelcomeSecondFormBox.style.alignItems = 'center';
elWelcomeSecondFormBox.style.justifyContent = 'space-between';
elWelcomeSecondFormBox.style.marginTop = '17px';
elWelcomeSecondFormBox.style.position = 'relative';

var elWelcomeBoxButtonBoxLine = document.createElement('div');
elWelcomeSecondFormBox.appendChild(elWelcomeBoxButtonBoxLine);
elWelcomeBoxButtonBoxLine.style.position = 'absolute';
elWelcomeBoxButtonBoxLine.style.width = '100%';
elWelcomeBoxButtonBoxLine.style.height = '1px';
elWelcomeBoxButtonBoxLine.style.backgroundColor = '#d6d6d6';
elWelcomeBoxButtonBoxLine.style.marginTop = '-70px';

var elWelcomeFormBoxLeft = document.createElement('div');
elWelcomeSecondFormBox.appendChild(elWelcomeFormBoxLeft);

var elWelcomeFormBoxLeftTitle = document.createElement('h3');
elWelcomeFormBoxLeft.appendChild(elWelcomeFormBoxLeftTitle);
elWelcomeFormBoxLeftTitle.style.fontSize = '18px';
elWelcomeFormBoxLeftTitle.style.margin = '0';
elWelcomeFormBoxLeftTitle.style.padding = '0';
elWelcomeFormBoxLeftTitle.textContent = `Nikingizni kiriting`;
elWelcomeFormBoxLeftTitle.style.color = '#fff3e0';


var elWelcomeFormBoxLeftSecondInput = document.createElement('input');
elWelcomeFormBoxLeft.appendChild(elWelcomeFormBoxLeftSecondInput);
elWelcomeFormBoxLeftSecondInput.type = 'text';
elWelcomeFormBoxLeftSecondInput.setAttribute('maxlength', 20);
elWelcomeFormBoxLeftSecondInput.style.border = 'none';
elWelcomeFormBoxLeftSecondInput.style.borderRadius = '5px';
elWelcomeFormBoxLeftSecondInput.style.backgroundColor = 'transparent';
elWelcomeFormBoxLeftSecondInput.style.boxShadow = '0 0 7px #d6d6d6';
elWelcomeFormBoxLeftSecondInput.style.padding = '7px 12px';
elWelcomeFormBoxLeftSecondInput.style.fontSize = '1.1em';
elWelcomeFormBoxLeftSecondInput.style.marginTop = '4px';
elWelcomeFormBoxLeftSecondInput.style.outline = 'none';
elWelcomeFormBoxLeftSecondInput.style.transition = 'all 0.1s ease-in-out';
elWelcomeFormBoxLeftSecondInput.style.color = '#d6d6d6';
elWelcomeFormBoxLeftSecondInput.toLowerCase;
elWelcomeFormBoxLeftSecondInput.onmousemove = function() {
  elWelcomeFormBoxLeftSecondInput.style.boxShadow = '0 0 15px #d6d6d6';
  elWelcomeFormBoxLeftSecondInput.style.transition = 'all 0.1s ease-in-out';
}
elWelcomeFormBoxLeftSecondInput.onmouseleave = function() {
  elWelcomeFormBoxLeftSecondInput.style.boxShadow = '0 0 7px #d6d6d6';
  elWelcomeFormBoxLeftSecondInput.style.transition = 'all 0.1s ease-in-out';
}
elWelcomeFormBoxLeftSecondInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    elSignInFormBoxButton.click();
  }
});

var elWelcomeFormBoxLeft = document.createElement('div');
elWelcomeSecondFormBox.appendChild(elWelcomeFormBoxLeft);

var elWelcomeFormBoxLeftTitle = document.createElement('h3');
elWelcomeFormBoxLeft.appendChild(elWelcomeFormBoxLeftTitle);
elWelcomeFormBoxLeftTitle.style.fontSize = '18px';
elWelcomeFormBoxLeftTitle.style.margin = '0';
elWelcomeFormBoxLeftTitle.style.padding = '0';
elWelcomeFormBoxLeftTitle.textContent = `Parolingizni kiriting`;
elWelcomeFormBoxLeftTitle.style.color = '#fff3e0';


var elWelcomeFormBoxRightSecondInput = document.createElement('input');
elWelcomeFormBoxLeft.appendChild(elWelcomeFormBoxRightSecondInput);
elWelcomeFormBoxRightSecondInput.type = 'password';
elWelcomeFormBoxRightSecondInput.setAttribute('maxlength', 20);
elWelcomeFormBoxRightSecondInput.style.border = 'none';
elWelcomeFormBoxRightSecondInput.style.borderRadius = '5px';
elWelcomeFormBoxRightSecondInput.style.backgroundColor = 'transparent';
elWelcomeFormBoxRightSecondInput.style.boxShadow = '0 0 7px #d6d6d6';
elWelcomeFormBoxRightSecondInput.style.padding = '7px 12px';
elWelcomeFormBoxRightSecondInput.style.fontSize = '1.1em';
elWelcomeFormBoxRightSecondInput.style.marginTop = '4px';
elWelcomeFormBoxRightSecondInput.style.outline = 'none';
elWelcomeFormBoxRightSecondInput.style.transition = 'all 0.1s ease-in-out';
elWelcomeFormBoxRightSecondInput.style.color = '#d6d6d6';
elWelcomeFormBoxRightSecondInput.onmousemove = function() {
  elWelcomeFormBoxRightSecondInput.style.boxShadow = '0 0 15px #d6d6d6';
  elWelcomeFormBoxRightSecondInput.style.transition = 'all 0.1s ease-in-out';
}
elWelcomeFormBoxRightSecondInput.onmouseleave = function() {
  elWelcomeFormBoxRightSecondInput.style.boxShadow = '0 0 7px #d6d6d6';
  elWelcomeFormBoxRightSecondInput.style.transition = 'all 0.1s ease-in-out';
}
elWelcomeFormBoxRightSecondInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    elSignInFormBoxButton.click();
  }
});

//btn section

var elWelcomeBtnFormBox = document.createElement('div');
elWelcomeForm.appendChild(elWelcomeBtnFormBox);
elWelcomeBtnFormBox.style.display = 'flex';
elWelcomeBtnFormBox.style.alignItems = 'center';
elWelcomeBtnFormBox.style.justifyContent = 'space-between';
elWelcomeBtnFormBox.style.marginTop = '17px';
elWelcomeBtnFormBox.style.position = 'relative';

var elWelcomeBoxBtnBoxLine = document.createElement('div');
elWelcomeBtnFormBox.appendChild(elWelcomeBoxBtnBoxLine);
elWelcomeBoxBtnBoxLine.style.position = 'absolute';
elWelcomeBoxBtnBoxLine.style.width = '100%';
elWelcomeBoxBtnBoxLine.style.height = '1px';
elWelcomeBoxBtnBoxLine.style.backgroundColor = '#d6d6d6';
elWelcomeBoxBtnBoxLine.style.marginTop = '-70px';

var elWelcomeFormBoxLastLeft = document.createElement('div');
elWelcomeBtnFormBox.appendChild(elWelcomeFormBoxLastLeft);

var elWelcomeFormBoxLeftTitle = document.createElement('h3');
elWelcomeFormBoxLastLeft.appendChild(elWelcomeFormBoxLeftTitle);
elWelcomeFormBoxLeftTitle.style.fontSize = '18px';
elWelcomeFormBoxLeftTitle.style.margin = '0';
elWelcomeFormBoxLeftTitle.style.padding = '0';
elWelcomeFormBoxLeftTitle.textContent = `Pulingizni kiriting (sonda)`;
elWelcomeFormBoxLeftTitle.style.color = '#fff3e0';


var elWelcomeFormBoxLeftLastInput = document.createElement('input');
elWelcomeFormBoxLastLeft.appendChild(elWelcomeFormBoxLeftLastInput);
elWelcomeFormBoxLeftLastInput.type = 'number';
elWelcomeFormBoxLeftLastInput.setAttribute('maxlength', 13 );
elWelcomeFormBoxLeftLastInput.style.border = 'none';
elWelcomeFormBoxLeftLastInput.style.borderRadius = '5px';
elWelcomeFormBoxLeftLastInput.style.backgroundColor = 'transparent';
elWelcomeFormBoxLeftLastInput.style.boxShadow = '0 0 7px #d6d6d6';
elWelcomeFormBoxLeftLastInput.style.padding = '7px 12px';
elWelcomeFormBoxLeftLastInput.style.fontSize = '1.1em';
elWelcomeFormBoxLeftLastInput.style.marginTop = '4px';
elWelcomeFormBoxLeftLastInput.style.outline = 'none';
elWelcomeFormBoxLeftLastInput.style.transition = 'all 0.1s ease-in-out';
elWelcomeFormBoxLeftLastInput.style.color = '#d6d6d6';
elWelcomeFormBoxLeftLastInput.onmousemove = function() {
  elWelcomeFormBoxLeftLastInput.style.boxShadow = '0 0 15px #d6d6d6';
  elWelcomeFormBoxLeftLastInput.style.transition = 'all 0.1s ease-in-out';
}
elWelcomeFormBoxLeftLastInput.onmouseleave = function() {
  elWelcomeFormBoxLeftLastInput.style.boxShadow = '0 0 7px #d6d6d6';
  elWelcomeFormBoxLeftLastInput.style.transition = 'all 0.1s ease-in-out';
}
elWelcomeFormBoxLeftLastInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    elSignInFormBoxButton.click();
  }
});

var elSignInFormBoxButton = document.createElement('button');
elWelcomeBtnFormBox.appendChild(elSignInFormBoxButton);
elSignInFormBoxButton.textContent = `Ro'yhatdan o'tish`;
elSignInFormBoxButton.style.marginTop = '24px';
elSignInFormBoxButton.type = 'button';
elSignInFormBoxButton.style.backgroundColor = 'transparent';
elSignInFormBoxButton.style.border = 'none';
elSignInFormBoxButton.style.borderRadius = '5px';
elSignInFormBoxButton.style.color = '#fff3e0';
elSignInFormBoxButton.style.textShadow = '0 0 7px #d6d6d6';
elSignInFormBoxButton.style.fontSize = '1.2em';
elSignInFormBoxButton.style.boxShadow = '0 0 7px #d6d6d6';
elSignInFormBoxButton.style.padding = '8px 22px';
elSignInFormBoxButton.style.cursor = 'pointer';
elSignInFormBoxButton.type = 'button';
elSignInFormBoxButton.onmouseover = function() {
  elSignInFormBoxButton.style.boxShadow = '0 0 13px #d6d6d6';
}
elSignInFormBoxButton.onmouseleave = function() {
  elSignInFormBoxButton.style.boxShadow = '0 0 7px #d6d6d6';
}

var openStatus = true;
var userNameValue = elWelcomeFormBoxLeftFirstInput.value;
var userLastNameValue = elWelcomeFormBoxRightInput.value;

elSignInFormBoxButton.onclick = function() {
  if (elWelcomeFormBoxLeftFirstInput.value === ''|| elWelcomeFormBoxLeftFirstInput.value === null || elWelcomeFormBoxLeftFirstInput.value === undefined || Number(elWelcomeFormBoxLeftFirstInput.value) || elWelcomeFormBoxLeftFirstInput.value.indexOf(' ') >= 0 || elWelcomeFormBoxLeftFirstInput.value.length < 2 || elWelcomeFormBoxLeftFirstInput.value.length > 20) {
    elWelcomeFormBoxLeftFirstInput.style.boxShadow = '0 0 7px #f14d4d';
    elWelcomeFormBoxLeftFirstInput.placeholder = 'Ismingizni kiriting';
    elWelcomeFormBoxLeftFirstInput.value = '';
    openStatus = false;
  } else {
    elWelcomeFormBoxLeftFirstInput.style.boxShadow = '0 0 7px #d6d6d6';
    elWelcomeFormBoxLeftFirstInput.placeholder = '';
    openStatus = true;
    if (elWelcomeFormBoxRightInput.value === ''|| elWelcomeFormBoxRightInput.value === null || elWelcomeFormBoxRightInput.value === undefined || Number(elWelcomeFormBoxRightInput.value) || elWelcomeFormBoxRightInput.value.indexOf(' ') >= 0 || elWelcomeFormBoxRightInput.value.length < 2 || elWelcomeFormBoxRightInput.value.length > 20) {
      elWelcomeFormBoxRightInput.style.boxShadow = '0 0 7px #f14d4d';
      elWelcomeFormBoxRightInput.placeholder = 'Familyangizni kiriting';
      elWelcomeFormBoxRightInput.value = '';
          openStatus = false;
    } else {
      elWelcomeFormBoxRightInput.style.boxShadow = '0 0 7px #d6d6d6';
      elWelcomeFormBoxRightInput.placeholder = '';
      openStatus = true;
      if (elWelcomeFormBoxLeftSecondInput.value === ''|| elWelcomeFormBoxLeftSecondInput.value === null || elWelcomeFormBoxLeftSecondInput.value === undefined || elWelcomeFormBoxLeftSecondInput.value.indexOf(' ') >= 0 || elWelcomeFormBoxLeftSecondInput.value.length < 2 || elWelcomeFormBoxLeftSecondInput.value.length > 20) {
        elWelcomeFormBoxLeftSecondInput.style.boxShadow = '0 0 7px #f14d4d';
        elWelcomeFormBoxLeftSecondInput.placeholder = 'Nikingizni kiriting';
        elWelcomeFormBoxLeftSecondInput.value = '';
            openStatus = false;
      } else {
        elWelcomeFormBoxLeftSecondInput.style.boxShadow = '0 0 7px #d6d6d6';
        elWelcomeFormBoxLeftSecondInput.placeholder = '';
        openStatus = true;
        if (elWelcomeFormBoxRightSecondInput.value === ''|| elWelcomeFormBoxRightSecondInput.value === null || elWelcomeFormBoxRightSecondInput.value === undefined || elWelcomeFormBoxRightSecondInput.value.indexOf(' ') >= 0 || elWelcomeFormBoxRightSecondInput.value.length < 8 || elWelcomeFormBoxRightSecondInput.value.length > 20) {
          elWelcomeFormBoxRightSecondInput.style.boxShadow = '0 0 7px #f14d4d';
          elWelcomeFormBoxRightSecondInput.placeholder = 'Parolingizni kiriting';
          elWelcomeFormBoxRightSecondInput.value = '';
          openStatus = false;
        } else {
          elWelcomeFormBoxRightSecondInput.style.boxShadow = '0 0 7px #d6d6d6';
          elWelcomeFormBoxRightSecondInput.placeholder = '';
          openStatus = true;
          if (elWelcomeFormBoxLeftLastInput.value === ''|| elWelcomeFormBoxLeftLastInput.value === null || elWelcomeFormBoxLeftLastInput.value === undefined || isNaN(elWelcomeFormBoxLeftLastInput.value) || elWelcomeFormBoxLeftLastInput.value.indexOf(' ') >= 0 || elWelcomeFormBoxLeftLastInput.value.length < 0 || elWelcomeFormBoxLeftLastInput.value.length > 20) {
            elWelcomeFormBoxLeftLastInput.style.boxShadow = '0 0 7px #f14d4d';
            elWelcomeFormBoxLeftLastInput.placeholder = 'Pulingizni kiriting';
            elWelcomeFormBoxLeftLastInput.value = '';
            openStatus = false;
          } else {
            elWelcomeFormBoxLeftLastInput.style.boxShadow = '0 0 7px #d6d6d6';
            elWelcomeFormBoxLeftLastInput.placeholder = '';
            openStatus = true;
          }
        }
      }
    }
  }

  if (openStatus === true) {
    elWelcomeBox.style.display = 'none';
    elMain.style.display = 'block';
  }
  userNameValue = elWelcomeFormBoxLeftFirstInput.value;
  userLastNameValue = elWelcomeFormBoxRightInput.value;
  userName.textContent = userNameValue + ' ' + userLastNameValue;
  userNickName.textContent = elWelcomeFormBoxLeftSecondInput.value.toLowerCase();
  userMoney.textContent = elWelcomeFormBoxLeftLastInput.value;
  userMoney = elWelcomeFormBoxLeftLastInput.value;
}                                                              //Sign In BTn

//SIGN IN SECTION

var elWelcomeFormBoxSignIN = document.createElement('div');
elWelcomeForm.appendChild(elWelcomeFormBoxSignIN);
elWelcomeFormBoxSignIN.style.display = 'flex';
elWelcomeFormBoxSignIN.style.alignItems = 'center';
elWelcomeFormBoxSignIN.style.justifyContent = 'space-between';
elWelcomeFormBoxSignIN.style.marginTop = '10px';
elWelcomeFormBoxSignIN.style.display = 'none';

var elWelcomeBoxButtonBoxLine = document.createElement('div');
elWelcomeFormBoxSignIN.appendChild(elWelcomeBoxButtonBoxLine);
elWelcomeBoxButtonBoxLine.style.position = 'absolute';
elWelcomeBoxButtonBoxLine.style.width = '100%';
elWelcomeBoxButtonBoxLine.style.height = '1px';
elWelcomeBoxButtonBoxLine.style.backgroundColor = '#d6d6d6';
elWelcomeBoxButtonBoxLine.style.marginTop = '-70px';

var elWelcomeFormBoxLeft = document.createElement('div');
elWelcomeFormBoxSignIN.appendChild(elWelcomeFormBoxLeft);

var elWelcomeFormBoxLeftTitle = document.createElement('h3');
elWelcomeFormBoxLeft.appendChild(elWelcomeFormBoxLeftTitle);
elWelcomeFormBoxLeftTitle.style.fontSize = '18px';
elWelcomeFormBoxLeftTitle.style.margin = '0';
elWelcomeFormBoxLeftTitle.style.padding = '0';
elWelcomeFormBoxLeftTitle.textContent = `Nikingizni kiriting`;
elWelcomeFormBoxLeftTitle.style.color = '#fff3e0';

var elWelcomeFormBoxLeftSecondSecInput = document.createElement('input');
elWelcomeFormBoxLeft.appendChild(elWelcomeFormBoxLeftSecondSecInput);
elWelcomeFormBoxLeftSecondSecInput.type = 'text';
elWelcomeFormBoxLeftSecondSecInput.value = 'ans_me';
elWelcomeFormBoxLeftSecondSecInput.style.border = 'none';
elWelcomeFormBoxLeftSecondSecInput.style.borderRadius = '5px';
elWelcomeFormBoxLeftSecondSecInput.style.backgroundColor = 'transparent';
elWelcomeFormBoxLeftSecondSecInput.style.boxShadow = '0 0 7px #d6d6d6';
elWelcomeFormBoxLeftSecondSecInput.style.padding = '7px 12px';
elWelcomeFormBoxLeftSecondSecInput.style.fontSize = '1.1em';
elWelcomeFormBoxLeftSecondSecInput.style.marginTop = '4px';
elWelcomeFormBoxLeftSecondSecInput.style.outline = 'none';
elWelcomeFormBoxLeftSecondSecInput.style.transition = 'all 0.1s ease-in-out';
elWelcomeFormBoxLeftSecondSecInput.style.color = '#d6d6d6';
elWelcomeFormBoxLeftSecondSecInput.onmousemove = function() {
  elWelcomeFormBoxLeftSecondSecInput.style.boxShadow = '0 0 15px #d6d6d6';
  elWelcomeFormBoxLeftSecondSecInput.style.transition = 'all 0.1s ease-in-out';
}
elWelcomeFormBoxLeftSecondSecInput.onmouseleave = function() {
  elWelcomeFormBoxLeftSecondSecInput.style.boxShadow = '0 0 7px #d6d6d6';
  elWelcomeFormBoxLeftSecondSecInput.style.transition = 'all 0.1s ease-in-out';
}
elWelcomeFormBoxLeftSecondSecInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    elSignUpBottomBtn.click();
  }
});


var elWelcomeFormBoxLeft = document.createElement('div');
elWelcomeFormBoxSignIN.appendChild(elWelcomeFormBoxLeft);

var elWelcomeFormBoxLeftTitle = document.createElement('h3');
elWelcomeFormBoxLeft.appendChild(elWelcomeFormBoxLeftTitle);
elWelcomeFormBoxLeftTitle.style.fontSize = '18px';
elWelcomeFormBoxLeftTitle.style.margin = '0';
elWelcomeFormBoxLeftTitle.style.padding = '0';
elWelcomeFormBoxLeftTitle.textContent = `Parolingizni kiriting`;
elWelcomeFormBoxLeftTitle.style.color = '#fff3e0';


var elWelcomeFormBoxLeftInput = document.createElement('input');
elWelcomeFormBoxLeft.appendChild(elWelcomeFormBoxLeftInput);
elWelcomeFormBoxLeftInput.type = 'password';
elWelcomeFormBoxLeftInput.value = 'no_password';
elWelcomeFormBoxLeftInput.style.border = 'none';
elWelcomeFormBoxLeftInput.style.borderRadius = '5px';
elWelcomeFormBoxLeftInput.style.backgroundColor = 'transparent';
elWelcomeFormBoxLeftInput.style.boxShadow = '0 0 7px #d6d6d6';
elWelcomeFormBoxLeftInput.style.padding = '7px 12px';
elWelcomeFormBoxLeftInput.style.fontSize = '1.1em';
elWelcomeFormBoxLeftInput.style.marginTop = '4px';
elWelcomeFormBoxLeftInput.style.outline = 'none';
elWelcomeFormBoxLeftInput.style.transition = 'all 0.1s ease-in-out';
elWelcomeFormBoxLeftInput.style.color = '#d6d6d6';
elWelcomeFormBoxLeftInput.onmousemove = function() {
  elWelcomeFormBoxLeftInput.style.boxShadow = '0 0 15px #d6d6d6';
  elWelcomeFormBoxLeftInput.style.transition = 'all 0.1s ease-in-out';
}
elWelcomeFormBoxLeftInput.onmouseleave = function() {
  elWelcomeFormBoxLeftInput.style.boxShadow = '0 0 7px #d6d6d6';
  elWelcomeFormBoxLeftInput.style.transition = 'all 0.1s ease-in-out';
}
elWelcomeFormBoxLeftInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    elSignUpBottomBtn.click();
  }
});

//BTN SECTION

var elWelcomeFormBtnBox = document.createElement('div');
elWelcomeForm.appendChild(elWelcomeFormBtnBox);
elWelcomeFormBtnBox.style.display = 'flex';
elWelcomeFormBtnBox.style.alignItems = 'center';
elWelcomeFormBtnBox.style.justifyContent = 'center';
elWelcomeFormBtnBox.style.marginTop = '10px';
elWelcomeFormBtnBox.style.display = 'none';

var elSignUpBottomBtn = document.createElement('button');
elWelcomeFormBtnBox.appendChild(elSignUpBottomBtn);
elSignUpBottomBtn.textContent = `Kirish`;
elSignUpBottomBtn.style.marginTop = '0';
elSignUpBottomBtn.style.backgroundColor = 'transparent';
elSignUpBottomBtn.style.border = 'none';
elSignUpBottomBtn.style.borderRadius = '5px';
elSignUpBottomBtn.style.color = '#fff3e0';
elSignUpBottomBtn.style.textShadow = '0 0 7px #d6d6d6';
elSignUpBottomBtn.style.fontSize = '1.2em';
elSignUpBottomBtn.style.boxShadow = '0 0 7px #d6d6d6';
elSignUpBottomBtn.style.padding = '8px 12px';
elSignUpBottomBtn.style.cursor = 'pointer';
elSignUpBottomBtn.type = 'button';
elSignUpBottomBtn.onmouseover = function() {
  elSignUpBottomBtn.style.boxShadow = '0 0 15px #d6d6d6';
  elSignUpBottomBtn.style.transition = 'all 0.1s ease-in-out';
}
elSignUpBottomBtn.onmouseleave = function() {
  elSignUpBottomBtn.style.boxShadow = '0 0 7px #d6d6d6';
  elSignUpBottomBtn.style.transition = 'all 0.1s ease-in-out';
}
elSignUpBottomBtn.onclick = function() {
  if (elWelcomeFormBoxLeftSecondSecInput.value === ''|| elWelcomeFormBoxLeftSecondSecInput.value === null || elWelcomeFormBoxLeftSecondSecInput.value === undefined || elWelcomeFormBoxLeftSecondSecInput.value.indexOf(' ') >= 0 || elWelcomeFormBoxLeftSecondSecInput.value.length < 2 || elWelcomeFormBoxLeftSecondSecInput.value.length > 15) {
    elWelcomeFormBoxLeftSecondSecInput.style.boxShadow = '0 0 7px #f14d4d';
    elWelcomeFormBoxLeftSecondSecInput.placeholder = 'Nikingizni kiriting';
    elWelcomeFormBoxLeftSecondSecInput.value = '';
    openStatus = false;
  } else if (!(elWelcomeFormBoxLeftInput.value === 'ans_me')) {
    openStatus = false;
    elWelcomeFormBoxLeftSecondSecInput.style.boxShadow = '0 0 7px #f14d4d';
    elWelcomeFormBoxLeftSecondSecInput.placeholder = 'Noto\'g\'ri nik';
    elWelcomeFormBoxLeftSecondSecInput.value = '';
  } else {
    elWelcomeFormBoxLeftSecondSecInput.style.boxShadow = '0 0 7px #d6d6d6';
    elWelcomeFormBoxLeftSecondSecInput.placeholder = '';
    openStatus = true;
  }
  if (elWelcomeFormBoxLeftInput.value === ''|| elWelcomeFormBoxLeftInput.value === null || elWelcomeFormBoxLeftInput.value === undefined || elWelcomeFormBoxLeftInput.value.indexOf(' ') >= 0 || elWelcomeFormBoxLeftInput.value.length < 8 || elWelcomeFormBoxLeftInput.value.length > 15) {
    elWelcomeFormBoxLeftInput.style.boxShadow = '0 0 7px #f14d4d';
    elWelcomeFormBoxLeftInput.placeholder = 'Parolingizni kiriting';
    elWelcomeFormBoxLeftInput.value = '';
    openStatus = false;
  } else if (!(elWelcomeFormBoxLeftInput.value === 'no_password')) {
    elWelcomeFormBoxLeftInput.value = '';
    openStatus = false;
  }
  else {
    elWelcomeFormBoxLeftInput.style.boxShadow = '0 0 7px #d6d6d6';
    elWelcomeFormBoxLeftInput.placeholder = '';
    openStatus = true;
  }

  if (openStatus === true) {
    elWelcomeBox.style.display = 'none';
    elMain.style.display = 'block';
  }
}

// END WELCOME BOX

var elMain = document.createElement('div');
elContainer.appendChild(elMain);
elMain.style.height = '100vh';
elMain.style.width = '100%';
// elMain.style.display = 'none';

var elHeader = document.createElement('div');
elMain.appendChild(elHeader);
elHeader.style.display = 'flex';
elHeader.style.justifyContent = 'space-between';
elHeader.style.alignItems = 'center';

var elUserBox = document.createElement('div');
elHeader.appendChild(elUserBox);
elUserBox.style.display = 'flex';
elUserBox.style.justifyContent = 'space-between';
elUserBox.style.alignItems = 'center';
elUserBox.style.marginTop = '10px';

var userImg = document.createElement('img');
elUserBox.appendChild(userImg);
userImg.style.width = '52px';
userImg.style.height = '52px';
userImg.src = './img/user.png';
userImg.alt = 'user';
userImg.style.cursor = 'pointer';
userImg.style.borderRadius = '50%';
userImg.style.opacity = '.8';
userImg.onmousemove = function() {
  userImg.style.opacity = '1';
}
userImg.onmouseleave = function() {
  userImg.style.opacity = '.8';
}

var userMain = document.createElement('div');
elUserBox.appendChild(userMain);
userMain.style.marginTop = '1px';

var userName = document.createElement('h2');
userMain.appendChild(userName);
userName.style.fontSize = '1.1rem';
userName.style.margin = '0';
userName.style.padding = '0';
userName.style.color = '#f8f8f8';
userName.style.userSelect = 'none';

var userNickName = document.createElement('h2');
userMain.appendChild(userNickName);
userNickName.style.fontSize = '.9rem';
userNickName.style.margin = '0';
userNickName.style.padding = '0';
userNickName.style.color = '#e2e2e2da';
userNickName.style.textShadow = '0 0 6px #d6d6d6';
userNickName.style.userSelect = 'none';

// USER BALNCE BOX

var elUserBalanceBox = document.createElement('div');
elHeader.appendChild(elUserBalanceBox);
elUserBalanceBox.style.display = 'flex';
elUserBalanceBox.style.justifyContent = 'space-between';
elUserBalanceBox.style.alignItems = 'center';
elUserBalanceBox.style.marginTop = '10px';

var userBalanceImg = document.createElement('img');
elUserBalanceBox.appendChild(userBalanceImg);
userBalanceImg.style.width = '40px';
userBalanceImg.style.height = '40px';
userBalanceImg.src = './img/user-money.png';
userBalanceImg.alt = 'user';
userBalanceImg.style.cursor = 'pointer';
userBalanceImg.style.borderRadius = '50%';
userBalanceImg.style.opacity = '.8';
userBalanceImg.style.marginRight = '6px';

var userMain = document.createElement('div');
elUserBalanceBox.appendChild(userMain);
userMain.style.marginTop = '1px';

var userBlanceName = document.createElement('h2');
userMain.appendChild(userBlanceName);
userBlanceName.textContent = 'balansingiz';
userBlanceName.style.fontSize = '.9rem';
userBlanceName.style.margin = '0';
userBlanceName.style.padding = '0';
userBlanceName.style.color = '#e2e2e2da';
userBlanceName.style.textShadow = '0 0 6px #d6d6d6';
userBlanceName.style.userSelect = 'none';

var userMoney = document.createElement('h2');
userMain.appendChild(userMoney);
userMoney.style.fontSize = '1.1rem';
userMoney.style.margin = '0';
userMoney.style.padding = '0';
userMoney.style.color = '#f8f8f8';
userMoney.style.userSelect = 'none';
userMoney.style.marginTop = '4px';

//CHANGE SECTION

var elChange = document.createElement('div');
elMain.appendChild(elChange);
elChange.style.display = 'flex';
elChange.style.justifyContent = 'center';
elChange.style.alignItems = 'center';
elChange.style.maxWidth = '600px';
elChange.style.margin = '0 auto';
elChange.style.height = '80%';

var elChangeBox = document.createElement('div');
elChange.appendChild(elChangeBox);
elChangeBox.style.width = '100%';

var elChangeBoxTitle = document.createElement('h3');
elChangeBox.appendChild(elChangeBoxTitle);
elChangeBoxTitle.textContent = 'Sayohatni rejalashtirish';
elChangeBoxTitle.style.textAlign = 'center';
elChangeBoxTitle.style.fontSize = '1.3rem';
elChangeBoxTitle.style.margin = '0';
elChangeBoxTitle.style.padding = '0';
elChangeBoxTitle.style.color = '#f8f8f8';
elChangeBoxTitle.style.userSelect = 'none';
elChangeBoxTitle.style.textShadow = '0 0 6px #d6d6d6';


//main change box start

var elChangeSelectBox = document.createElement('div');
elChangeBox.appendChild(elChangeSelectBox);

var elChangeSelectBoxTitle = document.createElement('p');
elChangeSelectBox.appendChild(elChangeSelectBoxTitle);
elChangeSelectBoxTitle.textContent = 'Sayohat qilmoqchi bo\'lgan mamlakattingizni tanlang';
elChangeSelectBoxTitle.style.textAlign = 'start';
elChangeSelectBoxTitle.style.fontSize = '.9rem';
elChangeSelectBoxTitle.style.margin = '0';
elChangeSelectBoxTitle.style.padding = '0';
elChangeSelectBoxTitle.style.color = '#e2e2e2da';
elChangeSelectBoxTitle.style.userSelect = 'none';
elChangeSelectBoxTitle.style.textShadow = '0 0 6px #d6d6d6';
elChangeSelectBoxTitle.style.marginTop = '8px';
elChangeSelectBoxTitle.style.marginBottom = '3px';

var elChangeSelectBoxSelect = document.createElement('select');
elChangeSelectBox.appendChild(elChangeSelectBoxSelect);
elChangeSelectBoxSelect.style.width = '100%';
elChangeSelectBoxSelect.setAttribute('aria-label', '.form-select-lg example');
elChangeSelectBoxSelect.style.height = '25px';
elChangeSelectBoxSelect.style.fontSize = '.8rem';
elChangeSelectBoxSelect.style.border = '1px solid #e2e2e2';
elChangeSelectBoxSelect.style.borderRadius = '50px';
elChangeSelectBoxSelect.style.backgroundColor = 'transparent';
elChangeSelectBoxSelect.style.padding = '0 10px';
elChangeSelectBoxSelect.style.color = '#444';
elChangeSelectBoxSelect.style.outline = 'none';
elChangeSelectBoxSelect.style.textAlign = 'start';
elChangeSelectBoxSelect.onmousemove = function() {
    elChangeSelectBoxSelect.style.boxShadow = '0 0 5px #d6d6d6';
    elChangeSelectBoxSelect.style.transition = '0.2s';
}
elChangeSelectBoxSelect.onmouseout = function() {
    elChangeSelectBoxSelect.style.boxShadow = '0 0 0px #d6d6d6';
}

var elChangeSelectBoxOption = document.createElement('option');
elChangeSelectBoxSelect.appendChild(elChangeSelectBoxOption);
elChangeSelectBoxOption.textContent = 'Mamlakatni tanlang';
// elChangeSelectBoxOption.selected = true;
elChangeSelectBoxOption.disabled = true;

var elChangeSelectBoxSpanOption = document.createElement('option');
elChangeSelectBoxSelect.appendChild(elChangeSelectBoxSpanOption);
elChangeSelectBoxSpanOption.textContent = 'Ispaniya';

var elChangeSelectBoxItalyOption = document.createElement('option');
elChangeSelectBoxSelect.appendChild(elChangeSelectBoxItalyOption);
elChangeSelectBoxItalyOption.textContent = 'Italiya';

var elChangeSelectBoxGreeceOption = document.createElement('option');
elChangeSelectBoxSelect.appendChild(elChangeSelectBoxGreeceOption);
elChangeSelectBoxGreeceOption.textContent = 'Gretsiya';

var elChangeSelectBoxNewZealandOption = document.createElement('option');
elChangeSelectBoxSelect.appendChild(elChangeSelectBoxNewZealandOption);
elChangeSelectBoxNewZealandOption.textContent = 'Yangi Zellandiya';

var elChangeSelectBoxAustraliaOption = document.createElement('option');
elChangeSelectBoxSelect.appendChild(elChangeSelectBoxAustraliaOption);
elChangeSelectBoxAustraliaOption.textContent = 'Avstraliya';

var elChangeSelectBoxPortugaliyaOption = document.createElement('option');
elChangeSelectBoxSelect.appendChild(elChangeSelectBoxPortugaliyaOption);
elChangeSelectBoxPortugaliyaOption.textContent = 'Partugaliya';

var elChangeSelectBoxBrazilOption = document.createElement('option');
elChangeSelectBoxSelect.appendChild(elChangeSelectBoxBrazilOption);
elChangeSelectBoxBrazilOption.textContent = 'Braziliya';

var elChangeSelectBoxIrelandOption = document.createElement('option');
elChangeSelectBoxSelect.appendChild(elChangeSelectBoxIrelandOption);
elChangeSelectBoxIrelandOption.textContent = 'Irlandiya';

var elChangeSelectBoxThailnadOption = document.createElement('option');
elChangeSelectBoxSelect.appendChild(elChangeSelectBoxThailnadOption);
elChangeSelectBoxThailnadOption.textContent = 'Tailand';

var elChangeSelectBoxMexicoOption = document.createElement('option');
elChangeSelectBoxSelect.appendChild(elChangeSelectBoxMexicoOption);
elChangeSelectBoxMexicoOption.textContent = 'Meksika';

var elChangeSelectBoxSwitzerlandOption = document.createElement('option');
elChangeSelectBoxSelect.appendChild(elChangeSelectBoxSwitzerlandOption);
elChangeSelectBoxSwitzerlandOption.textContent = 'Shvetsiya';

var elChangeSelectNetherlandsOption = document.createElement('option');
elChangeSelectBoxSelect.appendChild(elChangeSelectNetherlandsOption);
elChangeSelectNetherlandsOption.textContent = 'Niderlandiya';

var elChangeSelectBoxCanadaOption = document.createElement('option');
elChangeSelectBoxSelect.appendChild(elChangeSelectBoxCanadaOption);
elChangeSelectBoxCanadaOption.textContent = 'Kanada';

var elChangeSelectBoxaAustriaOption = document.createElement('option');
elChangeSelectBoxSelect.appendChild(elChangeSelectBoxaAustriaOption);
elChangeSelectBoxaAustriaOption.textContent = 'Avstriya';

var elChangeSelectBoxNorwaydOption = document.createElement('option');
elChangeSelectBoxSelect.appendChild(elChangeSelectBoxNorwaydOption);
elChangeSelectBoxNorwaydOption.textContent = 'Narvegiya';

var elChangeSelectBoxFinlandOption = document.createElement('option');
elChangeSelectBoxSelect.appendChild(elChangeSelectBoxFinlandOption);
elChangeSelectBoxFinlandOption.textContent = 'Finlandiya';

var elChangeSelectBoxSwedenOption = document.createElement('option');
elChangeSelectBoxSelect.appendChild(elChangeSelectBoxSwedenOption);
elChangeSelectBoxSwedenOption.textContent = 'Shvetsiya';

var elChangeSelectBoxFranceOption = document.createElement('option');
elChangeSelectBoxSelect.appendChild(elChangeSelectBoxFranceOption);
elChangeSelectBoxFranceOption.textContent = 'Fransiya';

var elChangeSelectBoxArgentinaOption = document.createElement('option');
elChangeSelectBoxSelect.appendChild(elChangeSelectBoxArgentinaOption);
elChangeSelectBoxArgentinaOption.textContent = 'Argentina';

var elChangeSelectBoxSingaporeOption = document.createElement('option');
elChangeSelectBoxSelect.appendChild(elChangeSelectBoxSingaporeOption);
elChangeSelectBoxSingaporeOption.textContent = 'Singapur';
elChangeSelectBoxSingaporeOption.value = 'Singapur';

//END COUNTR SELECT BOX

setTimeout(function() {
    elChangeSelectBoxSelect.onchange = function() {
        if (elChangeSelectBoxSelect.value !== 'Mamlakatni tanlang') {
          elChangeSelectTimeBox.style.opacity = '1';
          elChangeSelectTimeBox.style.transform = 'translateY(17px)';
          elChangeSelectTimeBox.style.transition = '.6s';
        }
    }
} , 1000);

var mainSelectvalue = elChangeSelectBoxSelect.value;

setInterval(function() {
  mainSelectvalue = elChangeSelectBoxSelect.value;
  elChangeSelectBoxTimeTitle.textContent = `${mainSelectvalue}ga Qancha vaqtga sayohat qilmoqchisiz`;
  elChangeMainCheckBoxText.textContent = `${mainSelectvalue}da nimalarga pul ishlatmoqchisiz`;
} , 1);


var elChangeSelectTimeBox = document.createElement('div');
elChangeBox.appendChild(elChangeSelectTimeBox);
elChangeSelectTimeBox.style.opacity = '0';
elChangeSelectTimeBox.style.transform = 'translateY(30px)';
elChangeSelectTimeBox.style.marginTop = '-17px';

var elChangeSelectBoxTimeTitle = document.createElement('p');
elChangeSelectTimeBox.appendChild(elChangeSelectBoxTimeTitle);
elChangeSelectBoxTimeTitle.style.textAlign = 'start';
elChangeSelectBoxTimeTitle.style.fontSize = '.8rem';
elChangeSelectBoxTimeTitle.style.margin = '0';
elChangeSelectBoxTimeTitle.style.padding = '0';
elChangeSelectBoxTimeTitle.style.color = '#e2e2e2da';
elChangeSelectBoxTimeTitle.style.userSelect = 'none';
elChangeSelectBoxTimeTitle.style.textShadow = '0 0 6px #d6d6d6';
elChangeSelectBoxTimeTitle.style.marginTop = '8px';
elChangeSelectBoxTimeTitle.style.marginBottom = '3px';

var elChangeSelectBoxTimeSelectForm = document.createElement('form');
elChangeSelectTimeBox.appendChild(elChangeSelectBoxTimeSelectForm);

var elChangeSelectBoxTimeRadioBox = document.createElement('div');
elChangeSelectBoxTimeSelectForm.appendChild(elChangeSelectBoxTimeRadioBox);
elChangeSelectBoxTimeRadioBox.style.display = 'flex';
elChangeSelectBoxTimeRadioBox.style.flexDirection = 'row';
elChangeSelectBoxTimeRadioBox.style.marginTop = '5px';

var elChangeSelectBoxTimeRadioBoxWeekRadio = document.createElement('input');
elChangeSelectBoxTimeRadioBox.appendChild(elChangeSelectBoxTimeRadioBoxWeekRadio);
elChangeSelectBoxTimeRadioBoxWeekRadio.type = 'radio';
elChangeSelectBoxTimeRadioBoxWeekRadio.name = 'time';
elChangeSelectBoxTimeRadioBoxWeekRadio.id = 'week';
elChangeSelectBoxTimeRadioBoxWeekRadio.value = '1Week';
elChangeSelectBoxTimeRadioBoxWeekRadio.style.margin = '0';
elChangeSelectBoxTimeRadioBoxWeekRadio.style.cursor = 'pointer';

var elChangeSelectBoxTimeRadioBoxWeekRadioLabel = document.createElement('label');
elChangeSelectBoxTimeRadioBox.appendChild(elChangeSelectBoxTimeRadioBoxWeekRadioLabel);
elChangeSelectBoxTimeRadioBoxWeekRadioLabel.htmlFor = 'week';
elChangeSelectBoxTimeRadioBoxWeekRadioLabel.textContent = '1 Haftaga';
elChangeSelectBoxTimeRadioBoxWeekRadioLabel.style.margin = '0 5px';
elChangeSelectBoxTimeRadioBoxWeekRadioLabel.style.fontSize = '.9rem';
elChangeSelectBoxTimeRadioBoxWeekRadioLabel.style.color = '#f8f8f8';
elChangeSelectBoxTimeRadioBoxWeekRadioLabel.style.userSelect = 'none';
elChangeSelectBoxTimeRadioBoxWeekRadioLabel.style.textShadow = '0 0 6px #d6d6d6';
elChangeSelectBoxTimeRadioBoxWeekRadioLabel.style.cursor = 'pointer';
elChangeSelectBoxTimeRadioBoxWeekRadioLabel.onmousemove = function() {
  elChangeSelectBoxTimeRadioBoxWeekRadioLabel.style.textShadow = '0 0 20px #d6d6d6';
}
elChangeSelectBoxTimeRadioBoxWeekRadioLabel.onmouseout = function() {
  elChangeSelectBoxTimeRadioBoxWeekRadioLabel.style.textShadow = '0 0 6px #d6d6d6';
}

var elChangeSelectBoxTimeRadioBoxTwoWeekRadio = document.createElement('input');
elChangeSelectBoxTimeRadioBox.appendChild(elChangeSelectBoxTimeRadioBoxTwoWeekRadio);
elChangeSelectBoxTimeRadioBoxTwoWeekRadio.type = 'radio';
elChangeSelectBoxTimeRadioBoxTwoWeekRadio.name = 'time';
elChangeSelectBoxTimeRadioBoxTwoWeekRadio.id = 'twoWeek';
elChangeSelectBoxTimeRadioBoxTwoWeekRadio.value = '2Week';
elChangeSelectBoxTimeRadioBoxTwoWeekRadio.style.margin = '0';
elChangeSelectBoxTimeRadioBoxTwoWeekRadio.style.cursor = 'pointer';

var elChangeSelectBoxTimeRadioBoxTwoWeekRadioLabel = document.createElement('label');
elChangeSelectBoxTimeRadioBox.appendChild(elChangeSelectBoxTimeRadioBoxTwoWeekRadioLabel);
elChangeSelectBoxTimeRadioBoxTwoWeekRadioLabel.htmlFor = 'twoWeek';
elChangeSelectBoxTimeRadioBoxTwoWeekRadioLabel.textContent = '2 Haftaga';
elChangeSelectBoxTimeRadioBoxTwoWeekRadioLabel.style.margin = '0 5px';
elChangeSelectBoxTimeRadioBoxTwoWeekRadioLabel.style.fontSize = '.9rem';
elChangeSelectBoxTimeRadioBoxTwoWeekRadioLabel.style.color = '#f8f8f8';
elChangeSelectBoxTimeRadioBoxTwoWeekRadioLabel.style.userSelect = 'none';
elChangeSelectBoxTimeRadioBoxTwoWeekRadioLabel.style.textShadow = '0 0 6px #d6d6d6';
elChangeSelectBoxTimeRadioBoxTwoWeekRadioLabel.style.cursor = 'pointer';
elChangeSelectBoxTimeRadioBoxTwoWeekRadioLabel.onmousemove = function() {
  elChangeSelectBoxTimeRadioBoxTwoWeekRadioLabel.style.textShadow = '0 0 20px #d6d6d6';
}
elChangeSelectBoxTimeRadioBoxTwoWeekRadioLabel.onmouseout = function() {
  elChangeSelectBoxTimeRadioBoxTwoWeekRadioLabel.style.textShadow = '0 0 6px #d6d6d6';
}

var elChangeSelectBoxTimeRadioBoxMonthRadio = document.createElement('input');
elChangeSelectBoxTimeRadioBox.appendChild(elChangeSelectBoxTimeRadioBoxMonthRadio);
elChangeSelectBoxTimeRadioBoxMonthRadio.type = 'radio';
elChangeSelectBoxTimeRadioBoxMonthRadio.name = 'time';
elChangeSelectBoxTimeRadioBoxMonthRadio.id = 'month';
elChangeSelectBoxTimeRadioBoxMonthRadio.value = '1Month';
elChangeSelectBoxTimeRadioBoxMonthRadio.style.margin = '0';
elChangeSelectBoxTimeRadioBoxMonthRadio.style.cursor = 'pointer';

var elChangeSelectBoxTimeRadioBoxTwoWeekRadioLabel = document.createElement('label');
elChangeSelectBoxTimeRadioBox.appendChild(elChangeSelectBoxTimeRadioBoxTwoWeekRadioLabel);
elChangeSelectBoxTimeRadioBoxTwoWeekRadioLabel.htmlFor = 'month';
elChangeSelectBoxTimeRadioBoxTwoWeekRadioLabel.textContent = '1 Oyga';
elChangeSelectBoxTimeRadioBoxTwoWeekRadioLabel.style.margin = '0 5px';
elChangeSelectBoxTimeRadioBoxTwoWeekRadioLabel.style.fontSize = '.9rem';
elChangeSelectBoxTimeRadioBoxTwoWeekRadioLabel.style.color = '#f8f8f8';
elChangeSelectBoxTimeRadioBoxTwoWeekRadioLabel.style.userSelect = 'none';
elChangeSelectBoxTimeRadioBoxTwoWeekRadioLabel.style.textShadow = '0 0 6px #d6d6d6';
elChangeSelectBoxTimeRadioBoxTwoWeekRadioLabel.style.cursor = 'pointer';
elChangeSelectBoxTimeRadioBoxTwoWeekRadioLabel.onmousemove = function() {
  elChangeSelectBoxTimeRadioBoxTwoWeekRadioLabel.style.textShadow = '0 0 20px #d6d6d6';
}
elChangeSelectBoxTimeRadioBoxTwoWeekRadioLabel.onmouseout = function() {
  elChangeSelectBoxTimeRadioBoxTwoWeekRadioLabel.style.textShadow = '0 0 6px #d6d6d6';
}

var elChangeSelectBoxTimeRadioBoxThreeMonthRadio = document.createElement('input');
elChangeSelectBoxTimeRadioBox.appendChild(elChangeSelectBoxTimeRadioBoxThreeMonthRadio);
elChangeSelectBoxTimeRadioBoxThreeMonthRadio.type = 'radio';
elChangeSelectBoxTimeRadioBoxThreeMonthRadio.name = 'time';
elChangeSelectBoxTimeRadioBoxThreeMonthRadio.id = 'threeMonth';
elChangeSelectBoxTimeRadioBoxThreeMonthRadio.value = '3Month';
elChangeSelectBoxTimeRadioBoxThreeMonthRadio.style.margin = '0';
elChangeSelectBoxTimeRadioBoxThreeMonthRadio.style.cursor = 'pointer';

var elChangeSelectBoxTimeRadioBoxThreeMonthRadioLabel = document.createElement('label');
elChangeSelectBoxTimeRadioBox.appendChild(elChangeSelectBoxTimeRadioBoxThreeMonthRadioLabel);
elChangeSelectBoxTimeRadioBoxThreeMonthRadioLabel.htmlFor = 'threeMonth';
elChangeSelectBoxTimeRadioBoxThreeMonthRadioLabel.textContent = '3 Oyga';
elChangeSelectBoxTimeRadioBoxThreeMonthRadioLabel.style.margin = '0 5px';
elChangeSelectBoxTimeRadioBoxThreeMonthRadioLabel.style.fontSize = '.9rem';
elChangeSelectBoxTimeRadioBoxThreeMonthRadioLabel.style.color = '#f8f8f8';
elChangeSelectBoxTimeRadioBoxThreeMonthRadioLabel.style.userSelect = 'none';
elChangeSelectBoxTimeRadioBoxThreeMonthRadioLabel.style.textShadow = '0 0 6px #d6d6d6';
elChangeSelectBoxTimeRadioBoxThreeMonthRadioLabel.style.cursor = 'pointer';
elChangeSelectBoxTimeRadioBoxThreeMonthRadioLabel.onmousemove = function() {
  elChangeSelectBoxTimeRadioBoxThreeMonthRadioLabel.style.textShadow = '0 0 20px #d6d6d6';
}
elChangeSelectBoxTimeRadioBoxThreeMonthRadioLabel.onmouseout = function() {
  elChangeSelectBoxTimeRadioBoxThreeMonthRadioLabel.style.textShadow = '0 0 6px #d6d6d6';
}

var elChangeSelectBoxTimeRadioBoxSixMonthRadio = document.createElement('input');
elChangeSelectBoxTimeRadioBox.appendChild(elChangeSelectBoxTimeRadioBoxSixMonthRadio);
elChangeSelectBoxTimeRadioBoxSixMonthRadio.type = 'radio';
elChangeSelectBoxTimeRadioBoxSixMonthRadio.name = 'time';
elChangeSelectBoxTimeRadioBoxSixMonthRadio.id = 'sixMonth';
elChangeSelectBoxTimeRadioBoxSixMonthRadio.value = '6Month';
elChangeSelectBoxTimeRadioBoxSixMonthRadio.style.margin = '0';
elChangeSelectBoxTimeRadioBoxSixMonthRadio.style.cursor = 'pointer';

var elChangeSelectBoxTimeRadioBoxSixMonthRadioLabel = document.createElement('label');
elChangeSelectBoxTimeRadioBox.appendChild(elChangeSelectBoxTimeRadioBoxSixMonthRadioLabel);
elChangeSelectBoxTimeRadioBoxSixMonthRadioLabel.htmlFor = 'sixMonth';
elChangeSelectBoxTimeRadioBoxSixMonthRadioLabel.textContent = '6 Oyga';
elChangeSelectBoxTimeRadioBoxSixMonthRadioLabel.style.margin = '0 5px';
elChangeSelectBoxTimeRadioBoxSixMonthRadioLabel.style.fontSize = '.9rem';
elChangeSelectBoxTimeRadioBoxSixMonthRadioLabel.style.color = '#f8f8f8';
elChangeSelectBoxTimeRadioBoxSixMonthRadioLabel.style.userSelect = 'none';
elChangeSelectBoxTimeRadioBoxSixMonthRadioLabel.style.textShadow = '0 0 6px #d6d6d6';
elChangeSelectBoxTimeRadioBoxSixMonthRadioLabel.style.cursor = 'pointer';
elChangeSelectBoxTimeRadioBoxSixMonthRadioLabel.onmousemove = function() {
  elChangeSelectBoxTimeRadioBoxSixMonthRadioLabel.style.textShadow = '0 0 20px #d6d6d6';
}
elChangeSelectBoxTimeRadioBoxSixMonthRadioLabel.onmouseout = function() {
  elChangeSelectBoxTimeRadioBoxSixMonthRadioLabel.style.textShadow = '0 0 6px #d6d6d6';
}

var elChangeMainBox = document.createElement('div');
elChangeBox.appendChild(elChangeMainBox);
elChangeMainBox.style.display = 'flex';
elChangeMainBox.style.alignItems = 'center';

var elChangeMainBoxLine = document.createElement('div');
elChangeMainBox.appendChild(elChangeMainBoxLine);
elChangeMainBoxLine.style.width = '100%';
elChangeMainBoxLine.style.height = '1px';
elChangeMainBoxLine.style.backgroundColor = '#d6d6d6';
elChangeMainBoxLine.style.opacity = '0';
elChangeMainBoxLine.style.marginTop = '40px';

// CHANGE HOTEL BOX START

var elChangeMainCheckBox = document.createElement('div');
elChangeBox.appendChild(elChangeMainCheckBox);
elChangeMainCheckBox.style.display = 'flex';
elChangeMainCheckBox.style.alignItems = 'center';
elChangeMainCheckBox.style.marginTop = '-17px';
elChangeMainCheckBox.style.opacity = '0';
elChangeMainCheckBox.style.position = 'relative';

var elChangeMainCheckBoxText = document.createElement('p');
elChangeMainCheckBox.appendChild(elChangeMainCheckBoxText);
elChangeMainCheckBoxText.style.position = 'absolute';
elChangeMainCheckBoxText.style.fontSize = '.8rem';
elChangeMainCheckBoxText.style.color = '#f8f8f8';
elChangeMainCheckBoxText.style.userSelect = 'none';
elChangeMainCheckBoxText.style.textShadow = '0 0 6px #d6d6d6';
elChangeMainCheckBoxText.style.marginTop = '-14px';

setInterval(function() {
  if (elChangeSelectBoxTimeRadioBoxWeekRadio.checked || elChangeSelectBoxTimeRadioBoxTwoWeekRadio.checked || elChangeSelectBoxTimeRadioBoxMonthRadio.checked || elChangeSelectBoxTimeRadioBoxThreeMonthRadio.checked || elChangeSelectBoxTimeRadioBoxSixMonthRadio.checked) {
    elChangeMainBoxLine.style.opacity = '.5';
    elChangeMainBoxLine.style.transform = 'translateY(-12px)';
    elChangeMainCheckBox.style.opacity = '1';
    elChangeMainCheckBox.style.transform = 'translateY(17px)';
    elChangeMainCheckBox.style.transition = '.5s';
    elChangeMainBoxLine.style.transition = '.5s';
  } else {
  }
}, 1);

var elChangeMainHotelCheckBox = document.createElement('div');
elChangeMainCheckBox.appendChild(elChangeMainHotelCheckBox);
elChangeMainHotelCheckBox.setAttribute('class', 'form-check form-switch');
elChangeMainHotelCheckBox.style.marginTop = '1px';

var elChangeMainSwitchInput = document.createElement('input');
elChangeMainHotelCheckBox.appendChild(elChangeMainSwitchInput);
elChangeMainSwitchInput.type = 'checkbox';
elChangeMainSwitchInput.setAttribute('class', 'form-check-input');
elChangeMainSwitchInput.id = 'flexSwitchCheckDefault';
elChangeMainSwitchInput.setAttribute('role', 'switch');
elChangeMainSwitchInput.style.marginTop = '7px';

var elChangeMainSwitchLabel = document.createElement('label');
elChangeMainHotelCheckBox.appendChild(elChangeMainSwitchLabel);
elChangeMainSwitchLabel.setAttribute('class', 'form-check-label text-light');
elChangeMainSwitchLabel.setAttribute('for', 'flexSwitchCheckDefault');
elChangeMainSwitchLabel.textContent = 'Mehmonhona';
elChangeMainSwitchLabel.style.fontSize = '1rem';
elChangeMainSwitchLabel.style.textShadow = '0 0 6px #d6d6d6';
elChangeMainSwitchLabel.style.userSelect = 'none';
elChangeMainSwitchLabel.style.marginTop = '9px';

// CHANGE HOTEL BOX EDN
// CHANGE HOTEL SWITCH BOX START

var elChangeMainSwitchRadioBox = document.createElement('div');
elChangeMainCheckBox.appendChild(elChangeMainSwitchRadioBox);
elChangeMainSwitchRadioBox.setAttribute('class', 'form-check form-check-inline');

var elChangeMainSwitchRadioInput = document.createElement('input');
elChangeMainSwitchRadioBox.appendChild(elChangeMainSwitchRadioInput);
elChangeMainSwitchRadioInput.type = 'checkbox';
elChangeMainSwitchRadioInput.setAttribute('class', 'form-check-input');
elChangeMainSwitchRadioInput.id = 'inlineCheckbox1';
elChangeMainSwitchRadioInput.setAttribute('value', 'option1');

var elChangeMainSwitchRadioLabel = document.createElement('label');
elChangeMainSwitchRadioBox.appendChild(elChangeMainSwitchRadioLabel);
elChangeMainSwitchRadioLabel.setAttribute('class', 'form-check-label text-light');
elChangeMainSwitchRadioLabel.setAttribute('for', 'inlineCheckbox1');
elChangeMainSwitchRadioLabel.textContent = 'Kredit';
elChangeMainSwitchRadioLabel.style.fontSize = '1rem';
elChangeMainSwitchRadioLabel.style.textShadow = '0 0 6px #d6d6d6';
elChangeMainSwitchRadioLabel.style.userSelect = 'none';
elChangeMainSwitchRadioLabel.style.marginTop = '5px';

// CHANGE HOTEL SWITCH BOX START

// END CREATING END STYLING