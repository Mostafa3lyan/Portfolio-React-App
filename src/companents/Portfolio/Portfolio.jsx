import React, { useState } from "react";

const Portfolio = () => {
  const [zoomed, setzoomed] = useState(null);

  const handleZoom = (src) => {
    setzoomed(src);
  };

  const handleCloseZoom = () => {
    setzoomed(null);
  };

  const images = [
    "https://routeegy.github.io/startFramework/assets/images/poert1.png",
    "https://routeegy.github.io/startFramework/assets/images/port2.png",
    "https://routeegy.github.io/startFramework/assets/images/port3.png",
    "https://routeegy.github.io/startFramework/assets/images/poert1.png",
    "https://routeegy.github.io/startFramework/assets/images/port2.png",
    "https://routeegy.github.io/startFramework/assets/images/port3.png",
  ];

  return (
    <>
      <div className="container-fluid mx-auto mt-5 p-5 bg-white">
        <div className="portfolioComponent d-flex justify-content-center align-items-center flex-column mt-5">
          <h3 className="text-uppercase bg-grey fs-1 fw-bold">
            portfolio component
          </h3>
          <div className="star my-3">
            <i className="fa-solid fa-star bg-grey"></i>
          </div>
          <div className="row g-0">
            {images.map((src, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="card p-4 border-0">
                  <div
                    className="inner cursor-pointer position-relative"
                    onClick={() => handleZoom(src)}
                  >
                    <img className="rounded w-100" src={src} alt="house" />
                    <div className="layer position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center">
                      <i className="fa-solid fa-plus fs-1 text-white"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Zoom Overlay */}
      {zoomed && (
        <div
          className="zoom-overlay position-fixed top-0 start-0 w-100 h-100 bg-sky bg-opacity-75 d-flex justify-content-center align-items-center"
          onClick={handleCloseZoom}
          style={{ zIndex: 9999, cursor: "pointer" }}
        >
          <img
            src={zoomed}
            alt="Zoomed"
            className="img-fluid rounded shadow"
            style={{ maxHeight: "90%", maxWidth: "90%" }}
          />
        </div>
      )}
    </>
  );
};

export default Portfolio;

// import React, { useState } from "react";

// const Portfolio = () => {
// const [zoomed, setzoomed] = useState()
//   return (
//     <div className="container-fluid mx-auto mt-5 p-5 bg-white">
//       <div className="portfolioComponent d-flex justify-content-center align-items-center flex-column mt-5">
//         <h3 className="text-uppercase bg-grey fs-1 fw-bold">
//           portfolio component
//         </h3>
//         <div className="star my-3">
//           <i className=" fa-solid fa-star bg-grey "></i>
//         </div>
//         <div className="row g-0">
//           <div className="col-lg-4 col-md-6">
//             <div className="card p-4 border-0 ">
//               <div className="inner cursor-pointer position-relative">
//                 <img
//                   className="rounded w-100"
//                   src="https://routeegy.github.io/startFramework/assets/images/poert1.png"
//                   alt="house"
//                 />
//                 <div className="layer position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center">
//                   <i className="fa-solid fa-plus fs-1 text-white"></i>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6">
//             <div className="card p-4 border-0">
//               <div className="inner cursor-pointer position-relative">
//                 <img
//                   className="rounded w-100"
//                   src="https://routeegy.github.io/startFramework/assets/images/port2.png"
//                   alt="house"
//                 />
//                 <div className="layer position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center">
//                   <i className="fa-solid fa-plus fs-1 text-white"></i>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6">
//             <div className="card p-4 border-0">
//               <div className="inner cursor-pointer position-relative">
//                 <img
//                   className="rounded w-100"
//                   src="https://routeegy.github.io/startFramework/assets/images/port3.png"
//                   alt="house"
//                 />
//                 <div className="layer position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center">
//                   <i className="fa-solid fa-plus fs-1 text-white"></i>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6">
//             <div className="card p-4 border-0">
//               <div className="inner cursor-pointer position-relative">
//                 <img
//                   className="rounded w-100"
//                   src="https://routeegy.github.io/startFramework/assets/images/poert1.png"
//                   alt="house"
//                 />
//                 <div className="layer position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center">
//                   <i className="fa-solid fa-plus fs-1 text-white"></i>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6">
//             <div className="card p-4 border-0">
//               <div className="inner cursor-pointer position-relative">
//                 <img
//                   className="rounded w-100"
//                   src="https://routeegy.github.io/startFramework/assets/images/port2.png"
//                   alt="house"
//                 />
//                 <div className="layer position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center">
//                   <i className="fa-solid fa-plus fs-1 text-white"></i>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6">
//             <div className="card p-4 border-0">
//               <div className="inner cursor-pointer position-relative">
//                 <img
//                   className="rounded w-100"
//                   src="https://routeegy.github.io/startFramework/assets/images/port3.png"
//                   alt="house"
//                 />
//                 <div className="layer position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center">
//                   <i className="fa-solid fa-plus fs-1 text-white"></i>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;
