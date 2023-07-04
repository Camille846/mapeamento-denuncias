import { GiHumanPyramid } from "react-icons/gi";

export const Navbar = () => {
  return (
    <div>
        <nav class="bg-white dark:bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-pink-100">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" class="flex items-center gap-2">
                <GiHumanPyramid size={40} className="text-gray-800"/>
                <span class="self-center flex flex-col flex-wrap text-sm font-semibold whitespace-nowrap dark:text-gray-800 md:text-xl">Promovendo <span> Direitos Humanos</span></span>
            </a>
            <div class="flex md:order-2">
                <button type="button" class="text-white bg-pink-300 hover:bg-pink-400 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-pink-500 dark:hover:bg-pink-400 dark:focus:ring-pink-800">
                    <a href="http://www.humanizaredes.gov.br/ouvidoria-online/" target="_blank" className="text-white">
                    Denuncie
                    </a>
                </button>
            </div>
        </div>
        </nav>
    </div>
  );
}