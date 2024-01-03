import { Header } from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container ">
        <nav>
          <div className="tailet">私のポートフォリオ</div>
          <div>
            <form action="#">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </form>
          </div>
        </nav>
        <section>
          <div className="content">
            <h1>ポートフォリオ🚀</h1>
            <h3>tetetsteteststetstestestestestestes</h3>
            <p>testtestesdfsagdaga</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
              お問い合わせ
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
