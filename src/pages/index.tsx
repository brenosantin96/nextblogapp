import React from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { HiChevronDown } from "react-icons/hi";

//a pagina principal possui um display flex column, sao duas partes o header a parte de baixo
//a parte de baixo vai utilizar um sistema de grid, o conteudo princial fica a esquerda com 8 blocos e o side bar utiliza 4 blocos.

const HomePage = () => {
  return (
    <div className="flex h-screen w-full flex-col">
      <header className="flex h-20 w-full flex-row items-center justify-around border-b border-gray-300 bg-white">
        <div>
          <IoReorderThreeOutline className="text-2xl text-gray-600" />
        </div>
        <div className="text-xl font-thin">Ultimate Blog App</div>

        <div className="flex items-center space-x-4">
          <div>
            <BsBell className="text-2xl text-gray-600" />
          </div>
          <div className="h-5 w-5 rounded-full bg-gray-600"></div>
          <div>
            <button
              className="flex flex-row items-center space-x-3 rounded border border-gray-200 px-4 py-2 transition
             hover:border-gray-900 hover:text-gray-900"
            >
              <div>Write</div>
              <div>
                <FiEdit />
              </div>
            </button>
          </div>
        </div>
      </header>

      <section className="grid h-full w-full grid-cols-12 place-items-center">
        <main className="col-span-8 h-full w-full border-r border-gray-300 px-24">
          <div className="flex w-full flex-col space-y-4 py-10 ">
            <div className="flex w-full flex-row items-center space-x-4">
              <label
                htmlFor="search"
                className="relative w-full rounded-3xl border border-gray-800"
              >
                <div className="absolute left-2 flex h-full items-center">
                  <CiSearch />
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="w-full rounded-3xl px-4 py-1 pl-7 outline-none placeholder:text-sm placeholder:text-gray-300"
                  placeholder="Search..."
                />
              </label>
              <div className="flex w-full flex-row items-center justify-end space-x-4">
                <div>My topics: </div>
                <div className="flex items-center space-x-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      className="rounded-3xl bg-gray-200/50 px-4 py-3"
                      key={i}
                    >
                      tag {i}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-between border-b border-gray-300 pb-8">
              <div>Articles</div>
              <div>
                <button className="flex items-center space-x-2 rounded-3xl border border-gray-800 px-4 py-1.5 font-semibold">
                  <div>Following</div>
                  <div>
                    <HiChevronDown className="text-xl " />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col justify-center space-y-8 ">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="group flex flex-col space-y-4 border-b border-gray-300 pb-8 last:border-none"
              >
                <div>
                  <div className="flex w-full items-center space-x-2 ">
                    <div className="h-10 w-10 rounded-full bg-gray-400"></div>
                    <div>
                      <p className="font-semibold">
                        Breno Santin &#x2022; 22 Dec. 2022
                      </p>
                      <p className="text-sm">IT Tech, student & developer</p>
                    </div>
                  </div>
                </div>
                <div className="grid w-full grid-cols-12 gap-4">
                  <div className="col-span-8 flex flex-col space-y-4">
                    <p className="text-2xl font-bold text-gray-800 decoration-indigo-600 group-hover:underline">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Minima, laudantium!
                    </p>
                    <p className="break-words text-sm text-gray-500">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Iure eaque obcaecati quisquam vitae, nostrum rem incidunt,
                      harum nesciunt quo labore vel repellendus sunt aperiam
                      quod reprehenderit reiciendis, ad similique neque
                      excepturi doloribus et commodi. Nobis provident fuga quam
                      obcaecati ipsam alias dolores a ipsum beatae voluptatem
                      ab, incidunt minima atque! Eos eum eligendi labore quasi
                      repellendus minus repudiandae quos ab?
                    </p>
                  </div>
                  <div className="col-span-4">
                    <div className="h-full w-full transform rounded-xl bg-gray-300 transition duration-300 hover:scale-105 hover:shadow-lg"></div>
                  </div>
                </div>
                <div>
                  <div className="flex w-full flex-row items-center justify-start space-x-4">
                    <div>My topics: </div>
                    <div className="flex items-center space-x-2">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div
                          className="rounded-xl bg-gray-200/50 px-5 py-3"
                          key={i}
                        >
                          tag {i}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        <aside className="col-span-4 h-full w-full">
          this is used for sidebar
        </aside>
      </section>
    </div>
  );
};

export default HomePage;
