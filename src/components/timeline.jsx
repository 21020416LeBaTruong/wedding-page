import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Timeline = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const steps = [
    {
      title: "Kết nối và tư vấn",
      description:
        "Việc kết nối và hiểu hơn về nhau rất quan trọng. Tôi muốn lắng nghe nhiều hơn những mong muốn của bạn.",
      color: "bg-red-500",
      animation: "fade-up"
    },
    {
      title: "Kế hoạch cụ thể",
      description:
        "Chúng ta sẽ cùng nhau lên một kế hoạch đặc biệt, rõ ràng và thực tế.",
      color: "bg-green-500",
      animation: "fade-up"
    },
    {
      title: "Viết kịch bản",
      description:
        "Với tất cả tâm huyết, khả năng và sự thấu hiểu, tôi sẽ việt một câu chuyện đặc biệt.",
      color: "bg-blue-500",
      animation: "fade-up"
    },
    {
      title: "Điều chỉnh",
      description:
        "Với tất cả những gì đã chuẩn bị, chúng ta sẽ cùng điều chỉnh kế hoạch cho thật hoàn hảo.",
      color: "bg-indigo-500",
      animation: "fade-up"
    },
    {
      title: "Lễ cưới",
      description:
        "Hãy cùng nhau tận hưởng những khoảnh khắc không thể quên. Tôi sẽ làm với tất cả những gì mình có.",
      color: "bg-teal-500",
      animation: "fade-up"
    },
  ];

  return (
    <div className="p-10 lg:px-32">
      <h1
        className="font-bold text-2xl text-gray-500 text-center p-5"
        data-aos="fade-zoom-in"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        Quy trình làm việc
      </h1>
      <div className="relative">
        <div className="absolute border-2 border-gray-300 h-full top-0 left-1/2 transform -translate-x-1/2 md:block hidden"></div>
        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative flex items-center justify-${index % 2 === 0 ? "start" : "end"} mb-10`}
            data-aos={step.animation}
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className={`order-${index % 2 === 0 ? "2" : "1"} w-1/2 md:w-1/3 flex flex-col items-center ${index % 2 === 0 ? "ml-auto" : "mr-auto"} p-5 bg-white shadow-lg rounded-lg`}>
              <h2 className="font-bold text-lg mb-2">{step.title}</h2>
              <p>{step.description}</p>
            </div>
            <div
              className={`order-${index % 2 === 0 ? "1" : "2"} fixed w-8 h-8 rounded-full bg-gray-200 left-1/2 transform -translate-x-1/2`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
