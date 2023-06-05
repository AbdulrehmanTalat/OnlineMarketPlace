import { Image } from "sanity";

export interface IProduct {
    gender: string;
    use: string;
    _rev: string;
    title: string;
    type: string;
    _createdAt: string;
    images:Image;
    _type: string;
    size: string[];
    price: number;
    details: string;
    _id: string;
    _updatedAt: string;
  }