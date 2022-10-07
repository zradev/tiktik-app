import React, { useEffect, useState } from "react";
import { MdFavorite } from "react-icons/md";
import { NextPage } from "next";

import useAuthStore from "../store/authStore";

interface IProps {
  handleLike: () => void;
  handleDislike: () => void;
}

const LikeButton = ({ handleLike, handleDislike }: IProps) => {
  const [isAlreadyLiked, setIsAlreadyLiked] = useState(false);
  const { userProfile }: any = useAuthStore();

  return (
    <div className="gap-6">
      <div className="mt-4 flex flex-col justify-center items-center cursor-pointer">
        {isAlreadyLiked ? (
          <div
            className="bg-primary rounded-full p-2 md:p-4 text-[#F51997]"
            onClick={handleDislike}
          >
            <MdFavorite className="text-lg md:text-lg" />
          </div>
        ) : (
          <div
            className="bg-primary rounded-full p-2 md:p-4"
            onClick={handleLike}
          >
            <MdFavorite className="text-lg md:text-lg" />
          </div>
        )}
        <p className="text-md font-semibold">Likes.length || 0</p>
      </div>
    </div>
  );
};

export default LikeButton;
