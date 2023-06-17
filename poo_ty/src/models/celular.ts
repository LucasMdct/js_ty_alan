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

  public set aplicativos(aplicativos: Aplicativo) {
    this.aplicativos = aplicativos;
  }

  public get aplicativos(): Aplicativo {
    return this.aplicativos;
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
}
