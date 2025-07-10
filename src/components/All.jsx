import React from 'react';
import './Portofolio.css';
import FotoSaya from '../assets/tsafira.png'; // Pastikan gambar ada di folder assets

function All() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Terima kasih! Pesan kamu sudah dikirim 😊");
  };

  return (
    <div>
      <header>
        <nav>
          <h1>PORTOFOLIO</h1>
          <ul>
            <li><a href="#home">Beranda</a></li>
            <li><a href="#about">Tentang</a></li>
            <li><a href="#skills">Keahlian</a></li>
            <li><a href="#projects">Proyek</a></li>
            <li><a href="#contact">Kontak</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="container">
          <h2>Halo, Saya <span>Tsafira Hasanah Hidayani</span></h2>
          <p>Mahasiswi | Web Developer | UI Designer</p>
        </div>
      </section>

      <section id="about" className="about">
        <h2>Profil Saya</h2>
        <img src={FotoSaya} alt="Foto Tsafira" className="profile-about" />
        <p className="about-box">
          Hai! Saya Tsafira, seorang mahasiswi jurusan Informatika di Universitas Satya Terra Bhinneka.
          Saya memiliki ketertarikan di bidang pengembangan web, desain UI/UX, dan pengolahan data.
          Saya aktif mengikuti proyek kuliah, organisasi kampus, dan terus mengasah keterampilan di dunia digital.
          Saya percaya bahwa proses belajar tidak pernah berhenti, dan setiap tantangan adalah peluang untuk berkembang.
        </p>
      </section>

      <section id="skills">
        <h2>Keahlian Saya</h2>
        <div className="skill-boxes">
          <div className="skill-card">HTML & CSS</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">UI/UX Design (Figma)</div>
          <div className="skill-card">PHP & MySQL</div>
          <div className="skill-card">Canva</div>
          <div className="skill-card">Git & GitHub</div>
        </div>
      </section>

      <section id="projects">
        <h2>Proyek Saya</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Website Portofolio</h3>
            <p>Menampilkan profil, keterampilan, dan hasil karya saya secara online.</p>
          </div>
          <div className="project-card">
            <h3>Blog Pribadi</h3>
            <p>Website blog untuk berbagi artikel tentang teknologi dan kehidupan kampus. Dibangun dengan HTML, CSS, dan JavaScript.</p>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2>Kontak Saya</h2>
        <p><strong>No. HP:</strong> 0831-9397-5345</p>
        <p><strong>Email:</strong> tsafirahidayani26@gmail.com</p>
        <p>
          <strong>Instagram:</strong>{' '}
          <a href="https://www.instagram.com/tsafirahdyni.09?igsh=ZWZ5Y2VuZ2xnYzM2" target="_blank" rel="noopener noreferrer">
            @tsafirahdyni.09
          </a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{' '}
          <a href="https://linkedin.com/in/tsafira" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/tsafira
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{' '}
          <a href="https://github.com/tsafira" target="_blank" rel="noopener noreferrer">
            github.com/tsafira
          </a>
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" name="nama" placeholder="Nama Lengkap" required />
          <input type="email" name="email" placeholder="Email Aktif" required />
          <textarea name="pesan" placeholder="Pesan Anda..." required></textarea>
          <button type="submit">Kirim Pesan</button>
        </form>
      </section>

      <footer>
        <p>© 2025 Tsafira. Dibuat dengan cinta dan kasih sayang.</p>
      </footer>
    </div>
  );
}

export default All;
