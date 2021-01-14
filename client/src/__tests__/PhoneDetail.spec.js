import { render, screen, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router";
import PhoneDetail from "../components/phone-detail";

it("should display image with phone description", () => {
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
  render(<PhoneDetail phone={mockedPhone} />);
  const phoneTitle = screen.getByAltText(mockedPhone.desc);
  expect(phoneTitle).toBeInTheDocument();
});

it("should display info about selected phone", () => {
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
  render(<PhoneDetail phone={mockedPhone} />);

  const phoneTitle = screen.getByText(mockedPhone.phone);
  const phoneDescription = screen.getByText(mockedPhone.desc);
  const phonePrice = screen.getByText(mockedPhone.price);
  const phoneNetwork = screen.getByText(mockedPhone.network);
  const phoneDimensions = screen.getByText(mockedPhone.dimensions);
  const phoneScreenTechnology = screen.getByText(mockedPhone.type);
  const phoneScreenSize = screen.getByText(mockedPhone.size);
  const phoneScreenResolution = screen.getByText(mockedPhone.resolution);
  const phoneColor = screen.getByText(mockedPhone.colors);

  expect(phoneTitle).toBeInTheDocument();
  expect(phoneDescription).toBeInTheDocument();
  expect(phonePrice).toBeInTheDocument();
  expect(phoneNetwork).toBeInTheDocument();
  expect(phoneDimensions).toBeInTheDocument();
  expect(phoneScreenTechnology).toBeInTheDocument();
  expect(phoneScreenSize).toBeInTheDocument();
  expect(phoneScreenResolution).toBeInTheDocument();
  expect(phoneColor).toBeInTheDocument();
});

it("should display Back to Catalog button", () => {
  render(<PhoneDetail phone={{}} />);
  const returnHomeBtn = screen.getByText(/Back to Catalog/i);
  expect(returnHomeBtn).toBeInTheDocument();
});

it("should redirect home page by clicking Back to Catalog button", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <PhoneDetail phone={{}} />
    </Router>
  );
  const returnHomeBtn = screen.getByText(/Back to Catalog/i);
  fireEvent.click(returnHomeBtn);
  expect(history.location.pathname).toBe(`/`);
});
