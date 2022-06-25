import React from "react";
import Icon1 from '../../images/undraw_back_to_school_inwc.svg';
import Icon2 from '../../images/undraw_by_my_car_ttge.svg';
import Icon3 from '../../images/undraw_digital_currency_qpak.svg';

import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="servicos">
      <ServicesH1>Nossos Serviços</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Redução de despesas</ServicesH2>
          <ServicesP>
            Nós ajudamos a reduzir suas despesas e aumentar sua receita geral.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Agências virtuais</ServicesH2>
          <ServicesP>
            Você pode acessar nossa plataforma online de qualquer lugar do
            mundo.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Benefícios Premium</ServicesH2>
          <ServicesP>
            Desbloquei seu acesso de membro especial e ganhe 5% de cashback.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
