import './footer.css'
export default function Footer() {
    return (
      <footer className="bg-[#0A1F44] overflow-x-hidden  text-white footer py-4 text-center">
        <a href="https://www.indiamart.com/friends-auto-electrical-faridabad/" target="_blank" className="text-[#FFB400] hover:underline">
          View on IndiaMART
        </a>
        <p>© {new Date().getFullYear()} Friends Auto Electrical. All rights reserved.</p>
      </footer>
    );
  }
  