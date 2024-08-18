import * as React from "react";

type ISEOProps = {
  post: string
}

const SEO: React.FC<ISEOProps> = ({ post }) => {
  return (
    <title>{post}</title>
  )
}

export default SEO;