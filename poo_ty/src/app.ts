
//EXERCICIO 01
// CLASSE ANIMAIS 
import { Animal } from "./models/Animais";

let Cachorro = new Animal();

Cachorro.Nome = "rex";
Cachorro.Cor = "marrom";
Cachorro.Raca = "Vira-lata";
Cachorro.Idade = 5;
Cachorro.Peso = 10;

Cachorro.emitirSons("Au Au");
Cachorro.Locomover(10);

let Gato = new Animal();

Gato.Nome = "Mila";
Gato.Cor = "azul";
Gato.Raça = "cianes";
Gato.Idade = 1;
Gato.Peso = 4;

Gato.emitirSons("miau miau");
Gato.Locomover(5);


