import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Defina o tipo das rotas e dos parâmetros de navegação
export type RootStackParamList = {
  ProductInfo: { id: number };
  // Outras rotas podem ser adicionadas aqui
};

export type ProductInfoNavigationProp = StackNavigationProp<RootStackParamList, 'productInfo'>;
export type ProductInfoRouteProp = RouteProp<RootStackParamList, 'productInfo'>;
