import toast from "react-hot-toast";
import { TProductData } from "@repo/common-types";
import { toastStyle } from "@repo/shared/utilfunctions";

type HandleAddToCartProps = {
  e: any;
  productData: TProductData;
  setLoading: (newValue: boolean) => void;
  addNewProduct: (data: TProductData) => void;
};

export const handleAddToCart = ({
  e,
  productData,
  addNewProduct,
  setLoading,
}: HandleAddToCartProps) => {
  e.preventDefault();
  setLoading(true);
  addNewProduct(productData);
  setTimeout(() => {
    setLoading(false);
    toast("Product added to cart!", {
      icon: "🛒",
      ...toastStyle,
    });
  }, 500);
};
