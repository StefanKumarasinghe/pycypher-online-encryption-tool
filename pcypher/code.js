var outputtext="HIIIIIIIIIIIIIIII";
var timeval= 24;
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const opening=[
"How are you today!",
"Are you Ok?",
"Great place to send secret love letters",
"It's worth the wait",
"We can't save your love but we sure can hide it",
"Would you wait for her/him?",
"What is that special message you have for us?",
"Keep waiting, seriously don't you have anything to do",
"Message left unopen is the best slap to the face",
"Let's crack your message, together",
"Ahhh you're back...",
"What if the message you're about to crack has nothing in it?",
"AES is Symmetric encryption and uses around 256 bits to encrypt the messages",
"AES makes your messages or letters unbreakable without the code",
"Once the code is compromised or leaked anyone can intercept your secrets",
"It will take a Quantumn computer 2.29*10^32 years to crack this message without the code",
"You can create your own unique code to enrypt the message and use always that same key",
"There is no reason for you to be here",
"Pcypher is a vaccine..",
"Pycher is created for fun by Stefan Ralph",
"If you're refreshing this page to see me, you're a dumbass"

]




var txt=opening[getRndInteger(0, 21)]

var i = 0;

var speed = 50;

function typeWriter() {

  if (i < txt.length) {
    document.getElementById("opening-message").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function time() {

var x = document.getElementById("timeall")
var y = document.getElementById("timecustom")
if (x.value=="CUSTOM") {
y.style="display:block";
y.autofocus;
}
else {
y.style="display:none";
}
if (x.value=="1 DAY") {
timeval = 24;
}else if (x.value=="1 WEEK") {
timeval = 24*7;
}
else if (x.value=="1 YEAR") {
timeval = 24*365;
}
else if (x.value=="1 DECADE") {
timeval = 24*3650;
}

}
function customtimeval(y){
var x = Number(y.value);
if (x<100000000 || x>=0){
timeval = x
} else {
timeval = 24;
}
}
function generateHexString(length) {
  var ret = "";
  while (ret.length < length) {
    ret += Math.random().toString(16).substring(2);
  }
  return ret.substring(0,length);
}

function decrypt() {
    var cipher = document.getElementById("inputbox").value;
    var key = document.getElementById("key").value;

    var output = document.getElementById("outbox");
    var decryptedBytes = CryptoJS.AES.decrypt(cipher.toString(), key.toString());
    var plaintext = decryptedBytes.toString(CryptoJS.enc.Utf8);

     document.getElementById("outbox").style="display:block";
     document.getElementById("encryptbtn").style="display:none";
     document.getElementById("inputbox").style="display:none";
     document.getElementById("key").style="display:none";

 

 var location = plaintext.indexOf("HOURS");

 //var value = plaintext.slice(0,location);
 var newplaintext=plaintext.slice(location+5)
 outputtext=newplaintext;
 
 Writer();



   }

   
var printcount = 0;



function Writer() {

  if (printcount < outputtext.length) {
    
    document.getElementById("outbox").value += outputtext.charAt(printcount);

    printcount++;
    setTimeout(Writer, speed);
  }
}


function encrypt() {

 var plaintext = document.getElementById("inputbox").value;

 plaintext=timeval+"HOURS"+plaintext

 var keyvalue="";
 if (document.getElementById("key").value=="") {
  keyvalue=generateHexString(58);
 }else {
  keyvalue=document.getElementById("key").value;
 }



// 256-bit WEP: 58 digit key

 var encryptedAES = CryptoJS.AES.encrypt(plaintext, keyvalue);
 var output = document.getElementById("outbox");
 var key = document.getElementById("key");
 output.innerHTML=encryptedAES
 key.value=keyvalue
 document.getElementById("outbox").style="display:block";
 document.getElementById("encryptbtn").style="display:none";
 document.getElementById("timeall").style="display:none";
  
}


function copy(val) {
  /* Get the text field */
  var copyText = document.getElementById(val);

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);


}

