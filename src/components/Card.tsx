"use client";
import React from "react";

import { Card, CardHeader, CardBody, CardFooter, Image, User } from "@nextui-org/react";
import { MapPin } from "lucide-react";

interface UserCardProps {
  username: string;
  email: string;
  location: string;
  description: string;
  condition: string;
  imageUrl: string
}

const UserCard: React.FC<UserCardProps> = ({ username, email, location, description, condition, imageUrl }) => {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className="w-[50vw]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <User
            name={username}
            description={email}
            avatarProps={{
              src: ""
            }}
          />
        </div>
      </CardHeader>
      <CardBody className="flex flex-col p-5 text-default-400">
        <div className="mb-4">
          <span className="text-base">{condition}</span>
          <p className="text-black text-lg">{description}</p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={imageUrl}
            width={600}
          />
        </div>
      </CardBody>
      <CardFooter className="flex items-center">
        <MapPin size={20} />
        <p className="text-small ml-1">{location}</p>
      </CardFooter>
    </Card>
  );
};

export default UserCard;
