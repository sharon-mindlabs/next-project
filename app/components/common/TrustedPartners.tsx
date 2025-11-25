export default function TrustedPartners() {
  const partners = [
    {
      src: "images/shopify-logo.svg",
      alt: "My Logo",
    },
    {
      src: "images/strip-logo.svg",
      alt: "Company Logo 2",
    },
    {
      src: "images/slack-logo.svg",
      alt: "Company Logo 3",
    },
    {
      src: "images/zoom-logo.svg",
      alt: "Company Logo 3",
    },
  ];

  return (
    <div className="trusted-partners">
      <div className="container">
        <div className="content-area">
          <span>Trusted by leading companies worldwide</span>

          <div className="partners-logos">
            {partners.map((logo, index) => (
              <img key={index} src={logo.src} alt={logo.alt} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
