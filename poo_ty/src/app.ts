// import { Animal } from "./models/Animal";
import { Aplicativo } from "./models/Aplicativo";
import { Celular } from "./models/celular";
import { cellPhoneStore } from "./models/Loja";
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

// let linkedin = new Aplicativo("Linkedin", 50);
// console.log(linkedin);

// let Pocophone = new Celular("Xiaomi", "pocoPhonex5", 256, 200, "Smartphone");
// Pocophone.tipo = "Gamer";
// Pocophone.dataDeFabricacao = new Date();
// Pocophone.ligar();
// console.log(Pocophone);

// if (Pocophone.marca === "Xiaomi") {
//   console.log("gasta muita bateria");
// }

// Pocophone.desligar();
// console.log(Pocophone);

const store_one = new cellPhoneStore("New Phones", "Avenida Irmãos pereira, 690, Centro ", "Campo Mourão", "Paraná");

store_one.adicionarCelular("Apple Iphone 14 PRO");

store_one.adicionarCelular("Xiaomi Redmi note 13 pro");

store_one.adicionarCelular("Samsung Galaxy S40 pro");

store_one.adicionarCelular("Motorola Moto G 200");

store_one.adicionarCelular("Nokia Tijolão Indestrutivel");

store_one.listarCelularesDisponiveis();

const store_two = new cellPhoneStore("Tech Phones", "Avenida Principal, 25, Centro ", "Farol", "Paraná");

store_two.adicionarCelular("Apple Iphone 12");

store_two.adicionarCelular("Xiaomi Pocophone X3 GT");

store_two.adicionarCelular("Motorola Moto E 60");

store_two.adicionarCelular("Realme C55");

store_two.adicionarCelular("Tecno Pova Neo 2");

store_two.listarCelularesDisponiveis();