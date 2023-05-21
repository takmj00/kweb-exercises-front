const isValidNumber = x => {
    let Xnumber = parseInt(x);
    if (Xnumber > 0 && Xnumber < 10){
        if (x == Xnumber){
            return true;
        }
    }
    else {
        return false;
    }
}
