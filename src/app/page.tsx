import { Card } from "@/components/card";
import { SiDotnet } from "react-icons/si";
import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-2 h-full sm:flex">
      <div className="flex flex-col sm:flex-col md:flex-row">
        <div className="flex flex-col items-center justify-around flex-shrink-0">
          <Card>
            <Image src={"/image.jpg"} alt={""} width={300} height={300} style={{ marginBottom: 20 }} />
          </Card>
          <Card>
            <h2 className=" font-bold text-yellow-50 text-2xl">Felipe Alvarenga Teixeira</h2>
          </Card>
          <div className="flex flex-grow w-full">
            <Card style={{ width: "100%" }}>
              <div className="flex justify-around">
                <Link href={"https://github.com/soraxg12"}>
                  <FaGithub size={50} color="white" />
                </Link>
                <Link href={"https://www.linkedin.com/in/felipe-alvarenga-16984b1b0/"}>
                  <FaLinkedin size={50} color="white" />
                </Link>
              </div>
            </Card>
          </div>
        </div>
        <div className="">
          <Card>
            <h2 className="font-semibold text-yellow-50 text-xl flex flex-wrap">
              Desenvolvedor full stack e formado em Engenharia da Computação, com experiência em C#, Angular e ReactJS, trilhei um caminho
              na criação de soluções de software.<br />
              Estou em constante evolução, buscando incessantemente me aprimorar como desenvolvedor de software
              . Cada projeto é uma oportunidade para aprender, crescer e expandir minhas habilidades técnicas e criativas.
              , estou sempre explorando novas tecnologias, metodologias e práticas de desenvolvimento. Minha jornada
              é marcada pela busca pela excelência e pela determinação em alcançar resultados excepcionais em cada linha de código que escrevo.
            </h2>
          </Card>
          <Card>
            <>
              <h2 className=" font-bold text-yellow-50 text-2xl mb-4">
                Tecnologias
              </h2>
              <div className="flex justify-around mt-1 flex-wrap">
                <SiDotnet size={50} color="white" />
                <FaReact size={50} color="white" />
                <FaNodeJs size={50} color="white" />
                <FaAngular size={50} color="white" />
                <FaGolang size={50} color="white" />
                <FaDocker size={50} color="white" />
                <SiMicrosoftsqlserver size={50} color="white" />
                <SiMongodb size={50} color="white" />
              </div>
            </>
          </Card>
        </div>
      </div>
    </main>
  );
}
