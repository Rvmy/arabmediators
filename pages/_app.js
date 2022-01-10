import { GlobalStyle } from "../styles/globalStyle";
import { MantineProvider } from "@mantine/core";

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider
      theme={{
        colorScheme: "dark",
      }}
    >
      <GlobalStyle />
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
