import { Flex, Select, Text } from "@mantine/core";
import { useRecoilState } from "recoil";
import { activeGenreTabState } from "../../../atoms/atoms";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function WorksGenreNavigationBar({ genres }: { genres: any }) {
  const router = useRouter();

  const genresArray = genres.map((genre: any) => genre.name);

  // get the active genre tab from recoil
  const [activeGenreTab, setActiveGenreTab] =
    useRecoilState(activeGenreTabState);

  // find the genre name from the index
  const genreName = genresArray[activeGenreTab];
  const [value, setValue] = useState(genreName);

  // synchronize value state with activeGenreTab
  useEffect(() => {
    setValue(genreName);
  }, [activeGenreTab, genresArray]);

  // handle change of select box
  const handleChange = (value: string | null) => {
    if (value !== null) {
      setValue(value);
      setActiveGenreTab(genresArray.indexOf(value));
      router.push(`/works`);
    }
  };

  return (
    <>
      {/* navbar */}
      <Flex
        mx="md"
        mt={0}
        mb={30}
        w="100vw"
        wrap="nowrap"
        visibleFrom="sm"
        style={{ overflowX: "auto", scrollbarWidth: "none" }}
      >
        <Flex justify="center" gap={{ base: "xl", md: 80 }} w="100%">
          {genres.map((link: any, index: any) => (
            <Text
              key={index}
              fz={{ base: "md", md: "lg" }}
              fw={300}
              pb="sm"
              ta="center"
              c={activeGenreTab === index ? "white" : "#5e5e5e"}
              onClick={() => setActiveGenreTab(index)}
              style={{
                borderBottom:
                  activeGenreTab === index
                    ? "1px solid #4631bd"
                    : "1px solid transparent",
                cursor: "pointer",
                textWrap: "nowrap",
              }}
            >
              {link.name}
            </Text>
          ))}
        </Flex>
      </Flex>

      {/* dropdown */}
      <Select
        hiddenFrom="sm"
        c="white"
        maw={200}
        mb="lg"
        data={genresArray}
        value={value}
        onChange={handleChange}
        style={{
          margin: "0 auto",
        }}
        styles={{
          dropdown: {
            background: "#181818",
            color: "white",
            border: "1px darkgray solid",
          },
          input: {
            backgroundColor: "#181818",
            border: "1px darkgray solid",
            color: "white",
          },
        }}
      />
    </>
  );
}

export default WorksGenreNavigationBar;
