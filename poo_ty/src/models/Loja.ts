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