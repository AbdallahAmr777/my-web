import { useState } from "react";
import { MyProjects } from "./MyProjects";
import { AnimatePresence, motion } from "framer-motion";
import "./Main.css";
const Main = () => {
 
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(MyProjects);
  const handel = (buttonCategory) => {
    setCurrentActive(buttonCategory);
    const newArray = MyProjects.filter((item) => {
      const categoryArr = item.category.filter((MyItem) => {
        return MyItem === buttonCategory;
      });
      return categoryArr[0] === buttonCategory;
    });
    setArr(newArray);
  };

  return (
    <main className="flex main">
      <section className="left-section flex ">
        <button
          onClick={() => {
            setArr(MyProjects);
            setCurrentActive("all");
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            handel("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => {
            handel("bootstrap");
          }}
          className={currentActive === "bootstrap" ? "active" : null}
        >
          Bootstrap
        </button>
        <button
          onClick={() => {
            handel("js");
          }}
          className={currentActive === "js" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            handel("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          ReactJs
        </button>
        <button
          onClick={() => {
            handel("node");
          }}
          className={currentActive === "node" ? "active" : null}
        >
          Node & Express
        </button>

        {/* 
        <button>ReactJs</button>
        <button>Node & Express</button> */}
      </section>

      <section className="right-section flex  ">
      <AnimatePresence>
        {arr.map((item) => {
          return (
            <motion.article
            layout
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}

            transition={{type :"spring", damping:"8" ,stiffness:50}}
            key={item.id} className="card ">
              <img src={item.image} alt="" />
              <div className="box">
                <h1 className="title">{item.projectTitle}</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Officia totam nam velit a quibusdam modi maiores
                </p>
                <div className="flex icons">
                  <div className="flex" style={{ gap: "11px" }}>
                    <a className="icon-link" href={item.link} target="__blank"></a>
                    <a className="icon-github" href={item.github} target="__blank"></a>
                  </div>
                  <a href="" className="flex">
                    more
                    <span
                      className="icon-arrow-right"
                      style={{ alignSelf: "end" }}
                    ></span>
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
