import PropTypes from 'prop-types'; // Importa PropTypes para validação das propriedades;
import './icon-button.css'; // Importar o arquivo de estilos CSS;

// Função que define o componente IconButton;
export function IconButton(props) {
  return (
    <button 
      className={`
        icon-button
        ${props.bordered ? ' border' : ''}
        ${props.scale ? ' scale' : ''}
        ${props.highlight ? ' highlight' : ''}
      `}
      // O ícone que será exibido no botão será passado por 'Children';
    >
      {props.children}
    </button>
  );
}

// Validação das propriedades usando PropTypes;
IconButton.propsTypes = {
  children: PropTypes.elementType, // Espera que 'Children' seja um elemento React, como um ícone SVG ou outra coisa;
  adornmentRight: PropTypes.elementType, // 'adornmentRight' é o conteúdo que aparece à direita (pode ser um ícone, texto, etc);
  scale: PropTypes.boolean, // 'Scale' é uma propriedade booleana;
  highlight: PropTypes.boolean, // 'Highlight' adiciona efeito de hover;
};