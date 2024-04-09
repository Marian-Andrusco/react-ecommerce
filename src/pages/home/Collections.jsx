const Collections = () => {
  return (
    <div className="bg-[url('/images/collection-bg.png')] bg-cover bg-center bg-no-repeat xl:px-28 px-4 my-20">
      <div className=" h-[580px] 2xl:h-[1000px] flex justify-between flex-col md:flex-row items-center">
        <div className="md:w-1/2"></div>
        <div className="md:w-1/2">
          <img src="/images/zara-logo.png" alt="zara-logo" />
          <p className="text-lg text-white capitalize my-8 md:w-2/3 leading-[32px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
            molestie magna, ut viverra velit. Mauris eu est ut felis egestas
            ornare nec eget diam. Quisque in nunc et nulla suscipit luctus.
            Curabitur nulla ex, faucibus ut semper at, condimentum tincidunt
            enim. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Quisque sit amet consectetur lacus. Proin et massa dignissim,
            laoreet massa nec, interdum nulla.
          </p>
          <button className="px-6 py-2 bg-white text-black rounded-sm font-semibold">
            See Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collections;
