import { FaLinkedin, FaGithub, FaCodepen } from 'react-icons/fa'

export const Footer = () => {
  return (
    <div>
        <footer>
            <div className='flex flex-col items-center justify-between  bg-pink-100 py-8'>
                <div className='flex flex-col items-center justify-center mt-5'>
                    <h2>Desenvolvido por <span className='font-bold'>Camille Gomes</span></h2>
                </div>
                <div className='flex flex-row items-center justify-center mt-5'>
                    <span className='flex flex-row gap-2 items-center text-pink-700'>
                        <a href="https://www.linkedin.com/in/camillegomes/" target='_blank' className='flex flex-row gap-2 items-center'>
                            <FaLinkedin size={20} />
                            Linkedin
                        </a>
                        <p className='text-gray-900'>|</p>
                        <a href="https://github.com/Camille846" target='_blank' className='flex flex-row gap-2 items-center'>
                            <FaGithub size={20} />
                            Github
                        </a>
                        <p className='text-gray-900'>|</p>
                        <a href="https://codepen.io/CamilleGomes" target='_blank' className='flex flex-row gap-2 items-center'>
                            <FaCodepen size={20} />
                            Codepen
                        </a>
                    </span>
                </div>
            </div>
      </footer>
    </div>
  )
}
