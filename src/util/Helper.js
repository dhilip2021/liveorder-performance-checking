
import moment from "moment";
import capsules from "../assets/images/capsules.svg"
import injectable from "../assets/images/injectable.svg"
import drops from "../assets/images/drops.svg"
import oral from "../assets/images/oral_sus.svg"
import tablet from "../assets/images/tablet.svg"
import powder from "../assets/images/Powder.svg"
import oinments from "../assets/images/ointments.svg"
import Ampoules from "../assets/images/Ampoules.svg"
import Inhalers from "../assets/images/Inhalers.svg"



export function convertToSlug(Text) {
    try{
    return Text
            .toLowerCase()
            .replace(/[^a-zA-Z0-9\s]+/g,'')
            .replace(/\s+/g,'-')
            .replace(/^-+/g,'')
            .replace(/-+$/g,'');
    }
    catch(err){
return Text
    }
}

export function toTitleCase(phrase) {
    return phrase
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
export function getCurrentDate(separator=''){

    let myCurrentDate = new Date()
    let date = myCurrentDate.getDate();
    let month = myCurrentDate.getMonth() + 1;
    let year = myCurrentDate.getFullYear();
    
    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    }
    
export function validateFirmName(value){
    if(!/^(?=.*[a-zA-Z]).{4,128}$/.test(value)){
        return true
    }
    else{
        return false
    }
}

export function validateEmail(value){
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        return true
    }
    else{
        return false
    }
}

export function validateGst(value){
    if(!/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(value)){
        return true
    }
    else{
        return false
    }
}

export function validatePanNo(value){
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value)) {
       return true
    }
    else{
        return false
    }
}

export function validateTanNo(value){
    if (!/^[A-Z]{4}[0-9]{5}[A-Z]{1}$/.test(value)) {
       return true
    }
    else{
        return false
    }
}

export function validateContactPersonName(value){
    if (!/^[A-Za-z\s]+$/.test(value) || value.length < 4 || value.length > 40) {
        return true
    }
    else{
        return false
    }
}



export function validatePincode(value){
    if (!/^[1-9]\d{5}$/.test(value)) {
       return true
    }
    else{
        return false
    }
}

export function checkInitialSpace(value){
    if(/^\s/.test(value)){
        return true
    }
    else{
        return false
    }
}

export function checkDuplicateSpaces(value){
if(/\s\s+/g.test(value)){
    return true
}
else{
    return false
}
}

export function removeTrailSpace(value){
    let res
    if(value === undefined)
    {
        res = ""

    }
    else{
        let trimmedStr = value.replace(/\s\s*$/,'')
        res = trimmedStr.trim()
    }

    return res

}


