"use client"
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";

interface UserCardProps {
  username: string;
  email: string;
  location: string;
  description: string;
  condition: string;
}

const UserCard: React.FC<UserCardProps> = ({ username, email, location, description, condition }) => {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className="w-[50vw]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="https://nextui.org/avatars/avatar-1.png" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{username}</h4>
            <h5 className="text-small tracking-tight text-default-400">{email}</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <span>{condition}</span>
        <p>{description}</p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">{location}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default UserCard;

