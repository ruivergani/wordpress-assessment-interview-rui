import {
  FooterComponent,
  FooterBottom,
  FooterContainerCTA,
  FooterCTA,
  FooterIcon,
  FooterTextCTA,
  FooterContentCTA,
  FooterButtonCTA
 } from './styles';
import {

} from './styles';
import { EnvelopeSimpleOpen } from 'phosphor-react';

const Footer = () => {
  return (
    <FooterComponent>
        <FooterCTA>
          <FooterContainerCTA>
            <FooterContentCTA>
              <FooterIcon>
                <EnvelopeSimpleOpen size={47} weight="duotone" />
              </FooterIcon>
              <FooterTextCTA>
                <p>Affordable Lawn Care Services the Click of a Button</p>
                <span>Affordable Pricing • Fast Online Ordering • Quality Service.</span>
              </FooterTextCTA>
            </FooterContentCTA>
            <FooterButtonCTA>
              <p>Get Quote Now</p>
            </FooterButtonCTA>
          </FooterContainerCTA>
        </FooterCTA>
      <FooterBottom>
        Footer here
      </FooterBottom>
    </FooterComponent>
  );
};

export default Footer;
