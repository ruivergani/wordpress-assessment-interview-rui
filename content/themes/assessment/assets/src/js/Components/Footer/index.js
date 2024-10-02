import {
  FooterComponent,
  FooterBottom,
  FooterContainerCTA,
  FooterCTA,
  FooterIcon,
  FooterTextCTA,
  FooterContentCTA,
  FooterButtonCTA,
  FooterCopy,
  FooterMessage,
  FooterDetails,
  FooterContact,
  FooterBottomContainer,
  FooterSocials,
  FooterLogo,
  FooterContent,
  FooterColumn,
  FooterLinksContainer
} from './styles';
import { NavLink } from 'react-router-dom';
import { EnvelopeSimpleOpen, PhoneOutgoing, EnvelopeSimple} from 'phosphor-react';
// Images
import Iconfacebook from '../../../../images/logos/facebook.svg';
import IconTwitter from '../../../../images/logos/twitter.svg';
import IconInstagram from '../../../../images/logos/instagram.svg';
import IconLinkedIn from '../../../../images/logos/linkedin.svg';
import IconYouTube from '../../../../images/logos/youtube.svg';
import logoLawnStarter from '../../../../images/logos/lawnstarter.svg';

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
        <FooterBottomContainer>
          <FooterContent>
            <FooterLogo>
              <NavLink to='/'>
                <img src={logoLawnStarter} alt="Logo Lawn Starter" title="Logo Lawn Starter"/>
              </NavLink>
            </FooterLogo>
            <FooterLinksContainer>
              <FooterColumn>
                <h4>Company</h4>
                <ul>
                  <li><NavLink to="/">About Us</NavLink></li>
                  <li><NavLink to="/">Our Blog</NavLink></li>
                  <li><NavLink to="/">Order Services</NavLink></li>
                  <li><NavLink to="/">FAQ</NavLink></li>
                  <li><NavLink to="/">Lawn Care Near Me</NavLink></li>
                </ul>
              </FooterColumn>
              <FooterColumn>
                <h4>Services</h4>
                <ul>
                  <li><NavLink to="/">Bush Trimming</NavLink></li>
                  <li><NavLink to="/">Landscaping</NavLink></li>
                  <li><NavLink to="/">Lawn Care</NavLink></li>
                  <li><NavLink to="/">Lawn Treatment</NavLink></li>
                  <li><NavLink to="/">Leaf Removal</NavLink></li>
                </ul>
              </FooterColumn>
              <FooterColumn>
                <h4>Providers</h4>
                <ul>
                  <li><NavLink to="/">Scholarship</NavLink></li>
                  <li><NavLink to="/">LawnStarter for Providers</NavLink></li>
                </ul>
              </FooterColumn>
            </FooterLinksContainer>
          </FooterContent>
          <FooterDetails>
            <FooterSocials>
              <p>Check our social media</p>
              <ul>
                <li>
                  <a href="#" rel="noreferrer nofollow" target="_blank" title="Instagram LawnStarter">
                    <picture>
                      <img src={IconInstagram} alt="Instagram LawnStarter" title="Instagram LawnStarter" />
                    </picture>
                  </a>
                </li>
                <li>
                  <a href="#" rel="noreferrer nofollow" target="_blank" title="LinkedIn LawnStarter">
                    <picture>
                      <img src={IconLinkedIn} alt="LinkedIn LawnStarter" title="LinkedIn LawnStarter" />
                    </picture>
                  </a>
                </li>
                <li>
                  <a href="#" rel="noreferrer nofollow" target="_blank" title="Facebook LawnStarter">
                    <picture>
                      <img src={Iconfacebook} alt="Facebook LawnStarter" title="Facebook LawnStarter" />
                    </picture>
                  </a>
                </li>
                <li>
                  <a href="#" rel="noreferrer nofollow" target="_blank" title="Youtube LawnStarter">
                    <picture>
                      <img src={IconYouTube} alt="Youtube LawnStarter" title="Youtube LawnStarter" />
                    </picture>
                  </a>
                </li>
                <li>
                  <a href="#" rel="noreferrer nofollow" target="_blank" title="Twitter LawnStarter">
                    <picture>
                      <img src={IconTwitter} alt="Twitter LawnStarter" title="Youtube LawnStarter" />
                    </picture>
                  </a>
                </li>
              </ul>
            </FooterSocials>
            <FooterContact>
              <h3>Contact Information</h3>
              <p>Need some help?</p>
              <span>Feel free to message us here</span>
              <ul>
                <li>
                  <a href="mailto:enquires@lawnstartersupport.com">
                    <EnvelopeSimple size={24} weight="duotone" />
                    <p>enquires@lawnstartersupport.com</p>
                  </a>
                </li>
                <li>
                  <a href="tel:866‑822‑1766">
                    <PhoneOutgoing size={24} weight="duotone" />
                    <p>866‑822‑1766</p>
                  </a>
                </li>
              </ul>
            </FooterContact>
          </FooterDetails>
          <FooterMessage>
            <p><strong>LawnStarter</strong> brings you the best lawn services, all at the click of button. </p>
          </FooterMessage>
          <FooterCopy>
            <p>© 2024 - By submitting my contact information, I agree that LawnStarter or its representatives may contact me by email, phone, or SMS at the email address or phone number I provide, including for marketing purposes and by automatic dialing systems. I also agree to LawnStarter’s terms of service and privacy policy.</p>
            <span>Developed by: <strong>Rui Vergani Neto</strong></span>
          </FooterCopy>
        </FooterBottomContainer>
      </FooterBottom>
    </FooterComponent>
  );
};

export default Footer;
