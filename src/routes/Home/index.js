import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React, { useState, useEffect } from "react";
import FilterTags from "../../components/filterTags";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Stack from "@mui/material/Stack";
import NFTCard from "../../components/NFTCard";
function Home({ AuthContext }) {
  let [NFTdata, setNFTdata] = useState([]);
  let [filterData, setFilterData] = useState("Most Popular");
  useEffect(() => {
    getNFTData();
  }, []);

  let getNFTData = () => {
    fetch("db.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setNFTdata(myJson.NFTS);
      });
  };

  return (
    <div>
      <Container maxWidth="xl">
        <Box mt={1} mb={1}>
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            Live Spaces
          </Typography>
          <Stack direction="row" spacing={1}>
            <CheckCircleIcon fontSize="small" />
            <Typography variant="body2" gutterBottom component="div">
              All NFTs on Cyber either belong to or were minted by their space
              creator.
            </Typography>
          </Stack>
          <Box mt={2} mb={3}>
            <FilterTags setFilterData={setFilterData} filterData={filterData} />
          </Box>
          <Grid
            container
            spacing={2}
            sx={{ height: "calc(100vh - 217px)", overflow: "auto" }}
          >
            {NFTdata.filter((nft) => {
              return nft.filter === filterData;
            }).map((nft) => (
              <Grid key={nft.id} item xs={12} sm={4} md={4} lg={4}>
                <NFTCard
                  key={nft.id}
                  NFTName={nft.name}
                  NFTOwner={nft.owner}
                  NFTSerialNumber={nft.serialNumber}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default Home;
