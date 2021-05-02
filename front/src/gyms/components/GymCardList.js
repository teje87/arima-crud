import React from "react";
import GymCard from "./GymCard";

export default function GymCardList({ gymCardListProps }) {
  const { gyms, loading, handleEdit, handleDelete } = gymCardListProps;

  return gyms.map((item) =>
    loading ? (
      <p>loading</p>
    ) : (
      <GymCard
        key={item.id}
        name={item.name}
        phone={item.phone}
        openedSince={item.openedSince}
        gymId={item.id}
        img={`https://picsum.photos/200?random=${item.id}`}
        handleDelete={() => handleDelete(item.id)}
        handleEdit={handleEdit}
      />
    )
  );
}
