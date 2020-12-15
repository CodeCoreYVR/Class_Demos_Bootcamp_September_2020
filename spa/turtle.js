class Turtle{
    constructor(x, y){
        this.x = x
        this.y = y
        this.dir = 'right'
        this.face = 'n'
        this.points = [`${this.x},${this.y}`]
    }
    addPoints(){
        this.points.push(`${this.x},${this.y}`);
    }
    allPoints(){
        console.log(this.points); 
    }
    print(){ 
        console.log(this.points.map((i)=>[parseInt(i[0]), parseInt(i[2])]).sort((a,b)=>a[1]-b[1])); 
    } 
    forward(n) {
        if (this.dir == 'right' && this.face =='n'){
            this.x += n
            this.face = 'e'
            this.addPoints()
            return this
        }
        if (this.dir == 'right' && this.face =='e'){
            this.y += n
            this.face = 's'
            this.addPoints()
            return this
        }
        if (this.dir == 'right' && this.face =='s'){
            this.x -= n
            this.face = 'w'
            this.addPoints()
            return this
        }
        if (this.dir == 'right' && this.face =='w'){
            this.y -= n
            this.face = 'n'
            this.addPoints()
            return this
        }
        if (this.dir == 'left' && this.face =='n'){
            this.x -= n
            this.face='w'
            this.addPoints()
            return this
        }
        if (this.dir == 'left' && this.face =='e'){
            this.y -= n
            this.face='n'
            this.addPoints()
            return this
        }
        if (this.dir == 'left' && this.face =='s'){
            this.x += n
            this.face='e'
            this.addPoints()
            return this
        }
        if (this.dir == 'left' && this.face =='w'){
            this.y += n
            this.face='s'
            this.addPoints()
            return this
        }
        return this
    }
    right(){
        if (this.dir=='left' && this.face=='n'){
            this.dir='right'
            this.face=='s'
        } 
        if (this.dir=='left' && this.face=='e'){
            this.dir='right'
            this.face=='w'
        } 
        if (this.dir=='left' && this.face=='s'){
            this.dir='right'
            this.face=='n'
        } 
        if (this.dir=='left' && this.face=='w'){
            this.dir='right'
            this.face=='e'
        } 
        return this
    }
    left(){
        if (this.dir=='right' && this.face=='n'){
            this.dir='left'
            this.face=='s'
        } 
        if (this.dir=='right' && this.face=='e'){
            this.dir='left'
            this.face=='w'
        } 
        if (this.dir=='right' && this.face=='s'){
            this.dir='left'
            this.face=='n'
        } 
        if (this.dir=='right' && this.face=='w'){
            this.dir='left'
            this.face=='e'
        } 
        return this
    }
}
// speedturtle = new Turtle(0,0).forward(2).right().forward(5).right().forward(2).allPoints()
// [ '0,0', '2,0', '2,5', '0,5' ] 
// speedturtle1 = new Turtle(0, 4).forward(3).left().forward(3).right().forward(3).allPoints()
// [ '0,4', '3,4', '3,1', '6,1' ] 
// speedturtle2 = new Turtle(0,0).forward(3).right().forward(2).allPoints()
// [ '0,0', '3,0', '3,2' ]
// speedturtle3 = new Turtle(0, 4).forward(3).left().forward(3).allPoints()
// [ '0,4', '3,4', '3,1' ]
speedturtle4 = new Turtle(0, 4).forward(3).left().forward(3).right().forward(5).right().forward(8).right().forward(5).right().forward(3).left().forward(3).print()
// ['0,4', '3,4', '3,1', '8,1', '8,9', '3,9', '3,6', '0,6']
console.log( ' '.repeat(3) + '#'.repeat(1+Math.abs(3-8)) )
console.log( ' '.repeat(3) + '#'.repeat(1+Math.abs(0-0)) + ' '.repeat(Math.abs(3-8) -1) + '#'.repeat(1))
console.log( ' '.repeat(3) + '#'.repeat(1+Math.abs(0-0)) + ' '.repeat(Math.abs(3-8) -1) + '#'.repeat(1))
console.log( ' '.repeat(0) + '#'.repeat(1+Math.abs(0-3)) + ' '.repeat(Math.abs(3-8) -1) + '#'.repeat(Math.abs(3-4)))
console.log( ' '.repeat(3) + '#'.repeat(Math.abs(0-0)) + ' '.repeat(Math.abs(3-8) ) + '#'.repeat(1))
console.log( ' '.repeat(0) + '#'.repeat(1+Math.abs(0-3)) + ' '.repeat(Math.abs(3-8) -1) + '#'.repeat(1) )
console.log( ' '.repeat(3) + '#'.repeat(1+Math.abs(0-0)) + ' '.repeat(Math.abs(3-8) -1) + '#'.repeat(1))
console.log( ' '.repeat(3) + '#'.repeat(1+Math.abs(0-0)) + ' '.repeat(Math.abs(3-8) -1) + '#'.repeat(1))
console.log( ' '.repeat(3) + '#'.repeat(1+Math.abs(8-3)) )