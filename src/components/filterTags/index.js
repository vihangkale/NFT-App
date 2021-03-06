import Stack from "@mui/material/Stack";
import Tag from "../../components/tag";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import DiamondIcon from "@mui/icons-material/Diamond";
import TempleHinduIcon from "@mui/icons-material/TempleHindu";
import CycloneIcon from "@mui/icons-material/Cyclone";
import PetsIcon from "@mui/icons-material/Pets";
export default function FilterTags({ setFilterData, filterData }) {
  let filters = [
    {
      id: "1",
      name: "24h Trending",
      icon: (
        <LocalFireDepartmentIcon
          fontSize="small"
          style={{ color: "#ff9800" }}
        />
      ),
    },
    { id: "2", name: "Latest Shows" },
    { id: "3", name: "Most Popular" },
    {
      id: "4",
      name: "In Genesis",
      icon: <DiamondIcon fontSize="small" style={{ color: "#0091ea" }} />,
    },
    {
      id: "5",
      name: "In Temple",
      icon: <TempleHinduIcon fontSize="small" style={{ color: "#b8860b" }} />,
    },
    {
      id: "6",
      name: "In Void",
      icon: <CycloneIcon fontSize="small" style={{ color: "blueGrey" }} />,
    },
    {
      id: "7",
      name: "#BAYC",
      icon: <PetsIcon fontSize="small" style={{ color: "#00e676" }} />,
    },
  ];
  return (
    <Stack direction="row" spacing={1} sx={{ overflow: "auto" }}>
      {filters.map((filter) => (
        <Tag
          key={filter.id}
          tagName={filter.name}
          tagIcon={filter.icon ? filter.icon : ""}
          setFilterData={setFilterData}
          filterData={filterData}
        />
      ))}
    </Stack>
  );
}
