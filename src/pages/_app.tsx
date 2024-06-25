import "@mantine/core/styles.css";
import "@/styles/global.css";
import type { AppProps } from "next/app";
import { createTheme, MantineProvider } from "@mantine/core";
import { HeaderTabs } from "@/components/HeaderTabs";
import { Footer } from "@/components/Footer";

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <HeaderTabs />
      <Component {...pageProps} />
      <Footer />
    </MantineProvider>
  );
}
