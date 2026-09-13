import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Footer from "./components/Footer";
import type { Technology } from "./types/technology";
import Card from "./components/Cards/Card";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load technologies");
        setLoading(false);
      });
  }, []);

  const addToStack = (technology: Technology) => {
    if (stack.some((item) => item.id === technology.id)) {
      toast.warning(`${technology.name} is already in your stack`);
      return;
    }

    setStack((previousStack) => [...previousStack, technology]);

    toast.success(`${technology.name} added to stack`);
  };

  const removeFromStack = (id: string) => {
    const technology = stack.find((item) => item.id === id);

    setStack((previousStack) =>
      previousStack.filter((item) => item.id !== id)
    );

    if (technology) {
      toast.info(`${technology.name} removed`);
    }
  };

  const removeAll = () => {
    if (stack.length === 0) return;

    setStack([]);
    toast.info("All technologies removed");
  };

  const isAdded = (id: string) => {
    return stack.some((item) => item.id === id);
  };

  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      <Hero />

      <main>
        <section
          id="technologies"
          className="px-6 py-12 lg:py-16"
        >
          <div className="mx-auto max-w-6xl">

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900">
                Explore the{" "}
                <span className="text-pink-500">
                  Technologies
                </span>
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Pick technologies to build your ideal stack.
              </p>
            </div>

            {loading ? (
              <div className="flex justify-center py-20">
                <span className="loading loading-spinner loading-lg text-pink-500"></span>
              </div>
            ) : (

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">

                {/* TECHNOLOGY GRID */}

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

                  {technologies.map((technology) => (
                    <Card
                      key={technology.id}
                      technology={technology}
                      isAdded={isAdded(technology.id)}
                      onAdd={() => addToStack(technology)}
                    />
                  ))}

                </div>


                {/* YOUR STACK */}

                <aside className="h-fit rounded-xl border border-slate-100 bg-white p-5 shadow-lg lg:sticky lg:top-6">

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

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-50 text-xs font-semibold text-pink-500">
                      {stack.length}
                    </span>

                  </div>


                  {/* EMPTY */}

                  {stack.length === 0 && (
                    <div className="mt-5 flex h-24 items-center justify-center rounded-lg border border-dashed border-slate-200">

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


                  {/* SELECTED ITEMS */}

                  {stack.length > 0 && (
                    <div className="mt-5">

                      <div className="flex flex-col gap-2">

                        {stack.map((technology) => (
                          <div
                            key={technology.id}
                            className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 px-3 py-3"
                          >

                            <div className="flex items-center gap-2">

                              <img
                                src={technology.icon}
                                alt={technology.name}
                                className="h-7 w-7 object-contain"
                              />

                              <div>
                                <p className="text-xs font-medium text-slate-700">
                                  {technology.name}
                                </p>

                                <p className="text-[9px] text-slate-400">
                                  {technology.category}
                                </p>
                              </div>

                            </div>

                            <button
                              type="button"
                              onClick={() =>
                                removeFromStack(technology.id)
                              }
                              className="flex h-6 w-6 items-center justify-center rounded-md text-sm text-slate-400 hover:bg-red-50 hover:text-red-500"
                            >
                              ×
                            </button>

                          </div>
                        ))}

                      </div>

                      <button
                        type="button"
                        onClick={removeAll}
                        className="mt-4 w-full rounded-lg border border-red-100 bg-red-50 py-2 text-xs font-medium text-red-500 hover:bg-red-100"
                      >
                        Remove All
                      </button>

                    </div>
                  )}

                </aside>

              </div>
            )}

          </div>
        </section>
      </main>

      <Footer />

      <ToastContainer position="top-right" />

    </div>
  );
}

export default App;