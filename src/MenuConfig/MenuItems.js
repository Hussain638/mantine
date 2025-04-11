 import {
    Chart,
    ClipboardText, 
    ShoppingCart,
    DocumentText
  } from "iconsax-react";
  
  const menuConfig = {
    Dashboard: [
      { label: 'Analytics', icon: Chart },
      { label: 'Ecommerce', icon: ShoppingCart },
      { label: 'Projects', icon: ClipboardText },
    ],
    Ecommerce: [
      { label: 'Products', icon: Chart },
      { label: 'Categories', icon: ShoppingCart },
      { label: 'Orders', icon: ClipboardText },
    ],
    Customers: [
      { label: 'Users', icon: Chart },
      { label: 'Reviews', icon: ShoppingCart },
      { label: 'Support', icon: ClipboardText },
    ],
    Settings: [
      { label: 'Profile', icon: Chart },
      { label: 'Preferences', icon: ShoppingCart },
      { label: 'Billing', icon: ClipboardText },
    ],
  };
  
  export default menuConfig;
  