import { Box } from "theme-ui";

export default function Layout({ children }) {
  return (
    <Box
      sx={{
        textAlign: "center",
        color: "white",
        pb: 4,
        background: `linear-gradient(40deg, rgba(255,71,148,0.55) 0%, rgba(214,58,249,0.45) 100%), linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4965161064425771) 20%, rgba(0,0,0,0.7987570028011205) 100%), 
                        url(https://user-images.githubusercontent.com/39828164/189933158-9f00ceaf-7f61-4bef-9911-4cf4a14e0e4d.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        textAlign: "left",
        px: [0, 0, 0],
      }}
    >
      {children}
    </Box>
  );
}
