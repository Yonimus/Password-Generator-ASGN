const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// inputs
var length;
var uber;
var unter;
var spec;
var num;

// character arrays
var uber = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M','Ü']
var unter = ['ü','q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
var num = ['1','2','3','4','5','6','7','8','9','0']
var spec = ['!','@','#','$','%','^','&','*','(',')','-','_','+','=','[',']','{','}','"',"'",'/','.','<','>','`','~']

function writePassword(){
  length = prompt('Your Password length can be between 8 & 128 Characters.');
  if (isNaN(length)|| length <8 || length >128){
    confirm('Did you read: "between 8 & 128 Characters."');
    return;
  }
  uber = confirm('Should your password contain uppercase letters?')
  unter = confirm('Should your password contain lowercase letters?')
  spec = confirm('Should your password contain special characters? i.e. ?/>! etc.')
  num = confirm('Should your password contain numbers?')

  if(!uber && !unter && !spec && !num) {
    confirm("Your password cannot be blank, please select at least one set of characters")
    return;
  }
  function receiveSelectedChar(uber, unter, spec, num){
    var selectedChar = [];
    if (uber) {
      selectedChar = selectedChar.concat(uber);
    }
    if (unter) {
      selectedChar = selectedChar.concat(unter);
    }
    if (spec) {
      selectedChar = selectedChar.concat(spec);
    }
    if (num) {
      selectedChar = selectedChar.concat(num);
    }
    return selectedChar;
  }
  var password = generatePassword();
  var passwordText = document.querySelector('#password');  
  passwordText.value = password;

  function getRandomCharacters(selectedChar){
    return selectedChar[Math.floor(Math.random()* selectedChar.length)]
  }

  function generatePassword(length) {
    var password = "";
    var selectedChar = receiveSelectedChar(uber, unter, spec, num);
    for (var i = 0; i < length; i++) {
      password = password + getRandomCharacters(selectedChar);
    }
    return password;
  }
};
