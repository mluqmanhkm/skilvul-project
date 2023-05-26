const HomepagesLayout = ({ children }) => {
  return (
    <>
      <section id="layout-homepages" className="container">
        <div className="row">
          <div className="col-12">{children}</div>
        </div>
      </section>
    </>
  );
};

export default HomepagesLayout;
