const Footer = () => {
  return (
      <div className="w-[100%] m-auto  p-20 bg-zinc-200">
          <h2 className="text-red-500 text-center">Features</h2>
          <h1 className="text-2xl font-bold text-center text-black">
              OUR AWESOME SERVICES
          </h1>

          <div className="features flex flex-wrap justify-between mt-[5%]">
              <div className="w-[40%] flex items-center">
                  <i className="text-[10vh] ri-restaurant-line mr-5"></i>
                  <div className="">
                      <h1 className="text-xl text-black">Quality Food</h1>
                      <p className="text-sm text-black opacity-55">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Deleniti nesciunt sit in? Consectetur, illum
                          ipsum!
                      </p>
                  </div>
              </div>

              <div className="w-[40%] flex items-center">
                  <i className="text-[10vh] ri-graduation-cap-line mr-5"></i>
                  <div className="">
                      <h1 className="text-xl text-black">Cook like a Chef</h1>
                      <p className="text-sm text-black opacity-55">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Deleniti nesciunt sit in? Consectetur, illum
                          ipsum!
                      </p>
                  </div>
              </div>
              <div className="w-[40%] flex items-center">
                  <i className="text-[10vh] ri-bread-line mr-5"></i>
                  <div className="">
                      <h1 className="text-xl text-black">Ingredients</h1>

                      <p className="text-sm text-black opacity-55">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Deleniti nesciunt sit in? Consectetur, illum
                          ipsum!
                      </p>
                  </div>
              </div>
              <div className="w-[40%] flex items-center">
                  <i className="text-[10vh] ri-presentation-line mr-5"></i>
                  <div className="">
                      <h1 className="text-xl text-black">Easy Recipe</h1>
                      <p className="text-sm text-black opacity-55">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Deleniti nesciunt sit in? Consectetur, illum
                          ipsum!
                      </p>
                  </div>
              </div>
              <div className="w-[40%] flex items-center">
                  <i className="text-[10vh] ri-temp-hot-line mr-5"></i>
                  <div className="">
                      <h1 className="text-xl text-black">Serve Hot</h1>
                      <p className="text-sm text-black opacity-55">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Deleniti nesciunt sit in? Consectetur, illum
                          ipsum!
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Footer;
