import { AppLayout } from "../components/AppLayout";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";

export default function TokenPopup() {
  const handleClick = async () => {
    await fetch("/api/addToken", {
      method: "POST",
    });
  };
  return (
    <div>
      <h1>Token topup</h1>
      <button className="btn" onClick={handleClick}>
        Add Tokens
      </button>
    </div>
  );
}

TokenPopup.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});
