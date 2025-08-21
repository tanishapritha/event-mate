import React from "react";
import ContentLoader from "react-content-loader";

const EventCardSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={250}
      height={300}
      viewBox="0 0 250 300"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="16" ry="16" width="250" height="180" />
      <rect x="0" y="190" rx="8" ry="8" width="200" height="20" />
      <rect x="0" y="220" rx="6" ry="6" width="150" height="16" />
      <rect x="0" y="250" rx="8" ry="8" width="100" height="30" />
    </ContentLoader>
  );
};

export default EventCardSkeleton;
