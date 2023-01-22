import React from "react";
import styled from "styled-components";
import Cardpic1 from "../assets/meds1.png";
import Cardpic2 from "../assets/meds2.png";
import Cardpic3 from "../assets/meds3.png";


import { Link} from 'react-router-dom'

const Pharmacy = () => {
  const data = [
    {
      image: Cardpic1,
      title: "ALIC FACE WASH 100ML",
      subTitle: "KERATOLYTIC AGENT",
      cost: "Rs.450",
    },
    {
      image: Cardpic2,
      title: "ECOSPRIN-75MG",
      subTitle: "DRUGS AFFECTING BLOOD AND BLOOD",
      cost: "Rs.10/tab",
    },
    {
      image: Cardpic3,
      title: "FORTIPLEX CAP",
      subTitle: "VITAMIN AND MINERALS",
      cost: "Rs.50 per pack",
    },
    {
      image: Cardpic1,
      title: "RETIDERM-0.025% GEL-20G.",
      subTitle: "RETINOIDS",
      cost: "Rs.250",
    },
    {
      image: Cardpic2,
      title: "AMLOD-5MG",
      subTitle: "CALCIUM CHANNEL BLOCKERS",
      cost: "Rs.200",
    },
    {
      image: Cardpic3,
      title: "FORTIPLEX CAP",
      subTitle: "VITAMIN AND MINERALS",
      cost: "Rs.10/tab",
    },
  ];
  return (
    <Link to='doctorlistpage'>
    <Section id="destinations" className="max-w-[1240px] mx-auto py-24 px-4 text-center">
      <h1 className="text-6xl font-bold"> ePharmacy</h1>
      <p className="py-5 pb-10">
        Choose from the list meds you want and have 'em delivered to your doorsteps right away.
      </p>
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <img src={destination.image} alt="" />
              <h3 className="font-bold text-xl">{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="priceandcart flex flex-col items-center justify-center">
                <h1>{destination.cost}</h1>
                <button className="py-3 px-6 w-full sm:w-[60%] my-3">Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>
      <div id='destinationsLast' className="h-0">{/* this is created so that navbar doesnot covers content of section following this div, which is explore section in this case  */}
      </div>
    </Section>
    </Link>
  );
};

export default Pharmacy;
const Section = styled.section`
.destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #dbdaf8;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;