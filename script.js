document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, 
                    behavior: 'smooth'
                });
            }
        });
    });

    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('nav ul li a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    const addActiveClass = () => {
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
    };

    const registerBtn = document.getElementById('register-btn');
    if (registerBtn) {
        setInterval(() => {
            registerBtn.classList.add('pulse');
            setTimeout(() => {
                registerBtn.classList.remove('pulse');
            }, 1000);
        }, 3000);
    }

    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.benefit-card, .course-card, .gallery-item, .info-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    
    const style = document.createElement('style');
    style.innerHTML = `
        .animate {
            animation: fadeInUp 0.6s ease-out forwards;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .pulse {
            animation: pulse 1s ease-out;
        }
        
        @keyframes pulse {
            0% {
                transform: scale(1);
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            }
            50% {
                transform: scale(1.05);
                box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
            }
            100% {
                transform: scale(1);
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            }
        }
        
        .error {
            border-color: #ff3333 !important;
        }
    `;
    document.head.appendChild(style);
    
    animateOnScroll();

    const modal = document.getElementById('courseModal');
    const closeModal = document.querySelector('.close-modal');
    const courseCards = document.querySelectorAll('.course-card');
    
    const courseData = {
        'Gestão Empresarial': {
            image: 'https://www.jeasistemas.com/wp-content/uploads/2024/02/sistema-empresarial.jpg',
            duration: '3 anos (6 semestres)',
            period: 'Noturno',
            vacancies: '40',
            description: 'O Curso Superior de Tecnologia em Gestão Empresarial tem como objetivo formar profissionais que possam contribuir para a inovação e melhoria de processos nas organizações, antecipando problemas e maximizando benefícios da atividade econômica empresarial, dentro da perspectiva ética e sustentável. Com carga horária total de 2.400 horas (2.880 aulas de 50 minutos), além de 240 horas de Estágio Curricular e 160 horas de Trabalho de Graduação, o curso prepara o aluno para atuar de forma eficiente nas diversas áreas de administração e negócios.',
            curriculum: [
                'Administração Geral',
                'Gestão de Pessoas',
                'Gestão Financeira',
                'Gestão de Marketing',
                'Planejamento e Gestão Estratégica',
                'Logística',
                'Sistemas Integrados de Gestão',
                'Gestão de Projetos Empresariais'
            ],
            career: 'Os profissionais de Gestão Empresarial estão capacitados para analisar, diagnosticar, planejar, implementar e controlar processos organizacionais, integrando aspectos qualitativos e quantitativos. Podem atuar como gestores em empresas de diversos portes e segmentos, consultores empresariais, analistas de negócios, empreendedores ou em cargos de liderança em departamentos específicos como marketing, recursos humanos ou finanças.'
        },
        'Análise e Desenvolvimento de Sistemas': {
            image: 'https://blog.xpeducacao.com.br/wp-content/uploads/2022/07/analise-e-desenvolvimento-de-sistemas-o-que-faz-1920x1280.jpg',
            duration: '3 anos',
            period: 'Noturno',
            vacancies: '40',
            description: 'O curso forma profissionais que analisam, projetam, implementam e coordenam infraestruturas de Tecnologia da Informação e Comunicação (TIC), atendendo às necessidades de mudanças provocadas pelas inovações tecnológicas nas empresas. Possui ênfase em engenharia de software, metodologias de projetos, qualidade de software, segurança da informação, inteligência artificial, administração de banco de dados, hardware, redes de computadores, gestão de projetos de TI, consultoria tecnológica e desenvolvimento de sistemas.',
            curriculum: [
                'Algoritmos e Lógica de Programação',
                'Linguagem de Programação',
                'Estruturas de Dados',
                'Programação Orientada a Objetos',
                'Engenharia de Software I, II e III',
                'Banco de Dados',
                'Redes de Computadores',
                'Sistemas Operacionais I e II',
                'Gestão de Projetos',
                'Arquitetura e Organização de Computadores',
                'Matemática Discreta',
                'Cálculo',
                'Laboratório de Engenharia de Software',
                'Programação em Microinformática'
            ],
            career: 'O Tecnólogo em Análise e Desenvolvimento de Sistemas pode atuar em empresas de consultoria tecnológica, desenvolvimento de sistemas, indústria, comércio, serviços, instituições financeiras, órgãos públicos ou como empreendedor em informática. Está apto a projetar e implementar sistemas, coordenar infraestruturas de TI, realizar consultoria, atuar em centros de pesquisa, ensino ou desenvolvimento de software, além de empreender seu próprio negócio.'
        },
        'Sistemas pra Internet': {
            image: 'https://www.unicesumar.edu.br/blog/wp-content/uploads/2019/07/sistemas-para-internet-800x533.jpg',
            duration: '3 anos (6 semestres)',
            period: 'Matutino ou Noturno',
            vacancies: '40 Matutino / 40 Noturno',
            description: 'O Curso Superior de Tecnologia em Sistemas para Internet oferece formação de nível superior gratuita e de qualidade, preparando tecnólogos para atuar no desenvolvimento econômico e social da região, com ética e cidadania. Com carga horária total de 2.800 horas (2.400 horas de atividades, 240 horas de estágio supervisionado e 160 horas de trabalho de graduação, distribuídas em 2.880 aulas de 50 minutos), o curso capacita o estudante para analisar processos de negócio, identificar soluções de TI, administrar e manter sistemas de informação para Internet, gerenciar projetos, desenvolver aplicações web e mobile, integrar mídias, projetar bancos de dados e atuar com tecnologias emergentes.',
            curriculum: [
                'Desenvolvimento Web Front-end',
                'Desenvolvimento Web Back-end',
                'UX/UI Design',
                'Banco de Dados para Web',
                'Frameworks JavaScript',
                'Desenvolvimento Mobile',
                'Segurança na Web',
                'Computação em Nuvem',
                'Projetos de Sistemas para Internet',
                'Integração de Mídias e Design Gráfico',
                'Redes sem Fio e Sistemas Distribuídos',
                'Estágio Supervisionado',
                'Trabalho de Graduação'
            ],
            career: 'O Tecnólogo em Sistemas para Internet desenvolve programas, interfaces e aplicativos, comércio e marketing eletrônicos, além de sítios e portais para Internet e intranet. Atua como Analista de Sistemas, Web Designer, Gerente de Desenvolvimento de Software, Analista de Processo de Software, Programador de Sistemas Computacionais, Consultor em TI, Web Developer, Analista de SEO, Gestor de Conteúdo, entre outras funções na área de Tecnologia da Informação. Também é responsável pela implantação, atualização, manutenção e segurança dos sistemas que utilizam a Internet como plataforma.'
        },
        'Agronegócio': {
            image: 'https://www.totvs.com/wp-content/uploads/2021/08/O-que-e-agronegocio-capa-scaled-1.jpg',
            duration: '3 anos (6 semestres)',
            period: 'Noturno',
            vacancies: '40',
            description: 'O curso de Tecnologia em Agronegócio forma profissionais capacitados para viabilizar soluções tecnológicas competitivas no setor agropecuário. Com carga horária total de 2800 horas (incluindo 240h de Estágio Curricular e 160h de Trabalho de Graduação), o curso prepara o aluno para dominar processos de gestão e cadeias produtivas, prospectar novos mercados, analisar viabilidade econômica e otimizar a produção com uso racional de recursos.',
            curriculum: [
                'Marketing Aplicado ao Agronegócio',
                'Sistema de Produção agroindustrial',
                'Gestão da Produtividade na Agroindústria',
                'logistica Aplicada a Agroindústria',
                'Orçamento Aplicados ao Agronegócio',
                'Gestão Agroturismo',
                'Comercio Exterior e Relações Internacionais',
                'Tecnologia de Alimentos'
            ],
            career: 'O Tecnólogo em Agronegócio pode atuar em empresas e organizações do setor agropecuário, bem como em instituições de ensino e pesquisa. O profissional estará capacitado para executar intervenções nos processos do agronegócio, controlar variáveis de produção, aplicar tecnologias de gestão, desenvolver produtos, gerenciar recursos e implementar políticas agrícolas, com amplas oportunidades em um dos setores mais importantes da economia brasileira.'
        }
    };

    courseCards.forEach(card => {
        card.addEventListener('click', function() {
            const courseName = this.querySelector('h3').textContent;
            const course = courseData[courseName];
            
            if (course) {
                document.getElementById('modalTitle').textContent = courseName;
                document.getElementById('modalImage').src = course.image;
                document.getElementById('modalDuration').textContent = course.duration;
                document.getElementById('modalPeriod').textContent = course.period;
                document.getElementById('modalVacancies').textContent = course.vacancies;
                document.getElementById('modalDescription').textContent = course.description;
                
                const curriculumList = document.getElementById('modalCurriculum');
                curriculumList.innerHTML = '';
                course.curriculum.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    curriculumList.appendChild(li);
                });
                
                document.getElementById('modalCareer').textContent = course.career;
                
                modal.classList.add('show');
                document.body.style.overflow = 'hidden'; 
            }
        });
    });
    
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.classList.remove('show');
            document.body.style.overflow = ''; 
        });
    }
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = ''; 
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            modal.classList.remove('show');
            document.body.style.overflow = ''; 
        }
    });
    
    const modalRegisterBtn = document.querySelector('.modal-register-btn');
    if (modalRegisterBtn) {
        modalRegisterBtn.addEventListener('click', function() {
            modal.classList.remove('show');
            document.body.style.overflow = ''; 
        });
    }
});