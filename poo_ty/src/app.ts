// import { Animal } from "./models/Animal";
import { Aplicativo } from "./models/Aplicativo";
import { Celular } from "./models/Celular";

// let iphone13 = new Celular();
// iphone13.marca = "Apple";
// iphone13.modelo = "iPhone 13";
// iphone13.capacidadeMemoriaInterna = 500;
// iphone13.qualidadeCamera = 12;
// iphone13.tipo = "Smartphone";
// iphone13.nivelBateria = 2;

// console.log(iphone13);

// iphone13.fazerLigacao(193);
// iphone13.fotografar();
// iphone13.fazerLigacao(192);

// console.log(iphone13);

// let instagram = new Aplicativo();
// instagram.nome = "Instagram";
// instagram.tamanhoEmMegaBytes = 100;

// let facebook = new Aplicativo();
// facebook.nome = "Facebook";
// facebook.tamanhoEmMegaBytes = 200;

// let camera = new Aplicativo();
// camera.nome = "Camera";
// camera.tamanhoEmMegaBytes = 50;

// let cachorro = new Animal();
// cachorro.nome = "Rex";

// iphone13.instalar(instagram);
// iphone13.instalar(facebook);

// console.log(iphone13);

// let cachorro = new Animal("Rex", "Marrom", "Vira-lata", 10, 3);
// console.log(cachorro);

let linkedin = new Aplicativo("Linkedin", 50);
console.log(linkedin);

let Pocophone = new Celular("Xiaomi", "pocoPhonex5", 256, 200, "Smartphone");
Pocophone.tipo = "Gamer";
Pocophone.dataDeFabricacao = new Date();
Pocophone.ligar();
console.log(Pocophone);

if (Pocophone.marca === "Xiaomi") {
  console.log("gasta muita bateria");
}

Pocophone.desligar();
console.log(Pocophone);
