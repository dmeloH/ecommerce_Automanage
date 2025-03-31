"use client";

import Banner from "@/components/banner/Banner";
import OfferBanners from "@/components/banner/OfferBanners";
import LatestBlog from "@/components/blog/LatestBlog";
import Category from "@/components/category/Category";
import Deal from "@/components/deal/Deal";
import HeroSlider from "@/components/hero/HeroSlider";
import Services from "@/components/service/Services";
import Trending from "@/components/trending/Trending";
import GroceryArrials from "@/components/arrivals/GroceryArrials";
import NewsletterModal from "@/components/model/NewsletterModal";

const page = () => {
    return (
        <>
            <NewsletterModal />
            <HeroSlider />
            <Category />
            <Deal />
            <Banner />
            <GroceryArrials />
            <OfferBanners />
            <Services />
            <Trending />
            <LatestBlog />
        </>
    )
}

export default page
