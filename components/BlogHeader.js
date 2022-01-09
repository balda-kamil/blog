import Image from "next/image";


export default function BlogHeader({title, subtitle, author, date, image}) {
  return (
    <div className="blog-detail-header">
      <div className="article-author">
        <Image
          src={author?.avatar}
          className="rounded-circle"
          height={50}
          width={50}
          alt="author avatar"
        />
        <p className="lead mb-0">
          {author?.name}
          {", "} {date}
        </p>
      </div>
      <h1 className="font-weight-bold blog-detail-header-title mb-0">
        {title}
      </h1>
      <h2 className="blog-detail-header-subtitle mb-3">{subtitle}</h2>
      {/* Check if contains cover image */}
      <Image
        className="img-fluid rounded"
        layout="responsive"
        width={920}
        height={430}
        src={image}
        alt="article cover image"
      />
    </div>
  );
}
