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
