export default function Container({ children, className = "", ...rest }) {
  return (
    <article
      className={`mx-auto w-full max-w-3xl rounded-[20px] border-b border-[#E3E3E3] bg-white p-6 shadow-card md:p-12 ${className}`}
      {...rest}
    >
      {children}
    </article>
  );
}
