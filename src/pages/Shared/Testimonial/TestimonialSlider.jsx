import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./TestimonialSlider.css";

const TestimonialSlider = () => {
  const testimonialsData = [
    {
      image: "img1",
      author: "John Doe",
      quote: `An exceptional front-end developer, He blends creativity and technical expertise to craft visually stunning and user-friendly websites. His passion for perfection, open communication, and dedication to deadlines make him an invaluable asset to any team. Highly recommended for those seeking a front-end wizard to elevate your digital presence and leave a lasting impression on users.`,
      role: "ceo",
      company: "UI/UX Designer",
    },
    {
      image: "img2",
      author: "Thomas",
      quote: `He is a highly skilled front-end developer, breathing life into websites with his artistic touch and seamless interactions. His commitment to delivering captivating user experiences sets you apart, making him the ideal choice for any project seeking excellence in design and functionality.`,
      role: "ceo",
      company: "X-Part",
    },
    {
      image: "img3",
      author: "Robert",
      quote: `"Meet Ruhul, a front-end virtuoso who crafts digital wonders with an artist's eye and a coder's precision. His ability to blend aesthetics and functionality seamlessly creates an enchanting user experience that leaves a lasting impact. If you seek a dedicated front-end developer to bring your visions to life, He is the answer.`,
      role: "Developer",
      company: "Core x coder",
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [userComment, setUserComment] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex(
        (prevIndex) => (prevIndex + 1) % testimonialsData.length
      );
    }, 5000); // Change testimonial every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [testimonialsData.length]);

  const handleManualChange = (index) => {
    setCurrentTestimonialIndex(index);
  };

  const handleSubmitComment = (event) => {
    event.preventDefault();
    // Here, you can handle the submission of the user's comment
    console.log("User Comment:", userComment);
    setUserComment("");
  };

  const showForm = () => {
    setIsVisible(!isVisible);
  };
  const hiddenForm = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div className="flex justify-center items-center pt-4 pb-0 mt-20">
        <h5 className=" text-center w-max px-6 py-2 text-sm text-green-500 uppercase bg-green-100 mb-3">
          Testimonials
        </h5>
      </div>
      <h1 className="text-center text-3xl mt-2 capitalize">What people says</h1>
      <div className="flex justify-center items-center flex-col">
        <div>
          <svg
            className="fill-green-400"
            xmlns="http://www.w3.org/2000/svg"
            width="130px"
            height="130px"
            viewBox="0 0 24 24">
            <g>
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-3/5 p-2 md:p-8 mb-24">
          <Carousel
            selectedItem={currentTestimonialIndex}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            onChange={handleManualChange}
            infiniteLoop
            autoPlay
            interval={5000}>
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-item rounded-lg shadow-md shadow-green-200 p-8 mb-10">
                {/* <img src={testimonial.image} alt={testimonial.name} /> */}
                <div className="testimonial-quote">
                  <p className="text-gray-900 not-italic text-sm my-2">
                    {testimonial.quote}
                  </p>
                </div>
                <div className="testimonial-info">
                  <h3 className="testimonial-name text-xl font-bold mt-4">
                    {testimonial.author}
                  </h3>
                  <h5 className="testimonial-role uppercase text-xs font-semibold">
                    {testimonial.role}
                  </h5>
                  <h5 className="testimonial-role text-sm font-semibold capitalize">
                    {testimonial.company}
                  </h5>
                </div>
              </div>
            ))}
          </Carousel>

          <div
            className={`flex justify-center items-center ${
              isVisible ? "block" : "hidden"
            }`}>
            <button
              onClick={showForm}
              className="btn w-max rounded-none border bg-green-400 text-white hover:border-green-400 hover:text-green-400">
              Rate me!
            </button>
          </div>

          <form
            onSubmit={handleSubmitComment}
            className={` ${isVisible ? "hidden" : "comment-form"}`}>
            <textarea
              className="comment-input md:mx-20 border border-green-400 leading-tight focus:outline-none focus:shadow-green-500 resize-y overflow-auto "
              value={userComment}
              onChange={(e) => setUserComment(e.target.value)}
              placeholder="Enter your comment..."
            />
            <div className="flex justify-center items-center">
              <button
                onClick={hiddenForm}
                type="submit"
                className="btn w-max rounded-none border bg-green-400 text-white hover:border-green-400 hover:text-green-400">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
