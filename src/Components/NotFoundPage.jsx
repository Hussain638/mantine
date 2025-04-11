import React from "react";
import { Container, Text, Button, Image, Stack } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import Error from "../assets/images/error.png";

 
export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        boxSizing: "border-box",
      }}
    >
      <Container size="sm">
        <Stack align="center" spacing="md">
          <Image
            src={Error}
            alt="404 Not Found"
            w={350}
            maw="100%"
            style={{ objectFit: "contain" }}
          />
          <Text fw={700} size="xl" ta="center">
            Work In Progress!
          </Text>
          <Text c="dimmed" ta="center" maw={400}>
          Sorry for the inconvenience. This page is under Progress.
          </Text>
          <Button
            variant="light"
            color="blue"
            size="md"
            onClick={() => {
                navigate("/analytics");
             
            }}
          >
            Back to Home
          </Button>
        </Stack>
      </Container>
    </div>
  );
}
 
 