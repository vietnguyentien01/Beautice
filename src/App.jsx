import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

const About = React.lazy(() => import("./pages/About"));
const Blog = React.lazy(() => import("./pages/Blog"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Gallery = React.lazy(() => import("./pages/Gallery"));
const Home = React.lazy(() => import("./pages/Home"));
const Service = React.lazy(() => import("./pages/Service"));
const Team = React.lazy(() => import("./pages/Team"));

function App() {
  const LoadingBtn = styled.div`width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #8b8b8b;
    opacity: 0.5;
    color: #ffffff;
    font-size: 36px;
    font-weight: 700;`;

  return <Routes>
      <Route path="/" element={<React.Suspense fallback={<LoadingBtn className="btn-loading">
                Loading...
              </LoadingBtn>}>
            <Home />
          </React.Suspense>} />
      <Route path="/about" element={<React.Suspense fallback={<LoadingBtn className="btn-loading">
                Loading...
              </LoadingBtn>}>
            <About />
          </React.Suspense>} />
      <Route path="/service" element={<React.Suspense fallback={<LoadingBtn className="btn-loading">
                Loading...
              </LoadingBtn>}>
            <Service />
          </React.Suspense>} />
      <Route path="/gallery" element={<React.Suspense fallback={<LoadingBtn className="btn-loading">
                Loading...
              </LoadingBtn>}>
            <Gallery />
          </React.Suspense>} />
      <Route path="/blog" element={<React.Suspense fallback={<LoadingBtn className="btn-loading">
                Loading...
              </LoadingBtn>}>
            <Blog />
          </React.Suspense>} />
      <Route path="/contact" element={<React.Suspense fallback={<LoadingBtn className="btn-loading">
                Loading...
              </LoadingBtn>}>
            <Contact />
          </React.Suspense>} />
      <Route path="/team" element={<React.Suspense fallback={<LoadingBtn className="btn-loading">
                Loading...
              </LoadingBtn>}>
            <Team />
          </React.Suspense>} />
    </Routes>;
}

export default App;
