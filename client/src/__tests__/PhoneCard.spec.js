import { render, screen } from "@testing-library/react";
import PhoneCardComponent from "../components/phone-card";
import React from "react";

it("should display phone title", () => {
  const mockedPhone = {
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
  };
  const { getByText } = render(<PhoneCardComponent phone={mockedPhone} />);
  const title = getByText(mockedPhone.phone);

  expect(title).toBeInTheDocument();
});

it("should display phone description", () => {
  const mockedPhone = {
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
  };
  const { getByText } = render(<PhoneCardComponent phone={mockedPhone} />);
  const desc = getByText(mockedPhone.desc);

  expect(desc).toBeInTheDocument();
});

it("should display details button", () => {
  const mockedPhone = {
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
  };
  render(<PhoneCardComponent phone={mockedPhone} />);
  const detailsBtn = screen.getByText(/Details/i);

  expect(detailsBtn).toBeInTheDocument();
});

it("should display share icon", () => {
  const mockedPhone = {
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
  };
  render(<PhoneCardComponent phone={mockedPhone} />);
  const shareIcon = screen.getByLabelText(/share/i);

  expect(shareIcon).toBeInTheDocument();
});
