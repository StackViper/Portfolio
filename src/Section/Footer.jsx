const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
        <div className="flex gap-3 items-center justify-center">
  <div className="social-icon">
    <a href="https://github.com/StackViper" target="_blank" rel="noopener noreferrer">
      <img src="/assets/github.svg" alt="github" className="w-8 h-8" />
    </a>
  </div>
  <div className="social-icon">
    <a href=" https://x.com/_Logic_hero?t=_Fu945h9dpnCZxVS5XOC6g&s=08" target="_blank" rel="noopener noreferrer">
      <img src="/assets/twitter.svg" alt="twitter" className="w-8 h-8" />
    </a>
  </div>
  <div className="social-icon">
  <a href="https://www.linkedin.com/in/raj-ritu/" target="_blank" rel="noopener noreferrer">
    <img src="/assets/linkdien.jpg" alt="linkedin" className="w-8 h-8 rounded-full" />
  </a>
</div>

</div>


        <p className="text-white-500">© 2024 Ritu. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;