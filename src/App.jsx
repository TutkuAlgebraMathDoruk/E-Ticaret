import Header from "./layout/Header";
import PageContent from "./layout/PageContent";

export default function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-white">
      <Header />
      <PageContent />
    </div>
  );
}
