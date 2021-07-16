const parseCount = (numb) => {
  let parsed =  parseInt(numb);
    if (isNaN(parsed)) {
      throw new Error("Невалидное значение");      
    }
  return parsed;
}

const validateCount = (argument) => {
  try {
    return parseCount(argument);
  } catch (error) {
    return error;
  } 
}

class Triangle {
  constructor(a, b, c)  {
    this.a = a;
    this.b = b;
    this.c = c;
    if (a + b < c || b + c < a || a + c < b) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea() {
    let hlafP = 0.5  * this.getPerimeter();
    let s = Math.sqrt(hlafP * (hlafP - this.a) * (hlafP - this.b) * (hlafP - this.c));
    return Number(s.toFixed(3));
  }
}

const getTriangle = (a, b, c) => {
  try {
    return new Triangle (a, b, c);
  } catch (error) {
    return {
      getArea: () => {
        return 'Ошибка! Треугольник не существует';
      },
      getPerimeter: () => {
        return 'Ошибка! Треугольник не существует';
      }
    }
  }
}