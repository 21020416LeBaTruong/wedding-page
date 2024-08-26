import "./App.css";
// import './index.css'
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import abc from "./img/abc.png";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactForm from "./components/contactForm";
import logo1 from "./img/cisco_logo.png";
import video from "./img/video.mp4";
import AOS from "aos";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";
import img6 from "./img/img6.jpg";
import img7 from "./img/img7.jpg";
import img8 from "./img/img8.jpg";
import avt from "./img/colab1.png";
import flowerImage from "./img/flower.png";
import top from "./img/top.png";
import bottom from "./img/bottom.png";
import addition from "./img/addition.png";
import "aos/dist/aos.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Timeline from "./components/timeline";
import translations from "../src/components/translations";
import { GlobeAltIcon } from "@heroicons/react/outline";
const comments = [
  {
    comment:
      "I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.",
    name: "Will Smith",
    video: "[NEW] Ultimate AWS Certified Cloud Practitioner - 2022",
  },
  {
    comment:
      "I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.",
    name: "James Cameron",
    video: "[NEW] Ultimate AWS Certified Cloud Practitioner - 2022",
  },
];

const gallery = [
  {
    image: abc,
  },
  {
    image: abc,
  },
  {
    image: abc,
  },
  {
    image: abc,
  },
  {
    image: abc,
  },
  {
    image: abc,
  },
  {
    image: abc,
  },
  {
    image: abc,
  },
  {
    image: abc,
  },
];

