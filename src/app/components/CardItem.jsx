"use client";
import { IMGLINK } from "../config";
import { Button, Link } from "@nextui-org/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function CardItem({ data }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.map((page) => (
        <div
          key={page.id}
          className="p-4 border border-gray-300 rounded shadow-md flex flex-col justify-between h-full items-center"
        >
          <Link href={`/detail/${page.id}`} color="primary">
            <div className="flex flex-col items-center justify-center mb-2">
              <img
                src={IMGLINK + page.destinationBox[0].src}
                className="w-full h-80"
                alt={page.home.name}
              />

              <div className="flex flex-row items-center justify-center mt-3">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  size="lg"
                  className="mr-2 text-orange-500"
                />
                <h2 className="text-2xl font-bold text-gray-600">
                  {page.home.name}
                </h2>
              </div>
            </div>
          </Link>
          <h3 className="text-xl font-bold mb-2">{page.home.content}</h3>

          <p className="text-gray-600 h-full overflow-hidden">
            {page.home.textcontent}
          </p>

          <Link href={`/payment/${page.home.name}/${page.id}`}>
            <Button color="primary" variant="bordered" className="mt-4">
              Đặt ngay
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
}
