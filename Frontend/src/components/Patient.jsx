import React from "react";
import styled from "styled-components";
import Cardpic1 from "../assets/boneandjoint.png";
import Cardpic2 from "../assets/childhealth.png";
import Cardpic3 from "../assets/gynecologist.png";
import Cardpic4 from "../assets/cardiac.png";
import Cardpic5 from "../assets/ent.png";
import Cardpic6 from "../assets/general.png";
// import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

import { Link} from 'react-router-dom'

const Patient = () => {
  const data = [
    {
      image: Cardpic1,
      title: "Bone and Joint",
      subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      cost: "From Rs.5000",
      duration: "Online and pyshical",
    },
    {
      image: Cardpic2,
      title: "Child health",
      subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      cost: "From Rs.5000",
      duration: "Online and pyshical",
    },
    {
      image: Cardpic3,
      title: "Gynecologist",
      subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      cost: "From Rs.5000",
      duration: "Online and pyshical",
    },
    {
      image: Cardpic4,
      title: "Cardiac",
      subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      cost: "From Rs.5000",
      duration: "Online and pyshical",
    },
    {
      image: Cardpic5,
      title: "ENT services",
      subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet ",
      cost: "From Rs.5000",
      duration: "Online and pyshical",
    },
    {
      image: Cardpic6,
      title: "General",
      subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      cost: "From Rs.5000",
      duration: "Online and pyshical",
    },
  ];
  return (
    <Link to='doctorlistpage'>
    <Section id="destinations" className="max-w-[1240px] mx-auto py-24 px-4 text-center">
      <h1 className="text-6xl font-bold"> Welcome! You are logged in</h1>
      <p className="py-5 pb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        facere sed nobis maiores, illo ratione?
      </p>
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <div className="services">
                  {/* <img src={info1} alt="" /> */}
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div>
                <h4>{destination.cost}</h4>
              </div>
              <div className="distance">
                <span>100+ doctors</span>
                <span>{destination.duration}</span>
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

export default Patient;
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