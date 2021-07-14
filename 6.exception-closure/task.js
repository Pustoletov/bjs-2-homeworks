const parseCount = (numb) => {
  let parsed =  parseInt(numb);
    if (isNaN(parsed)) {
      const nanError = new Error("Невалидное значение");
      throw nanError;
    }
  return parsed;
}

const validateCount = (argument) => {
  try {
    parseCount(argument);
  } catch (error) {
    return error;
  } 
  return parseCount(argument)
}

class Triangle {
  constructor(a, b, c)  {
    this.a = a;
    this.b = b;
    this.c = c;
    if (this.a + this.b < this.c || this.b + this.c < this.a || this.a + this.c < this.b) {
      const triangleError = new Error("Треугольник с такими сторонами не существует");
      throw triangleError;
    }
  }

  getPerimeter() {
    let p = this.a + this.b + this.c;
    return p;
  }

  getArea() {
    let hlafP = 0.5  * (this.a + this.b + this.c);
    let s = Math.sqrt(hlafP * (hlafP - this.a) * (hlafP - this.b) * (hlafP - this.c));
    return Number(s.toFixed(3));
  }
}

const getTriangle = (a, b, c) => {
  const triangle = new Triangle (a, b, c)
  try {
    triangle;
  } catch (error) {
    return {
      getArea: () => {
        return "Ошибка! Треугольник не существует!";
      },
      getPerimeter: () => {
        return "Ошибка! Треугольник не существует!";
      }
    }
  }
  return triangle
}