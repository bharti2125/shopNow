import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Clothes = ({ setClothData }) => {
  const Navigate = useNavigate();

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const data = await axios.get("http://localhost:3000/products");
      console.log(data?.data?.products);
      setData(data?.data?.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const products = [
  //   {
  //     id: 1,
  //     title: "Women Shirt(Red and blue)",
  //     image: "https://4.imimg.com/data4/IF/XB/ANDROID-9241138/product.jpeg",
  //     pricing: 350,
  //     rating: 4.8,
  //     reviews: 2847,
  //     shortDescription:
  //       "Classic comfort with a modern twist for all-day style. ",
  //     sizes: [
  //       { label: "XS", price: 250 },
  //       { label: "S", price: 299 },
  //       { label: "M", price: 350 },
  //       { label: "L", price: 449 },
  //       { label: "XL", price: 599 },
  //       { label: "XXL", price: 649 },
  //       { label: "XXXL", price: 799 },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: "Top(Red, Black and white Border)",
  //     image:
  //       "https://assets.ajio.com/medias/sys_master/root/20231016/Ek0w/652d0e68ddf77915193f9357/-473Wx593H-466657261-red-MODEL4.jpg",
  //     pricing: 299,
  //     rating: 4.6,
  //     reviews: 1523,
  //     shortDescription: " Trendy and versatile tops for every occasion.",
  //     sizes: [
  //       { label: "XS", price: 209 },
  //       { label: "S", price: 250 },
  //       { label: "M", price: 299 },
  //       { label: "L", price: 349 },
  //       { label: "XL", price: 399 },
  //       { label: "XXL", price: 449 },
  //       { label: "XXXL", price: 499 },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     title: "Blue Jeans",
  //     image:
  //       "https://uspoloassn.in/cdn/shop/products/1_03199a04-5ce3-4558-b074-453da8f597dd.jpg",
  //     pricing: 799,
  //     rating: 4.5,
  //     reviews: 892,
  //     shortDescription:
  //       "Durable, stretchable denim made for everyday fashion..",
  //     sizes: [
  //       { label: "XS", price: 699 },
  //       { label: "S", price: 749 },
  //       { label: "M", price: 799 },
  //       { label: "L", price: 849 },
  //       { label: "XL", price: 899 },
  //       { label: "XXL", price: 949 },
  //       { label: "XXXL", price: 999 },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     title: "Yellow Saree",
  //     image:
  //       "https://i.pinimg.com/originals/9d/99/ed/9d99ed58f78598408795f08748fd511c.jpg",
  //     pricing: 8999,
  //     rating: 4.7,
  //     reviews: 1247,
  //     shortDescription:
  //       "Timeless elegance in every drape.Look georgeous for every occasion",
  //   },
  //   {
  //     id: 5,
  //     title: "Pink Lehnga(Golden Border)",
  //     image:
  //       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQvCSzOvXa1uv1rv9O5jyMXEZPiXE92xF5yJ0l1UfH-xXHnEWfeTXipv8B97fV_TWLcH3qL-y_xXf6-H5WTOqq0jNnwzM0UWv9L3ogZWJA1uMwM0roCi9ehFQ",
  //     pricing: 3499,
  //     rating: 4.4,
  //     reviews: 756,
  //     shortDescription: "Traditional charm meets modern glam.",
  //     sizes: [
  //       { label: "XS", price: 1699 },
  //       { label: "S", price: 2749 },
  //       { label: "M", price: 3499 },
  //       { label: "L", price: 3549 },
  //       { label: "XL", price: 6399 },
  //       { label: "XXL", price: 7949 },
  //       { label: "XXXL", price: 9999 },
  //     ],
  //   },
  //   {
  //     id: 6,
  //     title: "Grey and Silver Gown",
  //     image: "https://img.faballey.com/images/Product/XKS00833Z/d3.jpg",
  //     pricing: 1599,
  //     rating: 4.9,
  //     reviews: 2156,
  //     shortDescription: "Graceful gowns to steal the spotlight.",
  //     sizes: [
  //       { label: "XS", price: 1399 },
  //       { label: "S", price: 1449 },
  //       { label: "M", price: 1599 },
  //       { label: "L", price: 1649 },
  //       { label: "XL", price: 1799 },
  //       { label: "XXL", price: 1849 },
  //       { label: "XXXL", price: 1999 },
  //     ],
  //   },
  //   {
  //     id: 7,
  //     title: "Green Suit(pink and green dupatta)",
  //     image:
  //       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTuihf5kEg2dsYgQM5jnDj3Snz4XMiqRFKgrArQfcwnOMnjV3tmZbgU5zS4zJfJ5WeGyfJ5_KVD1mZAhE6njrFVnU92F-J9csfVNAEKuvZ_",
  //     pricing: 1199,
  //     rating: 4.3,
  //     reviews: 634,
  //     shortDescription: "Classic salwar suits for every mood and moment.",
  //     sizes: [
  //       { label: "XS", price: 999 },
  //       { label: "S", price: 1049 },
  //       { label: "M", price: 1199 },
  //       { label: "L", price: 1249 },
  //       { label: "XL", price: 1399 },
  //       { label: "XXL", price: 1949 },
  //       { label: "XXXL", price: 1999 },
  //     ],
  //   },
  //   {
  //     id: 8,
  //     title: "Long Kurti",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSRnpDbExmEJilhrSMsrVNF-s8tKtmXkzBnR9wlsuGV_7i0dMkbDUTDT0v4yoLyQoEey-QJdN2Z74mEya7R-LHtNmEBkOf47tAHP4R9EslYv3sL7qoUnUCWxw",
  //     pricing: 799,
  //     rating: 4.6,
  //     reviews: 1089,
  //     shortDescription:
  //       "Easy-to-wear kurtis with a perfect blend of comfort and style.",
  //     sizes: [
  //       { label: "XS", price: 699 },
  //       { label: "S", price: 749 },
  //       { label: "M", price: 799 },
  //       { label: "L", price: 849 },
  //       { label: "XL", price: 899 },
  //       { label: "XXL", price: 949 },
  //       { label: "XXXL", price: 999 },
  //     ],
  //   },
  //   {
  //     id: 9,
  //     title: "Rajasthani Duppata",
  //     image:
  //       "https://www.mysticloom.com/cdn/shop/files/blush-phurkari-dupatta-for-women-by-Mysticloom-img3_2048x.jpg?v=1719891482",
  //     pricing: 200,
  //     rating: 4.5,
  //     reviews: 1834,
  //     shortDescription:
  //       "Soft, stylish dupattas to elevate any ethnic outfit. Wear all ethnic outfitt and it looks georgeous",
  //   },
  //   {
  //     id: 10,
  //     title: "Red Blouse(Golden Border)",
  //     image:
  //       "https://www.shutterstock.com/image-photo/premium-hand-embroidered-designer-blouses-600nw-2161893013.jpg",
  //     pricing: 699,
  //     rating: 4.2,
  //     reviews: 445,
  //     shortDescription: "Perfect-fit blouses with elegant cuts and details.",
  //     sizes: [
  //       { label: "XS", price: 699 },
  //       { label: "S", price: 749 },
  //       { label: "M", price: 799 },
  //       { label: "L", price: 849 },
  //       { label: "XL", price: 899 },
  //       { label: "XXL", price: 949 },
  //       { label: "XXXL", price: 999 },
  //     ],
  //   },
  //   {
  //     id: 11,
  //     title: " Woman Pant ",
  //     image:
  //       "https://pantproject.com/cdn/shop/products/womenswear0032_80919cee-d9c9-423e-ad9d-7ea950c57968.jpg?v=1669977379",
  //     pricing: 699,
  //     rating: 4.4,
  //     reviews: 967,
  //     shortDescription: "Sleek and tailored pants for a smart and comfy look.",
  //     sizes: [
  //       { label: "XS", price: 699 },
  //       { label: "S", price: 749 },
  //       { label: "M", price: 799 },
  //       { label: "L", price: 849 },
  //       { label: "XL", price: 899 },
  //       { label: "XXL", price: 949 },
  //       { label: "XXXL", price: 999 },
  //     ],
  //   },
  //   {
  //     id: 12,
  //     title: "Black Trouser",
  //     image:
  //       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT61tMPIGI7NayHHKgwJzn7JEdt9zK8-w8RTtnu99M6sE9ZXrQvYkVD2xAkCiaRDcBqP-oo7kX-cvPsmogh7kMO6faY5Wa2m95qAYqbkic5iNY66uB1wo--Ew",
  //     pricing: 799,
  //     rating: 4.6,
  //     reviews: 723,
  //     shortDescription: "Elegant trousers for office to evening wear.",
  //     sizes: [
  //       { label: "XS", price: 699 },
  //       { label: "S", price: 749 },
  //       { label: "M", price: 799 },
  //       { label: "L", price: 849 },
  //       { label: "XL", price: 899 },
  //       { label: "XXL", price: 949 },
  //       { label: "XXXL", price: 999 },
  //     ],
  //   },
  //   {
  //     id: 13,
  //     title: "Pinkskirt and white top",
  //     image:
  //       "https://images.meesho.com/images/products/232938347/pdzns_512.webp",
  //     pricing: 999,
  //     rating: 4.3,
  //     reviews: 1245,
  //     shortDescription:
  //       "Chic skirts that twirl with style and grace.Explore a wide range of fashionable and functional bottoms.",
  //     sizes: [
  //       { label: "XS", price: 999 },
  //       { label: "S", price: 1049 },
  //       { label: "M", price: 1199 },
  //       { label: "L", price: 1249 },
  //       { label: "XL", price: 1399 },
  //       { label: "XXL", price: 1449 },
  //       { label: "XXXL", price: 1699 },
  //     ],
  //   },
  //   {
  //     id: 14,
  //     title: "Yello Silk Saree(Green Border)",
  //     image:
  //       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSDyqm_VOwdXpN2sgNZuk_Afl7e7wOuecFn0b7WPzMPadQakuC6wh-mvcaFL8zDCNQe0cVTmsMhChiop9_Uowdss4tDe7p0dTTc6gaAsPh0N-0Ud0AVHYi9",
  //     pricing: 1100,
  //     rating: 4.5,
  //     reviews: 589,
  //     shortDescription:
  //       "Rich and luxurious silk sarees with a heritage touch.wear it all special occasion for look different and beautiful.",
  //   },
  //   {
  //     id: 15,
  //     title: "Cotton suits(With red salwar and dupatta)",
  //     image:
  //       "https://images.meesho.com/images/products/385105104/upehe_1200.jpg",
  //     pricing: 799,
  //     rating: 4.7,
  //     reviews: 1367,
  //     shortDescription: " Breathable cotton suits for everyday wear.",
  //     sizes: [
  //       { label: "XS", price: 699 },
  //       { label: "S", price: 749 },
  //       { label: "M", price: 799 },
  //       { label: "L", price: 849 },
  //       { label: "XL", price: 899 },
  //       { label: "XXL", price: 949 },
  //       { label: "XXXL", price: 999 },
  //     ],
  //   },
  //   {
  //     id: 16,
  //     title: "Red Plazzaos",
  //     image:
  //       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTl8CN_wZ_u9SwDKyUOMw6tGv6o8CjMA3sQi4_96_YbKSvgsnk03CM63TUK9_E6HiSL8aw0uRlvS2ggPqYBMJ7sMfEakBjNKYGEreTa_sOo",
  //     pricing: 749,
  //     rating: 4.4,
  //     reviews: 834,
  //     shortDescription: "Flowy and stylish plazzos for ultimate comfort.",
  //     sizes: [
  //       { label: "XS", price: 699 },
  //       { label: "S", price: 749 },
  //       { label: "M", price: 799 },
  //       { label: "L", price: 849 },
  //       { label: "XL", price: 899 },
  //       { label: "XXL", price: 949 },
  //       { label: "XXXL", price: 999 },
  //     ],
  //   },
  //   {
  //     id: 17,
  //     title: "Jump Suit",
  //     image:
  //       "https://assets.ajio.com/medias/sys_master/root/20230628/W2eO/649bf531a9b42d15c90f3705/the_dry_state_teal_jumpsuit_with_insert_pockets.jpg",
  //     pricing: 1499,
  //     rating: 4.8,
  //     reviews: 1456,
  //     shortDescription: "One-piece wonder for a bold and playful look.",
  //     sizes: [
  //       { label: "XS", price: 1299 },
  //       { label: "S", price: 1349 },
  //       { label: "M", price: 1499 },
  //       { label: "L", price: 1549 },
  //       { label: "XL", price: 1599 },
  //       { label: "XXL", price: 1649 },
  //       { label: "XXXL", price: 1999 },
  //     ],
  //   },
  //   {
  //     id: 18,
  //     title: "Pink Night suits",
  //     image:
  //       "https://images.meesho.com/images/products/229692216/se3rx_512.webp",
  //     pricing: 999,
  //     rating: 4.6,
  //     riews: 692,
  //     shortDescription: "Soft and cozy nightwear for peaceful sleep.",
  //     sizes: [
  //       { label: "XS", price: 699 },
  //       { label: "S", price: 749 },
  //       { label: "M", price: 799 },
  //       { label: "L", price: 849 },
  //       { label: "XL", price: 899 },
  //       { label: "XXL", price: 949 },
  //       { label: "XXXL", price: 999 },
  //     ],
  //   },
  //   {
  //     id: 19,
  //     title: "Pink Saree(Net)",
  //     image:
  //       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSK6vHhozd_v-BCYNh3mvR_OBlJateZg9VL4jYxfc4G2D3CLU8xCgICnCVIgNrp6iZFwCTmMH1YhtwBNr61bU4c_bOZXU-KRB6Y6lwJSQI7RK9Kg4I6nQprBQ",
  //     pricing: 4000,
  //     rating: 4.3,
  //     reviews: 1123,
  //     shortDescription:
  //       "Elegant net sarees with delicate embroidery and shimmer.wear for every special occasion, make your day good.",
  //   },
  //   {
  //     id: 20,
  //     title: "Rayon Black Kurti",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRAcwytevg3JX9-vU_SPwqICqWzOwIeeK08iclVIwTOFL6lDJHBSbEHmBup624L0wpnCJ7Hiae-yzS79wtaNOc_F4Q2_wfbN8FlRW1_dQO9suzyoyWbDZQLPg",
  //     pricing: 1999,
  //     rating: 4.5,
  //     reviews: 2089,
  //     shortDescription:
  //       "Lightweight rayon kurtis that keep you stylish and cool.",
  //     sizes: [
  //       { label: "XS", price: 1699 },
  //       { label: "S", price: 1749 },
  //       { label: "M", price: 1999 },
  //       { label: "L", price: 1849 },
  //       { label: "XL", price: 1899 },
  //       { label: "XXL", price: 1949 },
  //       { label: "XXXL", price: 1999 },
  //     ],
  //   },
  //   {
  //     id: 21,
  //     title: "Bridal Lehnga",
  //     image:
  //       "https://www.shoppingworldyt.com/cdn/shop/files/rn-image_picker_lib_temp_49338725-b652-4a86-b5e4-279abd2a5ff5.jpg?v=1737800315&width=1920",
  //     pricing: 29000,
  //     rating: 4.5,
  //     reviews: 2089,
  //     shortDescription: "Stunning bridal lehengas for your dream day.",
  //     sizes: [
  //       { label: "XS", price: 25599 },
  //       { label: "S", price: 26049 },
  //       { label: "M", price: 29000 },
  //       { label: "L", price: 32849 },
  //       { label: "XL", price: 36899 },
  //       { label: "XXL", price: 39949 },
  //       { label: "XXXL", price: 40999 },
  //     ],
  //   },
  // ];

  const onClickHandler = (id) => {
    setClothData(data[id - 1]);
    Navigate(`/details/${id}`);
  };

  return (
    <>
      <div className="py-2 ">
        <h1 className="text-center font-extrabold text-5xl underline  mb-4">
          Women Clothes
        </h1>
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
            {data.map((product) => (
              <div
                className="col"
                onClick={() => onClickHandler(product.id)}
                key={product.id}
              >
                <div className="card shadow-sm">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="bd-placeholder-img card-img-top"
                    height="225"
                    style={{
                      height: "50vh",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h1 className="card-title text-2xl font-bold">
                      {product.title}
                    </h1>
                    <h3 className="text-primary mt-2">₹{product.pricing}</h3>

                    <div className="d-flex justify-content-between my-3 align-items-center">
                      <div className="btn-group">
                        <div>⭐{product.rating}</div>
                      </div>
                      <div>
                        <small className="text-muted">
                          {product.reviews}reviews
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Clothes;
