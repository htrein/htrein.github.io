document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const service = params.get("service");
  const serviceContent = document.querySelector(".service__frame-content");
  const serviceTitle = document.querySelector(".service__frame h2");
  const serviceImage = document.querySelector(".service__frame-img");

  if (serviceContent && serviceTitle) {
    switch (service) {
      case "transporte-ien":
        serviceTitle.textContent =
          "Seguro de Transporte Internacional (Importação e Exportação)";
        serviceContent.innerHTML = `
            <p>
Seguro contratado por importadores e exportadores sediados no Brasil a fim de atender as exigências dos contratos de compra e venda (Incoterms), garantindo assim ressarcimento e eventual dano/prejuízo às mercadorias transportadas. 

Este seguro ampara todos os meios de transporte/modais utilizados (terrestre, aéreo e marítimo) garantindo também as verbas de Custo, Frete, Despesas, Lucros Esperados e Tributos (II, IPI, ICMS, PIS e COFINS). 
            </p>
            <a class="btn-r-fill font-b-button" href="contato.html">Faça um Orçamento Gratuito</a>
          `;
        serviceImage.src = "images/industrial-port-container-yard 1.png";
        break;
      case "transporte-nac":
        serviceTitle.textContent = "Seguro de Transporte Nacional";

        serviceContent.innerHTML = `
            <p>
            Destinado às empresas proprietárias das cargas - os embarcadores - o Seguro de Transporte Nacional tem como objetivo reparar os danos e prejuízos causados as mercadorias transportadas. Este seguro permite garantir eventos excluídos das apólices dos transportadores (avarias durante o transporte, despesas, tributos, Lucros Esperados, entre outros). 

É possível a reposição dos valores de Custo, Frete, Despesas, Lucros Esperados e Tributos incidentes sobre as mercadorias. 
            </p>
            <a class="btn-r-fill font-b-button" href="contato.html">Faça um Orçamento Gratuito</a>
          `;
        break;
      case "transporte-rctr-c":
        serviceTitle.textContent =
          "Seguro para Transportadores de Mercadorias (RCTR-C/RC-DC)";
        serviceContent.innerHTML = `
          <p>
      Seguro destinado aos transportadores rodoviários, ferroviários, aéreos e marítimos a fim de atender as obrigações legais de contratação. Modalidades disponíveis: RCTR-C / RC-DC / RCTR-VI (Mercosul) / RCTA-C / RCA-C / RCTF-C. 
          </p>

          <a class="btn-r-fill font-b-button" href="contato.html">Faça um Orçamento Gratuito</a>
        `;

        break;
      case "transporte-rodoviario":
        serviceTitle.textContent =
          "Seguro de Transportes Rodoviários Mercosul (RCTR-VI)";
        serviceContent.innerHTML = `
          <p>
            Seguro destinado a residências. Protege seu lar contra diversos
            tipos de danos, incluindo incêndio, roubo, e desastres naturais. A
            Logística Corretora de Seguros oferece planos personalizados para
            atender às suas necessidades. Principais coberturas:
          </p>
          <ul>
            <li>Incêndio e explosão.</li>
            <li>Roubo e furto.</li>
          </ul>
          <a class="btn-r-fill font-b-button" href="contato.html">Faça um Orçamento Gratuito</a>
        `;

        break;
      case "responsabilidade":
        serviceTitle.textContent = "Seguro de Responsabilidade Civil";
        serviceContent.innerHTML = `
          <p>
            Destinado a pessoas físicas ou jurídicas que sejam responsáveis civilmente a pagar indenizações por danos causados a terceiros tais como: Profissional, Serviços, Operações, Eventos, Produtos, Ensino, Hospedagem, entre outros. 
          </p>

          <a class="btn-r-fill font-b-button" href="contato.html">Faça um Orçamento Gratuito</a>
        `;

        break;
      case "aeronautico":
        serviceTitle.textContent = "Seguro Aeronáutico RETA";
        serviceContent.innerHTML = `
            <p>
              Seguro destinado as aeronaves executivas e comerciais. Seguro direcionado principalmente as aeronaves executivas com ampla proteção tanto em solo quanto no ar. Modalidades de Casco e RETA. 
            </p>

            <a class="btn-r-fill font-b-button" href="contato.html">Faça um Orçamento Gratuito</a>
          `;

        break;
      case "riscos-patrimoniais":
        serviceTitle.textContent =
          "Riscos Patrimoniais, Comércio, Serviços e Condomínio";
        serviceContent.innerHTML = `
              <p>
                Proteção para empresas de pequeno, médio e grande porte e diversos segmentos. Coberturas adicionais para danos elétricos, alagamento, vendaval, responsabilidade civil, subtração de bens e mercadorias entre outras coberturas disponíveis. 
              </p>

              <a class="btn-r-fill font-b-button" href="contato.html">Faça um Orçamento Gratuito</a>
            `;

        break;
      case "seguro-vida":
        serviceTitle.textContent =
          "Seguro de Vida em Grupo e Acidentes Pessoais";
        serviceContent.innerHTML = `
          <p>
Seguro destinado a garantir uma indenização aos beneficiários do segurado por Morte de Qualquer Natureza, Morte Acidental ou Invalidez Total ou Parcial por Acidente, dando cobertura também para Assistência Funeral e Doenças Graves. Ainda, é possível contratar Despesas Médicas, Hospitalares e Odontológicas (DMHO). 
          </p>

          <a class="btn-r-fill font-b-button" href="contato.html">Faça um Orçamento Gratuito</a>
        `;

        break;
      case "riscos-ambientais":
        serviceTitle.textContent = "Seguro de Ambientais de Transportes";
        serviceContent.innerHTML = `
            <p>
              Seguro destinado a residências. Protege seu lar contra diversos
              tipos de danos, incluindo incêndio, roubo, e desastres naturais. A
              Logística Corretora de Seguros oferece planos personalizados para
              atender às suas necessidades. Principais coberturas:
            </p>
            <ul>
              <li>Incêndio e explosão.</li>
              <li>Roubo e furto.</li>
            </ul>
            <a class="btn-r-fill font-b-button" href="contato.html">Faça um Orçamento Gratuito</a>
          `;

        break;
      case "maquinas-equipamentos":
        serviceTitle.textContent = "Seguro de Máquinas e Equipamentos";
        serviceContent.innerHTML = `
            <p>
              Destina-se a proteger máquinas e equipamentos de diferentes portes e utilizações, financiadas ou não contra danos que possam sofrer de causas externas. Modalidade conhecida como Riscos Diversos. 
            </p>

            <a class="btn-r-fill font-b-button" href="contato.html">Faça um Orçamento Gratuito</a>
          `;

        break;
      case "seguro-residencial":
        serviceTitle.textContent = "Seguro Residencial";
        serviceContent.innerHTML = `
            <p>
              Seguro para proteção patrimonial contra eventos como incêndios, enchentes, tempestades, roubos, danos elétricos entre outras coberturas. Essencial para uma vida mais tranquila. 
            </p>

            <a class="btn-r-fill font-b-button" href="contato.html">Faça um Orçamento Gratuito</a>
          `;
        serviceImage.src = "images/front-door-city-house 1.png";
        break;
      case "seguro-automovel":
        serviceTitle.textContent = "Seguro de Automóvel";
        serviceContent.innerHTML = `
            <p>
              Seguro destinado a residências. Protege seu lar contra diversos
              tipos de danos, incluindo incêndio, roubo, e desastres naturais. A
              Logística Corretora de Seguros oferece planos personalizados para
              atender às suas necessidades. Principais coberturas:
            </p>
            <ul>
              <li>Incêndio e explosão.</li>
              <li>Roubo e furto.</li>
            </ul>
            <a class="btn-r-fill font-b-button" href="contato.html">Faça um Orçamento Gratuito</a>
          `;
        break;
      case "seguro-viagem":
        serviceTitle.textContent = "Seguro Viagem";
        serviceContent.innerHTML = `
            <p>
              Diversas coberturas disponíveis para garantir imprevistos durante a viagem de férias ou a trabalho, internacional e nacional também. Atendimento em caso de acidente ou doença, problemas com a bagagem, documentos. 

Em alguns países, o seguro de viagem é obrigatório pelo Tratado de Schengen. 
            </p>

            <a class="btn-r-fill font-b-button" href="contato.html">Faça um Orçamento Gratuito</a>
          `;
        serviceImage.src = "images/suitcases-travel-with-straw-hat 1.png";
        break;
      case "seguro-equipamentos-portateis":
        serviceTitle.textContent = "Seguro de Equipamentos Portáteis";
        serviceContent.innerHTML = `
              <p>
Seguro destinado a proteção de itens eletrônicos que costumam fazer parte do dia a dia pessoal e profissional da maioria das pessoas. Nessa lista, entram utensílios como smartphones, tablets, câmeras fotográficas profissionais, câmeras filmadoras, notebooks, drones de alta performance e assim por diante. 

Ele protege o dono contra eventuais danos físicos repentinos que possam acontecer ao produto. 
              </p>
    
              <a class="btn-r-fill font-b-button" href="contato.html">Faça um Orçamento Gratuito</a>
            `;
        break;
      default:
        serviceContent.innerHTML = `
        <p>
          Seguro destinado a residências. Protege seu lar contra diversos
          tipos de danos, incluindo incêndio, roubo, e desastres naturais. A
          Logística Corretora de Seguros oferece planos personalizados para
          atender às suas necessidades. Principais coberturas:
        </p>
        <ul>
          <li>Incêndio e explosão.</li>
          <li>Roubo e furto.</li>
        </ul>
        <a class="btn-r-fill font-b-button" href="contato.html">Faça um Orçamento Gratuito</a>
      `;
    }
  }
});
