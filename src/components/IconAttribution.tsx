interface IconAttributionProps {
  href: string;
  title: string;
  icon: string;
}

export default function IconAttribution({
  href,
  title,
  icon,
}: IconAttributionProps) {
  return (
    <a
      href={href}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
      className="flaticon-link"
    >
      <img src={icon} className="footer-flag-icon" alt="Icon attributions" />
    </a>
  );
}
