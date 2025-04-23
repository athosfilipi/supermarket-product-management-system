interface IBrand {
  id: string;
  name: string;
}
export class Brand implements IBrand {
    constructor(
      public readonly id: string, 
      public readonly name: string,
    ) {}
  }
  