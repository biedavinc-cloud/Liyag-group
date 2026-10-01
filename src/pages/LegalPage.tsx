import { Link } from 'react-router-dom';
import { Mail, MapPin, FileText, ArrowLeft } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLang } from '@/i18n/LangContext';

export default function LegalPage() {
  const { t, lang } = useLang();
  const ref = useScrollAnimation();
  const isFR = lang === 'FR';

  const sections = [
    { id: 'legal-notice', label: isFR ? 'Mentions Légales' : 'Legal Notice' },
    { id: 'privacy-policy', label: isFR ? 'Politique de Confidentialité' : 'Privacy Policy' },
    { id: 'terms-of-service', label: isFR ? "Conditions d'Utilisation" : 'Terms of Service' },
  ];

  return (
    <>
      <PageHero label={isFR ? 'Documents Légaux' : 'Legal Documents'} title={isFR ? 'Documents Légaux' : 'Legal Documents'} />

      <section className="relative py-12 bg-black border-b border-white/[0.08]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-2 border border-white/[0.08] rounded-lg px-5 py-2.5 text-xs uppercase tracking-widest font-semibold text-[#C9CCD1] hover:border-white/[0.24] hover:text-white transition-all duration-300"
              >
                <FileText size={14} />
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section ref={ref} className="relative py-14 md:py-20 bg-[#0B0C0E]">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          <div id="legal-notice" className="animate-on-scroll scroll-mt-40">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-6 tracking-tight">
              {isFR ? 'Mentions Légales' : 'Legal Notice'}
            </h2>
            <div className="space-y-4 text-sm md:text-base text-[#8A8F98] leading-relaxed">
              <p><strong className="text-white">LIYAH GROUP</strong> — {isFR ? 'Fondé par' : 'Founded by'} Vincent Nogue.</p>
              <p><strong className="text-white">{isFR ? 'Licence' : 'License'}:</strong> No. 4425201.01</p>
              <p><strong className="text-white">{isFR ? 'Entité juridique' : 'Legal entity'}:</strong> SPC FZC (Sharjah Publishing City Free Zone), UAE</p>
              <div className="pt-2">
                <p className="font-semibold text-white mb-2">{isFR ? 'Bureaux' : 'Offices'}:</p>
                <div className="space-y-2 pl-4">
                  <p className="flex items-start gap-2"><MapPin size={16} className="text-white mt-0.5 flex-shrink-0" /> Yaoundé - Soa, {isFR ? 'Cameroun' : 'Cameroon'}</p>
                  <p className="flex items-start gap-2"><MapPin size={16} className="text-white mt-0.5 flex-shrink-0" /> Jumeirah 1, Dubai, UAE</p>
                </div>
              </div>
              <div className="pt-2">
                <p className="font-semibold text-white mb-2">{isFR ? 'Contact' : 'Contact'}:</p>
                <div className="space-y-2 pl-4">
                  <p className="flex items-center gap-2"><Mail size={16} className="text-white" /> <a href="mailto:info@liyahgroup.me" className="hover:text-white transition-colors">info@liyahgroup.me</a></p>
                  <p className="flex items-center gap-2"><Mail size={16} className="text-white" /> <a href="mailto:ceo@liyahgroup.me" className="hover:text-white transition-colors">ceo@liyahgroup.me</a></p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-white/[0.08]" />

          <div id="privacy-policy" className="animate-on-scroll scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-6 tracking-tight">
              {isFR ? 'Politique de Confidentialité' : 'Privacy Policy'}
            </h2>
            <div className="space-y-4 text-sm md:text-base text-[#8A8F98] leading-relaxed">
              <p>{isFR ? "LIYAH GROUP accorde une importance fondamentale à la protection de vos données personnelles. Cette politique explique quelles données nous collectons, comment nous les utilisons et quels sont vos droits." : "LIYAH GROUP places the highest importance on protecting your personal data. This policy explains what data we collect, how we use it, and what your rights are."}</p>
              <h3 className="text-lg font-semibold text-white pt-2">{isFR ? 'Données collectées' : 'Data Collected'}</h3>
              <p>{isFR ? "Nous collectons les informations que vous nous fournissez volontairement via nos formulaires (formulaire de contact, newsletter) : nom, adresse email, et message. Ces données sont utilisées uniquement pour répondre à vos demandes et vous envoyer nos communications si vous y avez consenti." : "We collect information you provide voluntarily through our forms (contact form, newsletter): name, email address, and message. This data is used solely to respond to your inquiries and to send you our communications if you have opted in."}</p>
              <h3 className="text-lg font-semibold text-white pt-2">{isFR ? 'Utilisation des données' : 'Use of Data'}</h3>
              <p>{isFR ? "Vos données sont utilisées pour : (1) répondre à vos demandes de contact, (2) vous envoyer notre newsletter si vous y êtes abonné, (3) améliorer nos services et notre site. Nous ne vendons ni ne louons vos données à des tiers." : "Your data is used to: (1) respond to your contact requests, (2) send you our newsletter if subscribed, (3) improve our services and website. We do not sell or rent your data to third parties."}</p>
              <h3 className="text-lg font-semibold text-white pt-2">{isFR ? 'Vos droits' : 'Your Rights'}</h3>
              <p>{isFR ? "Conformément aux réglementations applicables (RGPD et lois locales), vous disposez d'un droit d'accès, de rectification, d'effacement et d'opposition au traitement de vos données. Pour exercer ces droits, contactez-nous à info@liyahgroup.me." : "In accordance with applicable regulations (GDPR and local laws), you have the right to access, rectify, erase, and object to the processing of your data. To exercise these rights, contact us at info@liyahgroup.me."}</p>
            </div>
          </div>

          <div className="h-px bg-white/[0.08]" />

          <div id="terms-of-service" className="animate-on-scroll scroll-mt-32">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-6 tracking-tight">
              {isFR ? "Conditions d'Utilisation" : 'Terms of Service'}
            </h2>
            <div className="space-y-4 text-sm md:text-base text-[#8A8F98] leading-relaxed">
              <p>{isFR ? "En accédant et en utilisant ce site web, vous acceptez les présentes conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site." : "By accessing and using this website, you agree to these terms of service. If you do not agree with these terms, please do not use this site."}</p>
              <h3 className="text-lg font-semibold text-white pt-2">{isFR ? 'Utilisation du site' : 'Use of the Site'}</h3>
              <p>{isFR ? "Le contenu de ce site est fourni à titre informatif. LIYAH GROUP s'efforce de maintenir l'exactitude des informations publiées mais ne garantit pas leur exhaustivité ou leur actualité. Toute reproduction, représentation ou diffusion du contenu sans autorisation écrite préalable est interdite." : "The content of this site is provided for informational purposes. LIYAH GROUP strives to maintain the accuracy of published information but does not guarantee its completeness or currency. Any reproduction, representation, or distribution of content without prior written authorization is prohibited."}</p>
              <h3 className="text-lg font-semibold text-white pt-2">{isFR ? 'Services proposés' : 'Services Offered'}</h3>
              <p>{isFR ? "Les services décrits sur ce site (conception de sites web, e-commerce, stratégie digitale, formation, mentorat) sont proposés sous réserve de disponibilité et font l'objet d'un contrat spécifique pour chaque client. Les tarifs et conditions sont communiqués sur demande." : "The services described on this site (web design, e-commerce, digital strategy, training, mentoring) are offered subject to availability and require a specific contract for each client. Pricing and terms are provided upon request."}</p>
              <h3 className="text-lg font-semibold text-white pt-2">{isFR ? 'Limitation de responsabilité' : 'Limitation of Liability'}</h3>
              <p>{isFR ? "LIYAH GROUP ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation de ce site ou des informations qu'il contient. L'utilisateur est seul responsable de l'usage qu'il fait des informations et services proposés." : "LIYAH GROUP shall not be liable for any direct or indirect damages resulting from the use of this site or the information it contains. The user is solely responsible for their use of the information and services offered."}</p>
            </div>
          </div>

          <div className="pt-8 text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-white transition-colors group">
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
              {isFR ? "Retour à l'accueil" : 'Back to Home'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
