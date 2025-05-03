import styles from './Header.module.css'

function Header() {
    return (
        <Header className={styles.header}>
            <span>Front-Enterprise</span>
            <nav>
                <a href="">Home</a>
                <a href="">Sobre</a>
                <a href="">Projetos</a>
                <a href="">Contatos</a>
            </nav>
        </Header>
    )
}

export default Header