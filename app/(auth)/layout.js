import "../globals.css";
import AuthNavBar from "../../components/AuthNavBar";

export const metadata = {
  title: "a-commerce",
  description: "An e-commerce website for learning purposes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <AuthNavBar />
        {children}
      </body>
    </html>
  );
}
