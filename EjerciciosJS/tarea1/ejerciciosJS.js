/*1. Dado el siguiente listado de objetos:
const libros = [ { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año:
1967 }, { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", año: 1605 }, {
titulo: "1984", autor: "George Orwell", año: 1949 } ]
Genere una lista que contenga solo los autores de dicha lista en una variable
llamada: autores. */

    const libros = [ { titulo: "Cien anios de soledad", autor: "Gabriel Garcia Marquez", anio: 1967 }, 
                     { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", anio: 1605 },
                     { titulo: "1984", autor: "George Orwell", anio: 1949 } ];
let autores = [];
        for (const escritor of libros) {
            let extractor = escritor.autor;
            autores.push(extractor);
        }
        
        console.log(autores);

/*2. Dado el siguiente objeto:
const empleado = { nombre: "Juan", salario: 10000, antiguedad: 6 };
Modifique el valor del salario, siempre y cuando la antigüedad sea mayor a 5 años, el
aumento será del 10%. Imprima los nuevos valores. */

    const empleado = { nombre: "Juan", salario: 10000, antiguedad: 6 };
    
      if(empleado.antiguedad > 5){
        let update = (empleado.salario * 0.10) + empleado.salario;
        console.log('Aumento de salario a ' + `${empleado.nombre}` +' por antiguedad: '+ `${update}`);
    }

/*3. Dado el siguiente listado:
const numeros = [5, 8, 12, 3, 7, 19, 1, 10, 2]
imprima el número mayor de la lista (sin ordenarla) */  
    const numeros = [5, 8, 12, 3, 7, 19, 1, 10, 2];
   
    let i=0, max=0;
    for (const numero of numeros) {
        if(max < numero){
            max = numero;
        }
        i++;
    }
        console.log('El mayor de la lista [' + `${numeros}` +'] es: ' +`${max}`);

/*4. Con el listado anterior, calcule el promedio de todos los números impares */
let j=0, suma=0;
for (const numero of numeros) {
    if((numero%2) == 1){
        suma += numero;
    j++;
    }
}
    console.log('El promedio de los impares en la lista es: '+ `${suma/j}`);

/*5. Dado el siguiente objeto:
const persona = { nombre: "Ana", edad: 25, ciudad: "SPS" };
Desestructure el objeto para extraer los valores en 3 variables diferentes y mostrarlas 
en consola */
const persona = { nombre: "Ana", edad: 25, ciudad: "SPS" };
    const {nombre, edad, ciudad} = persona;
    console.log(nombre);
    console.log(edad);
    console.log(ciudad);
    

    