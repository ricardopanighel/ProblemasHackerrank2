function timeConversion(s) {
    let AmOrPm = s.slice(8, 10);
    let inteiroHora = parseInt(s.slice(0,2));
    let MinSec = s.slice(2,8)
    
    if (AmOrPm === "AM" && inteiroHora === 12) { 
        inteiroHora = "00";
    } else if (AmOrPm === "PM" && inteiroHora != 12) { 
        inteiroHora += 12;
}
    return inteiroHora.toString().padStart(2, "0") + MinSec;
}
