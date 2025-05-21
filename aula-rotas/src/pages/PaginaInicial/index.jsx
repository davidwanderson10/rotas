import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function PaginaInicial() {
    const {theme, alterarTema} = useContext(ThemeContext);

    return (
        <div style={{ backgroundColor: theme === 'claro' ? '#fff' : '#333', 
                      color: theme === 'claro' ? '#333' : '#fff'}}>
            <h1>Página Inicial</h1>
            <p>Tema atual: {theme}</p>
            <button onClick={alterarTema}>Alterar Tema</button>
        </div>
    )

}