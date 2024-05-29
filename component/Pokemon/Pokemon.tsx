import React from "react";
import { Text, View } from "react-native";
import useSWR from "swr";

export interface PokemonProps {
  name: string;
}

const fetcher = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw Error("An error occurred while fetching the data.");
  }

  return res.json();
};

export const Pokemon: React.FC<PokemonProps> = ({ name }) => {
  const { data, error } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${name}`,
    fetcher,
    {
      suspense: true,
    }
  );

  if (!data || !!error) {
    return null;
  }

  return (
    <View>
      <Text>Name: {data.name}</Text>
      <Text>Order: {data.order}</Text>
      <Text>Weight: {data.weight}</Text>
    </View>
  );
};
