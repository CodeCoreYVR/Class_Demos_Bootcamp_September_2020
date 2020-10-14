// Create the Counter constructor using Class Syntax

class Counter {
  constructor(start = 0, step = 5) {
    this.count = start;
    this.step = step;
  }

  inc() {
    this.count = this.count + this.step;
    return this;
  }

  dec() {
    this.cont = this.count - this.step;
    return this;
  }

  now() {
    return this.count;
  }

  setStep(newStep) {
    this.step = newStep
    return this;
  }
}

const c1 = new Counter(0, 1);
c1.inc();
c1.inc();
c1.inc();
c1.setStep(10);
c1.inc();
console.log(c1.now());

const c2 = new Counter(0, 1);
c2.inc().inc().inc().setStep(10).inc();
console.log(c2.now());
