import './globals.css';
import Header from '../components/Header';

export const metadata = {
  title: 'Placify — Path to Placement'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ maxWidth:"1100px", margin:"0 auto", padding:"20px" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
