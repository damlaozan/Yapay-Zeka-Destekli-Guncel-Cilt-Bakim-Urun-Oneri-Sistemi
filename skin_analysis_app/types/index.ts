// Cilt tipi tanımları (analiz sonucu değerleri)
export type SkinType = 'Leke' | 'Akne' | 'Kırışıklık' | 'Koyu Halka' | 'Gözenek';

// Ürün bilgisi
export interface Product {
  id: string;
  name: string;
  imageUrl: any; // local require(...) veya remote URI olabilir
  price: string;
}

// Navigation Stack tipi
export type RootStackParamList = {
  Home: undefined;
  SkinAnalysis: undefined;
  Results: { imageUri: string }; // Add imageUri as a parameter
  SkinIssueDetail: { skinIssue: string; products: Product[] };
  ProductDetail: {product: any};
  SkinTypeScreen: {skinType: string};
};