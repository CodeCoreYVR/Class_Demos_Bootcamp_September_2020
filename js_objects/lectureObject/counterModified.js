const counter={
    currentCount:0,
    step:1,
    setStep(step){
        this.step=step;
        return this;
    },
    set(n){
        this.currentCount=n;
        return this;
    },
    inc:function(){
        this.currentCount+=this.step;
        // a+=1 // a=a+1
        // a+=5 // a=a+5
        return this;
    },
    dec:function(){
        this.currentCount-=this.step;
        return this;
    },
    now:function(){
        // console.log(this.currentCount);
        return this.currentCount;
    }
}

// console.log(counter.now());
// counter.inc();
// counter.inc();
// console.log(counter.now());
// counter.dec();
// console.log(counter.now());
// counter.set(5000);
// console.log(counter.now());
// counter.dec();
// console.log(counter.now());
// counter.setStep(5);
// counter.inc();
// console.log(counter.now());
// counter.setStep(100);
// counter.inc();
// console.log(counter.now());

console.log(counter.set(500).inc().setStep(300).inc().now());