export function preventSpecialChar(value){
    if(/[$&+,:;=?[\]@#|{}'<>.^*()%!-/]/.test(value)){
        return true
    }
}

export const specialCharArray = [ "+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
    "~", "*", "?", ":","\"","\\","@","!","#","$","%","^","&","*","(",")","<",">","_","/","|","=","."]
    

 export function currencySeparator(x) {
     if(x){
        return x.toString().split('.')[0].length > 3 ? x.toString().substring(0,x.toString().split('.')[0].length-3).replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + x.toString().substring(x.toString().split('.')[0].length-3): x.toString();
     }
     else{
         return x
     }
    }

    export function DayToYearDate(date){
        if(date){

// let tempDate = date.split("-").reverse().join("-")
let temp = new Date(date)
 let tempDate = moment(temp).format('DD-MMM-YYYY')
 return tempDate
        }
        else{
            return date
        }
    }

    export function Timeconvert24(time){
            if(time){
                let tempTime = time;
                let H = +tempTime.substr(0, 2);
                let h = (H % 12) || 12;
                h = (h < 10)?("0"+h):h;  
                let ampm = H < 12 ? " AM" : " PM";
                tempTime = h + tempTime.substr(2, 3) + ampm;
                return tempTime;  
            }else {
                return time
            }


    }
    var num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
    var tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

export function number2words(n){
  if (n < 20) return num[n];
    var digit = n%10;
    if (n < 100) return tens[~~(n/10)-2] + (digit? "-" + num[digit]: "");
    if (n < 1000) return num[~~(n/100)] +" hundred" + (n%100 == 0? "": " " + number2words(n%100));
    return number2words(~~(n/1000)) + " thousand" + (n%1000 != 0? " " + number2words(n%1000): "");
}

export function randomStrGenerator() {
    let length = 5;
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}


// function encodeWithKey (salt) {
//     const textToChars = text => text.split('').map(c => c.charCodeAt(0));
//     const byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
//     const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);

//     return text => text.split('')
//       .map(textToChars)
//       .map(applySaltToChar)
//       .map(byteHex)
//       .join('');
// }
    
// function decodeWithKey(salt) {
//     const textToChars = text => text.split('').map(c => c.charCodeAt(0));
//     const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);
//     return encoded => encoded.match(/.{1,2}/g)
//       .map(hex => parseInt(hex, 16))
//       .map(applySaltToChar)
//       .map(charCode => String.fromCharCode(charCode))
//       .join('');
// }

// export const urlEncoder = encodeWithKey('mySecretSalt')
// export const urlDecoder = decodeWithKey('mySecretSalt')





function generateKey() {
    var str = "";
    var tar;
    tar = new Array();
    for (var c = 0; c < _charset.length; c++) {
        tar.push(_charset.substr(c, 1));
    }
    for (var c = 0; c < _charset.length; c++) {
        str += tar.splice(Math.round(Math.random() * (tar.length - 1)), 1);
    }
    return str;
}

// var _charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789%";
var _charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function encrypt(v, _key) {
    var str = "";
    var key = _key;
    if (_key.length > 0 && v.length > 0) {
        //v = Server.URLEncode(v);
        for (var c = 0; c < v.length; c++) {
            var ch = _charset.indexOf(v.substr(c, 1));
            if (ch > -1) {
                str += key.substr(ch, 1);
                key = rotateKey(key, v.charCodeAt(c));
            }
        }
        return str;
    } else {
        return "";
    }
}

function decrypt(v, _key) {
    var str = "";
    var key = _charset;
    if (_key.length > 0 && v.length > 0) {
        for (var c = 0; c < v.length; c++) {
            var ch = _key.indexOf(v.substr(c, 1));
            if (ch > -1) {
                str += key.substr(ch, 1);
                key = rotateKey(key, -key.charCodeAt(ch));
            }
        }
        return str;
    } else {
        return "";
    }
}

function rotateKey(s, amt) {
    amt = amt % s.length;
    if (amt < 0) {
        amt = s.length + amt;
    }
    if (amt != 0) {
        return s.substr(s.length - amt, amt) + s.substr(0, s.length - amt);
    } else {
        return unescape(s);
    }
}


var key = generateKey();

export function urlEncoder (pass){
    var msg = ""
var encryptedString = encrypt(pass, key);
    msg = encryptedString;

    return msg

}


export function urlDecoder(encryptedString){
    var msg = ""
var originalString = decrypt(encryptedString, key);
msg = originalString;

return msg
}
function decodeWithKey(salt) {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);
    return encoded => encoded.match(/.{1,2}/g)
      .map(hex => parseInt(hex, 16))
      .map(applySaltToChar)
      .map(charCode => String.fromCharCode(charCode))
      .join('');
}

// export const urlEncoder = encodeWithKey('mySecretSalt')
// export const urlDecoder = decodeWithKey('mySecretSalt')

export function contextMenu(){
    document.addEventListener('contextmenu', event => event.preventDefault());
document.oncontextmenu = document.body.oncontextmenu = function() {return false;}
document.onkeydown = function(e) {
  if(e.key === 123) {
     return false;
  }
  else if(e.ctrlKey && e.shiftKey && e.key === 'I'.charCodeAt(0)) {
     return false;
  }
  else if(e.ctrlKey && e.shiftKey && e.key === 'i'.charCodeAt(0)) {
    return false;
 }
  else if(e.ctrlKey &&  e.key === 'I'.charCodeAt(0)) {
    return false;
 }
 else if(e.ctrlKey &&  e.key === 'i'.charCodeAt(0)) {
    return false;
 }
  else if(e.ctrlKey && e.shiftKey && e.key === 'C'.charCodeAt(0)) {
     return false;
  }
  else if(e.ctrlKey && e.shiftKey && e.key === 'J'.charCodeAt(0)) {
     return false;
  }
  else if(e.ctrlKey && e.key === 'U'.charCodeAt(0)) {
     return false;
  }
}
}
export function detectBrowser() { 
    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {
        return 'WEB (Opera)';
    } else if(navigator.userAgent.indexOf("Chrome") != -1 ) {
        return 'WEB (Chrome)';
    } else if(navigator.userAgent.indexOf("Safari") != -1) {
        return 'WEB (Safari)';
    } else if(navigator.userAgent.indexOf("Firefox") != -1 ){
        return 'WEB (Firefox)';
    } else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {
        return 'WEB (IE)';
    } else {
        return 'WEB (Unknown)';
    }
} 

export const getDefaultProductImage = (type) => {
    switch (type) {
        case "CONTAINER":
         return Ampoules
        case "STRIPS":
            return capsules
        case "INHALER":
            return Inhalers
        case "DROPS":
            return drops
        case "BOTTLE":
            return injectable
        case "DEVICE":
            return oral
        case "TUBE":
            return oinments
        case "INJECTION":
            return injectable
        case "POWDER":
            return powder
        case "JAR":
            return injectable
        case "SUGAR STRIPS":
            return capsules
        case "BOX":
             return injectable
        case "BAR":
             return oral
        case "POUCH":
             return tablet
        case "PACKET":
            return capsules
        default :
        return capsules
      }
}

