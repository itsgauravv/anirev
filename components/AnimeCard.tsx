/* eslint-disable @next/next/no-img-element */
import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Anime, Author } from "@/sanity/types";

export type AnimeCardType = Omit<Anime, "author"> & { author?: Author };

const AnimeCard = ({ post }: { post: AnimeCardType }) => {
  const {
    _createdAt,
    views,
    author,
    title,
    category,
    image,
    description,
    _id,
  } = post;
  return (
    <li className="startup-card groups">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${author?._id}`}>
            <p className="text-16-medium line-clamp-1">{author?.name}</p>
          </Link>
          <Link href={`/anime/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${author?._id}`}>
          <Image
            src={author?.image || "https://placehold.co/48x48"}
            alt="profile"
            className="rounded-full size-12"
            height={48}
            width={48}
          />
        </Link>
      </div>

      <Link href={`/anime/${_id}`} className="flex flex-col gap-4">
        <p className="startup_card_desc line-clamp-5">{description}</p>

        <img src={image} alt={title} className="startup-card_img" />
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/anime/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default AnimeCard;
