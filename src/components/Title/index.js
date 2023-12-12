// import { Helmet } from "react-helmet";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Title = ({ title }) => {
  return (
    // <div>
    <HelmetProvider>
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={title} />
        </Helmet>
      </div>
    </HelmetProvider>
  );
};
export default Title;
