function random(min,max,raw=false){
    if(raw)return Math.random() * (max - min + 1) / 1 + min;else return Math.floor(Math.random() * (max - min + 1) / 1 + min);
}
