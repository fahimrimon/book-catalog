export interface IProduct {
    userEmail?: string | null;
    _id?: string;
    name: string;
    image: string;
    author: string;
    genre: string;
    publicationYear: string;
    reviews?: string[],
    summary?: string
  }