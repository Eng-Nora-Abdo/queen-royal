import { productPrices } from "./productPrices";

// Bracelets (30)
import bracelet1 from "../assets/products/accessories/bracelets/bracelet-1.jpg";
import bracelet2 from "../assets/products/accessories/bracelets/bracelet-2.jpg";
import bracelet3 from "../assets/products/accessories/bracelets/bracelet-3.jpg";
import bracelet4 from "../assets/products/accessories/bracelets/bracelet-4.jpg";
import bracelet5 from "../assets/products/accessories/bracelets/bracelet-5.jpg";
import bracelet6 from "../assets/products/accessories/bracelets/bracelet-6.jpg";
import bracelet7 from "../assets/products/accessories/bracelets/bracelet-7.jpg";
import bracelet8 from "../assets/products/accessories/bracelets/bracelet-8.jpg";
import bracelet9 from "../assets/products/accessories/bracelets/bracelet-9.jpg";
import bracelet10 from "../assets/products/accessories/bracelets/bracelet-10.jpg";
import bracelet11 from "../assets/products/accessories/bracelets/bracelet-11.jpg";
import bracelet12 from "../assets/products/accessories/bracelets/bracelet-12.jpg";
import bracelet13 from "../assets/products/accessories/bracelets/bracelet-13.jpg";
import bracelet14 from "../assets/products/accessories/bracelets/bracelet-14.jpg";
import bracelet15 from "../assets/products/accessories/bracelets/bracelet-15.jpg";
import bracelet16 from "../assets/products/accessories/bracelets/bracelet-16.jpg";
import bracelet17 from "../assets/products/accessories/bracelets/bracelet-17.jpg";
import bracelet18 from "../assets/products/accessories/bracelets/bracelet-18.jpg";
import bracelet19 from "../assets/products/accessories/bracelets/bracelet-19.jpg";
import bracelet20 from "../assets/products/accessories/bracelets/bracelet-20.jpg";
import bracelet21 from "../assets/products/accessories/bracelets/bracelet-21.jpg";
import bracelet22 from "../assets/products/accessories/bracelets/bracelet-22.jpg";
import bracelet23 from "../assets/products/accessories/bracelets/bracelet-23.jpg";
import bracelet24 from "../assets/products/accessories/bracelets/bracelet-24.jpg";
import bracelet25 from "../assets/products/accessories/bracelets/bracelet-25.jpg";
import bracelet26 from "../assets/products/accessories/bracelets/bracelet-26.jpg";
import bracelet27 from "../assets/products/accessories/bracelets/bracelet-27.jpg";
import bracelet28 from "../assets/products/accessories/bracelets/bracelet-28.jpg";
import bracelet29 from "../assets/products/accessories/bracelets/bracelet-29.jpg";
import bracelet30 from "../assets/products/accessories/bracelets/bracelet-30.jpg";

// Necklaces (20)
import necklace1 from "../assets/products/accessories/necklaces/necklace-1.jpg";
import necklace2 from "../assets/products/accessories/necklaces/necklace-2.jpg";
import necklace3 from "../assets/products/accessories/necklaces/necklace-3.jpg";
import necklace4 from "../assets/products/accessories/necklaces/necklace-4.jpg";
import necklace5 from "../assets/products/accessories/necklaces/necklace-5.jpg";
import necklace7 from "../assets/products/accessories/necklaces/necklace-7.jpg";
import necklace8 from "../assets/products/accessories/necklaces/necklace-8.jpg";
import necklace9 from "../assets/products/accessories/necklaces/necklace-9.jpg";
import necklace10 from "../assets/products/accessories/necklaces/necklace-10.jpg";
import necklace11 from "../assets/products/accessories/necklaces/necklace-11.jpg";
import necklace12 from "../assets/products/accessories/necklaces/necklace-12.jpg";
import necklace13 from "../assets/products/accessories/necklaces/necklace-13.jpg";
import necklace14 from "../assets/products/accessories/necklaces/necklace-14.jpg";
import necklace15 from "../assets/products/accessories/necklaces/necklace-15.jpg";
import necklace16 from "../assets/products/accessories/necklaces/necklace-16.jpg";
import necklace17 from "../assets/products/accessories/necklaces/necklace-17.jpg";
import necklace18 from "../assets/products/accessories/necklaces/necklace-18.jpg";
import necklace19 from "../assets/products/accessories/necklaces/necklace-19.jpg";
import necklace20 from "../assets/products/accessories/necklaces/necklace-20.jpg";

