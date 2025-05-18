"use client";

import Image from "next/image";
import Link from "next/link";

const VideoCard = ({
  id,
  title,
  thumbnail,
  createdAt,
  userImg,
  username,
  views,
  visibility,
  duration,
}: VideoCardProps) => {
  return (
    <Link href={`/video/${id}`} className="video-card">
      <Image
        src={thumbnail}
        alt="thumbnail"
        width={290}
        height={160}
        className="thumbnail"
      />
      <article>
        <div>
          <figure>
            <Image
              src={userImg}
              alt="avatar img"
              width={34}
              height={34}
              className="rounded-full aspect-square"
            />
            <figcaption>
              <h3>{username}</h3>
              <p>{visibility}</p>
            </figcaption>
          </figure>
          <aside>
            <Image src={"/assets/icons/eye.svg"} alt="views" width={16} height={16} />
            <span>{views}</span>
          </aside>
        </div>
        <h2>
          {title} -{" "}
          {createdAt.toLocaleDateString("es-MX", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </h2>
      </article>
      <button onClick={() => {}} className="copy-btn">
        <Image src={"/assets/icons/link.svg"} alt="copy" width={18} height={18} />
      </button>
      {duration && (
        <div className="duration">
          {Math.floor(duration / 60)}:{duration % 60}
        </div>
      )}
    </Link>
  );
};
export default VideoCard;
