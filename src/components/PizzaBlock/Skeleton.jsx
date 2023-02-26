import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={475}
        viewBox="0 0 280 475"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="125" cy="125" r="125" />
        <rect x="-1" y="271" rx="10" ry="10" width="280" height="29" />
        <rect x="-4" y="317" rx="11" ry="11" width="280" height="77" />
        <rect x="0" y="408" rx="10" ry="10" width="95" height="31" />
        <rect x="123" y="409" rx="10" ry="10" width="150" height="45" />
    </ContentLoader>
)

export default Skeleton