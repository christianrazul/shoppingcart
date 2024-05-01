const Footer = () => {
  return (
    <footer className="flex h-12 w-full items-center justify-center">
      <p className="font-md">
        Built by{" "}
        <a href="https://github.com/christianrazul" className="font-semibold">
          Christian Razul{" "}
        </a>
        using{" "}
        <a href="https://react.dev/" className="font-semibold">
          ReactJS{", "}
        </a>
        <a href="https://ui.shadcn.com/" className="font-semibold">
          ShadCN{", "}
        </a>
        <a href="https://fakestoreapi.com/" className="font-semibold">
          FakeStoreAPI{" "}
        </a>
        with ❤️
      </p>
    </footer>
  );
};

export default Footer;
