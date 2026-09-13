import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import ReactCard from "./components/cards/ReactCard";
import VueCard from "./components/cards/VueCard";
import SvelteCard from "./components/cards/SvelteCard";
import NextCard from "./components/cards/NextCard";
import NodeCard from "./components/cards/NodeCard";
import PostgreSQLCard from "./components/cards/PostgreSQLCard";
import RedisCard from "./components/cards/RedisCard";
import JavaScriptCard from "./components/cards/JavaScriptCard";
import TypeScriptCard from "./components/cards/TypeScriptCard";
import JavaCard from "./components/cards/JavaCard";
import TailwindCard from "./components/cards/TailwindCard";
import DockerCard from "./components/cards/DockerCard";

import Footer from "./components/Footer";

function App() {
  // ==========================================
  // STACK STATE
  // ==========================================

  const [stack, setStack] = useState<string[]>([]);

  // ==========================================
  // ADD TECHNOLOGY
  // ==========================================

  const addToStack = (technology: string) => {
    setStack((previousStack) => {
      if (previousStack.includes(technology)) {
        return previousStack;
      }

      return [...previousStack, technology];
    });
  };

  // ==========================================
  // REMOVE ONE TECHNOLOGY
  // ==========================================

  const removeFromStack = (technology: string) => {
    setStack((previousStack) =>
      previousStack.filter((item) => item !== technology)
    );
  };

  // ==========================================
  // REMOVE ALL TECHNOLOGIES
  // ==========================================

  const removeAll = () => {
    setStack([]);
  };

  // ==========================================
  // CHECK IF TECHNOLOGY IS ADDED
  // ==========================================

  const isAdded = (technology: string) => {
    return stack.includes(technology);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ========================================
          NAVBAR
      ======================================== */}

      <Navbar />

      {/* ========================================
          HERO
      ======================================== */}

      <Hero />

      {/* ========================================
          MAIN CONTENT
      ======================================== */}

      <main>
        <section className="px-6 py-12 lg:py-16">
          <div className="mx-auto max-w-6xl">
            {/* ====================================
                SECTION HEADER
            ==================================== */}

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900">
                Explore the{" "}
                <span className="text-pink-500">
                  Technologies
                </span>
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Pick one technology per category to build
                your ideal stack.
              </p>
            </div>

            {/* ====================================
                TECHNOLOGY AREA
            ==================================== */}

            <div
              className="
                grid
                grid-cols-1
                gap-6
                lg:grid-cols-[minmax(0,1fr)_280px]
                lg:items-start
              "
            >
              {/* ==================================
                  TECHNOLOGY CARDS
              ================================== */}

              <div
                className="
                  grid
                  grid-cols-1
                  gap-4
                  sm:grid-cols-2
                  lg:grid-cols-3
                "
              >
                {/* =================================
                    REACT
                ================================= */}

                <div
                  className={
                    isAdded("React")
                      ? "rounded-xl border-2 border-pink-400 bg-pink-50/30"
                      : "rounded-xl"
                  }
                >
                  <ReactCard
                    isAdded={isAdded("React")}
                    onAdd={() => addToStack("React")}
                  />
                </div>

                {/* =================================
                    VUE
                ================================= */}

                <div
                  className={
                    isAdded("Vue.js")
                      ? "rounded-xl border-2 border-pink-400 bg-pink-50/30"
                      : "rounded-xl"
                  }
                >
                  <VueCard
                    isAdded={isAdded("Vue.js")}
                    onAdd={() => addToStack("Vue.js")}
                  />
                </div>

                {/* =================================
                    SVELTE
                ================================= */}

                <div
                  className={
                    isAdded("Svelte")
                      ? "rounded-xl border-2 border-pink-400 bg-pink-50/30"
                      : "rounded-xl"
                  }
                >
                  <SvelteCard
                    isAdded={isAdded("Svelte")}
                    onAdd={() => addToStack("Svelte")}
                  />
                </div>

                {/* =================================
                    NEXT.JS
                ================================= */}

                <div
                  className={
                    isAdded("Next.js")
                      ? "rounded-xl border-2 border-pink-400 bg-pink-50/30"
                      : "rounded-xl"
                  }
                >
                  <NextCard
                    isAdded={isAdded("Next.js")}
                    onAdd={() => addToStack("Next.js")}
                  />
                </div>

                {/* =================================
                    NODE.JS
                ================================= */}

                <div
                  className={
                    isAdded("Node.js")
                      ? "rounded-xl border-2 border-pink-400 bg-pink-50/30"
                      : "rounded-xl"
                  }
                >
                  <NodeCard
                    isAdded={isAdded("Node.js")}
                    onAdd={() => addToStack("Node.js")}
                  />
                </div>

                {/* =================================
                    POSTGRESQL
                ================================= */}

                <div
                  className={
                    isAdded("PostgreSQL")
                      ? "rounded-xl border-2 border-pink-400 bg-pink-50/30"
                      : "rounded-xl"
                  }
                >
                  <PostgreSQLCard
                    isAdded={isAdded("PostgreSQL")}
                    onAdd={() => addToStack("PostgreSQL")}
                  />
                </div>

                {/* =================================
                    REDIS
                ================================= */}

                <div
                  className={
                    isAdded("Redis")
                      ? "rounded-xl border-2 border-pink-400 bg-pink-50/30"
                      : "rounded-xl"
                  }
                >
                  <RedisCard
                    isAdded={isAdded("Redis")}
                    onAdd={() => addToStack("Redis")}
                  />
                </div>

                {/* =================================
                    JAVASCRIPT
                ================================= */}

                <div
                  className={
                    isAdded("JavaScript")
                      ? "rounded-xl border-2 border-pink-400 bg-pink-50/30"
                      : "rounded-xl"
                  }
                >
                  <JavaScriptCard
                    isAdded={isAdded("JavaScript")}
                    onAdd={() => addToStack("JavaScript")}
                  />
                </div>

                {/* =================================
                    TYPESCRIPT
                ================================= */}

                <div
                  className={
                    isAdded("TypeScript")
                      ? "rounded-xl border-2 border-pink-400 bg-pink-50/30"
                      : "rounded-xl"
                  }
                >
                  <TypeScriptCard
                    isAdded={isAdded("TypeScript")}
                    onAdd={() => addToStack("TypeScript")}
                  />
                </div>

                {/* =================================
                    JAVA
                ================================= */}

                <div
                  className={
                    isAdded("Java")
                      ? "rounded-xl border-2 border-pink-400 bg-pink-50/30"
                      : "rounded-xl"
                  }
                >
                  <JavaCard
                    isAdded={isAdded("Java")}
                    onAdd={() => addToStack("Java")}
                  />
                </div>

                {/* =================================
                    TAILWIND CSS
                ================================= */}

                <div
                  className={
                    isAdded("Tailwind CSS")
                      ? "rounded-xl border-2 border-pink-400 bg-pink-50/30"
                      : "rounded-xl"
                  }
                >
                  <TailwindCard
                    isAdded={isAdded("Tailwind CSS")}
                    onAdd={() => addToStack("Tailwind CSS")}
                  />
                </div>

                {/* =================================
                    DOCKER
                ================================= */}

                <div
                  className={
                    isAdded("Docker")
                      ? "rounded-xl border-2 border-pink-400 bg-pink-50/30"
                      : "rounded-xl"
                  }
                >
                  <DockerCard
                    isAdded={isAdded("Docker")}
                    onAdd={() => addToStack("Docker")}
                  />
                </div>
              </div>

              {/* ==================================
                  YOUR STACK
              ================================== */}

              <aside
                className="
                  hidden
                  w-[280px]
                  self-start
                  rounded-xl
                  border
                  border-slate-100
                  bg-white
                  p-5
                  shadow-lg
                  lg:sticky
                  lg:top-6
                  lg:block
                "
              >
                {/* ==================================
                    STACK HEADER
                ================================== */}

                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-sm font-semibold text-slate-800">
                      Your Stack
                    </h2>

                    <p className="mt-1 text-[10px] text-slate-400">
                      {stack.length === 0
                        ? "No technologies selected yet."
                        : `${stack.length} ${
                            stack.length === 1
                              ? "technology"
                              : "technologies"
                          } selected.`}
                    </p>
                  </div>

                  {/* COUNT */}

                  <span
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      bg-pink-50
                      text-xs
                      font-semibold
                      text-pink-500
                    "
                  >
                    {stack.length}
                  </span>
                </div>

                {/* ==================================
                    EMPTY STACK
                ================================== */}

                {stack.length === 0 && (
                  <div
                    className="
                      mt-5
                      flex
                      h-24
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-dashed
                      border-slate-200
                    "
                  >
                    <div className="text-center">
                      <p className="text-xs text-slate-300">
                        Your stack is empty.
                      </p>

                      <p className="mt-1 text-[9px] text-slate-300">
                        Add technologies from the list.
                      </p>
                    </div>
                  </div>
                )}

                {/* ==================================
                    SELECTED TECHNOLOGIES
                ================================== */}

                {stack.length > 0 && (
                  <div className="mt-5">
                    <div
                      className="
                        flex
                        max-h-[calc(100vh-230px)]
                        flex-col
                        gap-2
                        overflow-y-auto
                        pr-1
                      "
                    >
                      {stack.map((technology) => (
                        <div
                          key={technology}
                          className="
                            flex
                            shrink-0
                            items-center
                            justify-between
                            rounded-lg
                            border
                            border-slate-100
                            bg-slate-50
                            px-3
                            py-3
                            transition
                            hover:border-pink-100
                          "
                        >
                          {/* TECHNOLOGY */}

                          <div className="flex items-center gap-2">
                            <div
                              className="
                                flex
                                h-7
                                w-7
                                shrink-0
                                items-center
                                justify-center
                                rounded-md
                                bg-white
                                text-xs
                                font-bold
                                text-slate-600
                                shadow-sm
                              "
                            >
                              {technology.charAt(0)}
                            </div>

                            <span className="text-xs font-medium text-slate-700">
                              {technology}
                            </span>
                          </div>

                          {/* REMOVE */}

                          <button
                            type="button"
                            onClick={() =>
                              removeFromStack(technology)
                            }
                            className="
                              flex
                              h-6
                              w-6
                              shrink-0
                              items-center
                              justify-center
                              rounded-md
                              text-sm
                              text-slate-400
                              transition
                              hover:bg-red-50
                              hover:text-red-500
                            "
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* REMOVE ALL */}

                    <button
                      type="button"
                      onClick={removeAll}
                      className="
                        mt-4
                        w-full
                        rounded-lg
                        border
                        border-red-100
                        bg-red-50
                        py-2
                        text-xs
                        font-medium
                        text-red-500
                        transition
                        hover:border-red-200
                        hover:bg-red-100
                        hover:text-red-600
                      "
                    >
                      Remove All
                    </button>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </section>
      </main>

      {/* ========================================
          FOOTER
      ======================================== */}

      <Footer />
    </div>
  );
}

export default App;
