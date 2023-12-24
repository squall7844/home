export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container">
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
            <button className="primary-btn">お問い合わせ</button>
          </div>
        </section>
      </div>
    </div>
  );
}
