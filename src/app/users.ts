export class Users {
  public showRepo: boolean;
  constructor(public photoUrl:string,
    public Username:string,
    public Location:string,
    public Email:string,
    public Bio:string,
    ){
    this.showRepo=false;
  }
    
}
