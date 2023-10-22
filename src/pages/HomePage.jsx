import React from "react";
import HeroComponent from "../Component/HeroComponent";
import HeaderComponent from "../Component/HeaderComponent";
import BlogComponent from "../Component/BlogComponent";
import DeliveryComponent from "../Component/DeliveryComponent";
import CompanyComponent from "../Component/CompanyComponent";
import ServicesComponent from "../Component/ServicesComponent";
import FormComponent from "../Component/FormComponent";
import AccordionComponent from "../Component/AccordionComponent";
import FooterComponent from "../Component/FooterComponent";
import CardComponent from "../Component/CardComponent";
import LinkComponent from "../Component/LinkComponent";

function HomePage() {
  return (
    <>
      <HeaderComponent />
      <HeroComponent />
      <BlogComponent />
      <DeliveryComponent />
      <CompanyComponent />
      <ServicesComponent />
      <FormComponent />
      <CardComponent />
      <AccordionComponent />
      <LinkComponent />
      <FooterComponent />
    </>
  );
}

export default HomePage;
