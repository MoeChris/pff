import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import faucet from "../images/icons/faucet.svg";

export const Slider = () => {
  const services = [
    {
      id: 1,
      image: faucet,
      nameService: "Plombier",
      description:
        "Des solutions de plomberie de qualité pour chaque problème de tuyauterie!",
    },
    {
      id: 2,
      image: faucet,
      nameService: "Plombier",
      description:
        "Des solutions de plomberie de qualité pour chaque problème de tuyauterie!",
    },
    {
      id: 3,
      image: faucet,
      nameService: "Plombier",
      description:
        "Des solutions de plomberie de qualité pour chaque problème de tuyauterie!",
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="max-w-sm">
        <Swiper spaceBetween={70} slidesPerView={1} align={"center"}>
          {services.map((service) => {
            return (
              <SwiperSlide
                className="max-h-[13em] p-2.5 bg-[#C1E8FF] rounded-lg flex flex-col items-center justify-center"
                key={service.id}
              >
                <img src={service.image} alt="servicePhoto" />
                <h3 className="font-bold">{service.nameService}</h3>
                <p className="font-light text-sm w-[250px]">
                  {service.description}
                </p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
