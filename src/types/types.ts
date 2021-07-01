interface Url {
  title: string;
  url: string;
}

interface Action {
  title: string;
  method: string;
  url: string;
  body: any;
}

export interface SabioAnswer {
  title: string;
  detail: string;
  imageUrl?: string;
  urls?: [Url];
  actions?: [Action];
}
