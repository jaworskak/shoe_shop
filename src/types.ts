export interface shoeType {
  bigShoe: string;
  thumbnail: string;
}

export interface ShoeCardType {
  imgURL: shoeType;
  changeBigShoeImage: (shoe: shoeType) => void;
  bigShoeImg: shoeType;
}

export interface ProductCardType {
  imgURL: string;
  name: string;
  price: string;
}

export interface ButtonType {
  label: string;
  iconUrl?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  fullWidth?: boolean;
}

export interface ReviewType {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
}

export interface ServiceCardType {
  imgURL: string;
  label: string;
  subtext: string;
}
