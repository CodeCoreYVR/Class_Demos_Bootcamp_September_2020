const counter={
    currentCount:0,
    set(n){
        this.currentCount=n;
    },
    inc:function(){
        this.currentCount++;
    },
    dec:function(){
        this.currentCount--;
    },
    now:function(){
        // console.log(this.currentCount);
        return this.currentCount;
    }
}

console.log(counter.now());
counter.inc();
counter.inc();
counter.now();
counter.dec();
counter.now();
counter.set(5000);
counter.now();
counter.dec();
console.log(counter.now());