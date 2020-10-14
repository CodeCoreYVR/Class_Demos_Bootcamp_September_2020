function Vector(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
}

Vector.prototype.plus = function(vector) {
  return new Vector(this.x + vector.x, this.y + vector.y, this.z + vector.z)
}

Vector.prototype.minus = function(vector) {
  return new Vector(this.x - vector.x, this.y - vector.y, this.z - vector.z)
}

Vector.prototype.magnitude = function() {
  return (this.x ** 2 + this.y ** 2 + this.z ** 2) ** (1/2);
}

const v1 = new Vector(4,4,0);
const v2 = new Vector(1,2,2);

const v3 = v1.plus(v2);
console.log(v3);

const v4 = v1.minus(v2);
console.log(v4);

const v1Magnitude = v1.magnitude();
console.log(v1Magnitude);

// Class Version
class VectorClass {
	constructor(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
	}

	plus(vector) {
		return new VectorClass(this.x + vector.x, this.y + vector.y, this.z + vector.z);
	}

	minus(vector) {
		return new VectorClass(this.x - vector.x, this.y - vector.y, this.z - vector.z);
	}

	magnitude() {
		return (this.x ** 2 + this.y ** 2 + this.z ** 2) ** (1 / 2);
	}
}