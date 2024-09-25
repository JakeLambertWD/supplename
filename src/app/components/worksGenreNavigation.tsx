import { Flex, Select, Text } from "@mantine/core";
import { useRecoilState } from "recoil";
import { activeGenreTabState } from "../../../atoms/atoms";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { theme } from "../utils/theme";
import { genresNavLinks } from "../utils/constants";

function WorksGenreNavigation({ isFixed }: { isFixed?: boolean }) {
  const router = useRouter();

  const genresArray = genresNavLinks.map((genre: any) => genre.name);

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
    } else {
      // if user clicks the active genre then redirect to works page
      router.push(`/works`);
    }
  };

  return (
    <>
      <Flex
        mx="md"
        mt={0}
        mb={30}
        w="100vw"
        h={42}
        wrap="nowrap"
        visibleFrom="sm"
        style={{ overflowX: "auto", scrollbarWidth: "none" }}
      >
        <Flex
          justify="center"
          gap={{ base: "xl", md: 80 }}
          w="100%"
          pos={isFixed ? "fixed" : "relative"}
          top={isFixed ? 90 : ""}
          bg={isFixed ? theme?.colors?.primary?.[9] : "transparent"}
          style={{ zIndex: 40 }}
        >
          {genresNavLinks.map((link: any, index: any) => (
            <Text
              key={index}
              fz={{ base: "md", md: "lg" }}
              fw={300}
              pb="sm"
              ta="center"
              c={
                activeGenreTab === index ? "white" : theme?.colors?.primary?.[6]
              }
              onClick={() => {
                setActiveGenreTab(index);
                router.push(`/works`);
              }}
              style={{
                borderBottom:
                  activeGenreTab === index
                    ? `2px solid ${theme.colors?.primary?.[1]}`
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
            background: theme?.colors?.primary?.[8],
            color: "white",
            border: "1px darkgray solid",
          },
          input: {
            backgroundColor: theme?.colors?.primary?.[8],
            border: "1px darkgray solid",
            color: "white",
          },
        }}
      />
    </>
  );
}

export default WorksGenreNavigation;
