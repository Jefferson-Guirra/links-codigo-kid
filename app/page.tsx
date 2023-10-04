import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { BsRobot } from 'react-icons/bs'
import { IoGameController } from 'react-icons/io5'
import { MdOutlineComputer,MdOutlineLocalPharmacy } from 'react-icons/md'
import { PiComputerTower, PiPencil, PiMathOperationsBold } from 'react-icons/pi'
import { AiOutlineYoutube } from 'react-icons/ai'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={ styles.content}>
        <article className={ styles.header }>
          <span>
            <Image width={100 } height={ 100 } src="/images/codigo-kid-cover.jpeg" alt="" />
          </span>
          <h2>Código Kid Campo Formoso</h2>
          <p>A maior escola de programação, tecnologia  e robótica do Brasil!!</p>
        </article>

        <article className={ styles.links }>
          <Link href= 'https://wa.me/5574981297562' className={styles['contact-links']}>Fale conosco</Link>
          <Link href='https://wa.me/5574981297562' className={styles['contact-links']}>Agende uma aula experimental gratuita</Link>
        </article>

        <article className={ styles.courses }>
          <h3 className='btn'> Cursos Profissionalizantes</h3>
          
          <Link href= 'https://wa.me/5574981297562' className={ styles['courses-link']}>
            <BsRobot size= { 25 }/>
            Robótica
          </Link>


          <Link href= 'https://wa.me/5574981297562' className={ styles['courses-link']}>
            <IoGameController size= { 25 }/>
            Games
          </Link>

          <Link href= 'https://wa.me/5574981297562' className={ styles['courses-link']}>
            <MdOutlineComputer size= { 25 }/>
            Programação
          </Link>

          <Link href= 'https://wa.me/5574981297562' className={ styles['courses-link']}>
            <PiComputerTower size= { 25 }/>
            Analista de tecnologia
          </Link>

          <Link href= 'https://wa.me/5574981297562' className={ styles['courses-link']}>
            <AiOutlineYoutube size= { 25 }/>
            Youtuber
          </Link>

          <Link href= 'https://wa.me/5574981297562' className={ styles['courses-link']}>
            <MdOutlineLocalPharmacy size= { 25 }/>
            Atendente de farmácia
          </Link>

          <Link href= 'https://wa.me/5574981297562' className={ styles['courses-link']}>
            <PiPencil size= { 25 }/>
            Inglês
          </Link>

          <Link href= 'https://wa.me/5574981297562' className={ styles['courses-link']}>
            <PiMathOperationsBold size= { 25 }/>
            Matemática
          </Link>

        </article>

      </section>
    </main>
  )
}
