import '../buttons/button-contained.css';  // Importando o CSS para o botão
import PropTypes from 'prop-types';  // Importando PropTypes para validação das props

export function ButtonContained(props) {
  return (
    <button 
      className={`
        button-contained
        ${props.contained ? 'contained' : ''}  // Condicional para adicionar a classe 'contained'
        ${props.highlight ? 'highlight' : ''}  // Condicional para adicionar a classe 'highlight'
        ${props.button ? 'button' : ''}  // Condicional para adicionar a classe 'button'
      `}
    >
      {/* O conteúdo dentro do botão é passado por 'children' */}
      {props.children}
    </button>
  );
}

// Definindo as validações das props do componente
ButtonContained.propTypes = {
  children: PropTypes.elementType,  // 'children' pode ser qualquer conteúdo renderizável (texto, JSX, etc)
  contained: PropTypes.boolean,  // 'contained' é uma propriedade booleana
  highlight: PropTypes.boolean,  // 'highlight' é uma propriedade booleana
  button: PropTypes.boolean,     // 'button' é uma propriedade booleana
  scale: PropTypes.boolean, // 'Scale' é uma propriedade booleana
};
