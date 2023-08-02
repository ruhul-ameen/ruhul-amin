import ItemSocialText from "../Shared/ItemSocial/ItemSocialText";

const Blog = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-4 pb-0 mb-32 mt-20">
        <h5 className="text-center text-4xl uppercase py-10 bg-clip-text text-transparent bg-gradient-to-l from-cyan-400 to-green-400 animate-jump-in">
          Blog
        </h5>
        <h1 className="text-3xl text-center uppercase text-green-400">
          Improvements are being made!
        </h1>
      </div>
      <ItemSocialText></ItemSocialText>
    </>
  );
};

export default Blog;
