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

  const totalPages = Math.ceil(images.length / itemsPerPage);
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
  const [currentIndex, setCurrentIndex] = useState(1);
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
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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
      <div id="home" class="ParallaxVideo">
        <div className="relative h-screen">
          <video
            autoPlay
            muted
            loop
            className="w-1/2 h-1/2 md:w-full md:h-full object-cover"
          >
            <source src={video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 flex justify-center h-1/3 md:h-full items-center p-10">
            <h1
              className="text-white text-4xl md:text-6xl transition-opacity duration-0"
              id="fade-text"
            >
              I will be with you in your special day!
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="flex flex-col items-center space-y-5 p-10">
          <img
            src={top}
            alt="top"
            className="md:w-1/2 w-4/5 z-10"
            data-aos="fade-zoom-in"
            data-aos-duration="500"
            data-aos-delay="0"
          />
          <div
            className="flex items-center"
            data-aos="fade-zoom-in"
            data-aos-duration="500"
            data-aos-delay="0"
          >
            <img src={addition} alt="addition" className="md:w-40 w-20 " />
            <h1 className="md:text-4xl text-3xl font-bold transform transition duration-500 w-full font-abcd bg-clip-text text-transparent bg-golden-gradient">
              `WE CAPTURE THE MOMENT '
            </h1>
            <img
              src={addition}
              alt="addition"
              className="md:w-40 w-20 transform scale-x-[-1] " // Adjust size as needed
            />
          </div>
          <p
            className="justify-center font-bold text-center text-xl w-full md:w-3/4 space-y-2 font-dancing bg-clip-text text-transparent bg-golden-gradient"
            data-aos="fade-zoom-in"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            Hello, thank you for visiting.
            <br />
            <div
              data-aos="fade-zoom-in"
              data-aos-duration="500"
              data-aos-delay="300"
              className="bg-clip-text font-bold text-transparent bg-golden-gradient"
            >
              My name is Duc Quang, but you can also call me Jos (Joshep). As a
              wedding MC, I strive to go beyond clichés and templates. I want to
              tell your story and connect everyone at the event. To do this,
              I’ll ask questions and learn about you to uncover and share your
              unique and interesting aspects with your loved ones.
              <br />
            </div>
            <div
              data-aos="fade-zoom-in"
              data-aos-duration="500"
              data-aos-delay="400"
              className="bg-clip-text font-bold text-transparent bg-golden-gradient"
            >
              I am committed to creating a personalized and memorable wedding
              ceremony for you. Whether you want a more complex event or a grand
              and emotional ceremony, I am here to fulfill your wishes. I will
              adjust to meet your standards and desires because it’s your day
              and your story.
              <br />
            </div>
            <div
              data-aos="fade-zoom-in"
              data-aos-duration="500"
              data-aos-delay="500"
              className="bg-clip-text font-bold text-transparent bg-golden-gradient"
            >
              There are many things to prepare for such a special day, but don’t
              worry. I am here not only as an MC but also to offer advice and
              support if you encounter any difficulties. My goal is for you to
              look beautiful, feel relaxed, and fully experience the emotions of
              your special day without unnecessary stress.
              <br />
            </div>
            <div
              data-aos="fade-zoom-in"
              data-aos-duration="500"
              data-aos-delay="600"
              className="bg-clip-text font-bold text-transparent bg-golden-gradient"
            >
              I look forward to working with you to create an unforgettable
              wedding ceremony. Please contact me!
            </div>
          </p>
          {/* <img src={logo2} className="w-16" alt="Logo" data-aos="fade-zoom-in"
              data-aos-duration="500"
              data-aos-delay="200"/> */}
          <img
            className="md:w-2/3 w-3/4"
            src={bottom}
            alt="bottom"
            data-aos="fade-zoom-in"
            data-aos-duration="500"
            data-aos-delay="200"
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
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="0"
            >
              <h1 className="font-bold text-2xl font-abcd">ABOUT ME</h1>
              <h1 className="font-bold text-2xl">Trần Đức Quang</h1>
              <span>Năm sinh: ...</span>
              <span>Tốt nghiệp: ....</span>
            </div>
          </div>
        </div>
        <Timeline />
        <div id="service"></div>
        <div className="flex flex-col justify-center items-center p-10 mx-10 lg:mx-32 text-white bg-black opacity-80">
          <div className="w-full md:w-1/3 text-center pb-10">
            <h1
              className="font-bold text-3xl font-fb"
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-delay="200"
            >
              ~ SERVICES ~
            </h1>
            <p
              className="font-fb"
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-delay="200"
            >
              At Capturer, we offer a range of professional photography services
              tailored to meet your unique needs. With a commitment to
              excellence and creativity, we strive to exceed your expectations,
              delivering captivating visuals that tell your story with
              authenticity and passion.
            </p>
          </div>
          <div className="flex flex-col text-center md:flex-row justify-center space-y-5 md:space-y-0 md:space-x-10 px-5 md:px-20">
            {["Car", "Flower", "MC", "Decorating"].map((service, index) => (
              <div
                key={index}
                data-aos="fade-left"
                data-aos-duration="500"
                data-aos-delay="200"
                className="font-fb"
              >
                <h2 className="font-bold text-xl">{service}</h2>
                <p className="text-sm">
                  {
                    [
                      "Experience the thrill of the road with our premium car rental service. Luxury, comfort, and style—drive your dream today.",
                      "Bloom with beauty. Our exquisite floral arrangements bring elegance and freshness to any occasion. Order your perfect bouquet now.",
                      "Elevate your event with our professional MC services. Engaging, charismatic, and experienced—let us make your occasion unforgettable.",
                      "Transform spaces with our stunning decor solutions. From intimate gatherings to grand celebrations, we craft environments that captivate and inspire.",
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
          GALLERY
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
              550: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              710: {
                slidesPerView: 3,
                spaceBetween: 30,
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
                  <img src={img.image} alt="img" className="max-w-[200px]" />
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
          <div className="relative px-14 pb-10 pt-5 border border-gray-200 rounded-lg bg-[#E2CAA0]">
            <h1
              id="feedback"
              className="font-bold text-3xl text-white text-center pb-5"
              data-aos="fade-zoom-in"
              data-aos-duration="500"
              data-aos-delay="0"
            >
              Feedback
            </h1>

            {/* Top-right flower image */}
            <img
              src={flowerImage}
              alt="Flower"
              className="absolute -top-20 -right-14 w-56 h-56 z-10" // Adjust size as needed
              style={{ transform: "rotate(0deg)" }} // No rotation for the top-right flower
            />
            <div className="md:flex md:space-x-10 space-y-10 md:space-y-0">
              {comments.map((object, index) => (
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                  <div className="flex items-start">
                    <div className="relative">
                      <img
                        className="w-16 h-16 rounded-full border-4 border-[#E2CAA0]"
                        src={avt}
                        alt="User"
                      />
                      <div className="absolute top-0 left-0 w-full h-full bg-[#E2CAA0] rounded-full -z-10"></div>
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
              className="absolute -bottom-14 -left-14 w-44 h-44 z-10"
              style={{ transform: "rotate(180deg)" }}
            />
          </div>
          <div className="py-20">
            <div className="text-center bg-gray-100 content-around rounded-lg p-5">
              <div id="colab" className="text-gray-500 mb-5 font-bold text-2xl">
                Colaborators
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
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
