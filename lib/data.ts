export const navLinks = [
  { label: "Layanan", href: "#services" },
  { label: "Proses", href: "#process" },
  { label: "Kontak", href: "#cta" },
];

export type AccentColor = "blue" | "green" | "orange";

export const services: {
  title: string;
  description: string;
  accent: AccentColor;
  icon: "dashboard" | "automation" | "tools";
}[] = [
  {
    title: "Dashboard & Analitik",
    description:
      "Dashboard internal yang menampilkan data operasional secara real-time, dirancang supaya tim non-teknis pun mudah membacanya.",
    accent: "blue",
    icon: "dashboard",
  },
  {
    title: "Otomasi Proses Bisnis",
    description:
      "Menghubungkan sistem yang terpisah dan menghilangkan pekerjaan manual yang berulang, supaya tim bisa fokus ke hal yang lebih penting.",
    accent: "green",
    icon: "automation",
  },
  {
    title: "Tools Internal Custom",
    description:
      "Aplikasi internal yang dibangun sesuai alur kerja perusahaan, bukan template generik yang dipaksa cocok dengan kebutuhan.",
    accent: "orange",
    icon: "tools",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Ngobrol dulu soal alur kerja tim, masalah yang paling terasa, dan hasil seperti apa yang benar-benar dibutuhkan.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Sistem dibangun bertahap, dengan progress yang bisa dicek kapan saja — bukan menghilang berbulan-bulan lalu muncul di akhir.",
  },
  {
    number: "03",
    title: "Deliver & Support",
    description:
      "Setelah rilis, saya tetap mendampingi untuk penyesuaian dan perbaikan, sampai sistemnya benar-benar nyaman dipakai sehari-hari.",
  },
];

export const testimonials = [
  {
    quote:
      "Rizal bantu kami rapikan proses approval yang tadinya lewat chat dan spreadsheet jadi satu dashboard yang gampang dipantau semua orang.",
    name: "Manajer Operasional",
    company: "Perusahaan Distribusi, Kalimantan Timur",
  },
  {
    quote:
      "Komunikasinya jelas dari awal sampai akhir. Tim kami yang nggak terlalu paham teknis pun bisa ikut alur diskusinya.",
    name: "Kepala Divisi IT",
    company: "Perusahaan Jasa Logistik",
  },
  {
    quote:
      "Tools yang dibuatkan langsung dipakai harian oleh tim lapangan. Nggak ribet, dan memang menyelesaikan masalah yang kami keluhkan.",
    name: "Direktur Operasional",
    company: "Perusahaan Tambang & Energi",
  },
];
