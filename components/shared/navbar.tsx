import styles from '@/app/page.module.css';
import Image from 'next/image';

const Navbar = () => {
    return ( 
        <nav className={`${styles.navbar} flex justify-content-between align-items-center`}>
            {/* Logo Section */}
            <div className="flex align-items-center gap-3">
                <div className="border-circle overflow-hidden" style={{width: '50px', height: '50px', border: '3px solid #10b981'}}>
                    <Image 
                        src="/profile.jpeg"
                        alt="Profile" 
                        width={50} 
                        height={50}
                        style={{objectFit: 'cover'}}
                    />
                </div>
                <span className="text-2xl font-bold" style={{color: '#10b981'}}>TotoPhandolack</span>
            </div>

            {/* Navigation Menu */}
            <div className="flex gap-4">
                <a href="#home" className={styles.navLink}>Home</a>
                <a href="#about" className={styles.navLink}>About</a>
                <a href="#projects" className={styles.navLink}>Projects</a>
                <a href="#uses" className={styles.navLink}>Uses</a>
                <a href="#articles" className={styles.navLink}>Articles</a>
            </div>
        </nav>
    );
}
 
export default Navbar;