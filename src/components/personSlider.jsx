import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import Man from "../images/icons/Man.svg";
import { AiFillStar } from "react-icons/ai";

export const PersonSlider = () => {
  const services = [
    {
      id: 1,
      image: Man,
      personName: "Mohammed Errami",
      description:
        "Service impeccable ! Je suis totalement satisfait. Recommande fortement!",
    },
    {
      id: 2,
      image: Man,
      personName: "Plombier",
      description:
        "Service impeccable ! Je suis totalement satisfait. Recommande fortement!",
    },
    {
      id: 3,
      image: Man,
      personName: "Plombier",
      description:
        "Service impeccable ! Je suis totalement satisfait. Recommande fortement!",
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
                <AiFillStar size={20} color="yellow" r />
                <img src={service.image} alt="servicePhoto" />
                <h3 className="font-bold">{service.personName}</h3>
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
