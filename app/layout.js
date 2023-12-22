import './globals.css';
import Navbar from './ui/Navbar/Navbar';
import NavbarBackground from './ui/Navbar/NavbarBackground';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavbarBackground />
        <Navbar />
        <div className='children'>
          {children}
        </div>
      </body>
    </html>
  );
}
