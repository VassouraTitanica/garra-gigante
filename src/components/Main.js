import './Main.css'
import React from 'react';
import NavBar from './NavBar';
import ContactLink from './ContactLink';
import CaseGallery from './CaseGallery';

const Main = () => {
    // const myImages = [
    //     {
    //         imageURL: '/pool.jpeg',
    //         miniHeader: 'A Garra Gigante',
    //         description: 'A Garra Gigante é uma atração única e inovadora que é perfeita para qualquer evento.',
    //     },
    //     {
    //         imageURL: '/boy.jpeg',
    //         miniHeader: 'Divertida e emocionante',
    //         description: 'A Garra Gigante é uma atração divertida e emocionante que é perfeita para todas as idades.',
    //     },
    //     {
    //         imageURL: '/pacoquita.jpeg',
    //         miniHeader: 'Promova sua marca ou produto',
    //         description: 'A Garra Gigante é uma ótima maneira de promover sua marca ou produto e gerar mídia espontânea.',
    //     },
    // ]

    const caseImages = [
        {
            imageURL: '/resgate.png',
            miniHeader: 'Equipamento feito no evento global do TUDUM da Netflix em 2023 em parceria com a 828 Organização de Eventos para o lançamento do filme Resgate 2.',
            description: 'Garra de 25m² com 4m de pé direito e 3m de elevação.',
        },
        {
            imageURL: '/caju.png',
            miniHeader: 'Equipamento e cenografia feitas para o HR4 Results em 2023 em parceria com a MOA Proficiency in Production para ativação da Caju Benefícios no evento.',
            description: 'Garra de 25m² com 4m de pé direito e 3,5m de elevação.',
        },
        {
            imageURL: '/halloween.png',
            miniHeader: 'Equipamento e cenografia feitos em comemoração ao Halloween do Shopping União para entrega de prêmios e ativação de marca.',
            description: 'Garra de 25m² com 4m de pé direito e 3,5m de elevação.',
        },
        {
            imageURL: '/nestle.png',
            miniHeader: 'Equipamento e cenografia feitas para a promoção Ganhei um ano Nestlé em parceria com as agências Terruá de Brasília e FSBComunicação para ativação e coleta de Leads.',
            description: 'Garra de 16m² com 4m de pé direito e 3m de elevação.',
        },
        {
            imageURL: '/pacoquita.png',
            miniHeader: 'Equipamento feito para a comemoração dos 40 anos da Paçoquita no Shopping Eldorado em São Paulo para coleta de Leads e ativação de marca.',
            description: 'Garra de 25m² com 4m de pé direito e 3,5m de elevação.',
        },
        {
            imageURL: '/mdouro.png',
            miniHeader: 'Equipamento e cenografia feitos em parceria com a MDOuro para promoção e ativação da marca de snacks, além de lançamento comercial.',
            description: 'Garra de 16m² com 4m de pé direito e 3m de elevação.',
        },
    ]

    return (
        <div>
            <header className="header">
                <NavBar />
                <h1>Levamos a diversão até você!</h1>
                <div className='header-subInfo'>
                    <p>Aqui, <b>somos movidos a desafios!</b></p>
                    <p> <span className='brand'>
                        Best Wishes <br />
                    </span>
                        <span className='subBrand'>
                            Entretenimento
                        </span>
                    </p>
                </div>
            </header>

            <div className="main-content">

                <section id='about' className='about'>
                    <h2>Quem somos</h2>
                    <p>Missões mais que cumpridas.
                        Dentro da BW temos todos um objetivo em comum:
                        Entregar as ativações que nossos clientes sonham.
                        Nossa missão quem dá é você.
                    </p>
                    <p>Tem uma ideia ou desafio? Fale com a gente. Mesmo se
                        ainda não tivermos feito algo parecido.
                        Especialmente se não tivermos feito algo parecido.
                    </p>
                    <p>Como mencionado no início, aqui, <b>somos movidos a desafios!</b></p>
                    <ContactLink text="Saiba mais!" />
                </section>
                <section id='media' className='media'>
                    <h2>Na mídia</h2>
                    <p>Além de Globo, RedeTV, SBT, Gazeta e Band tivemos inserções na VejaSP, Uol e Terra</p>
                    <div className='media-images'>
                        <img src='/midia.png' alt='Mídia'></img>
                        <img src='/midia2.png' alt='Mídia_2'></img>
                        <img src='/midia3.png' alt='Mídia_3'></img>
                        <img src='/midia4.png' alt='Mídia_4'></img>
                    </div>
                </section>
                <section id='garra' className='garra'>
                    <h2>A Garra Gigante</h2>
                    <p>Antes que uma máquina de entretenimento,
                        uma máquina de mídia orgânica.
                        A Garra Gigante é capaz de gerar
                        por volta de <b>R$ 2M</b>/trimestre* em mídia espontânea
                        entre influenciadores e veículos locais e
                        nacionais.</p>
                    <p>Nossos equipamentos possuem tempo de
                        funcionamento estendido, são totalmente
                        personalizáveis e possuem instalação <b>sem
                            furos, solda ou fixação permanente</b>.</p>
                    <span className='source'>*segundo relatório da agência própria da BRMalls, durante os primeiros meses de operação.</span>
                </section>
                <section id='services' className='case'>
                    <h2>Case studies</h2>
                    <CaseGallery images={caseImages} />
                </section>
                <section className='garrinhas'>
                    <h2>Garrinhas</h2>
                    <p>Além das Gigantes, podemos entregar uma
                        gama de equipamentos de grua também
                        personalizáveis.
                    </p>
                    <img src='/garrinhas.png' alt='Garrinhas'></img>
                </section>
                {/* <div className='cinematography'>
                    <h2>Projetos Cinematográficos</h2>
                    <p>Prontos para criar o que o cliente imaginar -e além.</p>
                    <p>Produzimos desde projetos especiais com
                        eletromecânica, iluminação e som até cenários
                        cenográficos e decorações temáticas.</p>
                    <p>Executar planos é a nossa paixão.</p>
                    <div className='cinematography-images'>
                        <img src='/circus1.png' alt='Circus'></img>
                        <img src='/circus2.png' alt='Circus_2'></img>
                    </div>
                </div> */}
                <section id='contact' className='contact'>
                    <h2>Contato</h2>
                    <div className='contact-nav'>
                        <div>
                            <p>+55 11 97135 8623 (Julya)</p>
                            <p>+55 11 97963 7132 (Lucas)</p>
                            <p>marketing@bestwishes.com.br</p>
                            <p>@garragigante</p>
                            <ContactLink text="Vamos realizar juntos!" />
                        </div>
                        <div className='logos'>
                            <img src='logos/caju.png' alt='caju'></img>
                            <img src='logos/netflix.png' alt='netflix'></img>
                            <img src='logos/tudum.png' alt='tudum'></img>
                            <img src='logos/shopping_tucuruvi.png' alt='shopping_tucuruvi'></img>
                            <img src='logos/terrua.png' alt='terrua'></img>
                            <img src='logos/nestle.png' alt='nestle'></img>
                            <img src='logos/pacoquita.png' alt='pacoquita'></img>
                            <img src='logos/brmalls.png' alt='brmalls'></img>
                            <img src='logos/fsb.png' alt='fsb'></img>
                        </div>
                    </div>
                </section>
                {/* <div className='services'>
                    <h2>O que oferecemos</h2>
                    <p>A Garra Gigante é uma atração única e inovadora que é perfeita para qualquer evento.
                        É uma ótima maneira de promover sua marca ou produto e gerar mídia espontânea.
                        Além disso, é uma atração divertida e emocionante que é perfeita para todas as idades.
                    </p>
                    <ImageGallery images={myImages} />
                </div>
                <div className='customers'>
                    <h2>Nossos clientes</h2>
                    <p>Mostrar as fotos e relatos das parcerias com SBT, Ana Maria Braga, etc</p>
                    <div className='customer-block'>
                        <div className='customer'>
                            <img src='/idade.png' alt='Idade'></img>
                            <p>Com um mix de público melhor distribuído e ampla capacidade
                                de fluxo de atendimento, a Garra Gigante entrega experiências
                                para uma infinidade de cliente - e nao apenas criancas.
                            </p>
                        </div>
                        <div className='customer'>
                            <img src='/senhora.gif' alt='Senhora'></img>
                            <p>Dona Eugênia: nossa primeira cliente de 86 anos
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Main;
