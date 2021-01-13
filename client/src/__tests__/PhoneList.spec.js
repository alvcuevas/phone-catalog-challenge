import { render } from "@testing-library/react";
import PhoneListContainer from "../components/phone-list";

it("should renders an array of phones", () => {
  const mockedPhones = [
    {
      id: 1,
      phone: "Galaxy Note 20",
      desc: "Samsung Galaxy Note 20 Rose 256GB",
      network: "GSM / CDMA / HSPA / EVDO / LTE",
      dimensions: "150.9 x 75.7 x 8.3 mm (5.94 x 2.98 x 0.33 in)",
      weight: "194 g (6.84 oz)",
      type: "IPS LCD capacitive touchscreen, 16M colors",
      size: "6.1 inches, 90.3 cm2 (~79.0% screen-to-body ratio)",
      resolution: "828 x 1792 pixels, 19.5:9 ratio (~326 ppi density)",
      colors: "Rose Gold",
      price: "877,37€",
      img:
        "https://www.maxmovil.com/media/catalog/product/cache/1/small_image/200x200/9df78eab33525d08d6e5fb8d27136e95/g/a/galaxy-note-20-4g_0002_81s7yrb1zll._ac_sl1500_.jpg",
    },
    {
      id: 2,
      phone: "Xiaomi Redmi 9C",
      desc: "Xiaomi Redmi 9C Black 3GB/64GB",
      network: "GSM / HSPA / LTE",
      dimensions: "138.4 x 67.3 x 7.3 mm (5.45 x 2.65 x 0.29 in)",
      weight: "148 g (5.22 oz)",
      type: "LED-backlit IPS LCD, capacitive touchscreen, 16M colors",
      size: "4.7 inches, 60.9 cm2 (~65.4% screen-to-body ratio)",
      resolution: "750 x 1334 pixels, 16:9 ratio (~326 ppi density)",
      colors: "Black",
      price: "148€",
      img:
        "https://www.maxmovil.com/media/catalog/product/cache/1/small_image/200x200/9df78eab33525d08d6e5fb8d27136e95/r/e/redmi-9c-gris_0002_61o-icdwxal._ac_sl1000__1.jpg",
    },
  ];

  const renderedList = render(<PhoneListContainer list={mockedPhones} />);
  expect(renderedList).toMatchSnapshot();
});
