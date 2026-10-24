export default function WhatsAppButton({ text = "Enquire Now", number = "971541676733" }) {
  const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
  return (
    <a href={url} target="_blank" rel="noreferrer" className="header__whatsapp" style={{ display: 'inline-block' }}>
      WhatsApp
    </a>
  );
}