// Rings (6)
import ring1 from "../assets/products/accessories/rings/ring-1.jpg";
import ring2 from "../assets/products/accessories/rings/ring-2.jpg";
import ring3 from "../assets/products/accessories/rings/ring-3.jpg";
import ring4 from "../assets/products/accessories/rings/ring-4.jpg";
import ring5 from "../assets/products/accessories/rings/ring-5.jpg";
import ring6 from "../assets/products/accessories/rings/ring-6.jpg";

// Body Splash (6)
import bodySplash5ml from "../assets/products/body-splash/pink-dream-5ml.jpg";
import bodySplash10ml from "../assets/products/body-splash/pink-dream-10ml.jpg";
import bodySplash120ml from "../assets/products/body-splash/pink-dream-120ml.jpg";
import bodySplash150ml from "../assets/products/body-splash/pink-dream-150ml.jpg";
import bodySplash220ml from "../assets/products/body-splash/pink-dream-220ml.jpg";
import bodySplash250ml from "../assets/products/body-splash/pink-dream-250ml.jpg";

// Offers (17)
import offer1 from "../assets/products/offers/offer-1.jpg";
import offer2 from "../assets/products/offers/offer-2.jpg";
import offer3 from "../assets/products/offers/offer-3.jpg";
import offer4 from "../assets/products/offers/offer-4.jpg";
import offer5 from "../assets/products/offers/offer-5.jpg";
import offer6 from "../assets/products/offers/offer-6.jpg";
import offer7 from "../assets/products/offers/offer-7.jpg";
import offer8 from "../assets/products/offers/offer-8.jpg";
import offer9 from "../assets/products/offers/offer-9.jpg";
import offer10 from "../assets/products/offers/offer-10.jpg";
import offer11 from "../assets/products/offers/offer-11.jpg";
import offer12 from "../assets/products/offers/offer-12.jpg";
import offer13 from "../assets/products/offers/offer-13.jpg";
import offer14 from "../assets/products/offers/offer-14.jpg";
import offer15 from "../assets/products/offers/offer-15.jpg";
import offer16 from "../assets/products/offers/offer-16.jpg";
import offer17 from "../assets/products/offers/offer-17.jpg";

