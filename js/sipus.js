/**
 * SIPUS - Sistem Informasi Perpustakaan
 * Interactive Engine & Local Data Store
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Initial Default Datasets
  // --------------------------------------------------------------------------
  const DEFAULT_BOOKS = [
    {
      id: 'CS-2023-001',
      title: 'Struktur Data & Algoritma Python',
      author: 'Dr. Eng. Rinaldi Munir',
      category: 'Pemrograman',
      year: 2023,
      isbn: '978-623-01-0892-4',
      stock: 5,
      totalStock: 6,
      cover: 'assets/images/books/buku-1.svg',
      publisher: 'Informatika Press Bandung',
      pages: 'xvi + 482 halaman',
      location: 'Rak CS-02, Baris 3, Lt. 2',
      synopsis: 'Buku ini dirancang sebagai buku pegangan utama mata kuliah Algoritma dan Struktur Data di jurusan Teknik Informatika dan Ilmu Komputer. Pembahasan mencakup kompleksitas algoritma (Big-O), linked list, stack, queue, pohon biner (BST, AVL, Red-Black), heap, graf, sorting dan searching dengan implementasi Python PEP 8.'
    },
    {
      id: 'CS-2022-002',
      title: 'Rekayasa Perangkat Lunak Terstruktur',
      author: 'Rosa A.S. & M. Shalahuddin',
      category: 'Software Engineering',
      year: 2022,
      isbn: '978-602-8758-12-3',
      stock: 3,
      totalStock: 4,
      cover: 'assets/images/books/buku-2.svg',
      publisher: 'Modula Bandung',
      pages: 'xii + 320 halaman',
      location: 'Rak SE-01, Baris 1, Lt. 2',
      synopsis: 'Buku acuan rekayasa perangkat lunak terstruktur dan berorientasi objek. Membahas siklus SDLC (Waterfall, Agile, Scrum), perancangan UML, DFD, ERD, testing sistem dan arsitektur perangkat lunak modern.'
    },
    {
      id: 'CS-2021-003',
      title: 'Sistem Basis Data Konsep & Desain',
      author: 'Ir. Fathansyah',
      category: 'Basis Data',
      year: 2021,
      isbn: '978-979-1153-45-8',
      stock: 1,
      totalStock: 3,
      cover: 'assets/images/books/buku-3.svg',
      publisher: 'Informatika Press Bandung',
      pages: 'x + 412 halaman',
      location: 'Rak DB-03, Baris 2, Lt. 2',
      synopsis: 'Fundamental pemodelan data relasional, normalisasi (1NF sampai BCNF), aljabar relasional, perancangan SQL lanjutan, transaksi ACID, konkurensi, dan optimasi query basis data.'
    },
    {
      id: 'CS-2023-004',
      title: 'Jaringan Komputer & Komunikasi Data',
      author: 'Iwan Sofana, S.T.',
      category: 'Jaringan Komputer',
      year: 2023,
      isbn: '978-602-6232-15-2',
      stock: 4,
      totalStock: 5,
      cover: 'assets/images/books/buku-4.svg',
      publisher: 'Informatika Bandung',
      pages: 'xviii + 530 halaman',
      location: 'Rak NET-01, Baris 2, Lt. 2',
      synopsis: 'Panduan komprehensif arsitektur jaringan TCP/IP, model OSI, routing OSPF & BGP, VLAN, subnetting CIDR, keamanan jaringan siber, dan pengantar cloud computing.'
    },
    {
      id: 'CS-2024-005',
      title: 'Kecerdasan Buatan Teori & Implementasi',
      author: 'Suyanto, Ph.D.',
      category: 'Artificial Intelligence',
      year: 2024,
      isbn: '978-623-01-2041-4',
      stock: 2,
      totalStock: 3,
      cover: 'assets/images/books/buku-5.svg',
      publisher: 'Andi Publisher Yogyakarta',
      pages: 'xiv + 390 halaman',
      location: 'Rak AI-02, Baris 1, Lt. 2',
      synopsis: 'Kajian komprehensif machine learning, neural networks, deep learning, computer vision, natural language processing, dan penerapan algoritma genetika dalam pemecahan masalah optimasi.'
    },
    {
      id: 'CS-2020-006',
      title: 'Metodologi Riset Ilmu Komputer',
      author: 'Prof. Dr. Zainal Hasibuan',
      category: 'Metodologi Riset',
      year: 2020,
      isbn: '978-979-29-7108-9',
      stock: 6,
      totalStock: 6,
      cover: 'assets/images/books/buku-6.svg',
      publisher: 'Graha Ilmu Yogyakarta',
      pages: 'viii + 276 halaman',
      location: 'Rak RS-01, Baris 4, Lt. 2',
      synopsis: 'Pedoman metodologi penelitian dan penulisan skripsi/tesis informatika, mulai dari perumusan masalah, kajian literatur ilmiah, perancangan eksperimen kuantitatif/kualitatif, hingga publikasi jurnal terindeks.'
    },
    {
      id: 'CS-2019-007',
      title: 'Clean Code Panduan Praktisi',
      author: 'Robert C. Martin',
      category: 'Software Engineering',
      year: 2019,
      isbn: '978-013-2350-88-4',
      stock: 2,
      totalStock: 4,
      cover: 'assets/images/books/buku-7.svg',
      publisher: 'Pearson Education / Terjemahan',
      pages: 'xx + 434 halaman',
      location: 'Rak SE-02, Baris 3, Lt. 2',
      synopsis: 'Prinsip penulisan kode bersih, refactoring, SOLID principles, penamaan variabel yang ekspresif, penanganan error berstandar industri, dan pengujian unit (TDD).'
    },
    {
      id: 'CS-2023-008',
      title: 'Desain Interaksi dan Pengalaman UX',
      author: 'Adi Nugroho, M.Kom.',
      category: 'UI / UX Design',
      year: 2023,
      isbn: '978-623-228-400-5',
      stock: 4,
      totalStock: 4,
      cover: 'assets/images/books/buku-8.svg',
      publisher: 'Informatika Bandung',
      pages: 'xii + 310 halaman',
      location: 'Rak UX-01, Baris 2, Lt. 2',
      synopsis: 'Prinsip desain antarmuka pengguna (UI) dan pengalaman pengguna (UX), user research, wireframing, prototyping Figma, usability testing, dan penerapan sistem desain aksesibel.'
    }
  ];

  const DEFAULT_MEMBERS = [
    {
      nim: '202443501334',
      name: 'Faisal Akbar',
      prodi: 'Mahasiswa S1 Teknik Informatika',
      email: 'faisal.akbar@mhs.kampus.ac.id',
      phone: '0812-1111-2221',
      city: 'Jakarta',
      status: 'Aktif',
      registeredDate: '12 Sep 2024'
    },
    {
      nim: '202443501340',
      name: 'Arya Indra Saputra',
      prodi: 'Mahasiswa S1 Teknik Informatika',
      email: 'arya.indra@mhs.kampus.ac.id',
      phone: '0812-3456-7890',
      city: 'Bandung',
      status: 'Aktif',
      registeredDate: '12 Sep 2024'
    },
    {
      nim: '202443501352',
      name: 'Shendy Faiz Saputra',
      prodi: 'Mahasiswa S1 Teknik Informatika',
      email: 'shendy.faiz@mhs.kampus.ac.id',
      phone: '0821-9876-5432',
      city: 'Jakarta',
      status: 'Aktif',
      registeredDate: '12 Sep 2024'
    },
    {
      nim: '202443501354',
      name: 'Muhammad Ilham',
      prodi: 'Mahasiswa S1 Teknik Informatika',
      email: 'muhammad.ilham@mhs.kampus.ac.id',
      phone: '0857-1122-3344',
      city: 'Bekasi',
      status: 'Aktif',
      registeredDate: '12 Sep 2024'
    },
    {
      nim: '202443501357',
      name: 'Muhammad Nazril Padillah',
      prodi: 'Mahasiswa S1 Teknik Informatika',
      email: 'nazril.padillah@mhs.kampus.ac.id',
      phone: '0878-5544-3322',
      city: 'Depok',
      status: 'Aktif',
      registeredDate: '12 Sep 2024'
    },
    {
      nim: '202443501412',
      name: 'Abdul Havis',
      prodi: 'Mahasiswa S1 Teknik Informatika',
      email: 'abdul.havis@mhs.kampus.ac.id',
      phone: '0813-8877-6655',
      city: 'Tangerang',
      status: 'Aktif',
      registeredDate: '12 Sep 2024'
    },
    {
      nim: '202443502249',
      name: 'Sulton Syarief',
      prodi: 'Mahasiswa S1 Teknik Informatika',
      email: 'sulton.syarief@mhs.kampus.ac.id',
      phone: '0819-2233-4455',
      city: 'Bogor',
      status: 'Aktif',
      registeredDate: '12 Sep 2024'
    }
  ];

  const DEFAULT_LOANS = [
    {
      id: 'TRX-2026-001',
      memberNim: '202443501340',
      memberName: 'Arya Indra Saputra',
      bookId: 'CS-2023-001',
      bookTitle: 'Struktur Data & Algoritma Python',
      bookCover: 'assets/images/books/buku-1.svg',
      borrowDate: '2026-11-01',
      dueDate: '2026-11-08',
      status: 'Aktif (Sisa 4 Hari)'
    },
    {
      id: 'TRX-2026-002',
      memberNim: '202443501352',
      memberName: 'Shendy Faiz Saputra',
      bookId: 'CS-2022-002',
      bookTitle: 'Rekayasa Perangkat Lunak Terstruktur',
      bookCover: 'assets/images/books/buku-2.svg',
      borrowDate: '2026-10-28',
      dueDate: '2026-11-04',
      status: 'Jatuh Tempo Hari Ini'
    },
    {
      id: 'TRX-2026-003',
      memberNim: '202443501354',
      memberName: 'Muhammad Ilham',
      bookId: 'CS-2024-005',
      bookTitle: 'Kecerdasan Buatan Teori & Implementasi',
      bookCover: 'assets/images/books/buku-5.svg',
      borrowDate: '2026-10-24',
      dueDate: '2026-11-07',
      status: 'Aktif (Sisa 3 Hari)'
    },
    {
      id: 'TRX-2026-004',
      memberNim: '202443501357',
      memberName: 'Muhammad Nazril Padillah',
      bookId: 'CS-2021-003',
      bookTitle: 'Sistem Basis Data Konsep & Desain',
      bookCover: 'assets/images/books/buku-3.svg',
      borrowDate: '2026-10-20',
      dueDate: '2026-10-27',
      status: 'Terlambat (8 Hari)'
    },
    {
      id: 'TRX-2026-006',
      memberNim: '202443501412',
      memberName: 'Abdul Havis',
      bookId: 'CS-2023-008',
      bookTitle: 'Desain Interaksi dan Pengalaman UX',
      bookCover: 'assets/images/books/buku-8.svg',
      borrowDate: '2026-11-02',
      dueDate: '2026-11-09',
      status: 'Aktif (Sisa 5 Hari)'
    }
  ];

  const DEFAULT_RETURNS = [
    {
      id: 'TRX-2026-004',
      memberNim: '202443501357',
      memberName: 'Muhammad Nazril Padillah',
      bookId: 'CS-2021-003',
      bookTitle: 'Sistem Basis Data Konsep & Desain',
      bookCover: 'assets/images/books/buku-3.svg',
      borrowDate: '2026-10-20',
      returnDate: '2026-11-04',
      status: 'Terlambat 8 Hari',
      fineAmount: 8000,
      fineStatus: 'Belum Dibayar'
    },
    {
      id: 'TRX-2026-005',
      memberNim: '202443501412',
      memberName: 'Abdul Havis',
      bookId: 'CS-2019-007',
      bookTitle: 'Clean Code Panduan Praktisi',
      bookCover: 'assets/images/books/buku-7.svg',
      borrowDate: '2026-10-15',
      returnDate: '2026-10-22',
      status: 'Tepat Waktu',
      fineAmount: 0,
      fineStatus: 'Nihil'
    },
    {
      id: 'TRX-2026-007',
      memberNim: '202443502249',
      memberName: 'Sulton Syarief',
      bookId: 'CS-2020-006',
      bookTitle: 'Metodologi Riset Ilmu Komputer',
      bookCover: 'assets/images/books/buku-6.svg',
      borrowDate: '2026-10-10',
      returnDate: '2026-10-19',
      status: 'Terlambat 2 Hari',
      fineAmount: 2000,
      fineStatus: 'Lunas Dibayar'
    },
    {
      id: 'TRX-2026-008',
      memberNim: '202443501354',
      memberName: 'Muhammad Ilham',
      bookId: 'CS-2023-004',
      bookTitle: 'Jaringan Komputer & Komunikasi Data',
      bookCover: 'assets/images/books/buku-4.svg',
      borrowDate: '2026-10-08',
      returnDate: '2026-10-15',
      status: 'Tepat Waktu',
      fineAmount: 0,
      fineStatus: 'Nihil'
    }
  ];

  // --------------------------------------------------------------------------
  // 2. Storage Manager
  // --------------------------------------------------------------------------
  const store = {
    getBooks: function () {
      const data = localStorage.getItem('sipus_books');
      if (!data) {
        localStorage.setItem('sipus_books', JSON.stringify(DEFAULT_BOOKS));
        return DEFAULT_BOOKS;
      }
      try { return JSON.parse(data); } catch (e) { return DEFAULT_BOOKS; }
    },
    saveBooks: function (books) {
      localStorage.setItem('sipus_books', JSON.stringify(books));
    },
    getBook: function (id) {
      const books = this.getBooks();
      return books.find(b => b.id === id) || books[0];
    },

    getMembers: function () {
      const data = localStorage.getItem('sipus_members');
      if (!data) {
        localStorage.setItem('sipus_members', JSON.stringify(DEFAULT_MEMBERS));
        return DEFAULT_MEMBERS;
      }
      try { return JSON.parse(data); } catch (e) { return DEFAULT_MEMBERS; }
    },
    saveMembers: function (members) {
      localStorage.setItem('sipus_members', JSON.stringify(members));
    },

    getLoans: function () {
      const data = localStorage.getItem('sipus_loans');
      if (!data) {
        localStorage.setItem('sipus_loans', JSON.stringify(DEFAULT_LOANS));
        return DEFAULT_LOANS;
      }
      try { return JSON.parse(data); } catch (e) { return DEFAULT_LOANS; }
    },
    saveLoans: function (loans) {
      localStorage.setItem('sipus_loans', JSON.stringify(loans));
    },

    getReturns: function () {
      const data = localStorage.getItem('sipus_returns');
      if (!data) {
        localStorage.setItem('sipus_returns', JSON.stringify(DEFAULT_RETURNS));
        return DEFAULT_RETURNS;
      }
      try { return JSON.parse(data); } catch (e) { return DEFAULT_RETURNS; }
    },
    saveReturns: function (returns) {
      localStorage.setItem('sipus_returns', JSON.stringify(returns));
    },

    getUser: function () {
      const data = localStorage.getItem('sipus_profile_user');
      if (!data) {
        const u = DEFAULT_MEMBERS[1]; // Arya Indra Saputra
        localStorage.setItem('sipus_profile_user', JSON.stringify(u));
        return u;
      }
      try { return JSON.parse(data); } catch (e) { return DEFAULT_MEMBERS[1]; }
    },
    saveUser: function (user) {
      localStorage.setItem('sipus_profile_user', JSON.stringify(user));
    }
  };

  // --------------------------------------------------------------------------
  // 3. UI Helpers: Toasts & Modals
  // --------------------------------------------------------------------------
  function showToast(message, type = 'success') {
    let container = document.querySelector('.sipus-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'sipus-toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `sipus-toast sipus-toast-${type}`;

    const iconMap = {
      success: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16A34A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>',
      danger: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',
      warning: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
      info: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284C7" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>'
    };

    toast.innerHTML = `
      <span class="sipus-toast-icon">${iconMap[type] || iconMap.info}</span>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(20px)';
      setTimeout(() => toast.remove(), 250);
    }, 3500);
  }

  function openModal(title, bodyHtml, onConfirm, confirmText = 'Simpan') {
    closeModal();

    const overlay = document.createElement('div');
    overlay.className = 'sipus-modal-overlay';
    overlay.id = 'sipusActiveModal';

    overlay.innerHTML = `
      <div class="sipus-modal">
        <div class="sipus-modal-header">
          <h3 class="sipus-modal-title">${title}</h3>
          <button type="button" class="sipus-modal-close" aria-label="Tutup">&times;</button>
        </div>
        <div class="sipus-modal-body">
          ${bodyHtml}
        </div>
        <div class="sipus-modal-footer">
          <button type="button" class="btn btn-secondary btn-sm sipus-btn-cancel">Batal</button>
          <button type="button" class="btn btn-primary btn-sm sipus-btn-confirm">${confirmText}</button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    setTimeout(() => overlay.classList.add('active'), 10);

    const close = () => {
      overlay.classList.remove('active');
      setTimeout(() => overlay.remove(), 200);
    };

    overlay.querySelector('.sipus-modal-close').onclick = close;
    overlay.querySelector('.sipus-btn-cancel').onclick = close;
    overlay.onclick = (e) => {
      if (e.target === overlay) close();
    };

    const confirmBtn = overlay.querySelector('.sipus-btn-confirm');
    if (onConfirm) {
      confirmBtn.onclick = () => {
        const shouldClose = onConfirm(overlay);
        if (shouldClose !== false) close();
      };
    } else {
      confirmBtn.onclick = close;
    }
  }

  function closeModal() {
    const existing = document.getElementById('sipusActiveModal');
    if (existing) {
      existing.classList.remove('active');
      setTimeout(() => existing.remove(), 150);
    }
  }

  // --------------------------------------------------------------------------
  // 4. Feature Handlers
  // --------------------------------------------------------------------------

  // --- A. Katalog (katalog.html) ---
  function initKatalog() {
    const grid = document.querySelector('.books-grid');
    if (!grid) return;

    const books = store.getBooks();
    const countEl = document.querySelector('.page-header .text-sm strong');
    const searchInput = document.querySelector('.filter-bar input[type="text"]');
    const searchBtn = document.querySelector('.filter-bar button');
    const chips = document.querySelectorAll('.filter-chip');

    let currentCategory = 'Semua';
    let currentKeyword = '';

    // Check query params
    const params = new URLSearchParams(window.location.search);
    if (params.get('q')) {
      currentKeyword = params.get('q').toLowerCase();
      if (searchInput) searchInput.value = params.get('q');
    }

    function render() {
      const filtered = books.filter(b => {
        const matchCat = (currentCategory === 'Semua') ||
          (currentCategory === 'Pemrograman' && b.category === 'Pemrograman') ||
          (currentCategory === 'Basis Data' && b.category === 'Basis Data') ||
          (currentCategory === 'Jaringan' && b.category.includes('Jaringan')) ||
          (currentCategory === 'Kecerdasan Buatan' && b.category.includes('Artificial')) ||
          (currentCategory === 'Metodologi & Riset' && b.category.includes('Metodologi')) ||
          b.category.toLowerCase().includes(currentCategory.toLowerCase());

        const matchKw = !currentKeyword ||
          b.title.toLowerCase().includes(currentKeyword) ||
          b.author.toLowerCase().includes(currentKeyword) ||
          b.isbn.toLowerCase().includes(currentKeyword) ||
          b.id.toLowerCase().includes(currentKeyword);

        return matchCat && matchKw;
      });

      if (countEl) {
        countEl.textContent = `${filtered.length} Judul Koleksi Terdaftar`;
      }

      if (filtered.length === 0) {
        grid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; background: var(--surface-white); border-radius: var(--radius-md); border: 1px dashed var(--border-color);">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-text)" stroke-width="1.5" style="margin-bottom: 0.5rem;"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <h3 style="margin-bottom: 0.25rem;">Tidak Ada Koleksi Buku yang Sesuai</h3>
            <p class="text-sm text-muted">Coba ubah kata kunci pencarian atau pilih kategori lain.</p>
            <button type="button" class="btn btn-secondary btn-sm" id="btnResetFilter" style="margin-top: 0.75rem;">Reset Filter</button>
          </div>
        `;
        const btnReset = document.getElementById('btnResetFilter');
        if (btnReset) {
          btnReset.onclick = () => {
            currentCategory = 'Semua';
            currentKeyword = '';
            if (searchInput) searchInput.value = '';
            chips.forEach(c => c.classList.remove('active'));
            chips[0]?.classList.add('active');
            render();
          };
        }
        return;
      }

      grid.innerHTML = filtered.map(b => {
        const isAvailable = b.stock > 0;
        const badge = isAvailable
          ? (b.stock === 1 ? '<span class="badge badge-warning">Stok Terbatas</span>' : '<span class="badge badge-success">Tersedia</span>')
          : '<span class="badge badge-danger">Dipinjam Semua</span>';

        return `
          <article class="book-card">
            <div class="book-cover-wrap">
              <a href="detail-buku.html?id=${b.id}" style="width: 100%; height: 100%; display: block;">
                <img src="${b.cover}" alt="Sampul ${b.title}" class="book-cover">
              </a>
              <div class="book-badge-pos">${badge}</div>
            </div>
            <div class="book-info">
              <span class="book-category">${b.category}</span>
              <h3 class="book-title"><a href="detail-buku.html?id=${b.id}">${b.title}</a></h3>
              <p class="book-author">${b.author}</p>
              <div class="book-meta">
                <span>Tahun: ${b.year}</span>
                <span>Stok: ${b.stock} Eks</span>
              </div>
              <div style="margin-top: 0.85rem;">
                <a href="detail-buku.html?id=${b.id}" class="btn btn-secondary btn-sm" style="width: 100%;">Lihat Detail &rarr;</a>
              </div>
            </div>
          </article>
        `;
      }).join('');
    }

    // Filter Chips Event
    chips.forEach(chip => {
      chip.onclick = (e) => {
        e.preventDefault();
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const text = chip.textContent.replace(/\(\d+\)/, '').trim();
        currentCategory = text;
        render();
      };
    });

    // Search Input Event
    if (searchInput) {
      searchInput.oninput = () => {
        currentKeyword = searchInput.value.trim().toLowerCase();
        render();
      };
      if (searchBtn) {
        searchBtn.onclick = () => {
          currentKeyword = searchInput.value.trim().toLowerCase();
          render();
        };
      }
    }

    render();
  }

  // --- B. Detail Buku (detail-buku.html) ---
  function initDetailBuku() {
    const detailBox = document.querySelector('.detail-layout');
    if (!detailBox) return;

    const params = new URLSearchParams(window.location.search);
    const bookId = params.get('id') || 'CS-2023-001';
    const book = store.getBook(bookId);

    // Update Cover
    const coverImg = detailBox.querySelector('.detail-cover-box img');
    if (coverImg) {
      coverImg.src = book.cover;
      coverImg.alt = `Sampul Buku ${book.title}`;
    }

    // Update Title, Author, Badges
    const badgeCode = detailBox.querySelector('.detail-content-col .badge-info');
    if (badgeCode) badgeCode.textContent = `Kode: ${book.id}`;

    const badgeStatus = detailBox.querySelector('.detail-content-col .badge-success, .detail-content-col .badge-warning, .detail-content-col .badge-danger');
    if (badgeStatus) {
      if (book.stock > 0) {
        badgeStatus.className = 'badge badge-success';
        badgeStatus.textContent = `Status: Tersedia untuk Dipinjam (${book.stock} Eks)`;
      } else {
        badgeStatus.className = 'badge badge-danger';
        badgeStatus.textContent = 'Status: Stok Sedang Kosong';
      }
    }

    const titleH1 = detailBox.querySelector('.detail-content-col h1');
    if (titleH1) titleH1.textContent = book.title;

    const authorP = detailBox.querySelector('.detail-content-col p strong');
    if (authorP) authorP.textContent = book.author;

    // Breadcrumb text
    const breadcrumbCurrent = document.querySelector('main .container > div:first-child span:last-child');
    if (breadcrumbCurrent) breadcrumbCurrent.textContent = book.title;

    // Metadata Table
    const rows = detailBox.querySelectorAll('.detail-meta-table tr');
    rows.forEach(r => {
      const label = r.cells[0]?.textContent.trim();
      const valCell = r.cells[1];
      if (!valCell) return;

      if (label === 'Kode Buku') valCell.textContent = book.id;
      if (label === 'Nomor ISBN') valCell.textContent = book.isbn;
      if (label === 'Penulis') valCell.textContent = book.author;
      if (label === 'Penerbit') valCell.textContent = book.publisher || 'Informatika Press Bandung';
      if (label === 'Tahun Terbit') valCell.textContent = `${book.year} (Cetakan Aktif)`;
      if (label === 'Kategori / Bidang') valCell.textContent = book.category;
      if (label === 'Jumlah Halaman') valCell.textContent = book.pages || 'xvi + 420 halaman';
      if (label === 'Stok Koleksi') {
        valCell.innerHTML = `<strong style="color: ${book.stock > 0 ? 'var(--success)' : 'var(--danger)'};">${book.stock} Eksemplar</strong> (Total Koleksi: ${book.totalStock || (book.stock + 1)} Eks)`;
      }
      if (label === 'Lokasi Rak') valCell.textContent = book.location || 'Rak CS-02, Perpustakaan Pusat Lt. 2';
    });

    // Synopsis
    const synopsisPs = detailBox.querySelectorAll('.detail-content-col > div:last-child p');
    if (synopsisPs.length > 0 && book.synopsis) {
      synopsisPs[0].textContent = book.synopsis;
    }

    // Tombol Pinjam
    const btnPinjam = detailBox.querySelector('.detail-cover-col button.btn-primary');
    if (btnPinjam) {
      if (book.stock <= 0) {
        btnPinjam.disabled = true;
        btnPinjam.style.opacity = '0.6';
        btnPinjam.innerHTML = 'Stok Buku Habis';
      }

      btnPinjam.onclick = () => {
        if (book.stock <= 0) {
          showToast('Maaf, seluruh eksemplar buku ini sedang dipinjam.', 'danger');
          return;
        }

        const user = store.getUser();
        const trxId = 'TRX-' + new Date().getFullYear() + '-' + String(Math.floor(100 + Math.random() * 900));

        // Create new loan
        const today = new Date().toISOString().split('T')[0];
        const nextWeek = new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0];

        const newLoan = {
          id: trxId,
          memberNim: user.nim,
          memberName: user.name,
          bookId: book.id,
          bookTitle: book.title,
          bookCover: book.cover,
          borrowDate: today,
          dueDate: nextWeek,
          status: 'Aktif (Sisa 7 Hari)'
        };

        const loans = store.getLoans();
        loans.unshift(newLoan);
        store.saveLoans(loans);

        // Decrement book stock
        const allBooks = store.getBooks();
        const bIdx = allBooks.findIndex(b => b.id === book.id);
        if (bIdx !== -1) {
          allBooks[bIdx].stock = Math.max(0, allBooks[bIdx].stock - 1);
          store.saveBooks(allBooks);
          book.stock = allBooks[bIdx].stock;
        }

        showToast(`Peminjaman ${book.title} berhasil diajukan! No. Transaksi: ${trxId}`, 'success');
        setTimeout(() => {
          window.location.href = 'profil.html';
        }, 1200);
      };
    }
  }

  // --- C. Master Data Buku (buku.html) ---
  function initMasterBuku() {
    const table = document.querySelector('.data-table tbody');
    if (!table || !window.location.pathname.includes('buku.html')) return;

    const btnTambah = document.querySelector('.page-header button.btn-primary');
    const searchInput = document.querySelector('.filter-bar input[type="text"]');
    const categorySelect = document.querySelector('.filter-bar select');
    const filterBtn = document.querySelector('.filter-bar button');
    const totalLabel = document.querySelector('.filter-bar .text-muted');

    let currentKeyword = '';
    let currentCategory = '';

    function renderTable() {
      const books = store.getBooks();
      const filtered = books.filter(b => {
        const matchKw = !currentKeyword ||
          b.id.toLowerCase().includes(currentKeyword) ||
          b.title.toLowerCase().includes(currentKeyword) ||
          b.author.toLowerCase().includes(currentKeyword) ||
          b.isbn.toLowerCase().includes(currentKeyword);

        const matchCat = !currentCategory ||
          (currentCategory === 'cs' && b.category === 'Pemrograman') ||
          (currentCategory === 'se' && b.category.includes('Software')) ||
          (currentCategory === 'db' && b.category === 'Basis Data') ||
          (currentCategory === 'net' && b.category.includes('Jaringan')) ||
          (currentCategory === 'ai' && b.category.includes('Artificial')) ||
          b.category.toLowerCase().includes(currentCategory.toLowerCase());

        return matchKw && matchCat;
      });

      if (totalLabel) {
        const totalEks = filtered.reduce((acc, b) => acc + (b.totalStock || b.stock), 0);
        totalLabel.innerHTML = `Total Koleksi: <strong>${filtered.length} Judul (${totalEks} Eksemplar Fisik)</strong>`;
      }

      if (filtered.length === 0) {
        table.innerHTML = `
          <tr>
            <td colspan="8" style="text-align: center; padding: 2.5rem; color: var(--secondary-text);">
              Tidak ada data buku yang sesuai dengan pencarian.
            </td>
          </tr>
        `;
        return;
      }

      table.innerHTML = filtered.map(b => {
        const isAvailable = b.stock > 0;
        const statusBadge = isAvailable
          ? (b.stock === 1 ? '<span class="badge badge-warning">Stok Terbatas</span>' : '<span class="badge badge-success">Tersedia</span>')
          : '<span class="badge badge-danger">Habis</span>';

        return `
          <tr data-id="${b.id}">
            <td style="text-align: center;">
              <a href="detail-buku.html?id=${b.id}" title="Lihat detail">
                <img src="${b.cover}" alt="Sampul ${b.title}" class="table-book-thumb">
              </a>
            </td>
            <td><code>${b.id}</code></td>
            <td>
              <div style="font-weight: 600; color: var(--primary-navy);">
                <a href="detail-buku.html?id=${b.id}">${b.title}</a>
              </div>
              <div class="text-xs text-muted">ISBN: ${b.isbn} • Terbit: ${b.year}</div>
            </td>
            <td>${b.author}</td>
            <td><span class="badge badge-neutral">${b.category}</span></td>
            <td><strong>${b.stock} / ${b.totalStock || b.stock}</strong></td>
            <td>${statusBadge}</td>
            <td class="text-right">
              <div class="table-actions" style="justify-content: flex-end;">
                <a href="detail-buku.html?id=${b.id}" class="btn btn-secondary btn-sm" title="Lihat">Detail</a>
                <button type="button" class="btn btn-secondary btn-sm btn-edit-buku" data-id="${b.id}" title="Edit">Edit</button>
                <button type="button" class="btn btn-danger btn-sm btn-hapus-buku" data-id="${b.id}" title="Hapus">Hapus</button>
              </div>
            </td>
          </tr>
        `;
      }).join('');

      // Wire Edit Buttons
      table.querySelectorAll('.btn-edit-buku').forEach(btn => {
        btn.onclick = () => openEditBukuModal(btn.dataset.id);
      });

      // Wire Delete Buttons
      table.querySelectorAll('.btn-hapus-buku').forEach(btn => {
        btn.onclick = () => confirmHapusBuku(btn.dataset.id);
      });
    }

    // Modal Tambah Buku Baru
    if (btnTambah) {
      btnTambah.onclick = () => {
        const modalHtml = `
          <form id="formTambahBuku">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Kode Buku</label>
                <input type="text" id="f_kode" class="form-control" value="CS-2026-00${store.getBooks().length + 1}" required>
              </div>
              <div class="form-group">
                <label class="form-label">Tahun Terbit</label>
                <input type="number" id="f_tahun" class="form-control" value="2026" required>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Judul Buku</label>
              <input type="text" id="f_judul" class="form-control" placeholder="Contoh: Pemrograman Web Modern" required>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Penulis</label>
                <input type="text" id="f_penulis" class="form-control" placeholder="Nama lengkap penulis" required>
              </div>
              <div class="form-group">
                <label class="form-label">Kategori</label>
                <select id="f_kategori" class="form-control">
                  <option value="Pemrograman">Pemrograman</option>
                  <option value="Software Engineering">Software Engineering</option>
                  <option value="Basis Data">Basis Data</option>
                  <option value="Jaringan Komputer">Jaringan Komputer</option>
                  <option value="Artificial Intelligence">Artificial Intelligence</option>
                  <option value="UI / UX Design">UI / UX Design</option>
                  <option value="Metodologi Riset">Metodologi Riset</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Nomor ISBN</label>
                <input type="text" id="f_isbn" class="form-control" value="978-623-01-0999-9" required>
              </div>
              <div class="form-group">
                <label class="form-label">Jumlah Stok Eksemplar</label>
                <input type="number" id="f_stok" class="form-control" value="5" min="1" required>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Pilih Foto Sampul Buku</label>
              <select id="f_cover" class="form-control">
                <option value="assets/images/books/buku-1.svg">Cover Model 1 (Biru Navy)</option>
                <option value="assets/images/books/buku-2.svg">Cover Model 2 (Teal Tosca)</option>
                <option value="assets/images/books/buku-3.svg">Cover Model 3 (Indigo Ungu)</option>
                <option value="assets/images/books/buku-4.svg">Cover Model 4 (Kuning Emas)</option>
                <option value="assets/images/books/buku-5.svg">Cover Model 5 (Slate Dark)</option>
                <option value="assets/images/books/buku-6.svg">Cover Model 6 (Marun)</option>
                <option value="assets/images/books/buku-7.svg">Cover Model 7 (Hijau Zamrud)</option>
                <option value="assets/images/books/buku-8.svg">Cover Model 8 (Royal Amber)</option>
              </select>
            </div>
          </form>
        `;

        openModal('Tambah Koleksi Buku Baru', modalHtml, (modalEl) => {
          const kode = modalEl.querySelector('#f_kode').value.trim();
          const judul = modalEl.querySelector('#f_judul').value.trim();
          const penulis = modalEl.querySelector('#f_penulis').value.trim();
          const kategori = modalEl.querySelector('#f_kategori').value;
          const tahun = parseInt(modalEl.querySelector('#f_tahun').value) || 2026;
          const isbn = modalEl.querySelector('#f_isbn').value.trim();
          const stok = parseInt(modalEl.querySelector('#f_stok').value) || 5;
          const cover = modalEl.querySelector('#f_cover').value;

          if (!kode || !judul || !penulis) {
            showToast('Harap lengkapi semua kolom bertanda wajib.', 'danger');
            return false;
          }

          const books = store.getBooks();
          books.push({
            id: kode,
            title: judul,
            author: penulis,
            category: kategori,
            year: tahun,
            isbn: isbn,
            stock: stok,
            totalStock: stok,
            cover: cover,
            publisher: 'Penerbit Kampus Press',
            pages: 'xii + 300 halaman',
            location: 'Rak Pengadaan Baru, Lt. 2',
            synopsis: `Buku referensi akademik ${judul} karya ${penulis} terbitan tahun ${tahun}.`
          });

          store.saveBooks(books);
          renderTable();
          showToast(`Buku "${judul}" berhasil ditambahkan ke inventaris!`, 'success');
          return true;
        }, 'Tambahkan Buku');
      };
    }

    function openEditBukuModal(bookId) {
      const book = store.getBook(bookId);
      if (!book) return;

      const modalHtml = `
        <form id="formEditBuku">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Kode Buku (ID)</label>
              <input type="text" id="fe_kode" class="form-control" value="${book.id}" readonly style="background-color: #F1F5F9;">
            </div>
            <div class="form-group">
              <label class="form-label">Tahun Terbit</label>
              <input type="number" id="fe_tahun" class="form-control" value="${book.year}" required>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Judul Buku</label>
            <input type="text" id="fe_judul" class="form-control" value="${book.title}" required>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Penulis</label>
              <input type="text" id="fe_penulis" class="form-control" value="${book.author}" required>
            </div>
            <div class="form-group">
              <label class="form-label">Kategori</label>
              <input type="text" id="fe_kategori" class="form-control" value="${book.category}" required>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Nomor ISBN</label>
              <input type="text" id="fe_isbn" class="form-control" value="${book.isbn}" required>
            </div>
            <div class="form-group">
              <label class="form-label">Stok Tersedia / Total</label>
              <input type="number" id="fe_stok" class="form-control" value="${book.stock}" min="0" required>
            </div>
          </div>
        </form>
      `;

      openModal(`Edit Data Koleksi: ${book.id}`, modalHtml, (modalEl) => {
        const judul = modalEl.querySelector('#fe_judul').value.trim();
        const penulis = modalEl.querySelector('#fe_penulis').value.trim();
        const kategori = modalEl.querySelector('#fe_kategori').value.trim();
        const tahun = parseInt(modalEl.querySelector('#fe_tahun').value) || book.year;
        const isbn = modalEl.querySelector('#fe_isbn').value.trim();
        const stok = parseInt(modalEl.querySelector('#fe_stok').value) || 0;

        const books = store.getBooks();
        const idx = books.findIndex(b => b.id === book.id);
        if (idx !== -1) {
          books[idx].title = judul;
          books[idx].author = penulis;
          books[idx].category = kategori;
          books[idx].year = tahun;
          books[idx].isbn = isbn;
          books[idx].stock = stok;
          books[idx].totalStock = Math.max(books[idx].totalStock || stok, stok);
          store.saveBooks(books);
          renderTable();
          showToast(`Data buku ${book.id} berhasil diperbarui!`, 'success');
        }
        return true;
      }, 'Simpan Perubahan');
    }

    function confirmHapusBuku(bookId) {
      const book = store.getBook(bookId);
      const modalHtml = `
        <div style="text-align: center; padding: 1rem 0;">
          <div style="width: 50px; height: 50px; border-radius: 50%; background: var(--danger-bg); color: var(--danger); display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </div>
          <h4 style="margin-bottom: 0.5rem;">Hapus Koleksi Buku Ini?</h4>
          <p class="text-sm text-muted" style="margin-bottom: 0;">
            Anda akan menghapus buku <strong>"${book.title}"</strong> (Kode: ${book.id}) dari database perpustakaan. Tindakan ini tidak dapat dibatalkan.
          </p>
        </div>
      `;

      openModal('Konfirmasi Penghapusan Buku', modalHtml, () => {
        let books = store.getBooks();
        books = books.filter(b => b.id !== bookId);
        store.saveBooks(books);
        renderTable();
        showToast(`Buku ${bookId} telah berhasil dihapus.`, 'warning');
        return true;
      }, 'Ya, Hapus Buku');
    }

    // Filters
    if (searchInput) {
      searchInput.oninput = () => {
        currentKeyword = searchInput.value.trim().toLowerCase();
        renderTable();
      };
    }
    if (categorySelect) {
      categorySelect.onchange = () => {
        currentCategory = categorySelect.value;
        renderTable();
      };
    }
    if (filterBtn) {
      filterBtn.onclick = () => renderTable();
    }

    renderTable();
  }

  // --- D. Master Data Anggota (anggota.html) ---
  function initMasterAnggota() {
    const table = document.querySelector('.data-table tbody');
    if (!table || !window.location.pathname.includes('anggota.html')) return;

    const btnTambah = document.querySelector('.page-header button.btn-primary');
    const searchInput = document.querySelector('.filter-bar input[type="text"]');
    const statusSelect = document.querySelector('.filter-bar select');
    const filterBtn = document.querySelector('.filter-bar button');

    let currentKeyword = '';

    function renderTable() {
      const members = store.getMembers();
      const filtered = members.filter(m => {
        return !currentKeyword ||
          m.nim.toLowerCase().includes(currentKeyword) ||
          m.name.toLowerCase().includes(currentKeyword) ||
          m.email.toLowerCase().includes(currentKeyword) ||
          m.city.toLowerCase().includes(currentKeyword);
      });

      table.innerHTML = filtered.map(m => `
        <tr data-nim="${m.nim}">
          <td><code>${m.nim}</code></td>
          <td>
            <div style="font-weight: 600; color: var(--primary-navy);">${m.name}</div>
            <div class="text-xs text-muted">${m.prodi || 'Mahasiswa S1 Teknik Informatika'}</div>
          </td>
          <td>
            <div>${m.email}</div>
            <div class="text-xs text-muted">${m.phone}</div>
          </td>
          <td>${m.city || 'Jakarta'}</td>
          <td>${m.registeredDate || '12 Sep 2024'}</td>
          <td><span class="badge ${m.status === 'Aktif' ? 'badge-success' : 'badge-neutral'}">${m.status}</span></td>
          <td class="text-right">
            <div class="table-actions" style="justify-content: flex-end;">
              <a href="profil.html" class="btn btn-secondary btn-sm">Profil</a>
              <button type="button" class="btn btn-secondary btn-sm btn-edit-anggota" data-nim="${m.nim}">Edit</button>
              <button type="button" class="btn btn-danger btn-sm btn-hapus-anggota" data-nim="${m.nim}">Hapus</button>
            </div>
          </td>
        </tr>
      `).join('');

      table.querySelectorAll('.btn-edit-anggota').forEach(btn => {
        btn.onclick = () => openEditAnggotaModal(btn.dataset.nim);
      });
      table.querySelectorAll('.btn-hapus-anggota').forEach(btn => {
        btn.onclick = () => confirmHapusAnggota(btn.dataset.nim);
      });
    }

    if (btnTambah) {
      btnTambah.onclick = () => {
        const modalHtml = `
          <form id="formTambahAnggota">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Nomor Induk / NIM</label>
                <input type="text" id="ma_nim" class="form-control" placeholder="Contoh: 202443509999" required>
              </div>
              <div class="form-group">
                <label class="form-label">Status Keanggotaan</label>
                <select id="ma_status" class="form-control">
                  <option value="Aktif">Aktif</option>
                  <option value="Non-Aktif">Non-Aktif</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Nama Lengkap Anggota</label>
              <input type="text" id="ma_nama" class="form-control" placeholder="Nama mahasiswa atau staf" required>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Alamat Email Kampus</label>
                <input type="email" id="ma_email" class="form-control" placeholder="nama@mhs.kampus.ac.id" required>
              </div>
              <div class="form-group">
                <label class="form-label">Nomor Telepon / WA</label>
                <input type="text" id="ma_phone" class="form-control" placeholder="0812-xxxx-xxxx" required>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Alamat Domisili</label>
              <input type="text" id="ma_city" class="form-control" placeholder="Kota domisili" value="Jakarta">
            </div>
          </form>
        `;

        openModal('Pendaftaran Anggota Baru', modalHtml, (modalEl) => {
          const nim = modalEl.querySelector('#ma_nim').value.trim();
          const name = modalEl.querySelector('#ma_nama').value.trim();
          const email = modalEl.querySelector('#ma_email').value.trim();
          const phone = modalEl.querySelector('#ma_phone').value.trim();
          const city = modalEl.querySelector('#ma_city').value.trim();
          const status = modalEl.querySelector('#ma_status').value;

          if (!nim || !name || !email) {
            showToast('Lengkapi data anggota yang wajib.', 'danger');
            return false;
          }

          const members = store.getMembers();
          members.push({
            nim, name, email, phone, city, status,
            prodi: 'Mahasiswa S1 Teknik Informatika',
            registeredDate: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })
          });
          store.saveMembers(members);
          renderTable();
          showToast(`Anggota ${name} (${nim}) berhasil didaftarkan!`, 'success');
          return true;
        }, 'Daftarkan Anggota');
      };
    }

    function openEditAnggotaModal(nim) {
      const members = store.getMembers();
      const m = members.find(x => x.nim === nim);
      if (!m) return;

      const modalHtml = `
        <form id="formEditAnggota">
          <div class="form-group">
            <label class="form-label">Nomor Induk Anggota (NIM)</label>
            <input type="text" class="form-control" value="${m.nim}" readonly style="background-color: #F1F5F9;">
          </div>
          <div class="form-group">
            <label class="form-label">Nama Lengkap</label>
            <input type="text" id="ea_nama" class="form-control" value="${m.name}" required>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Email Kampus</label>
              <input type="email" id="ea_email" class="form-control" value="${m.email}" required>
            </div>
            <div class="form-group">
              <label class="form-label">Nomor WhatsApp</label>
              <input type="text" id="ea_phone" class="form-control" value="${m.phone}" required>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Domisili</label>
              <input type="text" id="ea_city" class="form-control" value="${m.city || 'Jakarta'}">
            </div>
            <div class="form-group">
              <label class="form-label">Status Anggota</label>
              <select id="ea_status" class="form-control">
                <option value="Aktif" ${m.status === 'Aktif' ? 'selected' : ''}>Aktif</option>
                <option value="Non-Aktif" ${m.status !== 'Aktif' ? 'selected' : ''}>Non-Aktif</option>
              </select>
            </div>
          </div>
        </form>
      `;

      openModal(`Edit Data Anggota: ${m.name}`, modalHtml, (modalEl) => {
        const name = modalEl.querySelector('#ea_nama').value.trim();
        const email = modalEl.querySelector('#ea_email').value.trim();
        const phone = modalEl.querySelector('#ea_phone').value.trim();
        const city = modalEl.querySelector('#ea_city').value.trim();
        const status = modalEl.querySelector('#ea_status').value;

        const idx = members.findIndex(x => x.nim === nim);
        if (idx !== -1) {
          members[idx].name = name;
          members[idx].email = email;
          members[idx].phone = phone;
          members[idx].city = city;
          members[idx].status = status;
          store.saveMembers(members);
          renderTable();
          showToast(`Data anggota ${name} berhasil disimpan!`, 'success');
        }
        return true;
      }, 'Simpan Perubahan');
    }

    function confirmHapusAnggota(nim) {
      const members = store.getMembers();
      const m = members.find(x => x.nim === nim);
      openModal('Konfirmasi Penghapusan Anggota', `
        <p class="text-sm">Apakah Anda yakin ingin menghapus data anggota <strong>${m ? m.name : nim}</strong> dari sistem?</p>
      `, () => {
        store.saveMembers(members.filter(x => x.nim !== nim));
        renderTable();
        showToast(`Data anggota ${nim} telah dihapus.`, 'warning');
        return true;
      }, 'Ya, Hapus');
    }

    if (searchInput) {
      searchInput.oninput = () => {
        currentKeyword = searchInput.value.trim().toLowerCase();
        renderTable();
      };
    }
    if (filterBtn) filterBtn.onclick = () => renderTable();

    renderTable();
  }

  // --- E. Transaksi Peminjaman (peminjaman.html) ---
  function initPeminjaman() {
    const table = document.querySelector('.data-table tbody');
    if (!table || !window.location.pathname.includes('peminjaman.html')) return;

    const form = document.querySelector('.card-body form');
    const selectAnggota = document.getElementById('id_anggota');
    const selectBuku = document.getElementById('kode_buku');
    const noTrxInput = document.getElementById('no_transaksi');
    const tglPinjam = document.getElementById('tgl_pinjam');
    const tglTempo = document.getElementById('tgl_tempo');

    // Populate dropdowns
    const members = store.getMembers();
    const books = store.getBooks();

    if (selectAnggota) {
      selectAnggota.innerHTML = members.map(m => `
        <option value="${m.nim}">${m.nim} — ${m.name}</option>
      `).join('');
    }

    if (selectBuku) {
      selectBuku.innerHTML = books.map(b => `
        <option value="${b.id}" ${b.stock <= 0 ? 'disabled' : ''}>
          ${b.id} — ${b.title} ${b.stock <= 0 ? '(Habis)' : `(Tersedia ${b.stock})`}
        </option>
      `).join('');
    }

    // Set today and due date
    const now = new Date();
    if (tglPinjam) tglPinjam.value = now.toISOString().split('T')[0];
    if (tglTempo) {
      const due = new Date(Date.now() + 7 * 86400000);
      tglTempo.value = due.toISOString().split('T')[0];
    }
    if (noTrxInput) {
      noTrxInput.value = 'TRX-' + now.getFullYear() + '-' + String(Math.floor(100 + Math.random() * 900));
    }

    function renderLoans() {
      const loans = store.getLoans();
      table.innerHTML = loans.map(l => `
        <tr>
          <td><code>${l.id}</code></td>
          <td>
            <div style="font-weight: 600;">${l.memberName}</div>
            <div class="text-xs text-muted">NIM: ${l.memberNim}</div>
          </td>
          <td>
            <div class="table-book-cell">
              <a href="detail-buku.html?id=${l.bookId}">
                <img src="${l.bookCover || 'assets/images/books/buku-1.svg'}" alt="Sampul" class="table-book-thumb" style="width: 36px; height: 50px;">
              </a>
              <div>
                <div style="font-weight: 600;"><a href="detail-buku.html?id=${l.bookId}">${l.bookTitle}</a></div>
                <div class="text-xs text-muted">Kode: ${l.bookId}</div>
              </div>
            </div>
          </td>
          <td>${l.borrowDate}</td>
          <td>${l.dueDate}</td>
          <td><span class="badge ${l.status.includes('Terlambat') ? 'badge-danger' : (l.status.includes('Tempo Hari') ? 'badge-warning' : 'badge-success')}">${l.status}</span></td>
          <td class="text-right">
            <button type="button" class="btn btn-secondary btn-sm btn-kembalikan-cepat" data-trid="${l.id}">Kembalikan</button>
          </td>
        </tr>
      `).join('');

      table.querySelectorAll('.btn-kembalikan-cepat').forEach(b => {
        b.onclick = () => processQuickReturn(b.dataset.trid);
      });
    }

    // Handle Form Submit
    if (form) {
      const submitBtn = form.querySelector('button[type="submit"]') || form.querySelector('button.btn-primary');
      if (submitBtn) {
        submitBtn.type = 'button';
        submitBtn.onclick = () => {
          const nim = selectAnggota.value;
          const bookId = selectBuku.value;
          const trId = noTrxInput.value;
          const bDate = tglPinjam.value;
          const dDate = tglTempo.value;

          const member = members.find(m => m.nim === nim);
          const book = books.find(b => b.id === bookId);

          if (!book || book.stock <= 0) {
            showToast('Stok buku ini sedang kosong.', 'danger');
            return;
          }

          const newLoan = {
            id: trId,
            memberNim: nim,
            memberName: member ? member.name : 'Anggota',
            bookId: book.id,
            bookTitle: book.title,
            bookCover: book.cover,
            borrowDate: bDate,
            dueDate: dDate,
            status: 'Aktif (Sisa 7 Hari)'
          };

          const loans = store.getLoans();
          loans.unshift(newLoan);
          store.saveLoans(loans);

          // Decrement stock
          book.stock = Math.max(0, book.stock - 1);
          store.saveBooks(books);

          showToast(`Transaksi peminjaman ${trId} berhasil disimpan!`, 'success');
          noTrxInput.value = 'TRX-' + new Date().getFullYear() + '-' + String(Math.floor(100 + Math.random() * 900));
          renderLoans();
        };
      }
    }

    function processQuickReturn(trId) {
      let loans = store.getLoans();
      const loan = loans.find(l => l.id === trId);
      if (!loan) return;

      loans = loans.filter(l => l.id !== trId);
      store.saveLoans(loans);

      // Add to returns
      const returns = store.getReturns();
      returns.unshift({
        id: loan.id,
        memberNim: loan.memberNim,
        memberName: loan.memberName,
        bookId: loan.bookId,
        bookTitle: loan.bookTitle,
        bookCover: loan.bookCover,
        borrowDate: loan.borrowDate,
        returnDate: new Date().toISOString().split('T')[0],
        status: 'Tepat Waktu',
        fineAmount: 0,
        fineStatus: 'Nihil'
      });
      store.saveReturns(returns);

      // Restore stock
      const allBooks = store.getBooks();
      const bIdx = allBooks.findIndex(b => b.id === loan.bookId);
      if (bIdx !== -1) {
        allBooks[bIdx].stock += 1;
        store.saveBooks(allBooks);
      }

      showToast(`Buku "${loan.bookTitle}" berhasil dikembalikan!`, 'success');
      renderLoans();
    }

    renderLoans();
  }

  // --- F. Transaksi Pengembalian (pengembalian.html) ---
  function initPengembalian() {
    const table = document.querySelector('.data-table tbody');
    if (!table || !window.location.pathname.includes('pengembalian.html')) return;

    const selectTrx = document.getElementById('no_trx_select');
    const formBtn = document.querySelector('.card-body button.btn-primary');

    function populateSelect() {
      if (!selectTrx) return;
      const loans = store.getLoans();
      if (loans.length === 0) {
        selectTrx.innerHTML = '<option value="">Semua transaksi telah dikembalikan</option>';
      } else {
        selectTrx.innerHTML = loans.map(l => `
          <option value="${l.id}">${l.id} — ${l.memberName} (${l.bookTitle}) [${l.status}]</option>
        `).join('');
      }
    }

    function renderReturns() {
      const returns = store.getReturns();
      table.innerHTML = returns.map(r => {
        const isLate = r.fineAmount > 0;
        const fineBadge = r.fineStatus === 'Lunas Dibayar'
          ? `<div style="font-weight: 600; color: var(--success);">Rp ${r.fineAmount.toLocaleString('id-ID')}</div><div class="text-xs text-muted">Lunas Dibayar</div>`
          : (isLate
            ? `<div style="font-weight: 700; color: var(--danger);">Rp ${r.fineAmount.toLocaleString('id-ID')}</div><div class="text-xs text-muted">Belum Dibayar</div>`
            : `<span class="text-muted">Rp 0 (Nihil)</span>`);

        const actionBtn = (isLate && r.fineStatus !== 'Lunas Dibayar')
          ? `<button type="button" class="btn btn-primary btn-sm btn-bayar-denda" data-id="${r.id}">Terima Bayar</button>`
          : `<span class="badge badge-neutral">Selesai</span>`;

        return `
          <tr>
            <td><code>${r.id}</code></td>
            <td>
              <div style="font-weight: 600;">${r.memberName}</div>
              <div class="text-xs text-muted">NIM: ${r.memberNim}</div>
            </td>
            <td>
              <div class="table-book-cell">
                <a href="detail-buku.html?id=${r.bookId}"><img src="${r.bookCover || 'assets/images/books/buku-1.svg'}" alt="Sampul" class="table-book-thumb" style="width: 36px; height: 50px;"></a>
                <div>
                  <div style="font-weight: 600;"><a href="detail-buku.html?id=${r.bookId}">${r.bookTitle}</a></div>
                  <div class="text-xs text-muted">Kode: ${r.bookId}</div>
                </div>
              </div>
            </td>
            <td>${r.borrowDate}</td>
            <td>${r.returnDate}</td>
            <td><span class="badge ${isLate ? 'badge-danger' : 'badge-success'}">${r.status}</span></td>
            <td>${fineBadge}</td>
            <td class="text-right">${actionBtn}</td>
          </tr>
        `;
      }).join('');

      table.querySelectorAll('.btn-bayar-denda').forEach(b => {
        b.onclick = () => {
          const rId = b.dataset.id;
          const returns = store.getReturns();
          const rIdx = returns.findIndex(x => x.id === rId);
          if (rIdx !== -1) {
            returns[rIdx].fineStatus = 'Lunas Dibayar';
            store.saveReturns(returns);
            showToast(`Pembayaran denda ${rId} sebesar Rp ${returns[rIdx].fineAmount.toLocaleString('id-ID')} telah diterima!`, 'success');
            renderReturns();
          }
        };
      });
    }

    if (formBtn) {
      formBtn.type = 'button';
      formBtn.onclick = () => {
        const trxId = selectTrx ? selectTrx.value : '';
        if (!trxId) {
          showToast('Pilih transaksi yang akan diproses.', 'warning');
          return;
        }

        let loans = store.getLoans();
        const loan = loans.find(l => l.id === trxId);
        if (!loan) {
          showToast('Transaksi tidak ditemukan.', 'danger');
          return;
        }

        loans = loans.filter(l => l.id !== trxId);
        store.saveLoans(loans);

        // Overdue calculation
        const isOverdue = loan.status.includes('Terlambat');
        const fine = isOverdue ? 8000 : 0;

        const returns = store.getReturns();
        returns.unshift({
          id: loan.id,
          memberNim: loan.memberNim,
          memberName: loan.memberName,
          bookId: loan.bookId,
          bookTitle: loan.bookTitle,
          bookCover: loan.bookCover,
          borrowDate: loan.borrowDate,
          returnDate: new Date().toISOString().split('T')[0],
          status: isOverdue ? 'Terlambat 8 Hari' : 'Tepat Waktu',
          fineAmount: fine,
          fineStatus: isOverdue ? 'Belum Dibayar' : 'Nihil'
        });
        store.saveReturns(returns);

        // Restore book stock
        const allBooks = store.getBooks();
        const bIdx = allBooks.findIndex(b => b.id === loan.bookId);
        if (bIdx !== -1) {
          allBooks[bIdx].stock += 1;
          store.saveBooks(allBooks);
        }

        showToast(`Pengembalian ${trxId} (${loan.bookTitle}) sukses diproses!`, 'success');
        populateSelect();
        renderReturns();
      };
    }

    populateSelect();
    renderReturns();
  }

  // --- G. Laporan (laporan.html) ---
  function initLaporan() {
    if (!window.location.pathname.includes('laporan.html')) return;

    const btnCetak = document.querySelector('.admin-topbar-actions button.btn-primary');
    const btnEkspor = document.querySelectorAll('.filter-group button');
    const table = document.querySelector('.data-table tbody');

    // Print
    if (btnCetak) {
      btnCetak.onclick = () => {
        window.print();
      };
    }

    // Export CSV
    btnEkspor.forEach(btn => {
      if (btn.textContent.includes('Ekspor')) {
        btn.onclick = () => {
          const loans = store.getLoans();
          const returns = store.getReturns();

          let csvContent = '\uFEFF'; // UTF-8 BOM
          csvContent += 'No Transaksi,Jenis,NIM,Nama Anggota,Kode Buku,Judul Buku,Tanggal Sirkulasi,Status,Denda\n';

          loans.forEach(l => {
            csvContent += `"${l.id}","Peminjaman","${l.memberNim}","${l.memberName}","${l.bookId}","${l.bookTitle}","${l.borrowDate}","${l.status}","-"\n`;
          });

          returns.forEach(r => {
            csvContent += `"${r.id}","Pengembalian","${r.memberNim}","${r.memberName}","${r.bookId}","${r.bookTitle}","${r.returnDate}","${r.status}","Rp ${r.fineAmount}"\n`;
          });

          const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.setAttribute('href', url);
          link.setAttribute('download', `laporan_sirkulasi_sipus_${new Date().toISOString().split('T')[0]}.csv`);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          showToast('Laporan sirkulasi berhasil diekspor ke format CSV!', 'success');
        };
      }
    });

    // Filter Periode
    const filterBtn = document.querySelector('.filter-bar button.btn-secondary');
    const typeSelect = document.querySelector('.filter-bar select');
    if (filterBtn && typeSelect && table) {
      filterBtn.onclick = () => {
        const val = typeSelect.value;
        const rows = table.querySelectorAll('tr');
        rows.forEach(r => {
          const badge = r.querySelector('.badge')?.textContent.toLowerCase() || '';
          if (val === 'semua') {
            r.style.display = '';
          } else if (val === 'peminjaman') {
            r.style.display = badge.includes('pinjam') ? '' : 'none';
          } else if (val === 'pengembalian') {
            r.style.display = badge.includes('kembali') ? '' : 'none';
          } else if (val === 'denda') {
            const hasFine = r.cells[6]?.textContent.includes('Rp');
            r.style.display = hasFine ? '' : 'none';
          }
        });
        showToast(`Filter laporan diterapkan: ${typeSelect.options[typeSelect.selectedIndex].text}`, 'info');
      };
    }
  }

  // --- H. Profil Anggota (profil.html) ---
  function initProfil() {
    if (!window.location.pathname.includes('profil.html')) return;

    const user = store.getUser();

    // Fill profile card
    const nameEl = document.querySelector('.profile-card h2');
    if (nameEl) nameEl.textContent = user.name;

    const avatarEl = document.querySelector('.profile-avatar-large');
    if (avatarEl && user.name) {
      avatarEl.textContent = user.name.split(' ').map(n => n[0]).slice(0, 2).join('');
    }

    const metaValues = document.querySelectorAll('.profile-meta-value');
    if (metaValues.length >= 4) {
      metaValues[0].textContent = user.nim;
      metaValues[1].textContent = user.email;
      metaValues[2].textContent = user.phone;
      metaValues[3].textContent = user.city ? `Jl. Kampus No. 12, ${user.city}` : 'Jl. Sukarno Hatta No. 45, Coblong, Bandung';
    }

    // Tombol Edit Profil
    const btnEditBio = document.querySelector('.profile-card button');
    if (btnEditBio) {
      btnEditBio.onclick = () => {
        const modalHtml = `
          <form id="formEditProfile">
            <div class="form-group">
              <label class="form-label">Nama Lengkap</label>
              <input type="text" id="prof_name" class="form-control" value="${user.name}" required>
            </div>
            <div class="form-group">
              <label class="form-label">Alamat Email Kampus</label>
              <input type="email" id="prof_email" class="form-control" value="${user.email}" required>
            </div>
            <div class="form-group">
              <label class="form-label">Nomor Telepon / WhatsApp</label>
              <input type="text" id="prof_phone" class="form-control" value="${user.phone}" required>
            </div>
            <div class="form-group">
              <label class="form-label">Alamat Domisili</label>
              <input type="text" id="prof_city" class="form-control" value="${user.city || 'Bandung'}">
            </div>
          </form>
        `;

        openModal('Ubah Biodata & Kontak Anggota', modalHtml, (modalEl) => {
          user.name = modalEl.querySelector('#prof_name').value.trim();
          user.email = modalEl.querySelector('#prof_email').value.trim();
          user.phone = modalEl.querySelector('#prof_phone').value.trim();
          user.city = modalEl.querySelector('#prof_city').value.trim();
          store.saveUser(user);

          showToast('Biodata anggota berhasil diperbarui!', 'success');
          setTimeout(() => window.location.reload(), 600);
          return true;
        }, 'Simpan Perubahan');
      };
    }

    // Tombol Perpanjang Pinjaman
    const btnPerpanjang = document.querySelector('.card-body button.btn-secondary');
    const tempoBadge = document.querySelector('.card-body strong[style*="warning"]');
    if (btnPerpanjang && tempoBadge) {
      btnPerpanjang.onclick = () => {
        tempoBadge.style.color = 'var(--success)';
        tempoBadge.textContent = '15 Nov 2026 (Diperpanjang +7 Hari)';
        btnPerpanjang.disabled = true;
        btnPerpanjang.textContent = 'Telah Diperpanjang';
        btnPerpanjang.style.opacity = '0.6';
        showToast('Peminjaman buku berhasil diperpanjang 7 hari ke depan!', 'success');
      };
    }
  }

  // --- I. Dashboard Admin (dashboard.html) ---
  function initDashboard() {
    if (!window.location.pathname.includes('dashboard.html')) return;

    const books = store.getBooks();
    const members = store.getMembers();
    const loans = store.getLoans();
    const returns = store.getReturns();

    // Update real counts
    const statValues = document.querySelectorAll('.stat-card .stat-value');
    if (statValues.length >= 4) {
      statValues[0].textContent = books.length.toLocaleString('id-ID');
      statValues[1].textContent = members.length.toLocaleString('id-ID');
      statValues[2].textContent = loans.length.toLocaleString('id-ID');
      statValues[3].textContent = (1190 + returns.length).toLocaleString('id-ID');
    }

    // Process Return in dashboard table
    const table = document.querySelector('.data-table tbody');
    if (table) {
      table.querySelectorAll('tr').forEach(r => {
        const btn = r.querySelector('a.btn-secondary, a.btn-danger');
        if (btn) {
          btn.onclick = (e) => {
            e.preventDefault();
            const trId = r.cells[0]?.textContent.trim();
            showToast(`Membuka pengembalian untuk ${trId}...`, 'info');
            setTimeout(() => {
              window.location.href = 'pengembalian.html';
            }, 500);
          };
        }
      });
    }
  }

  // --- J. Login (login.html) ---
  function initLogin() {
    if (!window.location.pathname.includes('login.html')) return;

    const form = document.querySelector('.auth-card form');
    if (form) {
      form.onsubmit = (e) => {
        e.preventDefault();
        const userInput = document.getElementById('username')?.value.trim() || '';
        showToast('Autentikasi berhasil! Mengalihkan...', 'success');
        setTimeout(() => {
          if (userInput.includes('@') || userInput.toLowerCase().includes('petugas')) {
            window.location.href = 'dashboard.html';
          } else {
            window.location.href = 'profil.html';
          }
        }, 600);
      };
    }
  }

  // --- K. Beranda (index.html) ---
  function initBeranda() {
    if (window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')) {
      const books = store.getBooks();
      const statValues = document.querySelectorAll('.stat-card .stat-value');
      if (statValues.length >= 4) {
        statValues[0].textContent = books.length.toLocaleString('id-ID');
        statValues[1].textContent = store.getMembers().length.toLocaleString('id-ID');
        statValues[2].textContent = store.getLoans().length.toLocaleString('id-ID');
      }

      // Link book cards to proper IDs
      const cards = document.querySelectorAll('.books-grid .book-card');
      cards.forEach((c, idx) => {
        if (books[idx]) {
          const link = c.querySelector('h3 a');
          const imgLink = c.querySelector('.book-cover-wrap a');
          if (link) link.href = `detail-buku.html?id=${books[idx].id}`;
          if (!imgLink) {
            const img = c.querySelector('img');
            if (img) {
              const a = document.createElement('a');
              a.href = `detail-buku.html?id=${books[idx].id}`;
              img.parentNode.insertBefore(a, img);
              a.appendChild(img);
            }
          }
        }
      });
    }
  }

  // --------------------------------------------------------------------------
  // 5. Bootstrap Engine on DOMContentLoaded
  // --------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', function () {
    initKatalog();
    initDetailBuku();
    initMasterBuku();
    initMasterAnggota();
    initPeminjaman();
    initPengembalian();
    initLaporan();
    initProfil();
    initDashboard();
    initLogin();
    initBeranda();
  });

  // Expose global API
  window.SIPUS = {
    store,
    showToast,
    openModal,
    closeModal
  };

})();
