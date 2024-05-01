const Footer = () => {
  return (
    <footer className="flex h-12 w-full items-center justify-center py-2">
      <p className="font-md">
        Built by{" "}
        <a
          href="https://github.com/christianrazul"
          className="font-semibold"
          target="_blank"
        >
          Christian Razul{" "}
        </a>
        using{" "}
        <a href="https://react.dev/" className="font-semibold" target="_blank">
          ReactJS{", "}
        </a>
        <a
          href="https://ui.shadcn.com/"
          className="font-semibold"
          target="_blank"
        >
          ShadCN{", "}
        </a>
        <a
          href="https://fakestoreapi.com/"
          className="font-semibold"
          target="_blank"
        >
          FakeStoreAPI{" "}
        </a>
        with ❤️
      </p>
    </footer>
  );
};

export default Footer;
