///////////////
Qué es abstracción?
Podemos reducir la complejidad y permitir una implementación y diseño eficiente de los datos.

Ventajas de uso:
- Evitamos codigo duplicado, es decir, reusamos codigo.
- Podemos crear múltiples instancias con una sola abstracción.
- Al encapsular datos, los estamos protegiendo
- Evitamos código a bajo nivel.
- Podemos cambiar implementaciones en la clase, sin perjudicar su funcionamiento.

//EN LA CARPETA clasesModulos esta un ejemplo de una abstraccion con clases modulando los archivos

//////////
Qué es encapsulamiento
Es guardar, proteger, guardar o limitar el acceso de cierto atributos y/o propiedades en nuestros prototipos y objetos.
Cuando hablamos de **encapsulamiento **hablamos de:
- Esconder métodos y atributos
- No permitir la alteración de métodos y atributos
Encapsulamiento en JavaScript: No permitir la alteración de métodos y atributos

Formas de aplicar encapsulamiento en JavaScript:
- Getters y setters
- Namespaces
- Object.defineProperties
- Módulo de ES6

Todo en JavaScripts publico solo que no se puede alterar eso es en si Encapsular en JS 

//////////////
Getters y setters en JavaScript

Getters
Getters: Una función que obtiene un valor de una propiedad se llama getter y una que establece el valor de una propiedad se llama setter.
Esta característica a sido implementada en ES2015, pudiendo modificar el funcionamiento normal de establecer u obtener el valor de una 
propiedad, a estas se les conoce como accessor properties.
Funcionamiento: En ocasiones queremos valores basados en otros valores, para esto los data accessors son bastante útiles.
Para crearlos usamos los keywords get y set

//ejemplo
const obj = { //en este caso se hace con prototipo, la instancia de Object que esta por defecto en JS
    get prop() {
      return this.__prop__;
    },
    set prop(value) {
      this.__prop__ = value * 2;
    },
};
 
obj.prop = 12; //el get prop(), retorna el valor de 12 que se igualo, luego pasa al set pro(value) 'value=12', se hace set prop(12), hace 12*2=24
               //luego devuelve el 24, this.__prop__ =24
  
console.log(obj.prop); //24

//ahora otro ejemplo usando el Object.defineProperty
//La ventaja que tenemos de esta manera, es que podemos establecer los atributos que queremos tenga la propiedad
const obj = {};

Object.defineProperty(obj, //objeto target
  'prop', //nombre propiedad
  {
    enumerable: true,
    configurable: true,
    get prop() { //getter
      return this.__prop__;
    },
    set prop(value) { //setter
      this.__prop__ = value * 2;
    },
  });
obj.prop = 12;

var atr = Object.getOwnPropertyDescriptor(obj, 'prop')
console.log(atr); //24
  
//otro ejemplo usando prototypes
"use strict";

function Student(name, age, nationality) {
  this._name = name;
  this._age = age;
  this.nationality = nationality;
}

Student.prototype = {
  get name() {
    return this._name;
  },
  set name(newName) {
    this._name = newName;
  },

  get age() {
    return this._age;
  },

  set age(newAge) {
    this._age = newAge;
  },
};

let edgar = new Student("Edgar", 25, "Mexico");
edgar.name = "Juan";
edgar.age = 30
console.log(edgar);
