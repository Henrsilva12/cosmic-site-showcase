import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Equipe(){
    return(
        <div>
            <Header />
            <div className="flex flex-col gap-12 mt-12 mb-12">
                <h1 className="text-[60px] flex justify-center">Equipe</h1>
                <div className="flex flex-col justify-center items-center gap-12">
                    <div className="gap-7 flex flex-col items-center w-[80%] text-[24px]">
                        <p className="text-justify">
                            Por trás de cada postagem, entrevista e destaque do curso de Sistemas de Informação está uma equipe apaixonada por tecnologia, design e comunicação. Somos alunos do BSI que uniram forças para criar, organizar e manter este blog com dedicação e criatividade.
                        </p>
                        <p className="text-justify">
                            Nosso objetivo é traduzir o dia a dia do curso em conteúdos envolventes, informativos e acessíveis — mostrando como o BSI transforma ideias em projetos e conhecimento em impacto.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 w-[80%] gap-24 mt-12">
                        <div className="grid grid-cols-[auto_1fr] gap-8 justify-center items-center">
                            <img className="rounded-lg w-[380px] h-[260px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSjL5_M4i774AJDF4afA6Be2n059wJIXDYOw&s"></img>
                            <div className="flex flex-col gap-4 text-[20px]">
                                <h1 className="text-[24px] font-semibold">Amanda Tavares</h1>
                                <p>Amanda atua como desenvolvedora fullstack do blog, cuidando tanto da parte visual quanto da estrutura funcional do site. Seu olhar técnico e organizado é essencial para garantir uma navegação fluida e segura.</p>
                                <h2 className="font-bold">Interesses: Análise de dados, Segurança da Informação, Redes de Computadores e Automação.</h2>
                                <div>
                                    <h1 className="font-bold">GitHub:</h1>
                                </div>
                                <div>
                                    <h1 className="font-bold">Contatos:</h1>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-[auto_1fr] gap-8 justify-center items-center">
                            <img className="rounded-lg w-[380px] h-[260px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSjL5_M4i774AJDF4afA6Be2n059wJIXDYOw&s"></img>
                            <div className="flex flex-col gap-4 text-[20px]">
                                <h1 className="text-[24px] font-semibold">Bruno Flores</h1>
                                <p>Responsável por UX Writing, Bruno é quem transforma os projetos do curso em textos claros, envolventes e acessíveis. É ele quem dá voz e ritmo às postagens, entrevistas e destaques publicados no blog.</p>
                                <h2 className="font-bold">Interesses: Front-end, FullStack e Hardware</h2>
                                <div>
                                    <h1 className="font-bold">GitHub:</h1>
                                </div>
                                <div>
                                    <h1 className="font-bold">Contatos:</h1>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-[auto_1fr] gap-8 justify-center items-center">
                            <img className="rounded-lg w-[380px] h-[260px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSjL5_M4i774AJDF4afA6Be2n059wJIXDYOw&s"></img>
                            <div className="flex flex-col gap-4 text-[20px]">
                                <h1 className="text-[24px] font-semibold">Henrique Santos</h1>
                                <p>Henrique é o designer UI/UX da equipe, responsável por toda a parte visual e experiência do usuário. Sua missão é garantir que o blog seja não só funcional, mas também agradável e intuitivo.</p>
                                <h2 className="font-bold">Interesses: UI/UX Desing e Gestão de Software</h2>
                                <div>
                                    <h1 className="font-bold">GitHub:</h1>
                                </div>
                                <div>
                                    <h1 className="font-bold">Contatos:</h1>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-[auto_1fr] gap-8 justify-center items-center">
                            <img className="rounded-lg w-[380px] h-[260px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSjL5_M4i774AJDF4afA6Be2n059wJIXDYOw&s"></img>
                            <div className="flex flex-col gap-4 text-[20px]">
                                <h1 className="text-[24px] font-semibold">Hércules Silva</h1>
                                <p>Hércules também atua como desenvolvedor fullstack, contribuindo para a criação e sustentação do blog tanto no visual quanto na estrutura. Sua experiência técnica fortalece a base do projeto.</p>
                                <h2 className="font-bold">Interesses: Back-end e Arquitetura de Sistemas</h2>
                                <div>
                                    <h1 className="font-bold">GitHub:</h1>
                                </div>
                                <div>
                                    <h1 className="font-bold">Contatos:</h1>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-[auto_1fr] gap-8 justify-center items-center">
                            <img className="rounded-lg w-[380px] h-[260px] object-cover" src="https://i.postimg.cc/63pjh2hG/IMG-20250807-122056-EDIT-1.jpg"></img>
                            <div className="flex flex-col gap-4 text-[20px]">
                                <h1 className="text-[24px] font-semibold">Natanael Santos</h1>
                                <p>Como gerente de projetos, Natanael é o responsável por coordenar as entregas, validar o andamento do blog e garantir que tudo esteja funcionando conforme o esperado. É quem dá o “ok final” antes de algo ir ao ar.</p>
                                <h2 className="font-bold">Interesses: Front-end e FullStack</h2>
                                <div>
                                    <h1 className="font-bold">GitHub:</h1>
                                </div>
                                <div>
                                    <h1 className="font-bold">Contatos:</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}