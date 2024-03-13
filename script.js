import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://dynamic.brandcrowd.com/asset/logo/53703663-f2ea-4e81-8b89-44965b073800/logo-search-grid-1x?logoTemplateVersion=2&v=638432716276870000"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </header>
  );
};

const BodyComponent = () => {
  return (
    <div>
      <main className="Body">
        <div className="search">Search</div>
        <div className="res-container">
          {resArr.map((restu) => (
            <RestaurantCard key={restu.info.id} resData={restu} />
          ))}
        </div>
      </main>
    </div>
  );
};

const resArr = [
  {
    info: {
      id: "80226",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "Sardar Patel Marg",
      areaName: "Civil Lines",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      parentId: "721",
      avgRatingString: "--",
      sla: {
        deliveryTime: 47,
        lastMileTravel: 7.5,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "7.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-14 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-sardar-patel-marg-civil-lines-allahabad-80226",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "126287",
      name: "UBQ by Barbeque Nation",
      cloudinaryImageId: "qe1ahdmzfynwljppblvl",
      locality: "P Square Mall",
      areaName: "Civil Lines",
      costForTwo: "₹300 for two",
      cuisines: [
        "North Indian",
        "Barbecue",
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Desserts",
      ],
      avgRating: 4,
      parentId: "10804",
      avgRatingString: "4.0",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 48,
        lastMileTravel: 7.5,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "7.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-13 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹90",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-p-square-mall-civil-lines-allahabad-126287",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "80524",
      name: "Chicago Pizza",
      cloudinaryImageId: "n5bn4o6b8o0pj2bbxlui",
      locality: "Sardar Patel Marg",
      areaName: "Civil Lines",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas"],
      parentId: "60277",
      avgRatingString: "--",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 7.5,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "7.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-13 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/chicago-pizza-sardar-patel-marg-civil-lines-allahabad-80524",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "332194",
      name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
      cloudinaryImageId: "mlhwn3yictyis4cey2ai",
      locality: "Lajpat Rai Road",
      areaName: "Meergunj",
      costForTwo: "₹300 for two",
      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
      veg: true,
      parentId: "582",
      avgRatingString: "--",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 5.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-13 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹90",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-lajpat-rai-road-meergunj-allahabad-332194",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "392164",
      name: "NIC Ice Creams",
      cloudinaryImageId: "85825a6d74b1059a63a9b688de9f67ce",
      locality: "Tb Sapru Marg",
      areaName: "Civil Lines",
      costForTwo: "₹120 for two",
      cuisines: ["Ice Cream", "Desserts"],
      veg: true,
      parentId: "6249",
      avgRatingString: "--",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 7.7,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "7.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-14 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/nic-ice-creams-tb-sapru-marg-civil-lines-allahabad-392164",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "80418",
      name: "Subway",
      cloudinaryImageId: "63178e3e64d503a479f2a2048a474552",
      locality: "Tashkand Marg",
      areaName: "Civil Lines",
      costForTwo: "₹350 for two",
      cuisines: ["Healthy Food", "Salads", "Snacks", "Desserts", "Beverages"],
      parentId: "2",
      avgRatingString: "--",
      sla: {
        deliveryTime: 48,
        lastMileTravel: 7.1,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "7.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-14 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/subway-tashkand-marg-civil-lines-allahabad-80418",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "238136",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "a3poc70wqkajnw3zxpsl",
      locality: "Tashkand Marg",
      areaName: "Civil Lines",
      costForTwo: "₹200 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      parentId: "4961",
      avgRatingString: "--",
      sla: {
        deliveryTime: 42,
        lastMileTravel: 7.1,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "7.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-14 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/la-pinoz-pizza-tashkand-marg-civil-lines-allahabad-238136",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "102150",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
      locality: "Sardar Patel Marg",
      areaName: "Civil Lines",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Ice Cream"],
      veg: true,
      parentId: "5588",
      avgRatingString: "--",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 7.4,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "7.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-13 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-sardar-patel-marg-civil-lines-allahabad-102150",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "150376",
      name: "Shri Ram Shakahari Bhojnalaya",
      cloudinaryImageId: "suz4we5x7dgznrquxvu9",
      locality: "Katju Road",
      areaName: "Leader Road",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian"],
      veg: true,
      parentId: "453828",
      avgRatingString: "--",
      sla: {
        deliveryTime: 41,
        lastMileTravel: 5.5,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "5.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-13 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/shri-ram-shakahari-bhojnalaya-katju-road-leader-road-allahabad-150376",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "437010",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "Vinayak City Centre Mall",
      areaName: "Civil Lines",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.3,
      parentId: "166",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 41,
        lastMileTravel: 7.3,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "7.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-14 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-vinayak-city-centre-mall-civil-lines-allahabad-437010",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "82234",
      name: "KFC",
      cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
      locality: "Mahatma Gandgi Road",
      areaName: "Civil Lines",
      costForTwo: "₹450 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      parentId: "547",
      avgRatingString: "--",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 7.5,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "7.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-14 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-mahatma-gandgi-road-civil-lines-allahabad-82234",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "253769",
      name: "McDonald's",
      cloudinaryImageId: "535fc9f9c135f7982317bbb6a64a1ffc",
      locality: "Mahatma Gandhi Marg",
      areaName: "Civil Lines",
      costForTwo: "₹400 for two",
      cuisines: ["American"],
      avgRating: 4.4,
      parentId: "630",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 7.3,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "7.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-14 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mcdonalds-mahatma-gandhi-marg-civil-lines-allahabad-253769",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "301701",
      name: "Barbeque Nation",
      cloudinaryImageId: "zfjpphikobnnchm6llcu",
      locality: "P Square Mall",
      areaName: "Civil Lines",
      costForTwo: "₹600 for two",
      cuisines: [
        "North Indian",
        "Barbecue",
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Desserts",
      ],
      parentId: "2438",
      avgRatingString: "--",
      sla: {
        deliveryTime: 47,
        lastMileTravel: 7.5,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "7.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-13 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/barbeque-nation-p-square-mall-civil-lines-allahabad-301701",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "80703",
      name: "Aryan Family's Delight",
      cloudinaryImageId: "kb34u4pywk49ksbyn4g5",
      locality: "Sardar Patel Marg",
      areaName: "Civil Lines",
      costForTwo: "₹400 for two",
      cuisines: [
        "North Indian",
        "South Indian",
        "Fast Food",
        "Snacks",
        "Burgers",
        "Chinese",
      ],
      parentId: "6001",
      avgRatingString: "--",
      sla: {
        deliveryTime: 46,
        lastMileTravel: 7.3,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "7.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-13 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/aryan-familys-delight-sardar-patel-marg-civil-lines-allahabad-80703",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "80701",
      name: "Chhappan Bhog",
      cloudinaryImageId: "yxh7pwprdabkxgenr6xf",
      locality: "Kutchery Road",
      areaName: "Katra",
      costForTwo: "₹300 for two",
      cuisines: ["Indian", "Chinese", "Sweets"],
      veg: true,
      parentId: "60152",
      avgRatingString: "--",
      sla: {
        deliveryTime: 55,
        lastMileTravel: 9.3,
        serviceability: "SERVICEABLE",
        slaString: "55-60 mins",
        lastMileTravelString: "9.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-13 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/chhappan-bhog-kutchery-road-katra-allahabad-80701",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "201545",
      name: "Curry Leaf",
      cloudinaryImageId: "ale88grmsg7uyrt5emxt",
      locality: "Clive Road",
      areaName: "Civil Lines",
      costForTwo: "₹200 for two",
      cuisines: [
        "South Indian",
        "Indian",
        "North Indian",
        "Beverages",
        "Fast Food",
      ],
      veg: true,
      parentId: "66911",
      avgRatingString: "--",
      sla: {
        deliveryTime: 53,
        lastMileTravel: 7.4,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "7.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-13 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/curry-leaf-clive-road-civil-lines-allahabad-201545",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "442050",
      name: "Behrouz Biryani",
      cloudinaryImageId: "1a8dfa8b2a73ddf7c6193465ab24c898",
      locality: "Stanley Road",
      areaName: "Civil Lines",
      costForTwo: "₹500 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Kebabs",
        "Mughlai",
        "Beverages",
        "Desserts",
      ],
      parentId: "1803",
      avgRatingString: "--",
      sla: {
        deliveryTime: 44,
        lastMileTravel: 7.7,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "7.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-13 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/behrouz-biryani-stanley-road-civil-lines-allahabad-442050",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "420431",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
      locality: "Lal Bahaur Sastri Marg",
      areaName: "Civil Lines",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
      veg: true,
      parentId: "2233",
      avgRatingString: "--",
      sla: {
        deliveryTime: 50,
        lastMileTravel: 7.4,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "7.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-13 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-belgian-waffle-co-lal-bahaur-sastri-marg-civil-lines-allahabad-420431",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "80320",
      name: "Paradise",
      cloudinaryImageId: "d05df8d6aacc3b02d0935d46108d8f3c",
      locality: "Mahatma Gandhi Marg",
      areaName: "Civil Lines",
      costForTwo: "₹500 for two",
      cuisines: ["Bakery", "Cakes and Pastries", "Fast Food"],
      avgRating: 4.4,
      parentId: "155080",
      avgRatingString: "4.4",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 6.9,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "6.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-13 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "ABOVE ₹900",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/paradise-mahatma-gandhi-marg-civil-lines-allahabad-80320",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "240249",
      name: "Barista Coffee",
      cloudinaryImageId: "b64bf721e12e7b3df82c832898999c51",
      locality: "Lal Bahadur Shastri Marg",
      areaName: "Civil Lines",
      costForTwo: "₹350 for two",
      cuisines: ["Beverages", "Snacks", "Desserts"],
      parentId: "2359",
      avgRatingString: "--",
      sla: {
        deliveryTime: 42,
        lastMileTravel: 7.6,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "7.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-13 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/barista-coffee-lal-bahadur-shastri-marg-civil-lines-allahabad-240249",
      type: "WEBLINK",
    },
  },
];

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    sla,
  } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-img"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} Star</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} Minutes</h4>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
