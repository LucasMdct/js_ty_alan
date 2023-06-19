import { Aplicativo } from "./Aplicativo";
////////////////////////////////////////////////////////////////////////////
export class Celular {
  private _marca: string;
  private _modelo: string;
  private _capacidadeMemoriaInterna: number;
  private _qualidadeCamera: number;
  private _tipo: string;
  private _nivelBateria: number;
  public ligado: boolean;
  private _aplicativos: Aplicativo[];
  private _dataDeFabricacao: Date;
  ////////////////////////////////////////////////////////////////////////////
  constructor(
    marca: string,
    modelo: string,
    capacidadeMemoriaInterna: number,
    qualidadeCamera: number,
    tipo: string
  ) {
    this._marca = marca;
    this._modelo = modelo;
    this._capacidadeMemoriaInterna = capacidadeMemoriaInterna;
    this._qualidadeCamera = qualidadeCamera;
    this._tipo = tipo;
    this._nivelBateria = 100;
    this.ligado = false;
    this._aplicativos = [];
  }

  public set dataDeFabricacao(dataDeFabricacao: Date) {
    this._dataDeFabricacao = dataDeFabricacao;
  }
  public get dataDeFabricacao(): Date {
    return this._dataDeFabricacao = new Date();
  }
  ////
  ////////////////////////////////////////////////////////////////////////////
  public set marca(marca: string) {
    this._marca = marca;
  }
  public get marca(): string {
    return this._marca;
  }
  ////////////////////////////////////////////////////////////////////////////
  public set modelo(modelo: string) {
    this._modelo = modelo;
  }

  public get modelo(): string {
    return this._modelo;
  }
  ////////////////////////////////////////////////////////////////////////////
  public set capacidadeMemoriaInterna(capacidadeMemoriaInterna: number) {
    this._capacidadeMemoriaInterna = capacidadeMemoriaInterna;
  }

  public get capacidadeMemoriaInterna(): number {
    return this._capacidadeMemoriaInterna;
  }
  ////////////////////////////////////////////////////////////////////////////
  public set qualidadeCamera(qualidadeCamera: number) {
    this._qualidadeCamera = qualidadeCamera;
  }

  public get qualidadeCamera(): number {
    return this._qualidadeCamera;
  }
  ////////////////////////////////////////////////////////////////////////////

  public set tipo(tipo: string) {
    this._tipo = tipo;
  }

  public get tipo(): string {
    return this._tipo;
  }
  ////////////////////////////////////////////////////////////////////////////
  public set nivelBateria(nivelBateria: number) {
    this._nivelBateria = nivelBateria;
  }

  public get nivelBateria(): number {
    return this._nivelBateria;
  }
  ////////////////////////////////////////////////////////////////////////////

  public set aplicativos(aplicativos: Aplicativo[]) {
    this._aplicativos = aplicativos;
  }

  public get aplicativos(): Aplicativo[] {
    return this._aplicativos;
  }

  ////////////////////////////////////////////////////////////////////////////
  public fazerLigacao(numero: number) {
    if (this._nivelBateria > 0) {
      console.log(this._modelo, "Fazendo ligação para o número", numero);
      this.consumirBateria(1);
    }
  }

  public fotografar() {
    if (this._nivelBateria > 0) {
      console.log(this._modelo, "Fotografando");
      this.consumirBateria(2);
    }
  }

  private consumirBateria(consumo: number) {
    if (this.temBateria()) {
      this._nivelBateria = 0;
    } else {
      this._nivelBateria -= consumo;
    }
  }

  private temBateria(): boolean {
    return this._nivelBateria > 0;
  }

  public instalar(aplicativo: Aplicativo) {
    if (this.temMemoriaSuficientePara(aplicativo)) {
      this._aplicativos.push(aplicativo);
    }
  }

  public temMemoriaSuficientePara(aplicativo: Aplicativo) {
    let memoriaUtilizada = 0;

    for (const app of this._aplicativos) {
      memoriaUtilizada += app.tamanhoEmMegaBytes;
    }

    return (
      aplicativo.tamanhoEmMegaBytes + memoriaUtilizada <=
      this.capacidadeMemoriaInterna
    );
  }

  public ligar() {
    if (this.temBateria()) {
      this.ligado = true;
      console.log("Ligando...");
    } else {
      console.log("Sem bateria");
    }
  }

  public desligar() {
    this.ligado = false;
    console.log("Desligando...");
  }
};

export class cellPhoneStore {
  private _name: string;
  private _address: string;
  private _city: string;
  private _state: string;
  private _cellPhonesAvailable: string[];
  ///////////////////////////////////////////////////////////////////
  ///////////       USANDO CONSTRUTOR          /////////////////////
  constructor(
    nome: string,
    endereco: string,
    cidade: string,
    estado: string
  ) {
    this._name = nome;
    this._address = endereco;
    this._city = cidade;
    this._state = estado;
    this._cellPhonesAvailable = [];
  }

  ///////////////////////////////////////////////////////////////////
  public set name(nome: string) {
    this._name = nome;
  }
  public get name(): string {
    return this._name;
  }
  ///////////////////////////////////////////////////////////////////
  public set address(endereco: string) {
    this._address = endereco;
  }
  public get address(): string {
    return this._address;
  }
  ///////////////////////////////////////////////////////////////////
  public set city(cidade: string) {
    this._city = cidade;
  }
  public get city(): string {
    return this._city;
  }
  ///////////////////////////////////////////////////////////////////
  public set state(estado: string) {
    this._state = estado;
  }
  public get state(): string {
    return this._state;
  }
  ///////////////////////////////////////////////////////////////////
  public adicionarCelular(celular: string): void {
    this._cellPhonesAvailable.push(celular);
  }

  public listarCelularesDisponiveis(): void {
    console.log("Celulares disponíveis na loja ", this._name, " : ");


    for (const celular of this._cellPhonesAvailable) {

      console.log(celular);

    }
  }


}