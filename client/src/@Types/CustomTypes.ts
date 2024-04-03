export declare interface APIResponse {
  deals: Deal[];
}

export declare type Deal = {
  _id: string;
  title: string;
  descreption: string;
  email: string;
  image: string;
};


export type User = {
  _id:string,
  createdAt:string,
  updatedAt:string,
  email: string,
  favDeals: Array<string>,
  avatar: string
}