const rawProductList = [
  // Body Splash
  { name: "pink-dream-5ml", image: bodySplash5ml, category: "Body Splash", size: "Package (6 × 5 ml)", price: 90, isOffer: false },
  { name: "pink-dream-10ml", image: bodySplash10ml, category: "Body Splash", size: "Package (6 × 10 ml)", price: 190, isOffer: false },
  { name: "pink-dream-120ml", image: bodySplash120ml, category: "Body Splash", size: "120 ml", price: 140, isOffer: false },
  { name: "pink-dream-150ml", image: bodySplash150ml, category: "Body Splash", size: "150 ml", price: 180, isOffer: false },
  { name: "pink-dream-220ml", image: bodySplash220ml, category: "Body Splash", size: "220 ml", price: 230, isOffer: false },
  { name: "pink-dream-250ml", image: bodySplash250ml, category: "Body Splash", size: "250 ml", price: 280, isOffer: false },

  // Bracelets
  { name: "bracelet-1", image: bracelet1, category: "Accessories" },
  { name: "bracelet-2", image: bracelet2, category: "Accessories" },
  { name: "bracelet-3", image: bracelet3, category: "Accessories" },
  { name: "bracelet-4", image: bracelet4, category: "Accessories" },
  { name: "bracelet-5", image: bracelet5, category: "Accessories" },
  { name: "bracelet-6", image: bracelet6, category: "Accessories" },
  { name: "bracelet-7", image: bracelet7, category: "Accessories" },
  { name: "bracelet-8", image: bracelet8, category: "Accessories" },
  { name: "bracelet-9", image: bracelet9, category: "Accessories" },
  { name: "bracelet-10", image: bracelet10, category: "Accessories" },
  { name: "bracelet-11", image: bracelet11, category: "Accessories" },
  { name: "bracelet-12", image: bracelet12, category: "Accessories" },
  { name: "bracelet-13", image: bracelet13, category: "Accessories" },
  { name: "bracelet-14", image: bracelet14, category: "Accessories" },
  { name: "bracelet-15", image: bracelet15, category: "Accessories" },
  { name: "bracelet-16", image: bracelet16, category: "Accessories" },
  { name: "bracelet-17", image: bracelet17, category: "Accessories" },
  { name: "bracelet-18", image: bracelet18, category: "Accessories" },
  { name: "bracelet-19", image: bracelet19, category: "Accessories" },
  { name: "bracelet-20", image: bracelet20, category: "Accessories" },
  { name: "bracelet-21", image: bracelet21, category: "Accessories" },
  { name: "bracelet-22", image: bracelet22, category: "Accessories" },
  { name: "bracelet-23", image: bracelet23, category: "Accessories" },
  { name: "bracelet-24", image: bracelet24, category: "Accessories" },
  { name: "bracelet-25", image: bracelet25, category: "Accessories" },
  { name: "bracelet-26", image: bracelet26, category: "Accessories" },
  { name: "bracelet-27", image: bracelet27, category: "Accessories" },
  { name: "bracelet-28", image: bracelet28, category: "Accessories" },
  { name: "bracelet-29", image: bracelet29, category: "Accessories" },
  { name: "bracelet-30", image: bracelet30, category: "Accessories" },

  // Necklaces
  { name: "necklace-1", image: necklace1, category: "Accessories" },
  { name: "necklace-2", image: necklace2, category: "Accessories" },
  { name: "necklace-3", image: necklace3, category: "Accessories" },
  { name: "necklace-4", image: necklace4, category: "Accessories" },
  { name: "necklace-5", image: necklace5, category: "Accessories" },
  { name: "necklace-7", image: necklace7, category: "Accessories" },
  { name: "necklace-8", image: necklace8, category: "Accessories" },
  { name: "necklace-9", image: necklace9, category: "Accessories" },
  { name: "necklace-10", image: necklace10, category: "Accessories" },
  { name: "necklace-11", image: necklace11, category: "Accessories" },
  { name: "necklace-12", image: necklace12, category: "Accessories" },
  { name: "necklace-13", image: necklace13, category: "Accessories" },
  { name: "necklace-14", image: necklace14, category: "Accessories" },
  { name: "necklace-15", image: necklace15, category: "Accessories" },
  { name: "necklace-16", image: necklace16, category: "Accessories" },
  { name: "necklace-17", image: necklace17, category: "Accessories" },
  { name: "necklace-18", image: necklace18, category: "Accessories" },
  { name: "necklace-19", image: necklace19, category: "Accessories" },
  { name: "necklace-20", image: necklace20, category: "Accessories" },

  // Rings
  { name: "ring-1", image: ring1, category: "Accessories" },
  { name: "ring-2", image: ring2, category: "Accessories" },
  { name: "ring-3", image: ring3, category: "Accessories" },
  { name: "ring-4", image: ring4, category: "Accessories" },
  { name: "ring-5", image: ring5, category: "Accessories" },
  { name: "ring-6", image: ring6, category: "Accessories" },

  // Offers
  { name: "offer-1", image: offer1, category: "Offers", isOffer: true },
  { name: "offer-2", image: offer2, category: "Offers", isOffer: true },
  { name: "offer-3", image: offer3, category: "Offers", isOffer: true },
  { name: "offer-4", image: offer4, category: "Offers", isOffer: true },
  { name: "offer-5", image: offer5, category: "Offers", isOffer: true },
  { name: "offer-6", image: offer6, category: "Offers", isOffer: true },
  { name: "offer-7", image: offer7, category: "Offers", isOffer: true },
  { name: "offer-8", image: offer8, category: "Offers", isOffer: true },
  { name: "offer-9", image: offer9, category: "Offers", isOffer: true },
  { name: "offer-10", image: offer10, category: "Offers", isOffer: true },
  { name: "offer-11", image: offer11, category: "Offers", isOffer: true },
  { name: "offer-12", image: offer12, category: "Offers", isOffer: true },
  { name: "offer-13", image: offer13, category: "Offers", isOffer: true },
  { name: "offer-14", image: offer14, category: "Offers", isOffer: true },
  { name: "offer-15", image: offer15, category: "Offers", isOffer: true },
  { name: "offer-16", image: offer16, category: "Offers", isOffer: true },
  { name: "offer-17", image: offer17, category: "Offers", isOffer: true },
];

export const products = rawProductList.map((item, index) => {
  const isOffer = item.isOffer ?? false;
  const size = item.size ?? "Free Size";
  let price = item.price ?? productPrices[item.name] ?? 180;

  return {
    id: index + 1,
    image: item.image?.src || item.image,
    name: item.name,
    size,
    category: item.category,
    price,
    isOffer,
  };
});
