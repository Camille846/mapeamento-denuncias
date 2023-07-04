import { GiHumanPyramid } from "react-icons/gi";

export const Navbar = () => {
  return (
    <div>
        <nav class="bg-white dark:bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-pink-100">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" class="flex items-center gap-2">
                <GiHumanPyramid size={30} className="text-gray-800"/>
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-gray-800">Promovendo Direitos Humanos</span>
            </a>
            <div class="flex md:order-2">
                <button type="button" class="text-white bg-pink-300 hover:bg-pink-400 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-pink-500 dark:hover:bg-pink-400 dark:focus:ring-pink-800">
                    <a href="http://www.humanizaredes.gov.br/ouvidoria-online/" target="_blank" className="text-white">
                    Denuncie
                    </a>
                </button>
                <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-pink-100 md:dark:bg-white dark:border-white">
                    <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-700 md:p-0 md:dark:hover:text-pink-500 dark:gray-200 dark:hover:bg-gray-700 dark:hover:gray-200 md:dark:hover:bg-transparent dark:border-gray-400">Grupo Vulnerável</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-700 md:p-0 md:dark:hover:text-pink-500 dark:gray-200 dark:hover:bg-gray-700 dark:hover:gray-200 md:dark:hover:bg-transparent dark:border-gray-400">Espécie de Violação</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-700 md:p-0 md:dark:hover:text-pink-500 dark:gray-200 dark:hover:bg-gray-700 dark:hover:gray-200 md:dark:hover:bg-transparent dark:border-gray-400">Formas de denúncia</a>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    </div>
  );
}