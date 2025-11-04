import styles from '@/app/page.module.css';

const Footer = () => {
    return ( 
        <footer className={`${styles.footer} flex flex-column justify-content-center align-items-center gap-4 py-3`}>
            {/* Social Icons */}
            <div className="flex gap-4 align-items-center">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                    <i className="pi pi-github" style={{fontSize: '1.5rem'}}></i>
                </a>
                <a href="https://gitlab.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                    <i className="pi pi-gitlab" style={{fontSize: '1.5rem'}}></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                    <i className="pi pi-twitter" style={{fontSize: '1.5rem'}}></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                    <i className="pi pi-instagram" style={{fontSize: '1.5rem'}}></i>
                </a>
                <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                    <i className="pi pi-telegram" style={{fontSize: '1.5rem'}}></i>
                </a>
                <a href="mailto:contact@example.com" className={styles.socialIcon}>
                    <i className="pi pi-envelope" style={{fontSize: '1.5rem'}}></i>
                </a>
                <a href="https://buymeacoffee.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                    <i className="pi pi-shopping-bag" style={{fontSize: '1.5rem'}}></i>
                </a>
            </div>

            {/* Copyright Text */}
            <div className="text-center" style={{color: '#9ca3af', fontSize: '0.875rem'}}>
                <p className="m-0">All content © 2025 Will Adams</p>
                <p className="m-0">Icons (mostly) by <a href="https://emojipedia.org" target="_blank" rel="noopener noreferrer" style={{color: '#10b981', textDecoration: 'underline'}}>Open Emoji</a></p>
            </div>
        </footer>
    );
}
 
export default Footer;