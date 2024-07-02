import Navbar from 'src/components/Navbar';
import Footer from 'src/components/Footer';
import { store } from 'src/store/store';
import * as CartComponent from "./styled"
import { Product } from 'src/utils/getProductsForSlider';
import {ReactComponent as EyeIcon} from "../../assets/Eye.svg"
import { useNavigate } from 'react-router';
import { routes } from 'src/constants/routes';
import { useDispatch } from 'react-redux';
import { CartItem, addToCart, updateCartItem } from 'src/store/cart/cartSlice';
import { useSelector } from 'react-redux';

export function Cart() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cart:CartItem[] = useSelector((state: any) => state.cart.items);
  const products:Product[] = useSelector((state: any) => state.products.value);

  const cartItemsWithProducts = cart.map((item) => {
    const product = products.find((p) => p.id === item.productId);
    return { ...item, product };
  });

  return (
    <CartComponent.CartWrapper>
      <Navbar />
      <CartComponent.ContentWrapper isMenuOpened={useSelector((state: any) => state.isMenuOpened.value)}>
        <CartComponent.CartTitle>
          {store.getState().cart.items.length === 0 ? "Cart is empty" : "Cart"}
        </CartComponent.CartTitle>
          {
            cartItemsWithProducts.length > 0 &&
            <CartComponent.ProductsWrapper>
              {
                cartItemsWithProducts.map((item) => {
                  return (
                    <CartComponent.CardContentWrapper>
                      <CartComponent.TextWrapper>
                        <CartComponent.Image image={item.product?.image} />
                        <CartComponent.Name>{item.product?.title}</CartComponent.Name>
                        <CartComponent.Price>$ {item.product?.price}</CartComponent.Price>
                      </CartComponent.TextWrapper>
                      <CartComponent.AddToCartButton>
                        <CartComponent.HoverButton onClick={() => navigate(routes.PRODUCT_ROUTE + "/" + item.product?.id)}>
                          <EyeIcon/>
                        </CartComponent.HoverButton>
                      </CartComponent.AddToCartButton>
                      <CartComponent.ItemQuantityWrapper>
                        <CartComponent.ItemQuantityButton onClick={() => handleUpdateCartItem(item.productId, parseInt(item.quantity.toString()) + 1)}>{"+"}</CartComponent.ItemQuantityButton>
                        <CartComponent.ItemQuantityLabel>{item.quantity}</CartComponent.ItemQuantityLabel>
                        <CartComponent.ItemQuantityButton onClick={() => handleUpdateCartItem(item.productId, parseInt(item.quantity.toString()) - 1)}>{"-"}</CartComponent.ItemQuantityButton>
                      </CartComponent.ItemQuantityWrapper>
                    </CartComponent.CardContentWrapper>
                  )
                })
              }
            </CartComponent.ProductsWrapper>
          }
        </CartComponent.ContentWrapper>
      <Footer />
    </CartComponent.CartWrapper>
  );

  function handleUpdateCartItem(productId: number, quantity: number){
    dispatch(updateCartItem({ productId, quantity }));
  };

  function handleAddToCart(product: Product, quantity: number){
    dispatch(addToCart({ productId: product.id, quantity }));
  };
}