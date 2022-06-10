import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

export default function NFTCard({ NFTName, NFTOwner, NFTSerialNumber }) {
  return (
    <Card sx={{ bgcolor: "black", color: "#fff" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random/?nft"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {NFTName}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                width: 150,
                height: 50,
                bgcolor: "#181818",
              },
            }}
          >
            <Paper elevation={0} sx={{ color: "#fff" }}>
              <Stack
                justifyContent="center"
                spacing={0.1}
                sx={{ height: "100%" }}
                ml={1}
              >
                <Typography variant="body2">{"@" + NFTOwner}</Typography>
                <Typography variant="body2">{NFTSerialNumber}</Typography>
              </Stack>
            </Paper>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
