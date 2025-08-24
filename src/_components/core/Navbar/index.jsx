import Link from 'next/link'
import {useRouter} from 'next/router'
import { useAuth } from '@/_utils/AuthContext'

const NavbarLink = ({href, children, className = ''}) => {
	const {pathname} = useRouter()
	const isActive = pathname === href

	return (
		<Link href={href} className={`nav-link ${className} ${isActive ? 'active' : ''}`}>{children}</Link>
	)
}

const Navbar = () => {
	const { user, logout } = useAuth()
	const username = user?.name || user?.email || 'Usuário'

	return (
		<nav className="navbar sticky-top navbar-expand-sm navbar-dark bg-dark" style={{height: 4 + 'rem'}}>
			<div className="container-fluid">
				<span className="navbar-brand">E-Livros</span>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavbarLink href="/">Home</NavbarLink>
						</li>
					</ul>

					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						{!user && (
							<li className="nav-item d-flex gap-2">
								<Link href="/auth/login" className="btn btn-outline-light btn-sm">Entrar</Link>
								<Link href="/auth/cadastro" className="btn btn-light btn-sm">Cadastrar</Link>
							</li>
						)}
						{user && (
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle d-flex align-items-center gap-2" href="#"
								   id="userDropdown"
								   role="button" data-bs-toggle="dropdown">
									<i className="bi bi-person-circle fs-5"></i>
									<span className="d-none d-sm-inline">{username}</span>
								</a>
								<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
									<li><Link className="dropdown-item" href="/usuario/config">Perfil</Link></li>
									<li><hr className="dropdown-divider"/></li>
									<li>
										<button className="dropdown-item" type="button" onClick={logout}>Sair</button>
									</li>
								</ul>
							</li>
						)}
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
