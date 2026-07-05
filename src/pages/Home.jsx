import Header  from "../components/Header"

export default function Home() {
  return (
    <>
      <Header/>
      <div className="p-8">
        <button className="btn btn-primary">
          DaisyUI works!
        </button>
      </div>
    </>
  );
}