import React from 'react';

const Footer = () => {
  return (
    <div className="footer bg-slate-700 text-gray-50 text-center py-10">
      <p>&copy;{new Date().getFullYear()} ShopTron. All right reserved. </p>
    </div>
  );
};

export default Footer;