function App() {
  const [language, setLanguage] = useState("vi"); // 'en' cho tiếng Anh, 'vi' cho tiếng Việt

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "vi" : "en"));
  };
  const [currentWord, setCurrentWord] = useState(translations[language].type);
  const [isDeleting, setIsDeleting] = useState(false);
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  useEffect(() => {
    const handleTyping = () => {
      let updatedWord = currentWord;
      if (isDeleting) {
        updatedWord = currentWord.substring(0, j - 1);
        setJ(j - 1);
        if (j === 0) {
          setIsDeleting(false);
          setI((prev) => (prev + 1) % translations[language].type.length);
        }
      } else {
        updatedWord = translations[language].type[i].substring(0, j + 1);
        setJ(j + 1);
        if (j === translations[language].type[i].length) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 5000); // 5 seconds delay before starting to delete
        }
      }
      setCurrentWord(updatedWord);
    };

    const timeoutId = setTimeout(handleTyping, 100);

    return () => clearTimeout(timeoutId);
  }, [currentWord, isDeleting, i, j, translations[language].type]);
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("fade-text");
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const maxScroll = 200;
      let opacity = 1 - scrollTop / maxScroll;

      if (opacity < 0) {
        opacity = 0;
      }

      header.style.opacity = opacity;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const itemsPerPage = 8;

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      closeModal();
    }
  };
  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };
  const prevSlide = () => {
    let index = images.indexOf(selectedImage);
    if (index - 1 < 0) index = images.length;
    setSelectedImage(images[index - 1]);
  };
  const nextSlide = () => {
    let index = images.indexOf(selectedImage);
    if (index + 1 >= images.length) index = -1;
    setSelectedImage(images[index + 1]);
  };

  // Get current images
  const currentImages = images.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div
      id="wrapper"
      className="App mix-blend-difference"
      onClick={handleClose}
    >
      <Header />
      <button
      onClick={toggleLanguage}
      className="fixed bottom-10 right-10 z-50 flex items-center justify-center p-2 bg-gray-500 text-white rounded-full hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-all duration-500 ease-in-out"
    >
      <span
        className={`mr-2 transform transition-transform duration-500 ${
          language === "en" ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
        }`}
      >
        EN
      </span>
      <span
        className={`mr-2 transform transition-transform duration-500 ${
          language === "vi" ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
        }`}
      >
        VI
      </span>
      <GlobeAltIcon className="h-6 w-6" />
    </button>
      <div id="home" class="ParallaxVideo">
        <div className="relative h-screen ">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          >
            <source src={video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 flex justify-center h-5/6 items-center p-10">
            <h1
              className="text-white text-4xl md:text-6xl transition-opacity duration-0"
              id="fade-text"
            >
              {currentWord}
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="flex flex-col items-center space-y-5 p-10">
          
          <div
            className="flex items-center"
            data-aos="fade-zoom-in"
            data-aos-duration="500"
            data-aos-delay="0"
          >
            <h1 className="md:text-7xl text-5xl font-bold transform transition duration-500 w-full font-intro ">
              {translations[language].welcome}
            </h1>
            
          </div>
          
          <p
            className="justify-center font-bold text-center text-xl w-full md:w-3/4 space-y-2 font-dancing "
            data-aos="fade-zoom-in"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            {translations[language].intro.p1}
            <br />
            <div
              data-aos="fade-zoom-in"
              data-aos-duration="500"
              data-aos-delay="300"
              className="font-bold"
            >
              {translations[language].intro.p2}
              <br />
            </div>
            <div
              data-aos="fade-zoom-in"
              data-aos-duration="500"
              data-aos-delay="400"
              className="font-bold "
            >
              {translations[language].intro.p3}
              <br />
            </div>
            <div
              data-aos="fade-zoom-in"
              data-aos-duration="500"
              data-aos-delay="500"
              className="font-bold "
            >
              {translations[language].intro.p4}
              <br />
            </div>
            <div
              data-aos="fade-zoom-in"
              data-aos-duration="500"
              data-aos-delay="600"
              className="font-bold "
            >
              {translations[language].intro.p5}
            </div>
          </p>
          <img
            src={top}
            alt="top"
            className="md:w-1/6 w-3/12 z-10 pl-5"
            data-aos="fade-zoom-in"
            data-aos-duration="500"
            data-aos-delay="0"
          />
        </div>
        <div id="aboutme" className="pb-5"></div>
        <div className="flex justify-center px-10">
          <div className="flex flex-col md:flex-row justify-center md:space-x-44 items-center w-full md:w-3/4 space-y-5 md:space-y-0">
            <img
              src={abc}
              className="w-full md:w-[450px]"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="0"
              alt="abc"
            />
            <div
              className="flex flex-col"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="0"
            >
              <h1 className="font-bold text-2xl"></h1>
              <h1 className="font-bold text-5xl font-intro">{translations[language].name}</h1>
              <span>{translations[language].DOB}</span>
              <span>{translations[language].Education}</span>
            </div>
          </div>
        </div>
        <Timeline language={language}/>
        <div id="service"></div>
        <div className="flex flex-col justify-center items-center p-10 mx-10 lg:mx-32 text-white bg-black opacity-80">
          <div className="w-full md:w-1/3 text-center pb-10">
            <h1
              className="font-bold text-2xl font-fb"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="200"
            >
              {translations[language].SV}
            </h1>
            <p
              className="font-fb"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="200"
            >
              {translations[language].service.p1}
            </p>
          </div>
          <div className="flex flex-col text-center md:flex-row justify-center space-y-5 md:space-y-0 md:space-x-10 px-5 md:px-20">
            {[translations[language].service.p6, translations[language].service.p7, translations[language].service.p8, translations[language].service.p9].map((service, index) => (
              <div
                key={index}
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-delay="200"
                className="font-fb"
              >
                <h2 className="font-bold text-xl">{service}</h2>
                <p className="text-sm">
                  {
                    [
                      translations[language].service.p1,
                      translations[language].service.p2,
                      translations[language].service.p3,
                      translations[language].service.p4
                    ][index]
                  }
                </p>
              </div>
            ))}
          </div>
        </div>
        <h1
          id="gallery"
          className="font-bold text-2xl text-gray-500 mb-4 pt-10"
        >
          {translations[language].gallery}
        </h1>
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <div>
              <div className="grid md:grid-cols-4 md:grid-rows-2 grid-cols-2 gap-2 px-10 lg:px-32 group">
                {currentImages.map((imgSrc, index) => (
                  <img
                    key={index}
                    src={imgSrc}
                    alt={`Image ${index + 1}`}
                    className="w-72 h-auto transition duration-500 ease-in-out opacity-100 group-hover:opacity-50 hover:!opacity-100 hover:scale-105"
                    onClick={() => openModal(imgSrc)}
                  />
                ))}
              </div>

              {/* Pagination Controls */}
              {/* <div className="flex justify-center space-x-2 mt-4">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={`px-4 py-2 rounded ${
                      currentPage === index + 1
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div> */}

              {/* Modal for enlarged image */}
              {isModalOpen && (
                <div
                  id="wrapper"
                  className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-10"
                >
                  <div className="relative group">
                    <div
                      // style={{ backgroundImage: `url(${selectedImage})` }}
                      className="rounded-2xl bg-center bg-cover duration-500"
                    >
                      <img
                        src={selectedImage}
                        alt="Enlarged view"
                        className="md:h-screen md:w-auto w-screen"
                      />
                    </div>
                    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                      <BsChevronCompactLeft onClick={prevSlide} size={30} />
                    </div>
                    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                      <BsChevronCompactRight onClick={nextSlide} size={30} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="pt-10 pb-20 px-10 lg:px-32 mx-auto">
          <Swiper
            
            breakpoints={{

              340: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              950: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1360: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            speed={750}
            modules={[FreeMode, Pagination, Autoplay]}
          >
            {gallery.map((img, index) => (
              <SwiperSlide key={index} className="mb-10">
                <div>
                  <img src={img.image} alt="img" className="w-[100px] md:w-[200px]" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div
          className="lg:px-32 px-10"
          data-aos="fade-zoom-in"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          <div className="relative px-2 sm:px-5 md:px-14 pb-10 pt-5 border border-gray-200 rounded-lg bg-[#E2CAA0]">
            <h1
              id="feedback"
              className="font-bold text-2xl text-white text-center pb-5"
              data-aos="fade-zoom-in"
              data-aos-duration="500"
              data-aos-delay="0"
            >
              {translations[language].feedback}
            </h1>

            {/* Top-right flower image */}
            <img
              src={flowerImage}
              alt="Flower"
              className="absolute md:-top-20 -right-10 -top-16 w-32 md:w-56 md:h-56 z-10" // Adjust size as needed
              style={{ transform: "rotate(0deg)" }} // No rotation for the top-right flower
            />
            <div className="md:flex md:space-x-10 space-y-2 sm:space-y-5 md:space-y-0">
              {comments.map((object, index) => (
                <div className="bg-gray-100 md:p-6 p-2 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <div className="relative">
                      <img
                        className="min-w-12 rounded-full border-4 border-[#E2CAA0]"
                        src={avt}
                        alt="User"
                      />
                    </div>
                    <div className="ml-4 flex-grow">
                      <div className="flex items-center">
                        <h3 className="text-xl font-bold font-mono italic">
                          {object.name}
                        </h3>
                      </div>
                      <div className="flex mt-2">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-[#E2CAA0]"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 .587l3.668 7.568L24 9.423l-6 5.847L19.335 24 12 19.899 4.665 24 6 15.27 0 9.423l8.332-1.268z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600 font-fb">{object.comment}</p>
                </div>
              ))}
            </div>

            {/* Bottom-left flower image */}
            <img
              src={flowerImage}
              alt="Flower"
              className="absolute md:-bottom-14 -bottom-20 -left-14 w-44 h-44 z-10"
              style={{ transform: "rotate(180deg)" }}
            />
          </div>
          <div className="py-20">
            <div className="text-center bg-gray-100 content-around rounded-lg p-5">
              <div id="colab" className="text-gray-500 mb-5 font-bold text-2xl">
                {translations[language].colab}
              </div>
              <div className="flex flex-wrap justify-around mx-5 md:mx-20">
                {[logo1, logo1, logo1, logo1].map((logo, index) => (
                  <img
                    key={index}
                    src={logo}
                    alt={`logo${index + 1}`}
                    className="w-24 md:w-32 m-2"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <ContactForm language={language} />
        <Footer language={language}/>
      </div>
    </div>
  );
}

export default App;
