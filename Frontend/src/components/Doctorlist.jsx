import React from "react";
import styled from "styled-components";
import Cardpic1 from "../assets/doctor2.png";
// import { Link} from 'react-router-dom';

const Doctorlist = () => {
  const data = [
    {
      image: Cardpic1,
      title: "Dr. John Doe",
      subTitle: "Bone and Joint specialist",
    },
    {
      image: Cardpic1,
      title: "Dr. Monkey D Luffy",
      subTitle: "Child health expert",
    },
    {
      image: Cardpic1,
      title: "Dr. Dattebayo",
      subTitle: "Gynecologist",
    },
    {
      image: Cardpic1,
      title: "Dr.Yamete Kudasai",
      subTitle: "Cardiac",
    },
    {
      image: Cardpic1,
      title: "Dr.Oggy",
      subTitle: "ENT specialist",
    },
    {
      image: Cardpic1,
      title: "Dr. Sishimanu",
      subTitle: "General Physician",
    },
  ];
  return (
    <Section id="destinations" className="max-w-[1240px] mx-auto py-24 px-4 text-center">
      <h1 className="text-6xl font-bold"> Meet our top doctors</h1>
      <p className="py-5 pb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        facere sed nobis maiores, illo ratione?
      </p>
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <img src={destination.image} alt="" />
              <h3 className="font-extrabold text-xl">{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="callandchat flex flex-col items-center justify-center">
                    <button className="py-3 px-6 w-full sm:w-[60%] mt-3 mb-1" ><a href="https://us05web.zoom.us/j/83718627547?pwd=dFFObDRuenpZaE85eWNxSmYrNDZWdz09">Call</a></button>
                    <button className="py-3 px-6 w-full sm:w-[60%] mb-3" >Chat</button>
              </div>
            </div>
          );
        })}
      </div>
      <div id='destinationsLast' className="h-0">{/* this is created so that navbar doesnot covers content of section following this div, which is explore section in this case  */}
      </div>
    </Section>
  );
};

export default Doctorlist;
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