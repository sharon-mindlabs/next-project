import Image from "next/image";
export default function CommonSection() {
  return (
    <div className="common-section">
      <div className="container">
        <div className="content-area">
          <Image
            src="/images/common-section-image.png"
            alt="Image"
            width={1494}
            height={582}
            quality={90}
          />
          <p>
            We are committed to providing <b>exceptional customer support</b>{" "}
            every day. <b>Our team carefully reviews each ticket</b> to ensure
            your concerns are understood, addressed, and resolved as quickly as
            possible. You can count on us to{" "}
            <b>deliver consistent, reliable assistance</b> whenever you need it.
          </p>
        </div>
      </div>
    </div>
  );
}
