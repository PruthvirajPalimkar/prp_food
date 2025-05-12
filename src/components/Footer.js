const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <footer 
    style={{ textAlign: 'center', marginTop: '100px' }}
    >
      <p>
        Copyright &copy; {currYear}, Made with 💗 by <strong>Pruthvi Raj</strong>
      </p>
    </footer>
  );
};

export default Footer;
